// Button.stories.ts

import {storiesOf} from '@storybook/angular';
import {GameComponent} from './game.component';
import {WantWrapperComponent} from './want/want-wrapper.component';
import {WantKeyComponent} from './want-key/want-key.component';
import {WantClickComponent} from './want-click/want-click.component';
import {WantCompositeComponent} from './want-composite/want-composite.component';
import {TitleComponent} from '../title/title.component';
import {WantShortcutComponent} from './want-shortcut/want-shortcut.component';
import {WantTextComponent} from './want-text/want-text.component';
import {ScoreComponent} from './score/score.component';


storiesOf('gameboard with storiesOf', module)
  .add('normal', (args) => ({
    component: GameComponent,
    moduleMetadata: {
      declarations: [
        WantWrapperComponent,
        WantKeyComponent,
        WantClickComponent,
        WantCompositeComponent,
        WantShortcutComponent,
        WantTextComponent,
        TitleComponent, ScoreComponent]
    },
    props: {...args}

  }), {})
  .add('lost', (args) => ({
    component: GameComponent,
    moduleMetadata: {
      declarations: [
        WantWrapperComponent,
        WantKeyComponent,
        WantClickComponent,
        WantCompositeComponent,
        WantShortcutComponent,
        WantTextComponent,
        TitleComponent, ScoreComponent]
    },
    props: {...args,
      missed: 10,
      score: 30}

  }), {});
