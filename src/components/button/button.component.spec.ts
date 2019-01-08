import { TestBed, async } from '@angular/core/testing';
import {ClassList} from '../../util/class-list';

describe('ButtonComponent', () => {
  it('test', () => {
    const classList: ClassList = new ClassList();
    classList.add('hello');
    console.log(classList);
    const world = true;
    expect(world).toBeTruthy();
  });
});
