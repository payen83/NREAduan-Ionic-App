import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HubungiPage } from '../hubungi/hubungi';
import { PentadbirPage } from '../pentadbir/pentadbir';
import { KemaskiniPage } from '../kemaskini/kemaskini';
import { UtamaPage } from '../utama/utama';
import { AduanBaruPage } from '../aduan-baru/aduan-baru';
import { SemakanPage } from '../semakan/semakan';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = UtamaPage;
  tab2Root: any = AduanBaruPage;
  tab3Root: any = SemakanPage;
  tab4Root: any = HubungiPage;
  tab5Root: any = PentadbirPage;
  constructor(public navCtrl: NavController) {
  }
  goToHubungi(params){
    if (!params) params = {};
    this.navCtrl.push(HubungiPage);
  }goToPentadbir(params){
    if (!params) params = {};
    this.navCtrl.push(PentadbirPage);
  }goToKemaskini(params){
    if (!params) params = {};
    this.navCtrl.push(KemaskiniPage);
  }
}
