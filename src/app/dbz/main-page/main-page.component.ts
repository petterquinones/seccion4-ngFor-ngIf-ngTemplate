import { Component } from '@angular/core';

import { Personaje } from './../interface/Personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personas: Personaje[] = [
    {
      nombre: "Pedro",
      edad: 34,
      salario:8000000
    },
    {
      nombre: "Sara",
      edad: 29,
      salario: 8000000
    },
  ];


  nuevo: Personaje = {
    nombre: "",
    edad: 0,
    salario:0
  } 


  agregar() {
    //Si el nombre esta en blanco salte el metodo.
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personas.push(this.nuevo);
    //Limpiar el objeto para que aparezca vacio
    this.nuevo={
      nombre: "",
      edad: 0,
      salario:0
    }
  }

}
