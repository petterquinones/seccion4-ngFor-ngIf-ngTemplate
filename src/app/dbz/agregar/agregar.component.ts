import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/Personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {
  
  //Estoy importa
  @Input('nuevaPersona')
  nuevo: Personaje = {
    nombre: "",
    edad: 0,
    salario: 0
  }
  // @Output('onNuevoPersonaje') onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService:DbzService){

  }

  agregar() {
    //Si el nombre esta en blanco salte el metodo.
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonas(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    //Limpiar el objeto para que aparezca vacio
    this.nuevo = {
      nombre: "",
      edad: 0,
      salario: 0
    }
  }

}
