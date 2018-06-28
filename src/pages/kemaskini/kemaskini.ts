import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-kemaskini',
  templateUrl: 'kemaskini.html'
})
export class KemaskiniPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  aduan: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aduan = this.navParams.get('item');
    console.log(this.aduan);
  }
  
}
