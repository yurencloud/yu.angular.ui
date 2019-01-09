import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonComponent} from '../components/button/button.component';
import {ButtonExampleComponent} from './example/button';
import {ButtonGroupComponent} from '../components/button/button-group.component';
import {RadioComponent} from '../components/radio/radio.component';
import {RadioExampleComponent} from './example/radio';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonGroupComponent,
    ButtonExampleComponent,
    RadioComponent,
    RadioExampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
