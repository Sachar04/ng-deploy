import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housingLocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <a class="image-link" [routerLink]="['/details', housingLocation.id]">
        <img [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}" class="listing-photo">
      </a>
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{housingLocation.state}}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn more ></a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;
}
