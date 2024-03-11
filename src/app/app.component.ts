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
  
}
