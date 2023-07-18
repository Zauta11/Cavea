import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Item } from 'src/app/core/interfaces';
import { ApiService } from '../infrastructure/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver {

  constructor(private readonly api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Item | null> {

    const itemId = route.paramMap.get('id');

    return !itemId ? of(null) : this.api.getItem(+ itemId).pipe(
      catchError(() => throwError(() => new Error('Item Not Found')))
    )
  }
}
