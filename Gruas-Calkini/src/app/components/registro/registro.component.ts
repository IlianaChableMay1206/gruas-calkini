import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'registrate';
   }
  ngOnInit(): void {

  }

}
