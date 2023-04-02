import {
  Directive, ElementRef, HostListener, Input, OnInit, Renderer2
} from '@angular/core';
import { HighlightDirectiveBase } from '../../utils/HighlightDirectiveBase';

@Directive({
  selector: '[appHighlightShadow]'
})
export class HighlightShadowDirective extends HighlightDirectiveBase implements OnInit {
  @Input('appHighlightShadow') releaseDate!: string;
  @Input() isPreventByDefault!: string;
  color = '';
  constructor(private el: ElementRef, private renderer2: Renderer2) {
    super();
  }

  @HostListener('mouseover')
  onMouseOver() {
    if (!this.isPreventByDefault) return;
    this.renderer2.setStyle(this.el.nativeElement, 'filter', `drop-shadow(0px 4px 4px ${this.color})`);
    this.renderer2.setStyle(this.el.nativeElement, 'transition', 'filter .5s');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.isPreventByDefault) return;
    this.renderer2.removeStyle(this.el.nativeElement, 'filter');
  }

  ngOnInit() {
    this.setColorForNativeElement();
  }

  setColorForNativeElement() {
    this.color = this.getDateDifference(this.releaseDate) || '';
    if (this.isPreventByDefault) return;
    console.log(1111);
    this.renderer2.setStyle(this.el.nativeElement, 'filter', `drop-shadow(0px 4px 4px ${this.color})`);
  }
}
