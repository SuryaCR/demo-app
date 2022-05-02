import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges,DoCheck {
  child = true;
  @Input()
  nameChange = '';
  constructor() {
    console.log('Parent Constructor is Called');
  }
  ngOnInit(): void {
    console.log('Parent OnInit is Called');
  }
  ngOnChanges() {
    console.log('Parent OnChanges is Called');
  }
  ngDoCheck(){
    console.log('Parent DoCheck is Called');
  }
  change() {
    this.child = !this.child;
  }
}
