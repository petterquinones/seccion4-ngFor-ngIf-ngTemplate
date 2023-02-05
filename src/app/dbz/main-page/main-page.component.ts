import { Component } from '@angular/core';

import { Personaje } from './../interface/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {


  nuevo: Personaje = {
    nombre: "Valor por defecto",
    edad: 0,
    salario: 0
  }

  // addNewPersonaje(argumento:Personaje) {
  //   console.log(argumento); 
  // }

  //Mediante un getter estoy obteniendo información del servicio.
  //De esta forma estoy captando la información o data que se esta manipulando desde el servicio.
  // get personas():Personaje []{
  //   return this.dbzService.personas;
  // }

  constructor(){
    
  }

}
