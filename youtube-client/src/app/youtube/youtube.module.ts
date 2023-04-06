import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MainPageComponent } from './pages/main/main-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemStatisticComponent } from './components/search-item-statistic/search-item-statistic.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { FilteringPipe } from './pipes/filtering.pipe';
import { YotubeRoutingModule } from './yotube-routing.module';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HighlightShadowDirective } from './directives/highlight-shadow.directive';
import { HighlightBackgroundDirective } from './directives/highlight-background.directive';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';

@NgModule({
  declarations: [
    MainPageComponent,
    DetailsPageComponent,
    SearchFilterComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchItemStatisticComponent,
    HighlightBorderDirective,
    FilteringPipe,
    ItemDetailComponent,
    HighlightShadowDirective,
    HighlightBackgroundDirective,
    NumberSuffixPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgOptimizedImage,
    YotubeRoutingModule
  ],
  exports: [
    MainPageComponent,
    DetailsPageComponent
  ]
})
export class YoutubeModule { }
