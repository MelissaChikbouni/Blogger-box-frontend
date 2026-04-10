import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
// Les chemins qu'on trouve dans la bare navigation par exemple /exemple ...
const routes: Routes = [
  { path: '', component: PostList }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
