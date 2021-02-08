import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselectComponent } from './pre-select.component';

describe('TypographyComponent', () => {
  let component: PreselectComponent;
  let fixture: ComponentFixture<PreselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
