import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { UserServiecs } from 'src/app/serviecs/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userList!: IUser[];
  constructor(private userServiecs : UserServiecs) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(){
    this.userServiecs.getUser().subscribe(data => {
      this.userList = data
    })
  }
  oneRemove(id: number){
    const confirm = window.confirm('Bạn có chắc muốn xoá');
    if(confirm){
      this.userServiecs.removeUser(id).subscribe(() => {
        this.userList = this.userList.filter(item => item.id !==id);
      })
    }
  }
}
