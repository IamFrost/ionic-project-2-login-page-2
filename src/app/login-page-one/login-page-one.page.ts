import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page-one',
  templateUrl: './login-page-one.page.html',
  styleUrls: ['./login-page-one.page.scss'],
})
export class LoginPageOnePage implements OnInit {

  // logo1 = '../../assets/logo1.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLoginPageTwo(){
    this.router.navigate(['login-page-two']);
  }

}
