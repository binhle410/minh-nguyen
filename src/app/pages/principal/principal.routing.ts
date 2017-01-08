import { Routes, RouterModule }  from '@angular/router';

import { Principal } from './principal.component';
import { Company } from './components/company/company.component';
import { ChannelPartner } from './components/channel-partner/channel-partner.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Principal,
    children: [
      { path: 'company', component: Company },
      { path: 'channel-partner', component: ChannelPartner },
    //   { path: 'leafletmaps', component: LeafletMaps },
    //   { path: 'linemaps', component: LineMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
