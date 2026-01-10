import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metodologia {
  id: number;
  numero: string;
  titulo: string;
  descripcion: string;
  color: string;
}

@Component({
  selector: 'app-como-hacemos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './como-hacemos.component.html',
  styleUrls: ['./como-hacemos.component.css']
})
export class ComoHacemosComponent {
  metodologias: Metodologia[] = [
    {
      id: 1,
      numero: '01',
      titulo: 'Asociatividad',
      descripcion: 'Creamos cooperativas y alianzas estratégicas con entidades públicas y privadas, nacionales e internacionales.',
      color: '#2d5016'
    },
    {
      id: 2,
      numero: '02',
      titulo: 'Gestión de Proyectos',
      descripcion: 'Identificamos carencias en la comunidad y ejecutamos proyectos de infraestructura, capacitación y generación de empleo.',
      color: '#8b1538'
    },
    {
      id: 3,
      numero: '03',
      titulo: 'Incidencia',
      descripcion: 'Participamos en las mesas de víctimas a nivel municipal, departamental y nacional para defender los intereses de nuestros integrantes.',
      color: '#1a5490'
    }
  ];
}