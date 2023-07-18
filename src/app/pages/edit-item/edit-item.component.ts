import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthForm, Item } from 'src/app/core/interfaces';
import { ApiService } from '../inventory/infrastructure/api.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditItemComponent {

  locations: string[] = ["მთავარი ოფისი", "კავეა გალერია", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი", "კავეა სითი მოლი"]
  itemId: number = this.activatedRoute.snapshot.params["id"];
  item?: Item;


constructor(private readonly api: ApiService,
            private readonly activatedRoute: ActivatedRoute,
            private readonly router: Router 
  ) {

    this.api
    .getItem(this.itemId)
    .pipe(
      catchError(() => {
        alert("Error");
        return EMPTY
      })
    ).subscribe((res) => {
      this.item = res;

      this.form.setValue({
        location: this.item.location,
        name: this.item.name,
        price: this.item.price
      })  
    })
   
   
}


readonly form = new FormGroup<AuthForm>(
  {
    location: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    name: new FormControl<string>('', {
      nonNullable: true, 
      validators: [ Validators.required, Validators.pattern(/^[ა-ჰa-zA-Z\s]*$/) ]
    }),                       
    price: new FormControl<string>('', {
      nonNullable: true,
      validators: [ Validators.required, Validators.pattern(/^[0-9]*$/) ]
    })
  }
)

get locationControl(): AbstractControl {
  return this.form.controls.location;
}

get nameControl(): AbstractControl {
  return this.form.controls.name;
}

get priceControl(): AbstractControl {
  return this.form.controls.price;
}


editItem() {
 this.api
 .updateItem(this.itemId, this.form.value)
 .pipe(
  catchError(() => {
    alert('Error');

    return EMPTY;
  })
).subscribe((res) => {
  this.item = res
 });
 alert("Item Updated Successfully!")
 this.router.navigate(['inventories'])

  }




}
