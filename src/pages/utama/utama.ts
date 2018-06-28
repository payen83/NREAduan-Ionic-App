import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-utama',
  templateUrl: 'utama.html'
})
export class UtamaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  goToTab(index){
    this.navCtrl.parent.select(index)
  }
  
}
