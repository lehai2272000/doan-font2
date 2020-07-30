import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myBold]'
})
export class BoldDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.color = "red";
   }

}
