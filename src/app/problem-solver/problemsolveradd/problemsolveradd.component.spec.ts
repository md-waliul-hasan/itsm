import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsolveraddComponent } from './problemsolveradd.component';

describe('ProblemsolveraddComponent', () => {
  let component: ProblemsolveraddComponent;
  let fixture: ComponentFixture<ProblemsolveraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsolveraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsolveraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
