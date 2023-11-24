export enum USER_ROLE {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
}

export type UserType = {
  id: string;
  created_at: string;
  auth_id: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  role: USER_ROLE;
  email?: string;
  mobile?: string;
};
