import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';///calendar
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { SMS } from '@ionic-native/sms/ngx';

import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

class eventMeta {
  constructor(
    public title: string,
    public startTime: string,
    public endTime: string,
    public allDay: Boolean,
    public desc: string
    ) {

   }
}

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class CalendarPage implements OnInit  {


  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  
 
  myVal1: string = "";
  myVal2: string = "";
  myVal3: string = "";
  myT: string = "";
  EndTime: string = "";
  StartTime: string = "";
  isPressed: boolean = false;

  bookRef: AngularFireList<any>;
  //public books: Observable<any[]>;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
 
  constructor(
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string,
     private db: AngularFireDatabase,
    ) { 
   
      this.bookRef = this.db.list('/eventInfo');
    }
 
  ngOnInit() {
    this.resetEvent();
  }
 
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }
 
  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }
    this.isPressed = true;
    
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    //
    const newEvent = new eventMeta(
      eventCopy.title,
      eventCopy.startTime.toString(),
      eventCopy.endTime.toString(),
      eventCopy.allDay,
      eventCopy.desc

    );
    this.bookRef.push(newEvent);
    //
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
  togglePressed(){
    if(this.isPressed = true){
      this.myVal1 = this.myT;
      this.myVal2= this.StartTime;
      this.myVal3 = this.EndTime;
    }
  }


}
//constructor(private sms: SMS) { }





// Send a text message using default options
//this.sms.send('416123456', 'Hello world!');
