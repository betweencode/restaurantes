import {Component, OnInit} from '@angular/core';
import { Database, getDatabase,ref, set,onValue} from "firebase/database";
import {appfirebasenormal} from '../../../../app.component';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';


@Component({
  selector: 'app-normal',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.scss',
  standalone:true
})
export class NormalComponent implements OnInit {
  texto: string = "";


  recuperado:any;

  database!: Database;

    ngOnInit(): void {
      this.database = getDatabase(appfirebasenormal);

    }


    public guardar(){

      set(ref(this.database, 'miruta/'), {
        mitexto: this.texto
      });

    }

  consultar() {
    const starCountRef = ref(this.database, 'miruta/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      this.recuperado = data;
    });
  }
}
