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

      pointBackgroundColor:'rgb(104,255,123)',
      pointBorderColor:'rgb(104,255,123)',
      borderColor:'rgb(104,255,123)',
      backgroundColor: 'rgba(104,255,123,0.5)',
      label:'predict',
     data:[]
    }

  ];
  scatterChartOptions: ChartOptions={

    responsive:true,
    maintainAspectRatio: false,

    title:{
      display:true,
      fontColor:'black',
      text:"Predict % for getting to hospital\n"
    },


    animation: {
        duration: 1
    },

    legend:{
      labels:{
        fontColor:'black'
      }
    },
    scales:{
       xAxes: [
        {

          type: 'time',
          time: {
            unit: 'second',
          }
        }
      ],
      yAxes: [
        {

          scaleLabel:{
            fontFamily:"Arial",
            fontColor: 'black'
          },
          ticks: {
            fontColor:'black',
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
    chart.update();
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


