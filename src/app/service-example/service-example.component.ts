import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.scss',
})
export class ServiceExampleComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}
