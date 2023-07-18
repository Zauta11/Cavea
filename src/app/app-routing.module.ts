import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventories',
    pathMatch: 'full'
  },
  {
    path: 'inventories',
    loadChildren: () => import ('./pages/inventory/inventory.module').then(m => m.InventoryModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
