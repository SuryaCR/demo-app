import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  
  //data model
  customerModel:any;

  constructor() { console.log('it works');}

  ngOnInit(): void {
    this.customerModel = {
      firstName:'Steve',
      lastName:'Jobs',
      email:'stevejobs@gmail.com'
    }
  }
  saveCustomer(CustomerFormGroup:any){
    if(CustomerFormGroup.valid){
      console.log(CustomerFormGroup.value);
    }
  }
}
