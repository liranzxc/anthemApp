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

  private arrData = new Array<Array<IChartistSeriesData>>();

  data: IChartistData;

  type: ChartType = 'Line';
  options: ILineChartOptions = {

    showLine: true,
    showArea:true,
    axisX: {
      showLabel:true,
      type: Chartist.FixedScaleAxis,
      divisor: 5,
      labelInterpolationFnc: function(value) {
        return Moment(value).format('DD/MM/YYYY');
      }
    },
  };

  events: ChartEvent = {

    draw : (ctx)=>{

      console.log("draw")
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

    let groups: Map<any, any> = this.groupBy(this.visits, (visit: Visit) => visit.typeVisit);

    for await (let entry of groups.entries())
    {
      const [key,visits] = entry;

       let seriesData = new Array<IChartistSeriesData>();

      let arr = visits.map(visit => {
         return {x: visit.dateVisit , y : visit.typeVisit }
      });

      seriesData.push({
          name : TypeVisit[key],
          data: arr
        });

      this.arrData.push(seriesData);


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
        console.log(this.data);
        console.log('graph ready');
      });
    }


  }


}
