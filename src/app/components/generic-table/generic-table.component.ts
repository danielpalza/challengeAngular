import { Component } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent,FilteringStrategy } from 'igniteui-angular';
import {data } from './data';
@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {
   data:any=[]

  constructor() {
    this.data=data
  }

    public getRecordsData() {
      return this.data;
    }
}
