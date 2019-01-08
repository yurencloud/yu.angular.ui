import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ClassList} from '../../util/class-list';

@Component({
  selector: '[yu-button]',
  template: `
    button
  `,
})
export class ButtonComponent implements OnInit {
  readonly el: HTMLElement = this.elementRef.nativeElement;
  private type: string;
  private classList: ClassList = new ClassList(['yu-button']);

  @ViewChild('contentElement') contentElement: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.classList
  }

  @Input()
  set yuType(value: string) {
    this.type = value;
    this.classList.add(value).render(this.el, this.renderer);
  }

  get yuType(): string {
    return this.type;
  }

  ngOnInit() {
  }



}
