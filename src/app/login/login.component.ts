import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
    /*this.loginService.postLogin().subscribe(
      (resp) => {
        console.log(resp);
      });
*/
  }

}

