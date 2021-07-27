import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  name ="";
  password ="";

  logmessage(value:any){
    console.log('Welcome ' + value);
  }

  validatemail(value:string){
    var value = 'test@yahoo.com'

if (/@yahoo.com\s*$/.test(value)) {
   console.log("it ends in @yahoo");
}
  }
  ngOnInit(): void {
  }
}
