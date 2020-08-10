import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InboxPage } from './inbox.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InboxPageRoutingModule } from './inbox-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InboxPageRoutingModule
  ],
  declarations: [InboxPage]
})
export class InboxPageModule {}
