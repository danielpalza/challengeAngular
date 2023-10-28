import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../layout/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent {
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    telefono: new FormControl('', Validators.required),
    cuil: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
  });

  constructor(private modalService: NgbModal) { 

  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.formulario.reset();
      this.openModal();
    }
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Datos ingresados';

    modalRef.componentInstance.content = `<div>
    <p>Nombre: ${this.formulario.value.nombre}<br>
    Email: ${this.formulario.value.email}<br>
    Telefono: ${this.formulario.value.telefono}<br>
    Cuil: ${this.formulario.value.cuil}<br>
    Fecha de Nacimiento: ${this.formulario.value.fechaNacimiento}
    </p>
</div>`;

  }
}
