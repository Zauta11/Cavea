# CaveaProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

  გამომდინარე იქედან, რომ ვარ Front-end Developer და ორიენტირებული ვარ 
კონკრეტულად Angular-ის მიმართულებით განვითარებაზე, 
პროექტი შევასრულე Angular Framework-ისა და TypeScript-ის
საფუძველზე. სპეციფიკიდან გამომდინარე გამოყენებულია Bootstrap 5. 
დავალება შესრულდა რამდენიმე ე.წ. კომიტში:

first Commit: შეიქმნა პროექტი. გაიმართა როუტინგი (lazy loading) და პროექტის არქიტექტურა.

Add Inventory page logic: გაიმართა Inventory page, შესაბამისად
Bootstrap-ის გამოყენებით შეიქმნა ე.წ. Table-ცხრილი ადგილმდებარეობის (Select) ფილტრით, ასევე Pagination.
ინფორმაციის წამოსაღებად გადავწყვიტე შემექმნა db.json ფაილი ე.წ. Fake Json სერვერით (http://localhost:3000/posts)-ზე
ყველა საჭირო ენდფოინთით (GET, POST, DELETE).

Add Item page logic: მოწესრიგდა Add-item page ყველა საჭირო სპეციფიკაციის გათვალისწინებით. Bootstrap-ის გამოყენებით
შეიქმნა ე.წ. card, სადაც Reactive Forms დახმარებით ჩამოყალიბდა ინვენტარის დამატებისთვის საჭირო ლოგიკა, შესაბამისი ვალიდაციებით.
ინვენტარის დამატებისას ყველა სავალდებულო ველის სწორად შევსების შემდეგ "დამატება" ღილაკზე დაჭერით
მომხმარებელი ავტომატურად დაბრუნდება /inventories გვერდზე, სადაც სიის ბოლოს დახვდება მის მიერ დამატებული აითემი.
პარალელურად აითემის დამატება აღინიშნება ქვემოთ მოცემულ ველში "საერთო რაოდენობა".

Add Sorting: მოწესრიგდა სორტირებისა და ფილტრაციის ლოგიკები ე.წ. Select-ების დახმარებით, მომხმარებელს აქვს საშუალება სორტირების მიხედვით დაალაგოს ინვენტარი როგორც ფასის ისე ადგილმდებარეობის არჩევით.

მოცემული დავალება მუშაობს გამართულად. გამომდინარე იქედან, რომ ჩემთვის პრიორიტეტულია Angular Framework-ით მუშაობა,
მთელი შემართებით მსურს განვვითარდე ამ კონკრეტული მიმართულებით თქვენს კომპეტენტურ გუნდთან ერთად.





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
