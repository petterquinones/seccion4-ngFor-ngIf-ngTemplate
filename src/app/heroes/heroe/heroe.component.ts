import { Component } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{

    name:string = 'Ironman';
    age:number = 45;

    getName():string{
        return `${this.name} - ${this.age}`;
    }

    get nameCapital():string{
        // convertir en mayuscula
        return this.name.toUpperCase();
    }

    changeName():void{
        this.name = 'Spiderman';

    }

    changeAge():void{
        this.age = 26;
    }

}