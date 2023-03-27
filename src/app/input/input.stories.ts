import { InputComponent } from './input.component';
import { Story } from '@storybook/angular';

const Template: Story<InputComponent> = args => ({
  props: args
});

export default {
  title: 'Components/Input',
  component: InputComponent
};

export const Input = Template.bind({});

Input.args = {};
Input.argTypes = {
  placeholder: { control: 'text' },
  value: { control: 'text' }
};
