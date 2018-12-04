import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>Parent</h1>
    <p>
      Datenaustausch vom Parent zum Child:
    </p>
    <ul>
        <li>Parent ruft child mit Property Binding auf: <br /><code>&lt;app-child [childMessage]="messageFromParent"/&gt;</code></li>
        <li>messageFromParent wird in parent.component.ts gefüllt</li>
    </ul>

    <div class="columns">
      <div class="column col-5 bg-warning">
        <app-child-a class="flexelement" [childMessage]="messageFromParent"></app-child-a>
      </div>
    </div>
  `,
  styles: []
})
export class ParentComponent {

  private messageFromParent = "private Nachricht vom Parent";
  
  constructor() { }

}
