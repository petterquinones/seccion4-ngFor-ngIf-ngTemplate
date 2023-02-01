import {Component} from '@angular/core'

@Component({
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h3> La base es: <strong>{{base}}</strong></h3>
    <button (click)="sumar(base)"> + {{base}} </button>
    <span>{{numero}}</span>
    <button (click)="restar(-base)" > - {{base}} </button>
    `  
    })

export class ContadorComponent{
    title = 'Contador';
    numero:number = 0;
    base: number = 8;
  
    sumar(valor: number){
      this.numero += valor;
      console.log("Sumando.");
    }
  
    restar(valor:number){
      this.numero -= valor;
      console.log("Restando");
    }

}