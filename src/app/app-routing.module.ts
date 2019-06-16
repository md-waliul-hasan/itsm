import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'jobs',
        loadChildren: () => import('./jobs/jobs.module').then(mod => mod.JobsModule)
    },
    {
        path: 'problem-setter',
        loadChildren: () => import('./problem-setter/problem-setter.module').then(mod => mod.ProblemSetterModule)
    },
    {
        path: 'problem-solver',
        loadChildren: () => import('./problem-solver/problem-solver.module').then(mod => mod.ProblemSolverModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
