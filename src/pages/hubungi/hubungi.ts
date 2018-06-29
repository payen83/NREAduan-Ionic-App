import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-hubungi',
  templateUrl: 'hubungi.html'
})
export class HubungiPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  image: any;
  constructor(public navCtrl: NavController, public camera: Camera) {
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA // if gallery use this.camera.PictureSourceType.PHOTOALBUM
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = imageData;
     this.image = base64Image;
    }, (err) => {
     // Handle error
     alert(JSON.stringify(err));
    });
  }
}
