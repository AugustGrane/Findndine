import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'; // Adjust the path based on your structure
import { Restaurant } from '../models/restaurant.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HttpClientModule, CommonModule],
  providers: [RestaurantService],
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }
}
