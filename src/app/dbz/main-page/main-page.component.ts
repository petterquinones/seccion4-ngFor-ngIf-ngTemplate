import { Component} from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  nuevo:Personaje ={
    nombre: "Personaje1",
    poder: 225
  }


  agregar(){
    console.log(this.nuevo)
    console.log("click Agregar")
  }

}
