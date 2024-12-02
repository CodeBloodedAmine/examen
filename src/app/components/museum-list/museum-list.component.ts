import { Component, OnInit } from '@angular/core';
import { Museum } from '../../model/museum';
import { MuseumService } from '../../services/museum.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-museum-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './museum-list.component.html',
  styleUrl: './museum-list.component.css'
})
export class MuseumListComponent implements OnInit {
  museums: Museum[] = [];
  errorMessage: string = '';

  constructor(
    private museumService: MuseumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMuseums();
  }

  loadMuseums(): void {
    this.museumService.getMuseums().subscribe(
      (data) => {
        this.museums = data;
      },
    );
  }

  onMuseumClick(museum: Museum): void {
    this.router.navigate([`/theme/${museum.theme}/country/${museum.country}`]);
  }
}