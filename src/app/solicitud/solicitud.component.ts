import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  users = ['Teresa', 'Maria', 'Diana', 'Marcela']
  constructor() { }

  ngOnInit(): void {
  }

}
