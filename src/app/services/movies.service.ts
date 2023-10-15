import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResultMovies } from '../models/api-result-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies(type,category,page = 1): Observable<ApiResultMovies> {
    let httpParams = new HttpParams()
      .set('api_key',environment.apiKey)
      .set("page",page);
    //this.http.get<ApiResult>(`${environment.baseUrl}/popular?api_key=${environment.apiKey}&page=${page}`);
    return this.http.get<ApiResultMovies>(`${environment.baseUrl}/${type}/${category}`,{ params: httpParams });
  }


  search(querySearch:string,type,page = 1): Observable<ApiResultMovies> {
    //querySearch = querySearch.replace(/ /g, '+');
  
    let httpParams = new HttpParams()
    .set('api_key',environment.apiKey)
    .set('query',querySearch)
    //.set("page",page);
   // return this.http.get<ApiResultMovies>(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${environment.apiKey}`);
    
    return this.http.get<ApiResultMovies>(`${environment.baseUrl}/search/${type}`,{ params: httpParams });
  }
  getMovieDetails(type,id: string) {
    let httpParams = new HttpParams()
      .set('api_key',environment.apiKey)
    return this.http.get(`${environment.baseUrl}/${type}/${id}`,{ params: httpParams });
  }
  
}
