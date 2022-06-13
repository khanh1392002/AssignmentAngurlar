import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { AddPostComponent } from './layout/admin/add-post/add-post.component';
import { ListPostComponent } from './layout/admin/list-post/list-post.component';
import { ListUserComponent } from './layout/admin/list-user/list-user.component';
import { HomeComponent } from './layout/home/home.component';
import { WorksComponent } from './layout/works/works.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "blog", component: AboutComponent},
  {path: "works", component: WorksComponent},
  {path: "admin", children:[
    {path: "listUser", component: ListUserComponent},
    {path: "listPost", children:[
      {path: "", component: ListPostComponent},
      {path: "add", component: AddPostComponent},
      {path: "edit/:id", component: AddPostComponent}
    ]}
  ]}
  
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
