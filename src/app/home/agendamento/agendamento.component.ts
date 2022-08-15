import { Component, OnInit } from '@angular/core';
import { getDate, getDay } from 'date-fns';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent implements OnInit {
  date: Date = new Date('2022-06-21');
  days: any[] = [];
  type: 'string';
  modes = [
    'date',
    'date-time',
    'month',
    'month-year',
    'time',
    'time-date',
    'year',
  ];
  selectedMode = 'date';
  myDate: String = new Date().toISOString();

  constructor() {}

  ngOnInit(): void {
    const element = document.querySelectorAll('.time-hour');
    element.forEach((current) => {
      current.addEventListener('click', () => {
        current.classList.toggle('clock-ative');        
        
        console.log(current.getAttribute('data-hours'))
      });
    });
    console.log(this.myDate);
  }

  onChange(date) {
    console.log(date);
  }
}
