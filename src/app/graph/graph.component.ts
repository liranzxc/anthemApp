import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.sass']
})
export class GraphComponent implements OnInit {
  items:number[] =  [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
