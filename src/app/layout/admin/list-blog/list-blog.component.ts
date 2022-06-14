import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/blog';
import { BlogServiecs } from 'src/app/serviecs/blog';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  blogList!: IProject[];
  constructor(private blogServiecs: BlogServiecs) { }

  ngOnInit(): void {
    this.show();
  }

  show(){
    this.blogServiecs.getProject().subscribe(data => {
      this.blogList = data
    })
  }
  oneRemove(id: number){
    const confirm = window.confirm('Bạn có chắc xoá không ');
    if(confirm){
      this.blogServiecs.removeProject(id).subscribe(() => {
        this.blogList = this.blogList.filter(item => item.id !== id);
      })
    }
  }
}
