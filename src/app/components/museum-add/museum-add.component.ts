import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Theme } from '../../model/theme';
import { MuseumService } from '../../services/museum.service';
import { Router } from '@angular/router';
import { Museum } from '../../model/museum';
import { NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-museum-add',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './museum-add.component.html',
  styleUrl: './museum-add.component.css'
})
export class AddMuseumComponent implements OnInit {
  addMuseumForm!: FormGroup;
  themes = Object.values(Theme);

  constructor(
    private fb: FormBuilder,
    private museumService: MuseumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addMuseumForm = this.fb.group({
      name: ['', [Validators.required]],
      country: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+(-[A-Z][a-z]+)*$')]],
      photo: ['</museums>', Validators.required], 
      date: ['', Validators.required],
      theme: [Theme.art, Validators.required],
      surface: [0, [Validators.required, Validators.min(0)]], 
      nbObjects: [0, [Validators.required, Validators.min(0)]], 
      works: this.fb.array([this.createWork()]) 
    });
  }


  createWork(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required]
    });
  }

  get works(): FormArray {
    return this.addMuseumForm.get('works') as FormArray;
  }


  addWork(): void {
    this.works.push(this.createWork());
  }


  removeWork(index: number): void {
    this.works.removeAt(index);
  }

  onSubmit(): void {
    if (this.addMuseumForm.valid) {
      const newMuseum: Museum = this.addMuseumForm.value;
      this.museumService.addMuseum(newMuseum).subscribe(() => {
        this.router.navigate(['/museum']); 
      });
    }
  }

  onReset(): void {
    this.addMuseumForm.reset({
      theme: Theme.art,
      photo: '</museums>'
    });
    this.works.clear();
    this.addWork();
  }
}