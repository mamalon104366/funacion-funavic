import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Area {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  color: string;
}

@Component({
  selector: 'app-hacemos1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hacemos1.component.html',
  styleUrls: ['./hacemos1.component.css']
})
export class Hacemos1Component {
  areas: Area[] = [
    {
      id: 1,
      titulo: 'Medio Ambiente y Bioeconomía',
      descripcion: 'Procesamiento de materiales reciclables, procesos de bioeconomía con valor agregado y fomento de la forestería comunitaria.',
      icono: '🌿',
      color: '#2d5016'
    },
    {
      id: 2,
      titulo: 'Salud y Saberes',
      descripcion: 'Atención en salud integral combinando la medicina occidental con la medicina tradicional y ancestral indígena.',
      icono: '🏥',
      color: '#8b1538'
    },
    {
      id: 3,
      titulo: 'Cultura y Tejido Social',
      descripcion: 'Fortalecimiento del enfoque de género, protección de saberes étnicos y promoción de artesanías y tejidos propios de la región.',
      icono: '🎨',
      color: '#c17817'
    },
    {
      id: 4,
      titulo: 'Desarrollo Productivo',
      descripcion: 'Implementación de sistemas agroecológicos, acuícolas y turismos alternativos compatibles con la selva húmeda tropical.',
      icono: '🌾',
      color: '#1a5490'
    }
  ];
}