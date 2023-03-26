import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') releaseDate!: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setBorderColor();
  }

  getDateDifference(): string | void {
    const currentDate = new Date();
    const diff = new Date(currentDate.getTime() - this.releaseDate.getTime());
    const [years, month, days] = [
      diff.getUTCFullYear() - 1970,
      diff.getUTCMonth(),
      diff.getUTCDate() - 1,
    ];

    if (month > 6 || years >= 1) return 'red';
    if (years < 1) {
      if (month >= 1 && month <= 6) return 'yellow';
      if (month < 1 && days >= 7) return 'green';

      return 'blue';
    }
  }

  setBorderColor() {
    const color = this.getDateDifference();
    this.renderer.setStyle(this.el.nativeElement, 'border-bottom', `5px solid ${color}`);
  }
}
