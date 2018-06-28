import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  baseURL: string = 'http://localhost/helpdesk/api';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
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

  createAduan(aduan: any){
    let url: string = this.baseURL + '/createAduan';
    let newAduan: any = aduan;
    newAduan.token = "8c48a6445a0f2aad9f717ee6ae580bb05065e051a2506e3adc89370e988f863a";
    newAduan.user_id = 3;
    let body = JSON.stringify(newAduan);

    return new Promise((resolve, reject) => {
        this.http.post(url, body)
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    })

    

  }



}
