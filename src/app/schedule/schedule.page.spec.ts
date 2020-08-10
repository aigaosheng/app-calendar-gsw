import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NotepadPage } from './schedule.page';

describe('NotepadPage', () => {
  let component: NotepadPage;
  let fixture: ComponentFixture<NotepadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotepadPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
