import {Component, Input, OnInit} from '@angular/core';
import {HumanProfileModel} from '../../../model/human.data.model';

@Component({
  selector: 'app-human-profile',
  templateUrl: './human-profile.component.html',
  styleUrls: ['./human-profile.component.sass']
})
export class HumanProfileComponent implements OnInit {

  @Input()
  humanProfile:HumanProfileModel;

  constructor() { }



  ngOnInit(): void {
  }

}
