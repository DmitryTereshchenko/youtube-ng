import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { customCardsReducer } from './redux/reducers/customCards.reducer';
import { youtubeCardsReducer } from './redux/reducers/youtubeCards.reducer';
import { YoutubeCardsEffects } from './redux/effects/youtubeCards.effects';
import { AppState } from './redux/state.models';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({
      youtubeCards: youtubeCardsReducer,
      customCards: customCardsReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeCardsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
