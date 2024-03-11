import { Component } from '@angular/core';

@Component({
  selector: 'app-bonbon',
  standalone: true,
  templateUrl: './bonbon.component.html',
  styleUrls: ['./bonbon.component.scss']
})
export class BonbonComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Bonbon';
    this.description = 'Commander les bonbons de votre enfance ';
    this.createdDate = new Date();
    this.snaps = 67659;
    this.imageUrl = 'https://www.miage.fr/wp-content/uploads/2021/01/MIAGE_LOGO_CMJN_TOULOUSE-scaled.jpg';
    this.buttonText = 'Click';
    
    
  }
  onSnap() {
    if (this.buttonText === 'Click') {
      this.snaps++;
      this.buttonText = 'Oops!';
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
