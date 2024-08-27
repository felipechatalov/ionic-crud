import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Users, User } from 'src/types';
import { UsersServiceService } from 'src/app/services/usersService/users-service.service';
import { UserComponent } from 'src/app/components/user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UserComponent]
})
export class UsersPage{

  constructor(
    private UsersService: UsersServiceService
  ) { }

  users: User[]= [];
  noUsers:number = 0;
  fetchAllUsers(){
    this.UsersService
    .getAllUsers("http://localhost:3000/users")
    .subscribe((users: Users)=>
    {
      console.log(users);
      this.users = users.users;
      this.noUsers = users.numberOfUsers;
    });
  };
  
  ngOnInit() {
    this.fetchAllUsers();
  }



}
