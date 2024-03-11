export class User {
    id!:number;
    name!:string;
    email!:string;
    password!:string;
    profile!:string;
}
export enum Profile{
    ADMIN,
    USER
}