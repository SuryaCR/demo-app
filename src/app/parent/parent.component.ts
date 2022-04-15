import {
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, OnChanges {
  isChild = false;
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
  ngOnDestroy(): void {
    console.log('Parent OnDestroy is Called');
  }
  change() {
    this.isChild = !this.isChild;
  }
}
