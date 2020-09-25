import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TypeVisit, Visit} from '../../../model/human.data.model';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-human-graph-data',
  templateUrl: './human-graph-data.component.html',
  styleUrls: ['./human-graph-data.component.sass']
})
export class HumanGraphDataComponent implements OnInit, OnChanges {


  constructor() {
  }

  private arrData = [];


  public scatterChartData: ChartDataSets[] = [
    // {
    //   data: [
    //     { x: 1, y: 1 },
    //     { x: 2, y: 3 },
    //     { x: 3, y: -2 },
    //     { x: 4, y: 4 },
    //     { x: 5, y: -3, r: 20 },
    //   ],
    //   label: 'Series A',
    //   pointRadius: 10,
    // },
  ];
  public scatterChartOptions: ChartOptions = {
    responsive: true,


    scales: {

      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'month',
          }
        }
      ],
      yAxes: [
        {
          scaleLabel:{
            fontFamily:"Arial"
          },
          ticks: {
            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          }
        }
      ]

    }
  };

  public scatterChartType: ChartType = 'line';


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

    for await (let entry of groups.entries()) {
      const [key, visits] = entry;


      let arr = visits.map(visit => {
        return {x: new Date(visit.dateVisit), y: visit.typeVisit };
      });
      this.arrData.push({
        label: TypeVisit[key],
        data: arr,
        pointRadius : 5 ,
                fill: false,

      });

    }


  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['visits'] && this.visits) {
      this.createSeries().then(() => {

        this.scatterChartData = this.arrData;

        // console.log(this.data);
        console.log('graph ready');
      });
    }


  }


}
