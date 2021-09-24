import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home: string;
  constructor() {
    this.home = 'Inicio';
   }

  ngOnInit(): void {
  }

}
