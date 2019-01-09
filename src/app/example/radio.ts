import {Component} from '@angular/core';

@Component({
  selector: 'yu-radio-example',
  template: `
  <div class="web-container">
    <h4 class="web-title">单选框</h4>
    <label yu-radio>苹果</label>

    <h4 class="web-title">激活</h4>
    <label yu-radio yuChecked>苹果</label>

    <h4 class="web-title">禁用</h4>
    <label yu-radio yuDisabled>苹果</label>
    <label yu-radio yuChecked yuDisabled>苹果</label>

    <!--<h4 class="web-title">激活</h4>-->
    <!--<label class="yu-radio checked">-->
        <!--<span class="radio"><input type="radio"></span>-->
        <!--<span>苹果</span>-->
    <!--</label>-->
    <!--<h4 class="web-title">禁用</h4>-->
    <!--<label class="yu-radio disabled">-->
        <!--<span class="radio"><input type="radio"></span>-->
        <!--<span>苹果</span>-->
    <!--</label>-->
    <!--<label class="yu-radio checked disabled">-->
        <!--<span class="radio"><input type="radio"></span>-->
        <!--<span>香蕉</span>-->
    <!--</label>-->

    <!--<h4 class="web-title">单选框组（水平）</h4>-->
    <!--<div class="yu-radio-group">-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>苹果</span>-->
        <!--</label>-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>香蕉</span>-->
        <!--</label>-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>桃子</span>-->
        <!--</label>-->
    <!--</div>-->

    <!--<h4 class="web-title">单选框组（垂直）</h4>-->
    <!--<div class="yu-radio-group vertical">-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>苹果</span>-->
        <!--</label>-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>香蕉</span>-->
        <!--</label>-->
        <!--<label class="yu-radio">-->
            <!--<span class="radio"><input type="radio"></span>-->
            <!--<span>桃子</span>-->
        <!--</label>-->
    <!--</div>-->


    <!--<h4 class="web-title">切换动态</h4>-->
    <!--<label id="yu-radio" class="yu-radio">-->
        <!--<span class="radio"><input type="radio"></span>-->
        <!--<span>苹果</span>-->
    <!--</label>-->
</div>
  `,
})
export class RadioExampleComponent {
}
