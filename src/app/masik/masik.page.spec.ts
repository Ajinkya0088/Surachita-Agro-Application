import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasikPage } from './masik.page';

describe('MasikPage', () => {
  let component: MasikPage;
  let fixture: ComponentFixture<MasikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
