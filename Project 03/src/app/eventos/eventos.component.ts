import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos = {
    name:'PHP Conference', date: '6/30/2020', time: '10am', location: {address: 'UniBH ', city: 'Belo Horizonte', country: 'Brasil'}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
