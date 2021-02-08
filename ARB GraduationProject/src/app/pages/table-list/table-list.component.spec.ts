import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './table-list.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
