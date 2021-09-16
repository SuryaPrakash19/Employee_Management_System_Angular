import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { AddComponent } from './add/add.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilterPipe } from './searchfilter.pipe';
import { EditComponent } from './edit/edit.component';


// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    RetrieveComponent,
    AddComponent,
    SearchfilterPipe,
    EditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
    EmployeesModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
