import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {arrayEnumTypeVisit, HumanProfileModel, Visit} from '../../model/human.data.model';
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

  getRandomType(): Visit {

    const indexValue = Math.floor(Math.random() * arrayEnumTypeVisit.length);

    return {valueVisit : indexValue  ,  typeVisit : arrayEnumTypeVisit[indexValue]} as Visit
  }

  async createRandomData(n: number, start, end) {
    const arr = Array.from(Array(n).keys());

    let visits = arr.map(item => {
      return {dateVisit: this.randomDate(start, end), ...this.getRandomType()  } as Visit;
    });

    visits = visits.sort((x, y) => x.dateVisit > y.dateVisit ? 1 : -1);
    return visits;
  }

  ngOnInit(): void {

    const date = new Date(1990, 5, 4, 2, 3);

    this.createRandomData(100, date, new Date()).then((data: Visit[]) => {

      // this.humanProfile = {
      //   name: 'liran', numberVisitors: 0, points: 50, region: 'Israel',
      //   profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      // };

      setInterval(async () => {

        if (data.length === 0) {
          // tslint:disable-next-line:no-shadowed-variable
          const nextYear = new Date();
          nextYear.setFullYear(nextYear.getFullYear() + 1);

          data = await this.createRandomData(100, new Date(), nextYear);
        }

        const item = data.shift();
        this.visitsSubject$.next(item);
        this.humanProfile.numberVisitors = this.humanProfile.numberVisitors + 1;
        this.humanProfile.points = this.predictCompany.points;
      }, 1000);


    });


  }

}
