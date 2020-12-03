import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  title = 'Welcome to Angular 10'
  users = ['John', 'Ryan', 'Cameron', 'Arturo']

  constructor() { }

  ngOnInit(): void {
  }

}
