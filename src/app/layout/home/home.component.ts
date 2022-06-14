import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/blog';
import { IPost } from 'src/app/model/post';
import { IUser } from 'src/app/model/user';
import { BlogServiecs } from 'src/app/serviecs/blog';
import { PostServiecs } from 'src/app/serviecs/post';
import { UserServiecs } from 'src/app/serviecs/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList!: IUser[];
  postList!: IPost[];
  blogList!: IProject[];
  constructor(private userServiecs : UserServiecs,
              private postServiecs : PostServiecs,
              private blogServiecs : BlogServiecs
    ) { }

  ngOnInit(): void {
    this.showUsers();
    this.showPost();
    this.showBlog();
  }

  showUsers(){
    this.userServiecs.getUser().subscribe(data => {
      this.userList = data
    })
  }

  showPost(){
    this.postServiecs.getPost().subscribe(dataPost => {
      this.postList = dataPost
    })
  }

  showBlog(){
    this.blogServiecs.getProject().subscribe(dataBlog => {
      this.blogList = dataBlog
    })
  }
}
