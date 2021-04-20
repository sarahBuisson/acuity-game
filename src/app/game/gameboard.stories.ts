// Button.stories.ts

import {storiesOf} from '@storybook/angular';
import {GameComponent} from './game.component';
import {WantWrapperComponent} from './want/want-wrapper.component';
import {WantKeyComponent} from './want-key/want-key.component';
import {WantClickComponent} from './want-click/want-click.component';
import {WantCompositeComponent} from './want-composite/want-composite.component';
import {TitleComponent} from '../title/title.component';


storiesOf('gameboard with storiesOf', module)
  .add('some storiesOf', (args) => ({
    component: GameComponent,
    moduleMetadata: {
      declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent, WantCompositeComponent, TitleComponent],
    },
    props: {...args}

  }), {});
