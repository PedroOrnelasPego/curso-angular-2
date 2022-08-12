import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]',
})
export class FundoAmareloDirective {
  constructor(private elementRef: ElementRef, private render2: Renderer2) {
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow'
    //console.log(this.elementRef)
    this.render2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
