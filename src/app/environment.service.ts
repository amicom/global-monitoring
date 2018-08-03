import { Injectable } from '@angular/core';
import { SERVERS } from './mock-servers';
import { Server } from './server';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  getServers(): Server[] {
    return SERVERS;
  }

}
