import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';

import { IonicModule } from '@ionic/angular';
import { SpinnerComponent } from './spinner/spinner.component';
import { TimeIntervalPipe } from '../configs/pipe/timeInterval.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    IonicModule,
    
    
  ],
  declarations: [ SpinnerComponent, TimeIntervalPipe],
  exports: [ NgxSpinnerModule, SpinnerComponent,TimeIntervalPipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
