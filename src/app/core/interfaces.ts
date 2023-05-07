import { FormControl } from "@angular/forms";

export interface AuthForm {
    location: FormControl<string>;
    name: FormControl<string>;
    price: FormControl<string>;
  }
  
  export interface Item {
    id: number;
    name: string;
    price: string;
    location: string;
  }
