import {Component, inject} from '@angular/core';
import {JsonPipe, NgClass} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Database, onValue, ref, set } from '@angular/fire/database';
import { Auth,signInWithEmailAndPassword,signOut } from '@angular/fire/auth';




@Component({
  selector: 'app-conangularfire',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './conangularfire.component.html',
  styleUrl: './conangularfire.component.scss'
})
export class ConangularfireComponent {

  private auth = inject(Auth);


  texto: string = "";


  recuperado:any;

  private database = inject(Database);
  email: any;
  password: any;
  isCollapsed: boolean = true;




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

  login() {
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
