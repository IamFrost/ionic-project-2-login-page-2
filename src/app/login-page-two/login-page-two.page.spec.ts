import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPageTwoPage } from './login-page-two.page';

describe('LoginPageTwoPage', () => {
  let component: LoginPageTwoPage;
  let fixture: ComponentFixture<LoginPageTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
