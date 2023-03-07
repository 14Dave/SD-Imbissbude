import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserOrderingComponent } from './user/user-ordering/user-ordering.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login/verify-email/verify-email.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShoppingCardComponent } from './user/shopping-card/shopping-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './shared/auth.service';
import { DishCardComponent } from './child/dish-card/dish-card.component';
import { ManageDishesComponent } from './admin/manage-dishes/manage-dishes.component';
import { FormsModule } from '@angular/forms';
import { SignOutComponent } from './login/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserOrderingComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ShoppingCardComponent,
    NavbarComponent,
    DishCardComponent,
    ManageDishesComponent,
    SignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
