import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/post';
import { PostServiecs } from 'src/app/serviecs/post';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  postList!: IPost[];
  constructor(private postServiecs: PostServiecs) { }

  ngOnInit(): void {
    this.show();
  }
  show(){
    this.postServiecs.getPost().subscribe(data => {
      this.postList = data
    })
  }
  

}
