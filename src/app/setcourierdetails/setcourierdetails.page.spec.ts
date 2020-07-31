import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetcourierdetailsPage } from './setcourierdetails.page';

describe('SetcourierdetailsPage', () => {
  let component: SetcourierdetailsPage;
  let fixture: ComponentFixture<SetcourierdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetcourierdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetcourierdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
