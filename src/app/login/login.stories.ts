import { moduleMetadata, Story } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

const Template: Story<LoginComponent> = args => ({
  props: args
});

export default {
  title: 'Components/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [LoginModule]
    })
  ]
};

export const Login = Template.bind({});

Login.args = {};
