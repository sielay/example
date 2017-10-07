import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponentComponent } from './list-page-component.component';

describe('ListPageComponentComponent', () => {
  let component: ListPageComponentComponent;
  let fixture: ComponentFixture<ListPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
