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
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main St. ',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('01/02/2020 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '21 Secondary St. ',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('11/02/2010 08:30:00')
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 21,
        address: {
          street: '50 Main St. ',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2019 08:30:00')
      }
    ];

    this.loaded = true;

    //this.showExtended = false;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
