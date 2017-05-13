/**
 * Created by crist on 12/05/2017.
 */
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ListingComponent} from "./listing/listing.component";

const appRouters: Routes = [
  {path: '', component: ListingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRouters);