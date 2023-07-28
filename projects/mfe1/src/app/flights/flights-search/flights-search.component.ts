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

  searchObj = {
    from: '',
    to: '',
  };

  constructor(private authService: AuthLibService) {}

  ngOnInit() {
    this.username = this.authService.user_name || '';
    this.password = this.authService.user_password || '';
  }

  search(): void {
    console.log('Search', this.searchObj);
    const event = new CustomEvent('FLIGHT_SEARCH', { detail: this.searchObj });
    dispatchEvent(event);
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }
}
