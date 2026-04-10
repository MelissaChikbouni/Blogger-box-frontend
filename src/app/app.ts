import { Component, signal } from '@angular/core';
// composant principal qui va contenir les composants qu'on crée
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogger-box-frontend');
}
