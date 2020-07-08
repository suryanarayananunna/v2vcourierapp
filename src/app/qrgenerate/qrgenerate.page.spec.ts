import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrgeneratePage } from './qrgenerate.page';

describe('QrgeneratePage', () => {
  let component: QrgeneratePage;
  let fixture: ComponentFixture<QrgeneratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrgeneratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrgeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
