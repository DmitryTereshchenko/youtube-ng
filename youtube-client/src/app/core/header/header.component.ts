import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() filterVisibilityChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchSubmit: EventEmitter<string> = new EventEmitter<string>();

  isFilteringVisible = false;

  onSettingsClick() {
    this.isFilteringVisible = !this.isFilteringVisible;
    this.filterVisibilityChanged.emit(this.isFilteringVisible);
  }

  onSearchSubmit(searchValue: string) {
    this.searchSubmit.emit(searchValue);
  }
}
