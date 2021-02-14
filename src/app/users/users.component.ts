import { Component, OnInit } from '@angular/core';
import { user, UserService } from '../add/user.service';    // CRUD services API
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: user[];
  closeResult = '';

  constructor(private usersService:UserService){
    this.users = [];
  }

  ngOnInit(): void {
    this.usersService.GetUsersList().valueChanges().subscribe(data => {});
    let s = this.usersService.GetUsersList(); 
    s.snapshotChanges().subscribe(data => {
      this.users = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.users.push(a as user);
      })
    })
  }

  deleteUser(user: any) {
    if (window.confirm('Are sure you want to delete this student ?'))
      this.usersService.DeleteUser(user.$key) // Using Delete student API to delete student.
  }
}
