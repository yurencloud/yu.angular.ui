import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ClassNameService} from '../../util/classnames';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {YuColorType, YuSizeType} from '../../util/type';

@Component({
  selector: '[yu-button]',
  providers: [ ClassNameService ],
  template: `<ng-content></ng-content>`,
})
export class ButtonComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private classNameService: ClassNameService
  ) {}

  readonly el: HTMLElement = this.elementRef.nativeElement;
  private type: YuColorType;
  private size: YuSizeType;
  private plain: boolean;
  private disabled: boolean;
  private circle: boolean;

  private updateClassNames(): void {
    const classNames = {
      'yu-button': true,
      [this.type]: this.type,
      [this.size]: this.size,
      'plain': this.plain,
      'disabled': this.disabled,
      'circle': this.circle,
    };
    this.classNameService.updateClassNames(this.el, classNames);
  }

  @Input()
  set yuType(type: YuColorType) {
    this.type = type;
    this.updateClassNames();
  }

  get yuType(): YuColorType {
    return this.type;
  }

  @Input()
  set yuSize(size: YuSizeType) {
    this.size = size;
    this.updateClassNames();
  }

  get yuSize(): YuSizeType {
    return this.size;
  }

  @Input()
  set yuPlain(isPlain: boolean) {
    this.plain = coerceBooleanProperty(isPlain);
    this.updateClassNames();
  }

  get yuPlain(): boolean {
    return this.plain;
  }

  @Input()
  set yuDisabled(isDisabled: boolean) {
    this.disabled = coerceBooleanProperty(isDisabled);
    this.updateClassNames();
  }

  get yuDisabled(): boolean {
    return this.disabled;
  }

  @Input()
  set yuCircle(isCircle: boolean) {
    this.circle = coerceBooleanProperty(isCircle);
    this.updateClassNames();
  }

  get yuCircle(): boolean {
    return this.circle;
  }

  ngOnInit() {
    this.updateClassNames();
  }
}
