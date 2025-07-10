import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp, } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp({  apiKey: "AIzaSyCgUxqWodB1f68074BO1c0EgshsGMzwIio",
      authDomain: "restaurantes-6c8f7.firebaseapp.com",
      projectId: "restaurantes-6c8f7",
      storageBucket: "restaurantes-6c8f7.firebasestorage.app",
      messagingSenderId: "993378028211",
      appId: "1:993378028211:web:4fb6db6db63c30bd327ec6"})),

    //Implementación con realdatabase...
    provideDatabase(() => getDatabase()),
  ]
};
