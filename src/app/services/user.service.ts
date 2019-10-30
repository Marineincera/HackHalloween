import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static URL = 'http://192.168.1.97:8000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(UserService.URL + '/user/all');
  }

  getPhotoById(id: number): Observable<any> {
    return this.http.get(UserService.URL + `/user/show/${id}`);
  }
  create(post): Observable<any> {
    return this.http.put(UserService.URL + '/user/add', JSON.stringify(post));
  }
}
