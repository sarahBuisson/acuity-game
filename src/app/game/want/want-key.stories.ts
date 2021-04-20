
import {WantKeyComponent} from '../want-key/want-key.component';
import {WantedKeyPress} from '../../../domain/model';
import {storiesOf} from '@storybook/angular';


storiesOf('key with storiesOf', module)
  .addParameters({want: new WantedKeyPress('r')})
  .add('some storiesOf', () => ({
  component: WantKeyComponent,
  props: {  args: {want: new WantedKeyPress('r')},
    want: new WantedKeyPress('r')},
  args: {want: new WantedKeyPress('r')}

}), {want: new WantedKeyPress('r')});
