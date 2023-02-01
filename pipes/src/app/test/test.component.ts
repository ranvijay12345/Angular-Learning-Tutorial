import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
     <h2>{{name}}</h2>
      <h2> {{ name | lowercase }}</h2>
     <h2>{{ name | uppercase }}</h2>
     <h2>{{ name | uppercase }}</h2>
     <h2>{{ number | currency }}</h2>
     <h2>{{ massage | titlecase }}</h2>
     <h2>{{ massage | slice: 3 }}</h2>
     <h2>{{ massage | slice:3:8 }}</h2>
     <h2>{{ person | json }}</h2>

     <h2>{{ 5.456 | number: '1.2-3' }}</h2>
     <h2>{{ 5.456 | number: '2.4-5' }}</h2>
     <h2>{{ 5.456 | number: '3.1-2' }}</h2>
     <h2>{{ 5.456 | number: '3.1-1' }}</h2>

     <h2>{{ 5.456 | currency }}</h2>
     <h2>{{ 5.456 | currency: 'INR' }}</h2>
     <h2>{{ 5.456 | currency: 'INR': 'code' }}</h2>
     
     <h2>{{ date }}</h2>
     <h2>{{ date | date: 'short' }}</h2>
     <h2>{{ date | date: 'shortDate' }}</h2>
     <h2>{{ date | date: 'shortTime' }}</h2>


  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = "Good";
  public massage = "Welcome to hello world!";
  public number = 2023;

  public person = {
    "firstNmae": "John",
    "lastName": "Deo"
  }

  public date = new Date();
}
