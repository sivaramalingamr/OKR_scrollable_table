import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DesktopAppService {

  constructor(private http: HttpClient) { }
  srcURL = 'http://localhost:8000/';
  authToken = '';
  user$ = new BehaviorSubject(null);

  getRemainderList(): Observable<any> {
    return this.http.get(this.srcURL + 'users');
  }

  getProductsData(): Observable<any> {
    return this.http.get(this.srcURL + 'products');
  }

  getJsonData(): Observable<any> {
    return this.http.get('assets/json/test.json');
  }

  loginUser(loginFormObj: any): Observable<any> {
    return this.http.post(this.srcURL + 'authuser', loginFormObj)
  }

  addProduct(postValues: any): Observable<any> {
    return this.http.post(this.srcURL + 'addproduct', postValues);
  }

  addCategory(postValues: any): Observable<any> {
    return this.http.post(this.srcURL + 'addcategory', postValues);
  }

  setUserSession(userObj: any): void {
    this.user$.next(userObj);
  }

  setAuthToken(token: string): void {
    this.authToken = token;
  }
  getAuthToken(): string {
    return this.authToken;
  }
}
