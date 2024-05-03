import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): void {
    const url = 'http://localhost:8085/api/login'; // Endpoint de votre API de connexion

    // Remplacez 'username' et 'password' par les champs réels de votre formulaire
    const body = {
      username: username,
      password: password
    };

    this.http.post(url, body).subscribe((response: any) => {
      // Gérer la réponse de l'API ici
      console.log(response);
    }, (error) => {
      // Gérer les erreurs ici
      console.error('Error:', error);
    });
  }

}
