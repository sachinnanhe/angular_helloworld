import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  employee={
    name:"sachin",
    baseSalary:50000,
    joinedOn:Date.now(),
    Qualification:"B.E",
    valueOfPi:3.1415929,
    attendance:90/100,
    aboutEmployee:"An employee is a worker that performs specific tasks for a business in exchange for regular pay. Employees negotiate a salary with their employer and typically receive benefits, including overtime pay and vacation."

  }
  constructor() { }

  ngOnInit(): void {
  }

}
