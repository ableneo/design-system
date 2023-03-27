import { moduleMetadata, Story } from '@storybook/angular';
import { Input } from '../input/input.stories';
import { FormElementComponent } from './form-element.component';
import { FormElementModule } from './form-element.module';

const Template: Story<FormElementComponent> = args => ({
  props: args
});

export default {
  title: 'Components/FormElement',
  component: FormElementComponent,
  decorators: [
    moduleMetadata({
      imports: [FormElementModule]
    })
  ]
};

export const FormElement = Template.bind({});

FormElement.args = { ...Input.args } as any;
