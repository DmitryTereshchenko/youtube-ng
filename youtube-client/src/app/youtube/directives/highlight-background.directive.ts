import {
  Directive, ElementRef, Input, OnInit, Renderer2
} from '@angular/core';
import { HighlightDirectiveBase } from '../../utils/HighlightDirectiveBase';

@Directive({
  selector: '[appHighlightBackground]'
})
export class HighlightBackgroundDirective extends HighlightDirectiveBase implements OnInit {
  @Input('appHighlightBackground') releaseDate!: string;
  constructor(private el: ElementRef, private renderer2: Renderer2) {
    super();
  }

  ngOnInit() {
    this.setColorForNativeElement();
  }

  setColorForNativeElement() {
    const color = this.getDateDifference(this.releaseDate);
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
