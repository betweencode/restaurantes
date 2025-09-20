import {Component, inject, OnInit} from '@angular/core';
import { Database, getDatabase,ref, set,onValue} from "firebase/database";
import {appfirebasenormal} from '../../../../app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';
import { getAuth, signInWithCustomToken,signOut } from "firebase/auth";
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-custom-token-backend',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    FormsModule,
    NgClass,

  ],
  templateUrl: './custom-token-backend.component.html',
  styleUrl: './custom-token-backend.component.scss'
})
export class CustomTokenBackendComponent {
  texto: string = "";
  private auth = getAuth();

  private httpclient:HttpClient = inject(HttpClient);


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
    const json = JSON.stringify({
      "username":this.email,
      "password":this.password
    });
      this.httpclient.post('http://localhost:8080/login',json,{headers: {'Content-Type': 'application/json'}}).subscribe((data:any) =>{
        console.log(data);
        const jwttokefirebase:string = data["tokenfirebase"];
        if(jwttokefirebase){
            signInWithCustomToken(this.auth,jwttokefirebase).then(datos =>{
              console.log("Nos autenticamos desde el custom token de firebase!!..",datos);
            }).catch(error =>{
              console.error(error);
            }
            )
        }

      },error =>{
        console.error("Esto es un error ",error);
      })
  }

  logout() {
    signOut(this.auth).then(datos =>{
      console.log(datos);
    }).catch(error =>{console.error(error);});
  }
}
