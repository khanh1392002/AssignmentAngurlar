import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/post';
import { PostServiecs } from 'src/app/serviecs/post';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
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
  oneRemove(id: number){
    const confirm = window.confirm('Bạn có chắc xoá không ');
    if(confirm){
      this.postServiecs.removePost(id).subscribe(() => {
        this.postList = this.postList.filter(item => item.id !== id);
      })
    }
  }
}
