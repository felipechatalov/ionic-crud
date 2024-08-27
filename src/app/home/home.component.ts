import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, Users } from '../../types';
import { UserComponent } from '../components/user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(
    private usersService: UsersService
  ) { }

  users: User[] = [];
  numberOfUsers: number = 0;

  fetchUsers(page: number, perPage: number){
    this.usersService
    .getUsers('http://localhost:3000/users')
    .subscribe((users: Users)=>{
      console.log(users)
      this.users = users.users;
      this.numberOfUsers = users.numberOfUsers;
    });
  }

  onPageChange(event: any){
    this.fetchUsers(event.page, event.rows);
  }

  ngOnInit(){
    this.fetchUsers(0, 0);
  }
}
