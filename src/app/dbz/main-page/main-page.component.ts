import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  edad: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personas: Personaje[] = [
    {
      nombre: "Pedro",
      edad: 34
    },
    {
      nombre: "Sara",
      edad: 29
    },

  ];

  nuevo: Personaje = {
    nombre: "",
    edad: 0
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
      edad: 0
    }
  }

}
