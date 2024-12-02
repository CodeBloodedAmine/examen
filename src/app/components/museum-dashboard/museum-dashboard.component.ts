import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-museum-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './museum-dashboard.component.html',
  styleUrl: './museum-dashboard.component.css'
})
export class MuseumDashboardComponent {

}
