import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styles: [`:host {
    background-color: #0C1850;
    color: rgba(255, 255, 255, 0.87);
    display: block;
    height: 70px;
    padding: 0 16px;
  }

  h1 {
    display: inline;
    font-size: 30px;
    font-weight: normal;
    font-family: fantasy;
    letter-spacing: 0.3px;
    line-height: 60px;
  }

  .more {
    background: url("/assets/svg/more.svg");
    float: right;
    height: 24px;
    margin-top: 12px;
    width: 24px;
  }`]
})
export class ToolbarComponent {


}
