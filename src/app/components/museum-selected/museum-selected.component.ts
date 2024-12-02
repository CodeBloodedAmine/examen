import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Museum } from '../../model/museum';
import { MuseumService } from '../../services/museum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../../model/theme';
import { AsyncPipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-museum-selected',
  standalone: true,
  imports: [AsyncPipe,NgIf],
  templateUrl: './museum-selected.component.html',
  styleUrl: './museum-selected.component.css'
})
export class MuseumSelectedComponent implements OnInit {
  museums$: Observable<Museum[]> = new Observable();
  theme: string = '';
  country: string = '';

  constructor(
    private museumService: MuseumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.theme = params.get('theme') || '';
      this.theme = Theme[this.theme as keyof typeof Theme];
      this.country = params.get('country') || '';
      if (this.theme && this.country) {
        this.museums$ = this.museumService.getMuseumsByInfos(this.theme as Theme, this.country);
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/dashboard/museum']);
  }
}