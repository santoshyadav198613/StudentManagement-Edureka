import { HoverDirective } from './hover.directive';
import { ElementRef } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    let elementRef: ElementRef;
    const directive = new HoverDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
