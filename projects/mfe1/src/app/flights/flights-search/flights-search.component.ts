import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css'],
})
export class FlightsSearchComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthLibService) {
    this.username = this.authService.user_name;
    this.password = this.authService.user_password;
  }

  async ngOnInit() {}

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}
