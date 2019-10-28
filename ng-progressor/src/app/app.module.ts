import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { MemberworkoutListComponent } from './members/memberworkout-list/memberworkout-list.component';
import { MemberService } from './shared/member.service';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';
import { MyChartComponent } from './members/my-chart/my-chart.component';

const appRoutes: Routes = [
  { path: 'graph', component: MyChartComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberComponent,
    MemberworkoutListComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
