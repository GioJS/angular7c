import {Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') toggle = false;

  ngOnInit() {
    this.toggle = false;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener('click') onMouseClick(event: Event) {
    this.toggle = !this.toggle;
  }
}
