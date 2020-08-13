import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { stringify } from 'querystring';

class eventMeta {
  constructor(
    public username: string,
    public title: string,
    public startTime: Date,
    public endTime: Date,
    public allDay: Boolean,
    public desc: string
    ) {

   }
}

@Component({
  selector: 'app-notepad',
  templateUrl: 'schedule.page.html',
  styleUrls: ['schedule.page.scss']
})
export class NotepadPage {
  inAppBrowser: any;
  eventlist: Array<any> = new Array();
  colnames:any = {"user":"username","title":"title", "startTime": "start time", "endTime":"end time"};



  bookRef: AngularFireList<eventMeta>;
  public books: Observable<eventMeta[]>;

  constructor(private db: AngularFireDatabase) {
      //username='gsw';
      //this.bookRef = this.db.list('/eventInfo',ref => ref.orderByChild('username').equalTo('gsw'));
      this.bookRef = this.db.list('/eventInfoGs');
      
      this.books = this.bookRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ); 

    
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
            this.eventlist.push(new eventMeta(
              'gs',
              vt,
              vs1,
              ve1,
              va,
              vd
              ));
  
         // );
        }
        
      });     
  }
  
  /*
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
  
    // Opening a URL and returning an InAppBrowserObject
    //const browser = this.inAppBrowser.create(url, '_self', options);
    const browser = this.inAppBrowser.create("htttps://www.zaobao.com", '_self', options);
  
   // Inject scripts, css and more with browser.X
  }

*/

}

