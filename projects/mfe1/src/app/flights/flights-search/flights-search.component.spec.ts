import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSearchComponent } from './flights-search.component';
import { AuthLibService } from 'auth-lib';


describe('FlightsSearchComponent', () => {
  let component: FlightsSearchComponent;
  let fixture: ComponentFixture<FlightsSearchComponent>;
  let authService: AuthLibService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username should not be a number', () => {
    expect(component.username).not.toBeNaN();
  });

  it('username should not be null or undefined', () => {
    expect(component.username).not.toBeNull();
    expect(component.username).not.toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    const service = fixture.debugElement.injector.get(AuthLibService);
    expect(component.username ).toEqual(service.user_name);
  });

  it('should render Welcome Back Message with username', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.username-txt').textContent).toContain(`Welcome Back: ${component.username}`);
  });
});
