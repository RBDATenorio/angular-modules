import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'Ricardo', age: 30, job: 'Web Dev', employeed: true},
    { name: 'Indi', age: 26, job: 'Analyst', employeed: true },
    { name: 'Arjuna', age: 24, job: 'Musician', employeed: false },
    { name: 'José', age: 45, job: 'Teacher', employeed: true }
  ];

  header = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
