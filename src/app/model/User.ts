export enum Profil {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export class User {
  id!: number;
  firstName!: string;
  lastName!:string;
  email!: string;
  password!: string;
  profil!: Profil;

  
}
