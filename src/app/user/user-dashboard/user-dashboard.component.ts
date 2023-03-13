import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {}
}
