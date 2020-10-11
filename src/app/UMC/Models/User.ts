export class LoginUser {
    uname:string;
    pwd: string;
}
export class RegisterModel
{
        FullName : string;
        UserName : string;
        Password : string;
}

export interface UserDetailsModel {
    userName: string;
    email?: any;
    phoneNumber?: any;
    role?: any;
}