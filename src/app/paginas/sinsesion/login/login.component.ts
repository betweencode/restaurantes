import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/servicios/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  public formGroup!:FormGroup;

  private fb:FormBuilder = inject(FormBuilder);

  private loginPrd:LoginService = inject(LoginService);


  ngOnInit(): void {
       this.formGroup = this.fb.group({
         usuario:['',Validators.required],
         password:['',Validators.required]
       })
  }


  login() {
    if(this.formGroup.invalid){

      Object.values(this.formGroup.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }

    this.loginPrd.login(this.formGroup.value.usuario,this.formGroup.value.password).then(datos =>{

      localStorage.setItem("usuario",JSON.stringify(datos.user));
      localStorage.setItem("providerId",''+datos.providerId);



    }).catch(error =>{
      alert("Error al logearse");
      console.error(error);
    })
  }


  public get f(){
    return this.formGroup.controls;
  }
}
