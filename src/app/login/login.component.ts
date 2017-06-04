import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.template.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;     
  }

  ngOnInit() {
  }

  login() {
    console.log("log");
    this.router.navigate(['']);
  }

}
