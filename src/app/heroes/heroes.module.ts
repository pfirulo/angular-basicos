import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from "./listado/ListadoComponent";
import { HeroeComponent } from './heroe/heroe.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],

  exports:[
    ListadoComponent
    
  ]
})
export class HeroesModule { }
