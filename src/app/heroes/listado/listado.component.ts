import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  names:string[]= ['Pedro', 'Sara','Victoria','Bianca'];
  nombreBorrado:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarNombre(){
    this.nombreBorrado = this.names.shift() || '';
    console.log(this.nombreBorrado);
  //   this.names.pop(); BORRA EL ULTIMO ELEMENTO DEL ARRAY
  }

  
}
