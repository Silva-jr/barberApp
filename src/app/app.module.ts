import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { PerfilPage } from './perfil/perfil.page';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './shared/components.module';
import { AuthInterceptor } from './configs/security/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
@NgModule({
  declarations: [AppComponent, PerfilPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AvatarModule
  ],
  providers: [
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
