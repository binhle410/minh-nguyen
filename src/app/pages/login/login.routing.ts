import { Routes, RouterModule }  from '@angular/router';

import { LoginPage } from './login.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

export const routing = RouterModule.forChild(routes);
