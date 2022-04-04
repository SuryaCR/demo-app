import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-rt-pcr',
  templateUrl: './rt-pcr.component.html',
  styleUrls: ['./rt-pcr.component.css']
})
export class RtPcrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  n=0;
  x=0;
   tableDisplay() {

    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("table");
var NewRow = table.insertRow(this.n);

    var username: string[]=[];
    username[this.x] = (<HTMLInputElement>document.getElementById("first-name")).value;

    var aadhar: string[]=[];
    aadhar[this.x] = (<HTMLInputElement>document.getElementById("aadhar-no")).value;

    var date: string[]=[];
    date[this.x] = (<HTMLInputElement>document.getElementById("date")).value;

    var city: string[]=[];
    city[this.x] = (<HTMLInputElement>document.getElementById("city")).value;

    var time: string[]=[];
    time[this.x] = (<HTMLInputElement>document.getElementById("time")).value;

    var labName: string[]=[];
    labName[this.x] = (<HTMLInputElement>document.getElementById("lab-name")).value;

    var reportNo: string[]=[];
    reportNo[this.x] = (<HTMLInputElement>document.getElementById("report-no")).value;

    var date1: string[]=[];
    date1[this.x] = (<HTMLInputElement>document.getElementById("date-test")).value;

    // var testResult: string[]=[];
    // testResult[this.x] = this.getRadioValue();

    // var gender: string[]=[];
    // gender[this.x] = this.getRadioValue();

    var value1 = NewRow.insertCell(0);
  var value2 = NewRow.insertCell(1);
  var value3 = NewRow.insertCell(2);
  var value4 = NewRow.insertCell(3);
  var value5 = NewRow.insertCell(4);
  var value6 = NewRow.insertCell(5);
  var value7 = NewRow.insertCell(6);
  var value8 = NewRow.insertCell(7);

  value1.innerHTML = username[this.x];
  value2.innerHTML = aadhar[this.x];
  value3.innerHTML = date[this.x];
  value4.innerHTML = city[this.x];
  value5.innerHTML = time[this.x];
  value6.innerHTML = date1[this.x];
  value7.innerHTML = labName[this.x];
  value8.innerHTML = reportNo[this.x];

  this.n++;
  this.x++;
    }
    
    // getRadioValue() {
    //   var element = (<HTMLInputElement> document.getElementById("result")).value;
    //   for(var index=0;index<element.length;index++){
    //     return element;
    //   }
    // }

}
