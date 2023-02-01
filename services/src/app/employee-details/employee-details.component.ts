import { Component } from '@angular/core';

@Component({
  selector: 'employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  public employees = [
    { id: 1, name: 'Andrew', age: 30 },
    { id: 2, name: 'Brandan', age: 25 },
    { id: 3, name: 'Ramesh', age: 18 },
    { id: 4, name: 'Suresh', age: 20 },
  ];
}
