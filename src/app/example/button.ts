import {Component} from '@angular/core';

@Component({
  selector: 'yu-button-example',
  template: `
  <div class="web-container">
    <h4 class="web-title">按钮</h4>
    <button yu-button>button</button>

    <h4 class="web-title">按钮颜色</h4>
    <button yu-button yuType="primary">primary</button>
    <button yu-button yuType="success">success</button>
    <button yu-button yuType="warning">warning</button>
    <button yu-button yuType="danger">danger</button>
    <button yu-button yuType="info">info</button>


    <h4 class="web-title">扁平按钮</h4>
    <button yu-button yuType="primary" yuPlain>primary</button>
    <button yu-button yuType="success" yuPlain>success</button>
    <button yu-button yuType="warning" yuPlain>warning</button>
    <button yu-button yuType="danger" yuPlain>danger</button>
    <button yu-button yuType="info" yuPlain>info</button>

    <h4 class="web-title">禁用按钮</h4>
    <button yu-button yuDisabled>primary</button>
    <button yu-button yuDisabled>success</button>
    <button yu-button yuDisabled>warning</button>
    <button yu-button yuDisabled>danger</button>
    <button yu-button yuDisabled>info</button>

    <h4 class="web-title">不同尺寸</h4>
    <button yu-button yuSize="large">large</button>
    <button yu-button>default</button>
    <button yu-button yuSize="small">small</button>

    <h4 class="web-title">圆形按钮</h4>
    <button yu-button yuCircle>圆</button>

    <h4 class="web-title">按钮组</h4>
    <yu-button-group>
        <button yu-button>item</button>
        <button yu-button>item</button>
        <button yu-button>item</button>
    </yu-button-group>
      <yu-button-group>
        <button yu-button yuType="primary">item</button>
        <button yu-button yuType="primary">item</button>
        <button yu-button yuType="primary">item</button>
    </yu-button-group>
      <yu-button-group>
        <button yu-button yuType="primary" yuPlain>item</button>
        <button yu-button yuType="primary" yuPlain>item</button>
        <button yu-button yuType="primary" yuPlain>item</button>
    </yu-button-group>
    <yu-button-group>
        <button yu-button>item</button>
        <button yu-button yuType="primary">item</button>
        <button yu-button yuType="primary" yuPlain>item</button>
    </yu-button-group>

    <h4 class="web-title">图标</h4>
    <button yu-button><i class="iconfont icon-trash"></i> Delete</button>
    <button yu-button><i class="iconfont icon-location"></i> Location</button>

    <h4 class="web-title">深色背景效果</h4>
    <div class="web-dark-background">
        <button yu-button>primary</button>
        <button yu-button yuType="primary">primary</button>
        <button yu-button yuType="primary" yuPlain>primary</button>
    </div>
</div>
  `,
})
export class ButtonExampleComponent {
}
