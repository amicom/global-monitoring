import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {


  constructor(private name: string, private ip: string, private status: string, private numOfUsers: number) { }

  ngOnInit() {
  }

}
