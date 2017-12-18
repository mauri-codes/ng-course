import { Directive, ElementRef, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBadge]'
})
export class BadgeDirective implements OnInit {
  @Input() appBadge: string;
  constructor( private el: ElementRef, private renderer: Renderer2 ) {
    el.nativeElement.style.fontSize = '14px';
  }
  ngOnInit() {
    console.log(this.appBadge);
    let badge;
    switch ( this.appBadge ) {
      case 'Ciencia Ficcion':
        badge = 'badge-success';
        break;
      case 'Fantasia':
        badge = 'badge-warning';
        break;
      case 'Accion':
        badge = 'badge-info';
        break;
      case 'Drama':
        badge = 'badge-danger';
        break;
      case 'History':
        badge = 'badge-primary';
        break;
      default:
        badge = 'badge-primary';
    }
    this.renderer.addClass(this.el.nativeElement, badge);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.fontSize = '15px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontSize = '14px';
  }
}
