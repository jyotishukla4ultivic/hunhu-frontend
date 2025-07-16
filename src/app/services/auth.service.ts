import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string; timezone: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
} 