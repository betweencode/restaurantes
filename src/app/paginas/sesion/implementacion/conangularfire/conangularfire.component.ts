import {Component, inject} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Database, onValue, ref, set } from '@angular/fire/database';



@Component({
  selector: 'app-conangularfire',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './conangularfire.component.html',
  styleUrl: './conangularfire.component.scss'
})
export class ConangularfireComponent {
  texto: string = "";


  recuperado:any;

  private database = inject(Database);




  ngOnInit(): void {

    //Ya no es necesario hacer esto como en la implementacion normal
    //this.database = getDatabase(appfirebasenormal);


  }


  public guardar(){

    set(ref(this.database, 'mirutaangularfire/'), {
      mitextoangularfire: this.texto
    });

  }

  consultar() {
    const starCountRef = ref(this.database, 'mirutaangularfire/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      this.recuperado = data;
    });
  }
}
