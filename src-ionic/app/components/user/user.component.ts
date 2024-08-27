import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
})
export class UserComponent{
  @Input() user!: User;
}
