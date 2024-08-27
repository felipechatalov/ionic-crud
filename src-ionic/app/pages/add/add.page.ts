import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonList, IonButton } from '@ionic/angular/standalone';
import { UsersServiceService } from 'src/app/services/usersService/users-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonList, IonButton]
})
export class AddPage implements OnInit {

  constructor(
    private UsersService: UsersServiceService
  ) { }

  postResponse: string = "";

  registerBtnClickFunction(){
    console.log("send post request")
    this.postResponse = "Cadastro realizado"
  }

  ngOnInit() {
  }

}
