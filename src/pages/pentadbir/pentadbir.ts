import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KemaskiniPage } from '../kemaskini/kemaskini';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-pentadbir',
  templateUrl: 'pentadbir.html'
})
export class PentadbirPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  aduanList: any;

  constructor(public navCtrl: NavController, public api: ApiProvider) {
  }

  ionViewDidLoad(){
    this.api.getAllAduan().then(results => {
        console.log(results);
        let list: any = results;
        this.aduanList = list.feedData;
    }).catch(err=>{

    })
  }

  goToKemaskini(params){
    if (!params) params = {};
    this.navCtrl.push(KemaskiniPage, {item: params});
  }


}
