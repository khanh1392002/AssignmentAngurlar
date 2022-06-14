import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/model/blog';
import { BlogServiecs } from 'src/app/serviecs/blog';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

}
