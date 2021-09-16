import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'View', component: ViewComponent },
  { path: 'Edit', component: EditComponent },
  { path: 'Add', component: AddComponent },
  { path: 'Retrieve', component: RetrieveComponent },
  { path:'editEmployee',component:EditComponent},
  { path: 'editEmployee/:emp', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
