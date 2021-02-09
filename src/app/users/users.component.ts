import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users = [
    { name: "name", email: "email", Status: "Status",Role : "role", CRDate: new Date(4, 14, 2000) },
    { name: "name1", email: "email1", Status: "Status1",Role : "role1", CRDate: new Date(4, 14, 2000) },
    { name: "name2", email: "email2", Status: "Status2",Role : "role2", CRDate: new Date(4, 14, 2000) },
    { name: "shahd", email: "shahd@gmail.com", Status: "V",Role : "R", CRDate: new Date(4, 14, 2000) }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
