import { moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';
import { Figma } from 'storybook-addon-designs/blocks';

const Template: Story<ButtonComponent> = args => ({
  props: args
});

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
  parameters: {
    componentSubtitle: 'ableneo Button component',
    docs: {
      description: {
        component: `
## When to use it

- situation 1
- situation 2

## When not to use it
- situation 1
- situation 2

## How does it work
Clicking etc.
`
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/r2OGExXQDsvkzYGTz9TP0N/Angular-Architects-Design-Systems-(Copy)?node-id=1161%3A2053&t=fhNn7vtt4cYQzvha-1',
      allowFullscreen: true
    }
  }
};

export const Button = Template.bind({});

Button.args = {};

Button.argTypes = {
  buttonClick: {
    control: false
  }
};
