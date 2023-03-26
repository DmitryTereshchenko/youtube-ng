import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

  searchValue = '';

  onFormSubmit() {
    this.searchChanged.emit(this.searchValue);
  }
}
