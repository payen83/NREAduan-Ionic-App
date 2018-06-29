import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-semakan',
  templateUrl: 'semakan.html'
})
export class SemakanPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  semakanList: any;
  //add here
  tempList: any;
  constructor(public navCtrl: NavController, 
    public api: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  batal(aduan){
    const confirm = this.alertCtrl.create({
      title: 'Aduan',
      message: 'Anda pasti untuk batalkan aduan ini?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            // run command batal aduan.
            this.api.deleteAduan(aduan).then(result => {
              let response: any = result;
              if (response.success) {
                this.api.showAlert('Aduan berjaya dibatalkan');
                this.ionViewDidLoad();
              } else {
                this.api.showAlert(response.error.text);
              } 
            }, err => {
              this.api.showAlert('Error: ' + JSON.stringify(err));
            })
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewWillEnter(){
    this.ionViewDidLoad();
  }

  ionViewDidLoad(){

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loader.present();

    this.api.getAduanById().then(result => {
      loader.dismiss();
      let response: any = result;
      this.semakanList = response.feedData;
      //add here
      this.tempList = this.semakanList;
    });
  }

  initializeItems(){
    this.semakanList = this.tempList;
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.semakanList = this.semakanList.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
}
