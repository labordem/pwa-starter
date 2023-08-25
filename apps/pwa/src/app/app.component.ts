import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'pwa-starter-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'pwa';
}
