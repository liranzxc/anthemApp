import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TypeVisit, Visit} from '../../../model/human.data.model';
import * as Chartist from 'chartist';
import {IChartistData, IChartistSeriesData, ILineChartOptions} from 'chartist';
import {ChartEvent, ChartType} from 'ng-chartist';
import * as  Moment from 'moment';

@Component({
  selector: 'app-human-graph-data',
  templateUrl: './human-graph-data.component.html',
  styleUrls: ['./human-graph-data.component.sass']
})
export class HumanGraphDataComponent implements OnInit, OnChanges {


  constructor() {
  }

  private arrData = [];

  data: IChartistData;

  type: ChartType = 'Line';
  options: ILineChartOptions = {

    showLine: true,
    showArea:true,
    showPoint:true,
    axisX: {
      showLabel:true,
      type: Chartist.FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: function(value) {
        return Moment(value).format('DD/MM/YYYY');
      }
    },

    axisY:{
      showLabel:true,
    },
    plugins:[
    ]
  };

  events: ChartEvent = {

    draw: (data) => {

      //
      // if (data.type === 'point') {
      //   // We are creating a new path SVG element that draws a triangle around the point coordinates
      //
      //   var circle = new Chartist.Svg('circle', {
      //     cx: [data.x],
      //     cy: [data.y],
      //     r: [5],
      //     'ct:value': data.value.y,
      //     'ct:meta': data.meta,
      //     style: 'pointer-events: all !important',
      //     class: 'my-cool-point',
      //   }, 'ct-area');
      //
      //   // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
      //   data.element.replace(circle);
      //
      //   // console.log("draw")
      // }

    }
  };


  @Input()
  visits: Visit[];


  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }


  async createSeries() {

    let groups: Map<number, Visit[]> = this.groupBy(this.visits, (visit: Visit) => visit.typeVisit);

    for await (let entry of groups.entries())
    {
      const [key,visits] = entry;


      let arr = visits.map(visit => {
        return {x: new Date(visit.dateVisit) , y : visit.typeVisit ,meta  : `date is ${Moment(new Date(visit.dateVisit)).format("DD-MM-YYYY")}`}
      });

      this.arrData.push({   name : TypeVisit[key],
          data: arr});

    }


  }


  ngOnInit(): void {
    this.data = {
    series: []


    };


  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['visits'] && this.visits) {
      this.createSeries().then(() => {

        this.data.series = this.arrData;

        // console.log(this.data);
        console.log('graph ready');
      });
    }


  }


}
