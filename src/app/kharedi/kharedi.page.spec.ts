import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KharediPage } from './kharedi.page';

describe('KharediPage', () => {
  let component: KharediPage;
  let fixture: ComponentFixture<KharediPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KharediPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KharediPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
