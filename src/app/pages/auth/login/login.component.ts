import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;
  isCustomerLogin: boolean = false;
  isOwnerLogin: boolean = false;
  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    if(this.router.url=="/loginOwner"){
      this.isOwnerLogin=true;
    }else{
      this.isCustomerLogin=true;
    }
    
    this.formGroup = this.formBuilder.group({
      email: ['example@business.com', [Validators.required, Validators.email]],
      password: ['xYzXxXzY', Validators.required],
    }, {updateOn: 'blur'})
  }

  loginAndRedirect(){
      this.router.navigateByUrl('/user');
  }
  SignUp(){
    this.router.navigateByUrl('/signUp');
}

}
