import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://192.168.1.97:8000'
  constructor(private http: HttpClient ) { }

  public getById(id: number): Observable<any> {
    return this.http.get(UserService.URL + `/user/show/${id}`);
  }
}
