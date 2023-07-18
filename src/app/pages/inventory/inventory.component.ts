import { Target } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Item } from 'src/app/core/interfaces';
import { ApiService } from './infrastructure/api.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {
  
  title= "pagination";
  inventories: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  items? : Item[];

  locations: string[] = ["ყველა","მთავარი ოფისი", "კავეა გალერია", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი", "კავეა სითი მოლი"]

  priceDirections : string[] = ["ფასით სორტირება", "ფასი ზრდადობით", "ფასი კლებადობით"];
  totalNumber?: number;

  constructor(
    private readonly api: ApiService, 
    private readonly cdRef: ChangeDetectorRef,
    private readonly router: Router
    ) {
      this.initData()
  }


  initData(): void {
    this.api
      .getItems()
      .pipe(
        catchError(() => {
          alert('Error');

          return EMPTY;
        })
      )
      .subscribe((items: Item[]) => {
        this.items = items;
        this.inventories= items;
        this.totalNumber = this.inventories.length;
        this.cdRef.markForCheck();
      });
      
    }
    
    
    deleteItem(itemId: number): void {
      this.api
      .deleteItem(itemId)
      .pipe(
        catchError(() => {
          alert('Error');
          
          return EMPTY;
        })
        )
        .subscribe(() => {
          this.inventories = this.items?.filter(({ id }) => id !== itemId);
          alert('Item deleted successfully');
          this.totalNumber = this.inventories.length;
          this.cdRef.markForCheck();
        });
      }
      
      filterItem(itemLocation: any): void {
        const isAll = itemLocation.target.value === "ყველა";
        this.inventories = this.items?.filter(({ location }) => 
        isAll ? location : location === itemLocation.target.value
         )
        this.cdRef.markForCheck();
      }
      
      sortingByPrice(sortPrice : any): void  {
        this.api.getItems().subscribe((res: Item[]) => {
          const isUp = sortPrice.target.value === "ფასი ზრდადობით";
          const isDown = sortPrice.target.value === "ფასი კლებადობით";
            res.sort((a: { price: string }, b: { price: string }) => isUp ? a.price.localeCompare(b.price): isDown ? b.price.localeCompare(a.price): 0  )
            this.inventories = res;
            this.cdRef.markForCheck(); 
          });
          
        }
      
      onTableDataChange(event: number): void {
        this.page = event;
        this.cdRef.markForCheck();
      }


  trackByFn(index: number, item: Item): number {
    return item.id;
  }

  editInventory(itemId: number): void  {
    this.router.navigate(['inventories', itemId]);
 }
  
  addItem(): void {
      this.router.navigate(['/inventories/add']);
  }


}
