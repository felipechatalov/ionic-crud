import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { paginationParams, Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  getUsers = (url: string, params?: paginationParams):Observable<Users>=>{
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
}
