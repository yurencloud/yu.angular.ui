import {Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'yu-button-group',
  template: `<ng-content></ng-content>`,
})
export class ButtonGroupComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  readonly el: HTMLElement = this.elementRef.nativeElement;

  ngOnInit() {
    this.renderer.addClass(this.el, 'yu-button-group');
  }
}
