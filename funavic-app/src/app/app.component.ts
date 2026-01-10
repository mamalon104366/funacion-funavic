import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common'; // <<--- Importar CommonModule

// COMPONENTES STANDALONE
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { Hacemos1Component } from './components/hacemos1/hacemos1.component';
import { ComoHacemosComponent } from './components/como-hacemos/como-hacemos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,       // <<--- Agregar CommonModule para usar *ngIf
    HeaderComponent,
    HeroComponent,
    MisionComponent,
    VisionComponent,
    ContactoComponent,
    Hacemos1Component,
    FooterComponent,
    ComoHacemosComponent,
    TrabajoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showSplash = true;
  splashHidden = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.splashHidden = true;
        setTimeout(() => {
          this.showSplash = false;
        }, 1000);
      }, 1000);
    }
  }
}
