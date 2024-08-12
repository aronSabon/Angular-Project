import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  authService:AuthService=inject(AuthService);
  router:Router=inject(Router);

  OnSubmit(){

   let user:User= this.authService.Login(this.username.nativeElement.value,this.password.nativeElement.value);
   if(user===undefined){
    alert('user doesnot exist');
   }
   else{
    alert('user '+user.name+' is logged Successfully');
    this.router.navigate(['Courses']);


   }
   console.log(this.authService.IsAuthenticated());
  }

}
