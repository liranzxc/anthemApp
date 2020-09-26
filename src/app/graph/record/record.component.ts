import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HumanProfileModel, TypeVisit, Visit} from '../../model/human.data.model';
import {BehaviorSubject} from 'rxjs';
import {PredictGraphComponent} from './predict-graph/predict-graph.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.sass']
})
export class RecordComponent implements OnInit {

  visitsSubject$ = new BehaviorSubject<Visit>(null);

  @Input()
  humanProfile: HumanProfileModel;

  @ViewChild(PredictGraphComponent) private predictCompany: PredictGraphComponent;

  constructor() {
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
  }

  getRandomType(): number {
    const len = (Object.keys(TypeVisit).length / 2) - 1; // returns the length
    // calculate the random number
    const item = (Math.floor(Math.random() * len) + 0);
    return item + 1;
  }

  async createRandomData(n: number, start, end) {
    let arr = Array.from(Array(n).keys());

    let visits = arr.map(item => {
      return {dateVisit: this.randomDate(start, end), typeVisit: this.getRandomType()} as Visit;
    });

    visits = visits.sort((x, y) => x.dateVisit > y.dateVisit ? 1 : -1);
    return visits;
  }

  ngOnInit(): void {

    let nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1 );

    this.createRandomData(100, new Date(), nextYear).then((data: Visit[]) => {

      // this.humanProfile = {
      //   name: 'liran', numberVisitors: 0, points: 50, region: 'Israel',
      //   profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      // };

      setInterval(async ()=> {

        if(data.length === 0)
        {
           let nextYear = new Date();
          nextYear.setFullYear(nextYear.getFullYear() + 1 );

          data = await this.createRandomData(100,new Date(), nextYear);
        }

        let item = data.shift();
        this.visitsSubject$.next(item);
        this.humanProfile.numberVisitors = this.humanProfile.numberVisitors + 1 ;
        this.humanProfile.points = this.predictCompany.points;
      },1000);


    });


  }

}
