import {Component, OnInit} from '@angular/core';
import {TypeVisit, Visit} from '../../model/human.data.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.sass']
})
export class RecordComponent implements OnInit {
  visits: Visit[];

  constructor() {
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
  }
  getRandomType(): number {
    const len = (Object.keys(TypeVisit).length / 2) - 1; // returns the length
    // calculate the random number
    const item = (Math.floor(Math.random() * len) + 0);
    return item+1;
  }
  async createRandomData(n: number, start, end) {
    let arr = Array.from(Array(n).keys());

    let visits  = arr.map(item => {
      return {dateVisit: this.randomDate(start, end), typeVisit: this.getRandomType()} as Visit;
    });
    return visits;
  }

  ngOnInit(): void {
    this.createRandomData(100,new Date(2020,1,1,12),new Date()).then((data:Visit[] )=> {

      data = data.sort((x,y) =>  x.dateVisit > y.dateVisit ? 1 : -1 );

      this.visits = data;
    });


  }

}
