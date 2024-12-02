import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Museum } from '../model/museum';
import { Observable } from 'rxjs';
import { Theme } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl = 'http://localhost:3000/museums';

  constructor(private http: HttpClient) { }

  getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>(this.apiUrl);
  }

  getMuseumsByInfos(theme: Theme, country: string): Observable<Museum[]> {
    const url = `${this.apiUrl}?theme=${theme}&country=${country}`;
    return this.http.get<Museum[]>(url);
  }

  addMuseum(museum: Museum): Observable<Museum> {
    return this.http.post<Museum>(this.apiUrl, museum);
  }
}