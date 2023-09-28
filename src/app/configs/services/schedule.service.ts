import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDTO } from '../models/users';
import { ScheduleDTO } from '../models/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private http: HttpClient) {}

  createMarcation(schedule: ScheduleDTO) {
    return this.http.post<ScheduleDTO>(
      `${environment.apiUrl}/schedule`,
      schedule
    );
  }
}
