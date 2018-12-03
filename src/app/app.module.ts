import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildAComponent } from './parent/child-a/child-a.component';
import { ParentComponent } from './parent/parent.component';
import { Menu2Component } from './menu2/menu2.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'menu',
    component: Menu2Component
  },
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ParentComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
