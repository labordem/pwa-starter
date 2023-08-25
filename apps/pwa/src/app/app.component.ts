import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, DatePipe],
  selector: 'pwa-starter-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'pwa';
  date = new Date();
  translatedInTypescript = $localize`This text is translated with $localize`;
}
