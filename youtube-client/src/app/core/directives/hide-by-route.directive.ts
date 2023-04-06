import {
  Directive, ElementRef, OnInit, Renderer2
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appHideByRoute]'
})
export class HideByRouteDirective implements OnInit {
  constructor(private el: ElementRef, private renderer2: Renderer2, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isMatchWithDetails = event.url.match(/\/videos\/[a-zA-Z0-9]/i);
        if (event.url.includes('auth')
            || event.url.includes('404')
            || isMatchWithDetails) {
          this.hideNativeElement(true);
          return;
        }

        this.hideNativeElement();
      }
    });
  }

  hideNativeElement(isHide?: boolean) {
    this.renderer2.setStyle(this.el.nativeElement, 'visibility', isHide ? 'hidden' : 'visible');
  }
}
