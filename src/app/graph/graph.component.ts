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

      humanProfile : {
        name: 'liran', numberVisitors: 0, points: 50, region: 'Israel',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },


    }
    ,
     {

      humanProfile : {
        name: 'Liam', numberVisitors: 0, points: 50, region: 'Canada',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },


    },

     {

      humanProfile : {
        name: 'William ', numberVisitors: 0, points: 50, region: 'USA',
        profile_image: 'https://www.iconfinder.com/data/icons/human-user-business-person-avatars/100/23A-1User-512.png'
      },


    }



  ] as RecordModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
