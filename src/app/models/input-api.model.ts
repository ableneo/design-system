import { InputType } from './input-type.model';

export interface InputApiModel {
  inputType: InputType;
  placeholder?: string;
  value?: string;
}
