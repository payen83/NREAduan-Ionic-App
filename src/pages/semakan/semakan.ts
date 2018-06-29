import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-semakan',
  templateUrl: 'semakan.html'
})
export class SemakanPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  semakanList: any;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
  }

  ionViewDidLoad(){
    this.api.getAduanById().then(result => {
      let response: any = result;
      this.semakanList = response.feedData;
      
    });
  }
  
}
