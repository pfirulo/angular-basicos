import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {
nombre:string = 'Ironman';
edad: number = 45;

get nombreCapitalizado(): string  {
  return this.nombre.toUpperCase();
}


obtenerNombre(): string{
  return `

  ${this.nombre}-${this.edad}
  `;
}
  

cambiarNombre(): string{
  return this.nombre ='Spiderman';
}
cambiarEdad(): number{
  return this.edad = 25;
}
}


