import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    msg: any;
    status: boolean = false;
    fnPattern: any;
    lnPattern: any;
    emailPattern: any;
    mobPattern: any;
    decPattern: any;

    firstName : string;
    lastName : string;
    email : string;
    mobile : string;
    dob: string;

    constructor(private formBuilder: FormBuilder, private router: Router) { }
    date = new Date().toISOString().slice(0, 10);
    ngOnInit() {
        this.fnPattern = /^[a-zA-Z \-\']+$/;
        this.lnPattern = /^[a-zA-Z \-\']+$/;
        this.emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.mobPattern = /^[7-9]\d{9}$/;
        //this.decPattern = /^-?\d*\.?\d*$/;
        this.decPattern = /^[$]\.?([0-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-3][0-9]{3}|4000$)\.?(\.\d{1,2})?$/;
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern(this.fnPattern)]],
            lastName: ['', [Validators.required, Validators.pattern(this.lnPattern)]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            mobile: ['', [Validators.required, Validators.pattern(this.mobPattern)]],
            dob: ['', Validators.required],
            //dec: ['', [Validators.required, Validators.pattern(this.decPattern)]]
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        let myObj = {
                  'firstName': this.registerForm.controls['firstName'].value,
                  'lastName': this.registerForm.controls['lastName'].value,
                  'email': this.registerForm.controls['email'].value,
                  'mobile': this.registerForm.controls['mobile'].value,
                  'dob': this.registerForm.controls['dob'].value
          };
        //debugger;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        } else {
            this.msg = "You have been successfully registered";
            this.registerForm.reset();
            this.submitted = false;
            //this.status = true;
            // this.router.navigate(['form'], {
            //   queryParams: {
            //       'firstName': this.registerForm.controls['firstName'].value,
            //       'lastName': this.registerForm.controls['lastName'].value,
            //       'email': this.registerForm.controls['email'].value,
            //       'mobile': this.registerForm.controls['mobile'].value,
            //       'dob': this.registerForm.controls['dob'].value
            //   }
            // });
            this.router.navigate(['next'], { queryParams:myObj});
        }
    }
}
