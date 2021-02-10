import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

// import { threadId } from 'worker_threads';

export interface user {
  $key: string;
  'Name': string;
  'Email': string
  'Role': string;
  'Status': string;
  'CRDate': string;
  'photo': string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too
  constructor(private db: AngularFireDatabase) { }

  AddUser(user: user) {
    console.log(user);
    this.userRef.push({
      Name: user.Name,
      Email: user.Email,
      Role: user.Role,
      Status: user.Status,
      CRDate: user.CRDate,
      photo: user.photo
    })
  }
  
  // Fetch Single Student Object
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Fetch Students List
  GetStudentsList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  } 
    // Update Student Object
    UpdateStudent(user: user) {
      this.userRef.update({
        Name: user.Name,
        Email: user.Email,
        Role: user.Role,
        Status: user.Status,
        CRDate: user.CRDate,
        photo: user.photo
      })
    } 
      // Delete Student Object
  DeleteStudent(id: string) { 
    this.userRef = this.db.object('users-list/'+id);
    this.userRef.remove();
  }

  
}
