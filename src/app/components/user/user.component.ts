import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // properties
  user: User;

  // methods
  constructor() {}

  ngOnInit(): void {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: 'Main St. ',
        city: 'Boston',
        state: 'MA'
      }
    };
  }
}
