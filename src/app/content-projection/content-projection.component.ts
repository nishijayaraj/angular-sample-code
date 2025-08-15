import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export class ContentProjectionComponent {
  salesProducts = [
    { id: 1, name: 'Aces', price: 100 },
    { id: 2, name: 'Phones', price: 2000 },
    { id: 1, name: 'Fashion', price: 5000 },
    { id: 1, name: 'Electronics', price: 3000 },
  ];

  recentProducts = [
    { id: 1, name: 'Aces', price: 100 },
    { id: 2, name: 'Phones', price: 2000 },
    { id: 1, name: 'Fashion', price: 5000 },
    { id: 1, name: 'Electronics', price: 3000 },
  ];
}
