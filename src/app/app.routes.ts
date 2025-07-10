import { Routes } from '@angular/router';
import {LoginComponent} from './paginas/sinsesion/login/login.component';
import {NofoundComponent} from './paginas/sinsesion/nofound/nofound.component';
import {MenuComponent} from './paginas/sesion/menu/menu.component';
import {NormalComponent} from './paginas/sesion/implementacion/normal/normal.component';
import {ConangularfireComponent} from './paginas/sesion/implementacion/conangularfire/conangularfire.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: MenuComponent,children:[
      {path:'normal/libreria',component:NormalComponent},
      {path:'normal/libreriaangularfire',component:ConangularfireComponent}
    ]},
  {path: '**', component: NofoundComponent}
];
