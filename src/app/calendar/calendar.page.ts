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

  isToday:boolean

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function(date:Date) {
          return date.getDate().toString();
      },
      formatMonthViewDayHeader: function(date:Date) {
          return 'MonMH';
      },
      formatMonthViewTitle: function(date:Date) {
          return 'testMT';
      },
      formatWeekViewDayHeader: function(date:Date) {
          return 'MonWH';
      },
      formatWeekViewTitle: function(date:Date) {
          return 'testWT';
      },
      formatWeekViewHourColumn: function(date:Date) {
          return 'testWH';
      },
      formatDayViewHourColumn: function(date:Date) {
          return 'testDH';
      },
      formatDayViewTitle: function(date:Date) {
          return 'testDT';
      }
  }
  };
  
 
  myVal1: string = "";
  myVal2: string = "";
  myVal3: string = "";
  myT: string = "";
  EndTime: string = "";
  StartTime: string = "";
  isPressed: boolean = false;

  myName: string = "";

  bookRef: AngularFireList<eventMeta>;
  public books: Observable<eventMeta[]>;
  qEvent: eventMeta[];

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
 
  constructor(
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) private locale: string,
     private db: AngularFireDatabase,
    ) { 
   
      this.bookRef = this.db.list('/eventInfoGs');
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
      //username: this.event.username,
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
      this.event.username,
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
    //this.bookRef = this.db.list('/eventInfo',ref => ref.orderByChild('username').equalTo('gsw'));
    this.bookRef = this.db.list('/eventInfoGs');
    
    this.books = this.bookRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ); 
    
    //
    
    this.books.forEach(element => {
      for (let ev of element ) {
          /*this.qEvent.push(
            new eventMeta(ev.username,ev.title,
              ev.startTime,ev.endTime,ev.allDay,ev.desc)
          );*/

          let vs:Date=new Date(ev.startTime);
          let ve:Date=new Date(ev.endTime);
          let vt:string=ev.title;
          let vd:string=ev.desc;
          let va:Boolean=ev.allDay;

          let vs1:Date=new Date(vs.getTime()+2*24*60*60*1000);
          let ve1:Date=new Date(ve.getTime()+2*24*60*60*1000);

     
          //console.log(currentEvent);
          this.eventSource.push({
            title: vt,
            startTime: vs1,
            endTime: ve1,
            desc: vd,
            allDay: va
          });
          this.myCal.loadEvents();   

       // );
      }
      
    });
      
  }

  
  onViewTitleChanged(title) {
    this.viewTitle = title;
}

onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}

changeMode(mode) {
    this.calendar.mode = mode;
}

today() {
    this.calendar.currentDate = new Date();
}

onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}

onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}

next() {
  if(this.calendar.mode == 'month') {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth() + 1,
      this.calendar.currentDate.getDay()
    )
  }
  else if(this.calendar.mode == 'week') {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth(),
      this.calendar.currentDate.getDay() + 7
    )

  }
  else {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth(),
      this.calendar.currentDate.getDay() + 1
    )
  }
}

back() {
  if(this.calendar.mode == 'month') {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth() - 1,
      this.calendar.currentDate.getDay()
    )
  }
  else if(this.calendar.mode == 'week') {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth(),
      this.calendar.currentDate.getDay() - 7
    )

  }
  else {
    this.calendar.currentDate = new Date(
      this.calendar.currentDate.getFullYear(),
      this.calendar.currentDate.getMonth(),
      this.calendar.currentDate.getDay() - 1
    )
  }
}
}
//constructor(private sms: SMS) { }





// Send a text message using default options
//this.sms.send('416123456', 'Hello world!');
