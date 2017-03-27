import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { FooterComponent } from './footer/footer.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditEventComponent } from './edit-event/edit-event.component';


export const router: Routes = [
   // { path: 'home', redirectTo: '', pathMatch: 'full' },
     { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] },
    { path: 'events', component: EventsComponent },
    {path:'event/:id', component:EventDetailComponent, canActivate: [AuthGuard] },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
     { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
     {path:'edit-profile/:id', component:EditProfileComponent, canActivate: [AuthGuard]},
     {path:'edit-event/:id', component:EditEventComponent, canActivate: [AuthGuard]}
    // { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] }


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);