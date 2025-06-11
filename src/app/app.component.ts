import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TailwindTestComponent} from './tailwind-test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TailwindTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurante';
}
