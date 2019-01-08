import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ClassNameService} from '../../util/classnames';

@Component({
  selector: '[yu-button]',
  providers: [ ClassNameService ],
  template: `<ng-content></ng-content>`,
})
export class ButtonComponent implements OnInit {
  readonly el: HTMLElement = this.elementRef.nativeElement;
  private type: string;
  private plain: boolean;

  @ViewChild('contentElement') contentElement: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private classNameService: ClassNameService
  ) {}

  private updateClassNames(): void {
    const classNames = {
      'yu-button': true,
      [this.type]: this.type,
      'plain': this.plain,
    };
    this.classNameService.updateClassNames(this.el, classNames);
  }

  @Input()
  set yuType(type: string) {
    this.type = type;
    this.updateClassNames();
  }

  get yuType(): string {
    return this.type;
  }

  @Input()
  set yuPlain(isPlain: boolean) {
    this.plain = isPlain;
    this.updateClassNames();
  }

  get yuPlain(): boolean {
    return this.plain;
  }

  ngOnInit() {
  }
}
