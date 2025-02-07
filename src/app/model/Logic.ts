export interface APIResponseBody {
    message: string,
    result: boolean,
    data: any
}

export class LoginModel{
   
    UserName: string;
    UserPassword : string;
   
    constructor(){
        this.UserName = '';
        this.UserPassword = '';
    }
}

export class Customer{
    custId: number;
    firstName: string;
    lastName : string;
    email: string;
    phoneNumber: string;
    password: string;
    address: string;

    constructor(){
        this.custId = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
        this.password = '';
        this.address = '';
    }
}

export class EmployeeList{
    employeeId: number;
    employeeName: string;
    address : string;
    email: string;
    empPhoneNumber: string;
    

    constructor(){
        this.employeeId = 0;
        this.employeeName = '';
        this.email = '';
        this.empPhoneNumber = '';
        this.address = '';
    }
}