import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redesSociales = [
  { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
  { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
  { icon: 'youtube', url: 'https://youtube.com', label: 'YouTube' },
  { icon: 'vimeo', url: 'https://vimeo.com', label: 'Vimeo' },
  { icon: 'spotify', url: 'https://spotify.com', label: 'Spotify' },
  { icon: 'tiktok', url: 'https://tiktok.com', label: 'TikTok' }
];

  mail = 'funavic49@gmail.com';
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}