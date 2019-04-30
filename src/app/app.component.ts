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
  public constructor(private titleService: Title, private meta: Meta ) {
    this.titleService.setTitle(this.title);
  }
}
