import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendado',
  templateUrl: './agendado.page.html',
  styleUrls: ['./agendado.page.scss'],
})
export class AgendadoPage implements OnInit {

  public segment = 'list1';

  constructor() { }

  ngOnInit() {
  }


  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
