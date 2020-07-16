import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPageOnePage } from './login-page-one.page';

describe('LoginPageOnePage', () => {
  let component: LoginPageOnePage;
  let fixture: ComponentFixture<LoginPageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
