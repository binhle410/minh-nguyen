import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Direct Sales',
        percentage: 70,
        order: 0,
      }, {
        value: 1000,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Channel Partners',
        percentage: 30,
        order: 2,
      }
    ];
  }
}
