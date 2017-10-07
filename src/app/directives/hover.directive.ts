
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input() color: string = 'red';
  constructor(private element: ElementRef) {
    console.log(element);
  }

  ngOnInit() {
    this.element.nativeElement.style.background = this.color;

  }


}
