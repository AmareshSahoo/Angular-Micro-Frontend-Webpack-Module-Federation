import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { environment } from '../../environments/environment';
// import { LazyComponent } from 'mfe1/LazyComponent'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private cdRef: ChangeDetectorRef  ) {}

  @ViewChild('lazyComponentPlaceHolder', { read: ViewContainerRef })
  lazyComponentPlaceHolder!: ViewContainerRef;

  ngOnInit() {
    this.loadLazyComponent();

    //Clear Search Result
    const event = new CustomEvent('FLIGHT_SEARCH', { detail: { from: '', to: '' }});
    dispatchEvent(event);
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  async loadLazyComponent() {
    try {
      const { LazyComponent } = await import('mfe1/LazyComponent');
      if (LazyComponent) {
        //removes all views in that container
        this.lazyComponentPlaceHolder.clear();
        const ref =
          this.lazyComponentPlaceHolder.createComponent(LazyComponent);
      }
    } catch (error) {
      console.log('ERROR===', error);
    }
  }
}
