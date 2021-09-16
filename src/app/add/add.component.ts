import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';
import { Employee } from '../employees/employee.model';
import { EmployeeService } from '../employees/employee.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
  
})
export class AddComponent implements OnInit {

  constructor(private empservice:EmployeeService) { }
  employeestatus:string="Enter details of the new Employee";
  n:any;
  emptemp:any={id:"",name:"",location:"",email:"",mobile:""};
  onclicksubmit(result:Employee){
    
    const newemp={
      id:result.id,
      name: result.name,
      location: result.location,
      email: result.email,
      mobile: result.mobile
      
    }
    this.empservice
      .createEmployee(newemp)
      .subscribe(data=>{
        console.log(data);
      });
      
    this.employeestatus = 'Employee added!';
    
  }
  ngOnInit(): void {
  }

}
