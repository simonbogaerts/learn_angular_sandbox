import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    hide: false
  };
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    //this.showExtended = false;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.service.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    // console.log('button clicked');
    console.log(e.type);
    console.log(e.target.value);
  }
}
