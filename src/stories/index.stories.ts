import { storiesOf, moduleMetadata } from '@storybook/angular';
import { InputModule } from 'src/app/input/input.module';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      imports: [InputModule]
    })
  )
  .add('default', () => ({
    template: '<input-component></input-component>',
    props: {
    },
  }));
