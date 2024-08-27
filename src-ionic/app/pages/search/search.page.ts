import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonFooter, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { User } from 'src/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonFooter, IonList, IonItem, IonButton]
})
export class SearchPage implements OnInit {

  constructor() { }

  getResponse: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  noMatch: boolean = false;
  searched: boolean = false;
  searchBtnClickFunction(){
    console.log("clickou para buscar");

    // caso ache
    this.getResponse = {
      firstName: "cleber",
      lastName: "antonio",
      email: "umemail@gmail",
      password: 'senhamtforte',
    }
    this.searched = true;

    // caso nao ache
    // this.noMatch = true;
  }

  ngOnInit() {
  }

}
