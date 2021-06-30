import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DesktopAppService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get('assets/json/test.json');
  }
}
