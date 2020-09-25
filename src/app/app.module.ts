import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphComponent } from './graph/graph.component';
import {RouterModule} from "@angular/router";
import { RecordComponent } from './graph/record/record.component';
import { HumanProfileComponent } from './graph/record/human-profile/human-profile.component';
import { HumanGraphDataComponent } from './graph/record/human-graph-data/human-graph-data.component';
import { VlineComponent } from './graph/record/vline/vline.component';
import {MatDividerModule} from "@angular/material/divider";
import {ChartistModule} from 'ng-chartist';
import {MatCardModule} from '@angular/material/card';

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
    ChartistModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([

      {path: '', component: GraphComponent}
    ]),
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
