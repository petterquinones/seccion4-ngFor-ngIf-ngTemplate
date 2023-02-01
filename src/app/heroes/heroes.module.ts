import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[
        // se declara que cosas contiene este modulo, en especial los componentes.
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        // Que cosas del modulo deseo hacer publicas
        ListadoComponent
    ],
    imports:[
        //Van solo modulos
        CommonModule
    ]

})
export class HeroesModule{

}