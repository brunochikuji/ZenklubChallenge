import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rating = {
      value: 5,
      total: 28
    };
    fixture.detectChanges();
  });

  it('should show 5 stars', () => {
    let startElements = document.querySelectorAll('.stars li i');
    expect(startElements.length).toEqual(5);
    component.stars.forEach(star => {
      expect(startElements[star -1].className).toEqual('fa fa-star');
    })
  });

  it('should show 0 stars', () => {
    component.rating.value = 0;
    fixture.detectChanges();
    let startElements = document.querySelectorAll('.stars li i');
    expect(startElements.length).toEqual(5);
    component.stars.forEach(star => {
      expect(startElements[star -1].className).toEqual('far fa-star');
    })
  });

  it('should show 3.5 stars', () => {
    component.rating.value = 3.5;
    fixture.detectChanges();
    let startElements = document.querySelectorAll('.stars li i');
    expect(startElements.length).toEqual(5);
    expect(startElements[0].className).toEqual('fa fa-star');
    expect(startElements[1].className).toEqual('fa fa-star');
    expect(startElements[2].className).toEqual('fa fa-star');
    expect(startElements[3].className).toEqual('fa fa-star-half-alt');
    expect(startElements[4].className).toEqual('far fa-star');
  });

  it('should show reviews and review label', () => {
    let spamElement: HTMLSpanElement = <HTMLSpanElement>document.querySelector('.review');
    expect(spamElement.textContent).toEqual('(28 reviews)');

    component.rating.total = 1;
    fixture.detectChanges();
    spamElement = <HTMLSpanElement>document.querySelector('.review');
    expect(spamElement.textContent).toEqual('(1 review)');
  });

});
