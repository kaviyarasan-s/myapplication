import { Directive, Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  @Input('appHighlights') highLightColor:string;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    // alert(this.highLightColor);
    this.el.nativeElement.style.backgroundColor = this.highLightColor;  
  }


}
