import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly baseURL = 'https://www.googleapis.com/youtube/v3/';
  private readonly apiKey = 'AIzaSyDKYmXkQBEkfx9uixBcP-4j_ZV1JV168XM';
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      url: this.baseURL + request.url,
      params: (request.params || new HttpParams())
        .set('key', this.apiKey)
    });
    return next.handle(newRequest);
  }
}
