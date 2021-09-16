import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employees/employee.model';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp:any;
  constructor(private route:ActivatedRoute, private empservice:EmployeeService) { }
  editedemployee:Employee=new Employee();
  status:string="Changes yet to be applied";
  ngOnInit(): void {
    this.emp=this.route.snapshot.paramMap.get("emp");
    this.empservice.getEmployee(this.emp).subscribe(editedemployee=>{
      this.editedemployee=editedemployee;
    });
  }

  onclicksubmit(result:Employee){
    if(!result.id){
      result.id=this.editedemployee.id;
    }
    if(!result.name){
      result.name=this.editedemployee.name;
    }
    if(!result.location){
      result.location=this.editedemployee.location;
    }
    if(!result.email){
      result.email=this.editedemployee.email;
    }
    if(!result.mobile){
      result.mobile=this.editedemployee.mobile;
    }
    const editemp={
      id:result.id,
      name: result.name,
      location: result.location,
      email: result.email,
      mobile: result.mobile
    }
    this.empservice.editEmployee(editemp).subscribe();
    this.status="Changes applied!"

  }

}
