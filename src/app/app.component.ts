import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sampel Acak (Random Sampling)';
  desc = 'Mencoba cara kerja sampel acak (random sampling) yang dipakai untuk statistik (mis. survei, quickcount)';
  imgUrl = 'https://hermansaksono.github.io/random_sampling/assets/facebook-img.png';
  imgAlt = 'Apel dan jeruk';
  public constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(this.title);
  }
}
