import { moduleMetadata, Story } from '@storybook/angular';
import { FormElementComponent } from '../form-element/form-element.component';
import { FormElementModule } from '../form-element/form-element.module';
import { Input } from '../input/input.stories';
import { InputType } from '../models/input-type.model';
import { FormLayoutComponent } from './form-layout.component';
import { FormLayoutModule } from './form-layout.module';

type FormLayoutProps = {
  myControl: string;
  columns: number;
  userInput: Partial<FormElementComponent>;
  passwordInput: Partial<FormElementComponent>;
};

const Template: Story<FormLayoutComponent & FormLayoutProps> = args => ({
  props: { args },
  template: `
      <ableneo-form-layout [columns]="args.columns" [heading]="args.heading">
        <ableneo-form-element [label]="args.userInput.label"
                          [placeholder]="args.userInput.placeholder"
                          [value]="args.userInput.value"
                          [inputType]="args.userInput.inputType"></ableneo-form-element>
        <ableneo-form-element [label]="args.passwordInput.label"
                          [placeholder]="args.passwordInput.placeholder"
                          [value]="args.passwordInput.value"
                          [inputType]="args.passwordInput.inputType"></ableneo-form-element>
      </ableneo-form-layout>
  `
});

export default {
  title: 'Components/FormLayout',
  component: FormLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [FormLayoutModule, FormElementModule]
    })
  ]
};

export const FormLayout = Template.bind({});

FormLayout.args = {
  myControl: 'Hello there!',
  columns: 2,
  userInput: {
    ...Input.args,
    label: 'User',
    placeholder: 'Username',
    inputType: InputType.text,
    value: ''
  },
  passwordInput: {
    ...Input.args,
    label: 'Password',
    placeholder: 'Password',
    inputType: InputType.password,
    value: ''
  }
};
