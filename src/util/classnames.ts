import { Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class ClassNameService {

  constructor(private renderer: Renderer2) {
  }

  private classNames = {};

   static removeClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        renderer.removeClass(el, i);
      }
    }
  }

   static addClass(el: HTMLElement, classMap: object, renderer: Renderer2): void {
    for (const i in classMap) {
      if (classMap.hasOwnProperty(i)) {
        if (classMap[ i ]) {
          renderer.addClass(el, i);
        }
      }
    }
  }

  updateClassNames(el: HTMLElement, classNames: object): void {
    ClassNameService.removeClass(el, this.classNames, this.renderer);
    this.classNames = { ...classNames };
    ClassNameService.addClass(el, this.classNames, this.renderer);
  }
}
