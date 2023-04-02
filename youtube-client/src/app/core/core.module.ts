import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NotFoundPageComponent
  ]
})
export class CoreModule { }
