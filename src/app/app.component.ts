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
    // Twitter metadata
    meta.addTag({name: 'twitter:card', content: 'summary_large_image'});
    meta.addTag({name: 'twitter:title', content: this.title});
    meta.addTag({name: 'twitter:description', content: this.desc});
    meta.addTag({name: 'twitter:image', content: this.imgUrl});
    meta.addTag({name: 'twitter:image:alt', content: this.imgAlt});
    // Facebook metadata
    meta.addTag({name: 'og:type', content: 'website'});
    meta.addTag({name: 'og:url', content: 'https://hermansaksono.github.io/random_sampling/'});
    meta.addTag({name: 'og:title', content: this.title});
    meta.addTag({name: 'og:description', content: this.desc});
    meta.addTag({name: 'og:image', content: this.imgUrl});
    meta.addTag({name: 'og:site_name', content: 'Random sampling'});
    meta.addTag({name: 'fb:app_id', content: 'https://hermansaksono.github.io/random_sampling/'});
  }
}
