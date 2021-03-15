import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Superman', 'Batman'];
  heroeBorrado: string = '';



  borrarHeroe() {
    // if (this.heroes.length > -1) {
    // //this.heroes.splice(this.heroes.length-1, 1);
    // }
    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || '';

  }



}
