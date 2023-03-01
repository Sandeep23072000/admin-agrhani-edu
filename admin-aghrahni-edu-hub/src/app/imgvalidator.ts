import { AbstractControl } from '@angular/forms';

export function imageFormatValidator(control: AbstractControl): {[key: string]: any} | null {
  const file = control.value;
  if (file) {
    const fileType = file.type;
    const fileExtension = fileType.split('/')[1].toLowerCase();
    if (fileExtension !== 'jpg' && fileExtension !== 'jpeg' && fileExtension !== 'png') {
      return { invalidImageFormat: true };
    }
  }
  return null;
}