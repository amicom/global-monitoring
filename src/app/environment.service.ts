import { Injectable } from '@angular/core';
import { SERVERS } from './mock-servers';
import { Server } from './server';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private serversURL = 'http://10.67.96.56/allscR.aspx';

  constructor(
    private http: HttpClient) { }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(this.serversURL);

  }

}
