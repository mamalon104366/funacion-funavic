import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup; // ✅ TS ya no se queja
  submitted = false;
  enviando = false;
  mensajeExito = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getter para acceder fácil a los controles
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    this.enviando = true;

    this.http.post('http://localhost:3000/api/contacto', this.contactForm.value)
      .subscribe({
        next: (res: any) => {
          this.enviando = false;
          this.mensajeExito = true;

          // Resetear formulario
          this.contactForm.reset();
          this.submitted = false;

          // Ocultar mensaje después de 5s
          setTimeout(() => this.mensajeExito = false, 5000);
        },
        error: (err) => {
          console.error(err);
          this.enviando = false;
          alert('Ocurrió un error al enviar el mensaje. Revisa la consola.');
        }
      });
  }
}
