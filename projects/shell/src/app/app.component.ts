import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shell';
  flightSearchObj = {
    from: '',
    to: '',
  };

  constructor(private authService: AuthLibService) {
    this.authService.login('Amaresh', '12345');
  }

  ngOnInit() {
    fromEvent(window, 'FLIGHT_SEARCH').subscribe((event: any) => {
      if (event.detail) {
        console.log('EVENT DATA===', event?.detail);
        this.flightSearchObj = { ...event?.detail };
        console.log(this.flightSearchObj);
      }
    });
  }

  ngAfterViewInit(): void {

  }
}
