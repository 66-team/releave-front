import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.scss'],
  providers: [
    {       provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CInputComponent),
            multi: true
    }
  ]
})
export class CInputComponent implements ControlValueAccessor {
  @Input() custom: {
    type: string,
    placeholder: string,
    name: string
  };
  value: string;
  disabled: boolean;

  onChange = (value: string) => {};

  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ? value : '';
    this.onChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
