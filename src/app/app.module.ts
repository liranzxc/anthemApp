import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GraphComponent} from './graph/graph.component';
import {RouterModule} from '@angular/router';
import {RecordComponent} from './graph/record/record.component';
import {HumanProfileComponent} from './graph/record/human-profile/human-profile.component';
import {HumanGraphDataComponent} from './graph/record/human-graph-data/human-graph-data.component';
import {VlineComponent} from './graph/record/vline/vline.component';
import {MatDividerModule} from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    RecordComponent,
    HumanProfileComponent,
    HumanGraphDataComponent,
    VlineComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([

      {path: '', component: GraphComponent}
    ]),
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
