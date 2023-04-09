import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, ValidationErrors, Validators
} from '@angular/forms';
import { FormBase } from '../../../utils/FormBase';
import { LinkValidator } from '../validators/link.validator';
import { DateValidator } from '../../../auth/validators/date.validator';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss']
})
export class CreateCardFormComponent extends FormBase implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmitForm() {}

  getControlErrors(controlName: string) {
    const formErrors = this.form.controls[controlName].errors;
    if (formErrors) {
      switch (controlName) {
        case 'title':
          return this.getTitleErrors(formErrors);
        case 'description':
          return this.getDescriptionErrors(formErrors);
        case 'img':
          return this.getImageErrors(formErrors);
        case 'linkVideo':
          return this.getLinkVideoErrors(formErrors);
        case 'creationDate':
          return this.getCreationDateErrors(formErrors);
        default:
          return 'The field is invalid';
      }
    }

    return null;
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      )],
      description: ['', Validators.max(255)],
      img: ['', Validators.compose([Validators.required, LinkValidator()])],
      linkVideo: ['', Validators.compose([Validators.required, LinkValidator()])],
      creationDate: ['', Validators.compose([Validators.required, DateValidator()])]
    });
  }

  private getTitleErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter title';
          break;
        case 'minlength':
          errorMessage = 'The title is too short';
          break;
        case 'maxlength':
          errorMessage = 'The title is too long';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  private getDescriptionErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'maxlength':
          errorMessage = 'The description is too long';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  private getImageErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter a link to the image';
          break;
        case 'link':
          errorMessage = 'The image link is invalid';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  private getLinkVideoErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter a link to the video';
          break;
        case 'link':
          errorMessage = 'The video link is invalid';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }

  private getCreationDateErrors(formErrors: ValidationErrors): string {
    let errorMessage = '';
    Object.keys(formErrors).forEach(key => {
      switch (key) {
        case 'required':
          errorMessage = 'Please enter a creation date';
          break;
        case 'date':
          errorMessage = 'The date is invalid';
          break;
        default:
          errorMessage = 'The field is invalid';
      }
    });

    return errorMessage;
  }
}
