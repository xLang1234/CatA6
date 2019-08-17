import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycatComponent } from './modifycat.component';

describe('ModifycatComponent', () => {
  let component: ModifycatComponent;
  let fixture: ComponentFixture<ModifycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
