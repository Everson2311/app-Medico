import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaltaPage } from './falta.page';

describe('FaltaPage', () => {
  let component: FaltaPage;
  let fixture: ComponentFixture<FaltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
