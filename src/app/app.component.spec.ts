import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockComponent } from "ng-mocks";
import { RouterOutlet } from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(RouterOutlet)
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
