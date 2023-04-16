import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormBase } from '../../../utils/FormBase';
import { LinkValidator } from '../validators/link.validator';
import { DateValidator } from '../../../auth/validators/date.validator';
import { CustomCardsActions } from '../../../redux/actions/customCards.actions';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss']
})
export class CreateCardFormComponent extends FormBase implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmitForm() {
    this.store.dispatch(CustomCardsActions.add({
      ...this.form.getRawValue(),
      id: new Date().getTime().toString()
    }));
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      )],
      description: ['', Validators.max(255)],
      imgLink: ['https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/youtube-official-website-1653045906.jpg', Validators.compose([Validators.required, LinkValidator()])],
      videoLink: ['https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/05/youtube-official-website-1653045906.jpg', Validators.compose([Validators.required, LinkValidator()])],
      creationDate: ['', Validators.compose([Validators.required, DateValidator()])]
    });
  }
}
