import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  location = 'Chennai';
  onBoxValueChange(paraData:any){
    console.log('app component : ' + paraData.value);
  }
}
