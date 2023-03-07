import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShoppingCardComponent } from './user/shopping-card/shopping-card.component';
import { UserOrderingComponent } from './user/user-ordering/user-ordering.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { RoleGuard } from './shared/guard/role.guard';
import { ManageDishesComponent } from './admin/manage-dishes/manage-dishes.component';
import { SignOutComponent } from './login/sign-out/sign-out.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-out', component: SignOutComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {
    path: 'dashboard-admin',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'manage-dishes',
    component: ManageDishesComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ordering',
    component: UserOrderingComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
