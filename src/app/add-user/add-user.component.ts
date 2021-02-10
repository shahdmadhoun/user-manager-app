import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../add/user.service';    // CRUD services API
// import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users = [{Name: '', Email: ''}];

    userInfo = this.fb.group({
    Name : new FormControl('', [Validators.required]),
    Email : new FormControl('', [Validators.required, Validators.email]),
    Role: new FormControl('', [Validators.required]),
    Status: new FormControl('', [Validators.required]),
    CRDate: new FormControl(new Date().toDateString()),
    photo: new FormControl('', [Validators.required]),
  });
constructor(private fb: FormBuilder, public userApi: UserService) { }

  ngOnInit(): void {
    this.userApi.GetUsersList();
  }

  get f() { return this.userInfo.controls; }


// Accessing form control using getters
get name() {
  return this.userInfo.get('Name');
}

get email() {
  return this.userInfo.get('Email');
}  

get role() {
  return this.userInfo.get('Role');
}

get status() {
  return this.userInfo.get('Status');
}

get crDate() {
  return this.userInfo.get('CRDate');
}

get photo() {
  return this.userInfo.get('photo');
}

// Reset student form's values
ResetForm() {
  this.userInfo.reset();
}  

onSubmit() {
  this.userApi.AddUser(this.userInfo.value); // Submit student data using CRUD API
  this.ResetForm();
  }


}
