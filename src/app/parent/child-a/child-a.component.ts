import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-a',
  template: `
    <h3>Child A</h3>
    <p>
      {{thisIsPublic}}<br />
      {{childMessage}}
    </p>
    <ul>
        <li>
          Eine <a href="https://angular.io/guide/template-syntax#input-and-output-properties">Input Property</a> 
          wird mit dem <code>@Input</code> Dekorator erstellt: <code>@Input() childMessage: string;</code>
        </li>
        <li>
          Damit wird eine Eigenschaft der Kompenente hinzugefügt, welche das Parent durch Property Binding binden kann.
        </li>
        <li>
          Im Child kann der Propertyname quasi als Variable weiter benutzt werden - z. B. um per String Interpolation den 
          Wert im Child-Template auszugeben: <code>{{childMessage}}</code>
        </li>
    </ul>
  `,
  styles: []
})
export class ChildAComponent implements OnInit {

  public thisIsPublic: string;

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
    this.thisIsPublic = "Dies ist ein Child";
  }

}
