import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //name = 'Translation';
  @Input() name: string;

  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
    this.translate.addLangs(['English', 'Sinhala', 'Tamil']);
    this.translate.setDefaultLang('English');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/English|Sinhala|Tamil/) ? browserLang : 'English');

    console.log(browserLang);
  }
}
