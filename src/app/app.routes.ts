import { Routes } from '@angular/router';
import {LoginComponent} from './paginas/sinsesion/login/login.component';
import {NofoundComponent} from './paginas/sinsesion/nofound/nofound.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NofoundComponent}
];
