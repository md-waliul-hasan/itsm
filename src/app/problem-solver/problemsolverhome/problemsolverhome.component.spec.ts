import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsolverhomeComponent } from './problemsolverhome.component';

describe('ProblemsolverhomeComponent', () => {
  let component: ProblemsolverhomeComponent;
  let fixture: ComponentFixture<ProblemsolverhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsolverhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsolverhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
