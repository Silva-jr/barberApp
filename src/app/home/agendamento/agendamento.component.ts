import { Component, OnInit } from '@angular/core';
import { getDate, getDay } from 'date-fns';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  date: Date = new Date('2022-06-21');
  days:any[]=[];
  type: 'string';
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date';
  

  constructor() { }

  ngOnInit(): void {
    this.days.push(getDate(new Date(this.date)))
    console.log(getDate(new Date(this.date)));
  }

  onChange($event) {
    console.log($event);
  }
 

}
