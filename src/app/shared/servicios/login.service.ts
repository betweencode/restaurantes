import {inject, Injectable} from '@angular/core';
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import {UserCredential} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private auth = inject(Auth);

  constructor() { }

  public login(usuario:string,password:string):Promise<UserCredential>{
   return signInWithEmailAndPassword(this.auth,usuario,password);
  }
}
