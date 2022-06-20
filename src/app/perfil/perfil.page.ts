import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
  };

  photo;

  constructor(private camera: Camera, private sanitazer: DomSanitizer) {}

  ngOnInit(): void {}

  takePicture() {
    this.camera
      .getPicture({
        quality: 100,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.FILE_URI,
        mediaType: this.camera.MediaType.PICTURE,
        
      })
      .then((res) => {
        let base64 = 'data:image/jpeg;base64,' + res;
        this.photo = base64;
        console.log(this.photo);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
