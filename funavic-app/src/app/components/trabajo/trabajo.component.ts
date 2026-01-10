
// trabajo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Trabajo {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-trabajo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {
  trabajos: Trabajo[] = [
    {
      id: 1,
      titulo: 'Proyecto Web Moderno',
      descripcion: 'Desarrollo de aplicación web con Angular y diseño responsive',
      imagen: "assets/trabajo1.png"
    },
    {
      id: 2,
      titulo: 'App Mobile',
      descripcion: 'Aplicación móvil con interfaz intuitiva y moderna',
      imagen: "assets/trabajo2.png"
    },
    {
      id: 3,
      titulo: 'Sistema de Gestión',
      descripcion: 'Plataforma completa para administración empresarial',
      imagen: "assets/trabajo3.png"
    },
    {
      id: 4,
      titulo: 'E-commerce',
      descripcion: 'Tienda online con pasarela de pagos integrada',
      imagen: "assets/trabajo4.png"
    },
    {
      id: 5,
      titulo: 'Dashboard Analytics',
      descripcion: 'Panel de análisis de datos en tiempo real',
      imagen: "assets/trabajo5.png"
    },
    {
      id: 6,
      titulo: 'Red Social',
      descripcion: 'Plataforma de interacción social y networking',
      imagen: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop'
    }
  ];

  indiceActual = 0;

  get trabajosVisibles(): Trabajo[] {
    const trabajos = [];
    for (let i = 0; i < 3; i++) {
      const index = (this.indiceActual + i) % this.trabajos.length;
      trabajos.push(this.trabajos[index]);
    }
    return trabajos;
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.trabajos.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.trabajos.length) % this.trabajos.length;
  }

  irA(index: number) {
    this.indiceActual = index;
  }
}