import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users = [ ];

    userInfo = this.fb.group({
    Name : new FormControl('', [Validators.required]),
    Email : new FormControl('', [Validators.required, Validators.email]),
    Role: new FormControl('', [Validators.required]),
    Status: new FormControl('', [Validators.required]),
    CRDate: new FormControl(new Date().toDateString()),
    photo: new FormControl('', [Validators.required]),
  });
constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f() { return this.userInfo.controls; }

onSubmit() {
  this.users.push(this.userInfo.value)
  console.log(this.users);
}

}
