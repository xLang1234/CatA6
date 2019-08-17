import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionformComponent } from './adoptionform.component';

describe('AdoptionformComponent', () => {
  let component: AdoptionformComponent;
  let fixture: ComponentFixture<AdoptionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
