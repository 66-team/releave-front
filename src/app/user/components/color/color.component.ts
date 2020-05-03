import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorComponent),
      multi: true
    }
  ]
})

export class ColorComponent implements ControlValueAccessor {
  @Input() colors = [];
  value: string;
  disabled: boolean;

  constructor() { }

  onChange = (color: string) => {};

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

  choose(color: string) {
    this.writeValue(color);
  }

}
