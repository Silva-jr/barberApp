import { UserDTO } from "./users";

export class ScheduleDTO {
  _id?: string;
  date: string;
  time: string;
  barber: UserDTO;
}




