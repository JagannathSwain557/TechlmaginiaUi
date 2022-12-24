import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ListEnquiryComponent } from './pages/list-enquiry/list-enquiry.component';
import { AuthGuard } from './guards/auth-guard';
import { BaseComponent } from './pages/base/base.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginOwnerComponent } from './pages/auth/login-owner/login-owner.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
      path: 'user',            //<---- parent component declared here
      component: BaseComponent,
      children: [                          
          {
              path:'home',
              component: HomeComponent  // <-- Child component 
          },
          {
              path:'products',
              component: ProductsComponent  // <-- Child component 
          },
          {
              path:'about',
              component: AboutComponent // <-- Child component 
          },
        
        {
            path:'contactUs',
            component: ContactUsComponent  // <-- Child component 
        },
        {
          path:'dashboard',
          component: DashboardComponent
        },
        {
          path:'profile',
          component: ProfileComponent
        }
       
      ]
   },
   { path: '', component: LoginComponent },
   { path: 'loginOwner', component: LoginOwnerComponent },
   { path: 'signUp', component: SignUpComponent },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
