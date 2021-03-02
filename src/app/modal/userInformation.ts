export class UserInformation{
        constructor(response:any)
    {
          this.userName=response.userName;
          this.userId =response.userId;
          this.userType=response.userType;
        };

     userName: string;
     userId :number;
     userType:string;

}