import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  dob: string;
  status: boolean = false;
  msg:any;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.firstName = params['firstName'];
    this.lastName = params['lastName'];
    this.email = params['email'];
    this.mobile = params['mobile'];
    this.dob = params['dob'];
    console.log(params);
   });
  }
  Send() {
    this.msg = "You have been sent details successfully.";
    this.status = true;
  }
}
