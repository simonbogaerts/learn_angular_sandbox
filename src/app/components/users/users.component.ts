import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main St. ',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '21 Secondary St. ',
          city: 'Boston',
          state: 'MA'
        }
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 21,
        address: {
          street: '50 Main St. ',
          city: 'Boston',
          state: 'MA'
        }
      }
    ];

    this.loaded = true;

    //this.showExtended = false;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson'
      // age: 22,
      // address: {
      //   street: '60 Wake St. ',
      //   city: 'Boston',
      //   state: 'MA'
      // }
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
