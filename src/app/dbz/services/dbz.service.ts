import { Injectable } from "@angular/core";
import { Personaje } from '../interface/Personaje';


@Injectable()
export class DbzService {

   private _personas: Personaje[] = [
        {
            nombre: "Nombre1",
            edad: 34,
            salario:2000000
        },
        {
            nombre: "Nombre2",
            edad: 34,
            salario:2000000
        }
    ];

    //Este me retorna un arreglo de _personas de tipo Personaje.
    get personas():Personaje[]{
        return [...this._personas];// se escribe entre llaves pues de esta forma no se pasa la referencia.
    }

    constructor() {
        console.log("Servicio inicializado.");
    }

    agregarPersonas(persona:Personaje){
        this._personas.push(persona);
    }
}

//Los servición en angular se caracterizan porque tienen un decorador Injectable, este decorador le dice a angular, que esta es una clase que se va poder inyectar. y se podran usar sus propiedades en otras clases.