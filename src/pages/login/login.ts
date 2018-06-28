import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToDaftar(params){
    if (!params) params = {};
    this.navCtrl.push(DaftarPage);
  }
}
