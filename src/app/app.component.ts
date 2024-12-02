import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuseumMenuComponent } from "./components/museum-menu/museum-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MuseumMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamMuseum';
}
