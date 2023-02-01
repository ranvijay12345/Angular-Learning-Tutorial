import { Component } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees" >
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public employees = [
    {"id":1, "name":"Andrew", "age":30},
    {"id":2, "name":"Brandan", "age":25},
    {"id":3, "name":"Ramesh", "age":18},
    {"id":4, "name":"Suresh", "age":20},
  ]


}
