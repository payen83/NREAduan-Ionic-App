import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html'
})
export class DaftarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  user: {username: string, email: string, password: string, name: string};

  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.user = {username: null, email: null, password: null, name: null}
  }

  signup(){
    if(this.user.username != null && this.user.password != null){
      this.api.doSignup(this.user).then(result => {
        let response: any = result;
        console.log(response);
        if(response.userData){
          //send message successfull
          this.api.showAlert('Registration successfull, please proceed to login')
          this.navCtrl.pop();
        } else {
          this.api.showAlert('err msg1: '+response.error.text);
        }
      }, err => {
        this.api.showAlert(JSON.stringify(err));
      })
    }  
}
  
}
