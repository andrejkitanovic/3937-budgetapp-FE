import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './components/finance/finance.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
    canActivate: [LoggedOutGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    component: FinanceComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    canActivate: [LoggedInGuard],
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
