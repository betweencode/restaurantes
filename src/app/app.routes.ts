import { Routes } from '@angular/router';
import {LoginComponent} from './paginas/sinsesion/login/login.component';
import {NofoundComponent} from './paginas/sinsesion/nofound/nofound.component';
import {MenuComponent} from './paginas/sesion/menu/menu.component';
import {NormalComponent} from './paginas/sesion/implementacion/normal/normal.component';
import {ConangularfireComponent} from './paginas/sesion/implementacion/conangularfire/conangularfire.component';
import {
  CustomTokenBackendComponent
} from './paginas/sesion/implementacion/custom-token-backend/custom-token-backend.component';
import {logininiciosesion, seguridadGuard} from './shared/guard/seguridad.guard';


export const routes: Routes = [
  {path: '', canActivate:[logininiciosesion], component: LoginComponent},
  {path: 'login',canActivate:[logininiciosesion], component: LoginComponent},
  {path: 'dashboard',canActivate:[seguridadGuard], component: MenuComponent,children:[
      {path:'normal/libreria',component:NormalComponent},
      {path:'normal/libreriaangularfire',component:ConangularfireComponent},
      {path:'normal/customtokenbackend',component:CustomTokenBackendComponent},
    ]},
  {path: '**', component: NofoundComponent}
];
