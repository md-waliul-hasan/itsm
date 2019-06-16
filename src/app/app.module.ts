import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProblemsolverhomeComponent } from './problemsolver/problemsolverhome/problemsolverhome.component';
import { ProblemsolveraddComponent } from './problemsolver/problemsolveradd/problemsolveradd.component';
import { ProblemsolvereditComponent } from './problemsolver/problemsolveredit/problemsolveredit.component';
@NgModule({
  declarations: [
    AppComponent,
    ProblemsolverhomeComponent,
    ProblemsolveraddComponent,
    ProblemsolvereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
