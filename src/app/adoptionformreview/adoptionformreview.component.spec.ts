import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionformreviewComponent } from './adoptionformreview.component';

describe('AdoptionformreviewComponent', () => {
  let component: AdoptionformreviewComponent;
  let fixture: ComponentFixture<AdoptionformreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionformreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionformreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
