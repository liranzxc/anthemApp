import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartPoint, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'app-predict-graph',
  templateUrl: './predict-graph.component.html',
  styleUrls: ['./predict-graph.component.sass']
})
export class PredictGraphComponent implements OnInit {

  @ViewChild(BaseChartDirective) private _chart;



  scatterChartData: ChartDataSets[]=[

    {
      label:'predict',
     data:[]
    }

  ];
  scatterChartOptions: ChartOptions={

    responsive:true,

    animation: {
        duration: 1
    },

    scales:{
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
          scaleLabel:{
            fontFamily:"Arial"
          },
          ticks: {
            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
            max:1
          }
        }
      ]
    }




  };
  scatterChartType: ChartType = 'line';
  public points: number;


  addData(chart, data:number ) {
    this.scatterChartData.forEach((dataset) => {

      let point  = {x: new Date(), y: data } as ChartPoint;

      if(dataset.data.length > 5)
      {
            dataset.data.shift();
      }

        // @ts-ignore
      dataset.data.push(point);

    });
    chart.update({duration : 0 });
}


  forceChartRefresh() {
    setTimeout(() => {
      this._chart.refresh();
    }, 10);
  }


  ngOnInit(): void {

    let interval = setInterval(() => {
      this.points = Math.sin(Math.random() ) /1.5 ;
      this.addData(this._chart,this.points);
      this.forceChartRefresh();
    }, 1000);
  }


}


