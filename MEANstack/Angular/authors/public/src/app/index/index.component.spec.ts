import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthorsComponent } from './index.component';

describe('IndexAuthorsComponent', () => {
  let component: IndexAuthorsComponent;
  let fixture: ComponentFixture<IndexAuthorsomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
