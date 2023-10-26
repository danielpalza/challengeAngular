import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericFormComponent } from './components/generic-form/generic-form.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

const routes: Routes = [
  { path: 'form', component: GenericFormComponent },
  { path: 'table', component: GenericTableComponent },
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: '**', redirectTo: '/form', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
