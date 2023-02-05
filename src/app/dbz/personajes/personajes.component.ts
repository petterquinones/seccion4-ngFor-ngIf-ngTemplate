import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent{

  
  // @Input('personasData') personas: any[] = [];
  
  get personas(){
    return this.dbzService.personas;
  }

  constructor(private dbzService: DbzService){}

}
