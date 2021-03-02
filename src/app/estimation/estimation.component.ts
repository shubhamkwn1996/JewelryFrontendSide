import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, 
    private shareDataService:ShareDataService,
    private ApiInterface:HttpService
) { 
  this.loading = false;
this.submitted = false;
this.userName='';
this.isPrivileged ="normal";
this.discount = 2.0;
this.totalPrice=0.0;
}

estimationform! : FormGroup;
loading = false;
submitted = false;
userName='';
isPrivileged:string ='normal';
discount:number;
totalPrice:number;

ngOnInit() {
  debugger;
 var res = this.shareDataService.getOption();
 this.isPrivileged = res===undefined?'normal':res.userType;
  this.userName = res===undefined?'':res.userName;
  this.discount = 2.0;
  this.totalPrice=0.0;
  this.estimationform = this.formBuilder.group({
    goldprice: [0, Validators.required],
    weight: [0.0, Validators.required],   
  });

}


get f() { return this.estimationform.controls; }
 
calculateGoldPrice(){
  debugger;
  var actualPrice = this.f.goldprice.value* this.f.weight.value;
  var calDiscount =0.0;
  if(this.isPrivileged!="normal"){
     calDiscount = (this.discount*actualPrice)/100;
  }
  this.totalPrice = (actualPrice-calDiscount);

  
}

printToScreen(){
  window.alert(this.totalPrice);
}

printToPDF(){
  window.alert("work in progress");
}

close(){
  this.router.navigate(['../login'], { relativeTo: this.route });
}


}
