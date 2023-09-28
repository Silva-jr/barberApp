import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeInterval'
})
export class TimeIntervalPipe implements PipeTransform {
  transform(startHour: number, endHour: number, intervalMinutes: number): string[] {
    const timeSlots = [];
    let currentHour = startHour;

    while (currentHour <= endHour) {
      const startMinutes = currentHour * 60;
      const endMinutes = startMinutes + intervalMinutes;

      const startTime = this.formatTime(startMinutes);
      timeSlots.push(startTime);

      currentHour += intervalMinutes / 60;
    }

    return timeSlots;
  }

  private formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
}
