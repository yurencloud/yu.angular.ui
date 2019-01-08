import {Injectable, Renderer2} from '@angular/core';

export class ClassList {
  private classList: string[];

  constructor(initClassList: string[]) {
    this.classList = initClassList;
  }

  add(className: string) {
    this.classList.push(className);
    return this;
  }

  render(el: HTMLElement, node: Renderer2) {
    this.classList.forEach((item) => {
      node.addClass(el, item);
    });
  }
}
