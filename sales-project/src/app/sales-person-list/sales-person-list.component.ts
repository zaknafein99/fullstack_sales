import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

salesPersonList: SalesPerson[] = [
  new SalesPerson("Carlos", "Lopez", "carlos.lopez@code.com", 5000),
  new SalesPerson("John", "Doe", "John.Doe@code.com", 4000),
  new SalesPerson("Steven", "Chong", "steven.chong@code.com", 9000),
  new SalesPerson("Anton", "Phake", "anton.phake@code.com", 6000)
];


  constructor() { }

  ngOnInit(): void {
  }

}
