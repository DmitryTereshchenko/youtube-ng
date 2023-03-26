import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SearchModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
