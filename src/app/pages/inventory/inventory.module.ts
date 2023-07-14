import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { AddItemComponent } from '../add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditItemComponent } from '../edit-item/edit-item.component';


@NgModule({
  declarations: [
    InventoryComponent,
    AddItemComponent,
    EditItemComponent,

  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InventoryModule { }
