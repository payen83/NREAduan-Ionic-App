import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

   baseURL: string = 'http://localhost/helpdesk/api';
  //baseURL: string = 'http://helpdesk.appsmalaya.com/api';

  
  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello ApiProvider Provider');
  }

  showAlert(msg: string){
    let alert = this.alertCtrl.create({
      subTitle: msg,
      title: '',
      buttons: ['OK']
    });

    alert.present();
  }

  doLogin(user: any){
    let url: string = this.baseURL + '/login';
    let body: string = JSON.stringify(user);

    return new Promise((resolve, reject) => {
        this.http.post(url, body)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  doSignup(user: any){
    let url: string = this.baseURL + '/signup';
    let body: string = JSON.stringify(user);
    return new Promise((resolve, reject) => {
        this.http.post(url, body)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  getAllAduan(){
    let url: string = this.baseURL + '/getAduanAll';

    return new Promise((resolve, reject) => {
        this.http.get(url)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })

  }

  getUser(){
    let data = localStorage.getItem('USER');
    if (data){
      return data;
    }
  }

  getAduanById(){
    let url: string = this.baseURL + '/getAduan';
    let newUser: any = {};
    let user: any = JSON.parse(this.getUser());

    newUser.token = user.token;
    newUser.user_id = user.user_id;

    let body = JSON.stringify(newUser);

    return new Promise((resolve, reject) => {
        this.http.post(url, body)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })
  }

  createAduan(aduan: any){
    let url: string = this.baseURL + '/createAduan';
    let newAduan: any = aduan;

    let user: any = JSON.parse(this.getUser());

    newAduan.token = user.token;
    newAduan.user_id = user.user_id;

    let body = JSON.stringify(newAduan);
    //console.log(body);
    return new Promise((resolve, reject) => {
        this.http.post(url, body)
        .subscribe(data => {
          console.log('success'+data)
          resolve(data);
        }, err => {
          console.log('err'+err)
          reject(err);
        })
    })
  }



}
