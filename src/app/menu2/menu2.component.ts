import { Component, OnInit } from '@angular/core';

import Sample from '../../assets/sample.json';

@Component({
  selector: 'app-menu2',
  template: `
  <h1>Menu 2 - sharing data</h1>

  
  <ul *ngFor="let item of items; let i=index">
  <li><a href="./{{items[i].component}}">{{items[i].title}}</a></li>
  </ul>
  `
})
export class Menu2Component {

public items = Sample.main[0].issues;  
 }
