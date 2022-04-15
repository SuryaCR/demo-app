import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  nameChange = '';
  constructor() {
    console.log('Child Constructor is Called');
  }
  ngOnInit(): void {
    console.log('Child OnInit is Called');
  }
  ngOnChanges(): void {
    console.log('Child OnChanges is Called');
  }
  ngOnDestroy(): void {
    console.log('Child OnDestroy is Called');
  }
}
