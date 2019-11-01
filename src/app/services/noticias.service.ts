import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  baseurl="http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient){ }

  getAllNotices(): Observable<any>{
    return this.http.get(this.baseurl + '/notice/', {headers:  this.httpHeaders})
  }

}
