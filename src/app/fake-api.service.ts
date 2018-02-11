import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class FakeApiService {

  constructor(private http: HttpClient) { }

  url="https://jsonplaceholder.typicode.com/users";

  getHeroes (): Observable<{}> {
  return this.http.get(this.url)
    .pipe(
      //catchError(this.handleError('getHeroes', []))
    );
}

}
