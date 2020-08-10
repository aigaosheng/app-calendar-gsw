import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-notepad',
  templateUrl: 'schedule.page.html',
  styleUrls: ['schedule.page.scss']
})
export class NotepadPage {
  inAppBrowser: any;

  constructor() {}
  
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }
  
    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);
  
   // Inject scripts, css and more with browser.X
  }

}

