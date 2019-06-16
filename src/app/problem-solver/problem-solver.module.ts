import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemSolverRoutingModule } from './problem-solver-routing.module';
import { ProblemsolveraddComponent } from './problemsolveradd/problemsolveradd.component';
import { ProblemsolverhomeComponent } from './problemsolverhome/problemsolverhome.component';
import { ProblemsolvereditComponent } from './problemsolveredit/problemsolveredit.component';

@NgModule({
  declarations: [ProblemsolveraddComponent, ProblemsolverhomeComponent, ProblemsolvereditComponent],
  imports: [
    CommonModule,
    ProblemSolverRoutingModule
  ]
})
export class ProblemSolverModule { }
