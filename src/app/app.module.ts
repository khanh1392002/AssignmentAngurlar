import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { WorksComponent } from './layout/works/works.component';
import { AboutComponent } from './layout/about/about.component';
import { WorksDetailComponent } from './layout/works-detail/works-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeAdminComponent } from './layout/admin/home-admin/home-admin.component';
import { ListUserComponent } from './layout/admin/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ListPostComponent } from './layout/admin/list-post/list-post.component';
import { AddPostComponent } from './layout/admin/add-post/add-post.component';
import { ListBlogComponent } from './layout/admin/list-blog/list-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent,
    WorksDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeAdminComponent,
    ListUserComponent,
    ListPostComponent,
    AddPostComponent,
    ListBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
