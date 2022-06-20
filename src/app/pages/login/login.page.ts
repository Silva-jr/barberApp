import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  footer: boolean = true;
  constructor(private platform: Platform) {}

  ngOnInit(): void {}
  
}
