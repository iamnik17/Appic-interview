import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  @Input() myinputMsg: any;
  EmpData: any = []
  sort: any = [];
  key: any = [];
  Datavalue: any = [];

  constructor(private services: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.services.GetEmployee().subscribe((res: any) => {

      this.Datavalue = res.data
      this.EmpData = res.data;

      this.sort = this.EmpData.forEach((element: any) => {
        this.key = Object.keys(element)

        console.log(this.myinputMsg);

      });

    })


  }

  //Ascending Sort
  sortData() {
    const result1 = this.EmpData.sort((a: any, b: any) => parseFloat(a.employee_salary) - parseFloat(b.employee_salary));
  }
  // Descending Sort
  DescSort() {
    const result2 = this.EmpData.sort((a: any, b: any) => parseFloat(b.employee_salary) - parseFloat(a.employee_salary));
  }



}
