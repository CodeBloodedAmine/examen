import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-museum-menu',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './museum-menu.component.html',
  styleUrl: './museum-menu.component.css'
})
export class MuseumMenuComponent {

}
