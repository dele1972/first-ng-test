import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu2Component } from './menu2/menu2.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: Menu2Component
  }
  ,
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
