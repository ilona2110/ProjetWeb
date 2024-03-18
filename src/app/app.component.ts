import { Component, TemplateRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonbonComponent } from './bonbon/bonbon.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BonbonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private modalService = inject(NgbModal);
  closeResult = '';
  projectName: string = '';
  projectDescription: string = '';
  membersCount: number = 0;

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


open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}
  private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
  
  
  
}
