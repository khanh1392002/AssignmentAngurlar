import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/model/post';
import { PostServiecs } from 'src/app/serviecs/post';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post : IPost = {
    title: "",
    image: "",
    createAt: "",
    categoryPostID: 0,
    short_desc: "",
    desc: ""
  }
  constructor(
    private postServiecs : PostServiecs,
    private router: Router,
    private route : ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.postServiecs.getPosts(id).subscribe(data => {
        this.post = data
      })
    }
  }

  onSubmit(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.postServiecs.updatePost(this.post).subscribe(data => {
        setTimeout(() => {
          this.router.navigateByUrl('/admin/listPost');
          alert("Update thành công")
        },1500)
      })
    }
    this.postServiecs.addPost(this.post).subscribe(data => {
      setTimeout(() => {
        this.router.navigateByUrl('/admin/listPost');
        alert("Thêm thành công")
      },1500)
    })
  }
}
