import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotepadPage } from './schedule.page';

const routes: Routes = [
  {
    path: '',
    component: NotepadPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotepadPageRoutingModule {}
