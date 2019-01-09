import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yu-angular-ui';
  active = 'radio';
  setActive(componentName: string) {
    this.active = componentName;
  }
}
