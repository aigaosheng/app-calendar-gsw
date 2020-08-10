import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendar.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { SMS } from '@ionic-native/sms/ngx';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CalendarPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}


