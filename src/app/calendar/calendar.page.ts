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
    public username: string,
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
    username: '',
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

  myName: string = "";

  bookRef: AngularFireList<any>;
  public books: Observable<any[]>;
  qEvent: eventMeta[];

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
 
  constructor(
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string,
     private db: AngularFireDatabase,
    ) { 
   
      this.bookRef = this.db.list('/eventInfo');
      /*this.books = this.bookRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );  */
    }
 
  ngOnInit() {
    this.resetEvent();
  }
 
  resetEvent() {
    this.event = {
      username: "",
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
      username: this.event.username,
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
      eventCopy.username,
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

  getEvent(){
    //username='gsw';
    this.bookRef = this.db.list('/eventInfo',ref => ref.orderByChild('username').equalTo('gsw'));
    this.books = this.bookRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 
    console.log(this.books);
  }

  addQ(d: string) {
    this.qEvent.push(new eventMeta(d,'1','1','2',false,'1'));
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
