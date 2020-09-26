import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {TypeVisit, Visit} from '../../../model/human.data.model';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-human-graph-data',
  templateUrl: './human-graph-data.component.html',
  styleUrls: ['./human-graph-data.component.sass']
})
export class HumanGraphDataComponent implements OnInit, OnChanges {

  @ViewChild(BaseChartDirective) private _chart;

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

    animation: {
      duration: 0,

    },


    scales: {

      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
          }
        }
      ],
      yAxes: [
        {

          scaleLabel: {

            fontFamily: 'Arial'
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
  visits$: Observable<Visit> = new Observable<Visit>();

  visits: Visit[] = [];


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

    this.arrData =[];

    let groups: Map<number, Visit[]> = this.groupBy(this.visits, (visit: Visit) => visit.typeVisit);

    for await (let entry of groups.entries()) {
      const [key, visits] = entry;


      let arr = visits.map(visit => {
        return {x: new Date(visit.dateVisit), y: visit.typeVisit};
      });
      this.arrData.push({
        label: TypeVisit[key],

        data: arr,
        pointRadius: 5,
        fill: false,

      });

    }


  }

  ngOnInit(): void {

    this.visits$.pipe(tap(visit => {

      console.log(visit);
      if (visit) {


        if(this.visits.length > 50 )
        {
          this.visits.shift();
        }
        this.visits.push(visit);

        this.createSeries().then(
          () => {
            this.scatterChartData = this.arrData;
            this._chart.refresh();
          }
        );
      }


    })).subscribe();

  }


  ngOnChanges(changes: SimpleChanges): void {



  }


}
