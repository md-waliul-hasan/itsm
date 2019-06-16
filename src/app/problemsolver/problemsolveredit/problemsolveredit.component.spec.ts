import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsolvereditComponent } from './problemsolveredit.component';

describe('ProblemsolvereditComponent', () => {
  let component: ProblemsolvereditComponent;
  let fixture: ComponentFixture<ProblemsolvereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsolvereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsolvereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
