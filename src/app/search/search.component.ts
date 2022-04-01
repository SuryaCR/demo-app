import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  n=0;
  search() {

    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("table");
var NewRow = table.insertRow(this.n);

    var value1 = NewRow.insertCell(0);
  var value2 = NewRow.insertCell(1);
  var value3 = NewRow.insertCell(2);
  var value4 = NewRow.insertCell(3);
  var value5 = NewRow.insertCell(4);
  var value6 = NewRow.insertCell(5);
  var value7 = NewRow.insertCell(6);
  var value8 = NewRow.insertCell(7);

  // value1.innerHTML = username[this.x];
  // value2.innerHTML = aadhar[this.x];
  // value3.innerHTML = date[this.x];
  // value4.innerHTML = city[this.x];
  // value5.innerHTML = time[this.x];
  // value6.innerHTML = date1[this.x];
  // value7.innerHTML = labName[this.x];
  // value8.innerHTML = reportNo[this.x];

  this.n++;
    }
}
