import {
  Directive, ElementRef, Input, OnInit, Renderer2
} from '@angular/core';
import { HighlightDirectiveBase } from '../../utils/HighlightDirectiveBase';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective extends HighlightDirectiveBase implements OnInit {
  @Input('appHighlightBorder') releaseDate!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    super();
  }

  ngOnInit() {
    this.setColorForNativeElement();
  }

  setColorForNativeElement() {
    const color = this.getDateDifference(this.releaseDate);
    this.renderer.setStyle(this.el.nativeElement, 'border-bottom', `5px solid ${color}`);
  }
}
