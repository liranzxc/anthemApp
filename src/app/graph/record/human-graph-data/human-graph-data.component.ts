import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {arrayEnumTypeVisit, Visit} from '../../../model/human.data.model';
import {Chart, ChartDataSets, ChartLegendLabelItem, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-human-graph-data',
  templateUrl: './human-graph-data.component.html',
  styleUrls: ['./human-graph-data.component.sass']
})
export class HumanGraphDataComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:variable-name
  @ViewChild(BaseChartDirective) private _chart;
  private colors: string[];


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

    title: {
      display: true,
      text: 'Replaying Patient History',
      fontColor: 'black',
    },


    maintainAspectRatio: false,
    animation: {
      duration: 0,

    },
    legend: {
      labels: {
        fontColor: 'black',
      }

    },
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

          display: false,
          scaleLabel: {
            fontColor: 'black',

            fontFamily: 'Arial'
          },
          ticks: {
            fontColor: 'black',

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
  scatterChartLabels: Label[] = arrayEnumTypeVisit;
  scatterChartColor: Color[] = [];


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

    this.arrData = [];

    const groups: Map<number, Visit[]> = this.groupBy(this.visits, (visit: Visit) => visit.valueVisit);

    for await (const entry of groups.entries()) {
      const [key, visits] = entry;


      const arr = visits.map(visit => {
        return {x: new Date(visit.dateVisit), y: visit.valueVisit + 1};
      });
      this.arrData.push({
        label: arrayEnumTypeVisit[key],
        pointBackgroundColor: this.colors[key],
        data: arr,
        borderColor:this.colors[key],
        pointRadius: 5,
        fill: false,

      } as ChartDataSets);

    }


  }

  generateLabels(chart: Chart): ChartLegendLabelItem[] {

    this.colors = ['red', 'blue', 'green', 'yellow'];

    let chartLegendLabelItem: ChartLegendLabelItem[] = arrayEnumTypeVisit.map((label, index) => {

      return {
        text: label,
        fillStyle: this.colors[index],
      } as ChartLegendLabelItem;
    });


    return chartLegendLabelItem;
  }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'green', 'yellow'];

    this.scatterChartOptions.legend.labels.generateLabels = this.generateLabels;

    this.visits$.pipe(tap(visit => {

      if (visit) {


        if (this.visits.length > 100) {
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
