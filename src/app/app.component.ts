import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllUsersComponent } from './CRUD/Pages/all-users/all-users.component';
import { CreateUserComponent } from './CRUD/Pages/create-user/create-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllUsersComponent, CreateUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
