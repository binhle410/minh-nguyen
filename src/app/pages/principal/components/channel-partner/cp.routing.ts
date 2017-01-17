import { Routes, RouterModule }   from '@angular/router';
import { ChannelPartner }     from './cp.component';
import { ChannelPartnerList } from './list/channel-partner.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelPartner,
    children: [    
      { path: '', component: ChannelPartnerList },
      { path: ':id', loadChildren: () => System.import('./+detail/cpDetail.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
