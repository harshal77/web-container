import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Header Web Component';
  clickCount = 0;

  /**
   * @param event: any
   * @description Count the number of clicks of header web component.
   */
  setHeaderClick(event: any) {
    this.clickCount = event.detail;
  }

  /**
   * @param event: any
   * @description Set the header title.
   */
  setHeaderTitle(event: any) {
    event.target.value ? this.title = event.target.value : this.title = 'Header Web Component';
  }
}
