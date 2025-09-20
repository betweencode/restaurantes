import {Component, OnInit} from '@angular/core';
import { Database, getDatabase,ref, set,onValue} from "firebase/database";
import {appfirebasenormal} from '../../../../app.component';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";




@Component({
  selector: 'app-normal',
  imports: [
    FormsModule,
    JsonPipe,
    NgClass
  ],
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.scss',
  standalone:true
})
export class NormalComponent implements OnInit {
  texto: string = "";
  private auth = getAuth();


  recuperado:any;

  database!: Database;


  email: any;
  password: any;
  isCollapsed: boolean = true;

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
  login() {
      console.log("Autenticacion con angular normal!!..")
    signInWithEmailAndPassword(this.auth,this.email,this.password).then(datos =>{
      console.log(datos);
    }).catch(error =>{
      console.error(error);
    })
  }

  logout() {
    signOut(this.auth).then(datos =>{
      console.log(datos);
    }).catch(error =>{console.error(error);});
  }
}
