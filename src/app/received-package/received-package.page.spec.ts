import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceivedPackagePage } from './received-package.page';

describe('ReceivedPackagePage', () => {
  let component: ReceivedPackagePage;
  let fixture: ComponentFixture<ReceivedPackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedPackagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivedPackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
