import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SplashComponent } from './splash/splash.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule,
    FormsModule,
  ]
})
export class SharedModule { }
