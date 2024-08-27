import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Options, Users, User } from 'src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private apiService: ApiService) { }

  getAllUsers = (url: string): Observable<Users>=>{
    return this.apiService.get(url, {
      responseType: 'json',
    })
  }
}
