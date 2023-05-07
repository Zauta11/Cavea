import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { AuthForm } from 'src/app/core/interfaces';
import { ApiService } from '../inventory/infrastructure/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AddItemComponent {
 
  locations: string[] = ["მთავარი ოფისი", "კავეა გალერია", "კავეა თბილისი მოლი", "კავეა ისთ ფოინთი", "კავეა სითი მოლი"]
  
  constructor(
    private readonly api: ApiService,
    private readonly router: Router) {}

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

  onSubmit(): void {
      this.api
      .addItem(this.form.value)
      .pipe(
        catchError(() => {
          alert('Error');

          return EMPTY;
        })
      )
      .subscribe(() => {
        alert("Item Added Successfully!");
        this.router.navigate(['/inventories']);
        
      })
  }
   
}
