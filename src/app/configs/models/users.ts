export class UserDTO {
  _id?: string;
  username: string;
  email: string;
  password: string;
  isBarber?: boolean;
  startTime?: string;

  endTime?: string;

  startDay?: string;

  endDay?: string;
}

export class AuthDto {
  email: string;
  password: string;
}
