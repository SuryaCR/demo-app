import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
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

  ngAfterViewInit(): void {
    console.log('After View Init - Child');
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked - Child');
  }

  ngDoCheck(): void {
    console.log('Child DoCheck is Called');
  }

  ngOnDestroy(): void {
    console.log('Child OnDestroy is Called');
  }

  ngAfterContentInit(): void {
    console.log('After Content Init - Child');
  }

  ngAfterContentChecked(): void {
    console.log('After Content Checked - Child');
  }
}
