import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TailwindTestComponent} from './tailwind-test.component';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgUxqWodB1f68074BO1c0EgshsGMzwIio",
  authDomain: "restaurantes-6c8f7.firebaseapp.com",
  projectId: "restaurantes-6c8f7",
  storageBucket: "restaurantes-6c8f7.firebasestorage.app",
  messagingSenderId: "993378028211",
  appId: "1:993378028211:web:4fb6db6db63c30bd327ec6"
};

export const appfirebasenormal = initializeApp(firebaseConfig);



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TailwindTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurante';
}
