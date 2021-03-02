import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UserInformation } from '../modal/userInformation';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  
    private ApiInterface:HttpService,
    private shareDataService:ShareDataService
) { }

loginform! : FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    this.loginform = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }   

  get f() { return this.loginform.controls; }

  
  onSubmit() {
    
    this.submitted = true;
    if (this.loginform.invalid) {
        return;
    }
    this.loading = true;

    this.ApiInterface.postReqUnauth('jewelry/userlogin', this.loginform.value).subscribe(
      res=>this.success(res),
      err=>this.error(err)
    );
   
  }

  success(res: UserInformation){
    debugger;
    console.log(res);
    this.shareDataService.setOption(res);
    this.router.navigate(['../estimation'], { relativeTo: this.route });
    }
    error(err:any){
      debugger;
      console.log(err);
     window.alert('Please try again');
     this.loading = false;
     this.submitted=false;
    }
}
