import { CardComponent } from './card.component';
import { Story } from '@storybook/angular';

const Template: Story<CardComponent> = args => ({
  props: args,
  template: `
    <ableneo-card>
     Some text content Some text content Some text content Some text content Some text content Some text content Some text content Some text content
    </ableneo-card>
  `
});

export default {
  title: 'Components/Card',
  component: CardComponent
};

export const Card = Template.bind({});

Card.args = {};
