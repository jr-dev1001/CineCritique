import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface APIObject {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }
  getTopRatedMovies(page=1):Observable<APIObject>{
    return this.http.get<APIObject>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
  getMovieDetails(id: string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
