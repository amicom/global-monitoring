import {Component, OnInit} from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { Server } from '../server';

@Component({
  selector: 'app-servers-environment',
  templateUrl: './servers-environment.component.html',
  styleUrls: ['./servers-environment.component.scss']
})
export class ServersEnvironmentComponent implements OnInit {

  servers: Server[];

  constructor(private environmentService: EnvironmentService) {
  }

  ngOnInit() {
    this.getServers();
  }

  getServers(): void {
    this.environmentService.getServers();
    // .subscribe((data: Config) => this.config = {
    //     heroesUrl: data['heroesUrl'],
    //     textfile:  data['textfile']
    // });
  }

}
