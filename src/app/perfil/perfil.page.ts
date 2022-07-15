import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  /*   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
  };
 */
  photo: string;

  constructor(private sanitazer: DomSanitizer) {}

  ngOnInit(): void {}

  async takePicture() {
    /*  this.camera
      .getPicture({
        quality: 30,
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.JPEG,
      })
      .then((res) => {
        let base64 = 'data:image/jpeg;base64,' + res;
        this.photo = base64;
        console.log(this.photo);
      })
      .catch((e) => {
        console.log(e);
      });
   */
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
  });
  this.photo = image.dataUrl;
  }
}
