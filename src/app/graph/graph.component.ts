import {Component, OnInit} from '@angular/core';
import {RecordModel} from '../model/human.data.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.sass']
})
export class GraphComponent implements OnInit {


  records = [
    {
      humanProfile: {
        name: 'Paul', numberVisitors: 0, points: 50, region: 'Miami',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },
    }
    ,
    {

      humanProfile: {
        name: 'Tommy', numberVisitors: 0, points: 50, region: 'Virginia',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },
    },
    {
      humanProfile: {
        name: 'Jimmie ', numberVisitors: 0, points: 50, region: 'New Mexico',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },
    }
  ] as RecordModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
