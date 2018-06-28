import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';
import { ApiProvider } from '../../providers/api/api';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  user: {username: string, password: string};

  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.user = {username: null, password: null};
  }

  goToDaftar(params){
    if (!params) params = {};
    this.navCtrl.push(DaftarPage);
  }

  login(){
      if(this.user.username != null && this.user.password != null){
        this.api.doLogin(this.user).then(result => {
          let response: any = result;
          if(response.userData){
            //save data in local storage
            localStorage.setItem('USER', JSON.stringify(response.userData));
           
            // go to tabs page
            this.navCtrl.setRoot(TabsControllerPage, {}, {animate: true});

          } else {
            alert(response.error.text);
          }

        })
      }  
  }

}
