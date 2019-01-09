import {Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ClassNameService} from '../../util/classnames';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {YuColorType, YuSizeType} from '../../util/type';

@Component({
  selector: '[yu-radio]',
  providers: [ ClassNameService ],
  template: `
    <span class="radio"><input type="radio"></span>
    <span><ng-content></ng-content></span>
`,
})
export class RadioComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private classNameService: ClassNameService
  ) {}

  readonly el: HTMLElement = this.elementRef.nativeElement;
  private checked: boolean;
  private disabled: boolean;
  @Input() yuValue: any;

  @Input()
  set yuChecked(isChecked: boolean) {
    this.checked = coerceBooleanProperty(isChecked);
    this.updateClassNames();
  }

  get yuChecked(): boolean {
    return this.checked;
  }

  @Input()
  set yuDisabled(isDisabled: boolean) {
    this.disabled = coerceBooleanProperty(isDisabled);
    this.updateClassNames();
  }

  get yuDisabled(): boolean {
    return this.disabled;
  }

  private updateClassNames(): void {
    const classNames = {
      'yu-radio': true,
      'checked': this.checked,
      'disabled': this.disabled,
    };
    this.classNameService.updateClassNames(this.el, classNames);
  }

  ngOnInit() {
    this.updateClassNames();
  }
}
