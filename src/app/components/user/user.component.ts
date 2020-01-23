import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };

  // methods
  constructor() {}

  showAge() {
    return this.age;
  }
}
