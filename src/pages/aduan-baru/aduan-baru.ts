import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-aduan-baru',
  templateUrl: 'aduan-baru.html'
})
export class AduanBaruPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  aduan: {title: string, kategori: string, masalah: string};

  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.aduan = {title: null, kategori: null, masalah: null};
  }

  submitAduan(){
    if(this.aduan.title != null 
      && this.aduan.kategori != null && 
      this.aduan.masalah != null ){
        // add submission to API
        this.api.createAduan(this.aduan).then(result => {
          let response: any = result;
          //console.log(response);
          if(response.feedData){
            this.api.showAlert('Aduan berjaya dihantar');
            this.aduan = {title: null, kategori: null, masalah: null};
          }
        }, err => {
          this.api.showAlert('Error: ' + JSON.stringify(err));
        })
      } else {
        this.api.showAlert('Sila masukkan semua informasi');
      }
  }
  
}
