import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { HideByRouteDirective } from './directives/hide-by-route.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    NotFoundPageComponent,
    HideByRouteDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NotFoundPageComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class CoreModule { }
