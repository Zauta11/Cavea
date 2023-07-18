import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { InventoryComponent } from './inventory.component';
import { ItemResolver } from './resolvers/item.resolver';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent
  },
  {
    path: 'add',
    component: AddItemComponent
  },
  {
    path: ':id',
    resolve: {item: ItemResolver},
    component: EditItemComponent
  },
  {
    path: '**',
    component: InventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
