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
import {MatDividerModule} from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { PredictGraphComponent } from './graph/record/predict-graph/predict-graph.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentStepsModule} from '@covalent/core/steps';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentNotificationsModule} from '@covalent/core/notifications';
import {CovalentMenuModule} from '@covalent/core/menu';
import {TdMediaService} from '@covalent/core/media';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    RecordComponent,
    HumanProfileComponent,
    HumanGraphDataComponent,
    PredictGraphComponent,
    DashboardComponent,
  ],
  imports: [
HttpClientModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([

      {path: '', component: GraphComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]),
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule, MatTooltipModule, MatDatepickerModule, _MatMenuDirectivesModule, MatMenuModule, MatListModule,
    MatDialogModule, MatSidenavModule, FormsModule, MatCheckboxModule,

    CovalentLayoutModule,
    CovalentStepsModule, CovalentSearchModule, CovalentNotificationsModule, CovalentMenuModule,MatNativeDateModule
    // (optional) Additional Covalent Modules imports
  ],
  providers: [TdMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
