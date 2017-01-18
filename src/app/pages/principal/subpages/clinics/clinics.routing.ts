import { Routes, RouterModule }   from '@angular/router';
import { Clinics }     from './clinics.component';
import { ClinicList } from './list/clinicList.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Clinics,
    children: [    
      { path: '', component: ClinicList },
      { path: ':id', loadChildren: () => System.import('./+detail/clinicDetail.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
