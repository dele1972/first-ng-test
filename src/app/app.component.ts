import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="columns">
        <div class="column col-10 col-mx-auto">
          <h1 class="bg-dark">keep-it-simple: in Angular</h1>
          <div class="columns">
            <div class="column col-12 bg-secondary">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      </div>
    </div>  
  `,
  styleUrls: []
})
export class AppComponent { }
