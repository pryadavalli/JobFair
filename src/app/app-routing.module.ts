import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './menu/menu.component';


const routes: Routes =
  [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent  },
    { path: 'userinfo', component: SignupComponent, canActivate: [AuthGuard]  },
    { path: '', redirectTo: 'home', pathMatch: 'full'   },
    { path: '**', redirectTo: 'home', pathMatch: 'full'  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
