import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public formGroup!: FormGroup;
  isCustomerLogin: boolean = false;
  isOwnerLogin: boolean = false;
  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    if(this.router.url=="/auth/full/signup"){
      this.isOwnerLogin=true;
    }else{
      this.isCustomerLogin=true;
    }
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      condition: [true],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()
    /*this.router.navigate(['/app'])
    this.notificationService.showToast({
      type: "info",
      title: "Sample toast",
      subtitle: "Sample subtitle message",
      caption: "Sample caption",
      target: "body",
      message: "message",
      duration: 2000,
    })*/
  }


}
