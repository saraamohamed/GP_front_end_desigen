import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselectComponent } from './preselect.component';

<<<<<<< HEAD
describe('IconsComponent', () => {
=======
describe('PreselectComponent', () => {
>>>>>>> cde56dd2872e3efe439ddf2794a0f44d04832a84
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
