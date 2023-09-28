import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDTO } from 'src/app/configs/models/users';
import { ScheduleService } from 'src/app/configs/services/schedule.service';
import { UserService } from 'src/app/configs/services/user.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
})
export class AgendamentoComponent implements OnInit {
  type: 'string';
  selectedMode = 'date';
  myDate: String = new Date().toISOString();
  timeSlots: { start: string; end: string }[] = [];
  timeMornig: any[] = [];
  timeAfternon: any;
  timeNight: any;
  start: any;
  dataUser: UserDTO;
  id: string;
  register: FormGroup;

  constructor(
    private userService: UserService,
    private acitveRoute: ActivatedRoute,
    private scheduleService: ScheduleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.acitveRoute.snapshot.paramMap.get('_id');
    this.getBarberById(this.id);

    this.register = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      barber: [this.id, Validators.required],
    });
  }

  onChange(date) {
    this.start = date;
    console.log(this.start);
    this.register.patchValue({
      time: this.start,
    });
    console.log(this.register.value);
  }

  onChangeDate(date) {
    console.log(this.myDate);
    this.register.patchValue({
      date: this.myDate,
    });
    console.log(this.register.value);
  }

  generateTimeSlots(
    startHour: any,
    endHour: number,
    intervalMinutes: number
  ): any[] {
    const timeSlots = [];
    let currentHour = startHour;

    while (currentHour <= endHour) {
      const startMinutes = currentHour * 60;
      const endMinutes = startMinutes + intervalMinutes;

      const startTime = this.formatTime(startMinutes);
      const endTime = this.formatTime(endMinutes);

      timeSlots.push({ start: startTime, end: endTime });
      currentHour += intervalMinutes / 60;
    }
    return timeSlots;
  }

  formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}`;
  }

  getBarberById(id: string) {
    this.userService.getBarbersById(id).subscribe((data: UserDTO) => {
      this.dataUser = data;
      this.timeSlots = this.generateTimeSlots(
        parseInt(this.dataUser?.startTime),
        parseInt(this.dataUser?.endTime),
        90
      );
      this.start = this.dataUser.startTime;
      this.timeAfternon = this.timeSlots.filter((el) => el.start >= '12:00');
      this.timeNight = this.timeSlots.filter((el) => el.start >= '18:00');
      console.log(this.timeNight);
    });
  }

  createSchedule() {
    this.scheduleService
      .createMarcation(this.register.value)
      .pipe()
      .subscribe((data) => {
        console.log(data);
      });
  }
}
