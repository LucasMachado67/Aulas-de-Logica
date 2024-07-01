import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// uma forma de fazer routerlink é botar o RouterModule para importar
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-aula4';
}
