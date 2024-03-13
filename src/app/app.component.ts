import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonbonComponent } from './bonbon/bonbon.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BonbonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  openPopup() {
    // Ouvrir la boîte de dialogue modale Bootstrap
    const modalElement = document.getElementById('createProjectModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }

    // Mettre le focus sur un élément spécifique dans le modal
    const inputElement = document.getElementById('myInput');
    if (inputElement) {
      inputElement.focus();
    }
  }


  
  
  
}
