// Button.stories.ts

import {Meta, Story} from '@storybook/angular/types-6-0';

import {WantKeyComponent} from '../want-key/want-key.component';
import {WantedClick, WantedComposite, WantedKeyPress, WantedShortCut} from '../../../domain/model';
import {WantClickComponent} from '../want-click/want-click.component';
import {WantWrapperComponent} from '../want/want-wrapper.component';
import {componentWrapperDecorator, moduleMetadata, storiesOf} from '@storybook/angular';
import {WantCompositeComponent} from '../want-composite/want-composite.component';
import {WantShortcutComponent} from '../want-shortcut/want-shortcut.component';

export default {
  title: 'Components/Want',
  component: WantWrapperComponent,
  subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent}
} as Meta;


const ClickTemplate: Story<WantWrapperComponent> = args => ({
  component: WantClickComponent,
  props: {
    ...args,
    output: 'someOutputMethode'
  }
});
export const Click = ClickTemplate.bind({}, {want: new WantedClick(40)});
const WrappedClickTemplate: Story<WantWrapperComponent> = args => ({
    subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent},
    moduleMetadata: {
      declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent],
    },
    props: {
      ...args,
      want: new WantedClick(40)
    },
    template: `
    <div style="margin: 50px;position: relative">
        <app-want-wrapper [want]="want">
            <app-want-click  [want]="want"></app-want-click>
        </app-want-wrapper>
    </div>`,
  })
;

export const WrappedClick = WrappedClickTemplate.bind({});

const WrappedTemplate: Story = args => ({
  props: {
    ...args,
  },
  template: `{{want.label}}
<app-want-wrapper [want]="want">
wrapped content
 </app-want-wrapper>
       `,
});
export const Wrapped = WrappedTemplate.bind({});

Wrapped.args = {want: new WantedClick(40)};


export const Key: Story<WantWrapperComponent> = args => ({
    subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent},
    moduleMetadata: {
      declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent],
    },
    props: {
      ...args,
      want: new WantedKeyPress('a')
    },
    template: `
    <div style="margin: 50px;position: relative">
        <app-want-key  [want]="want"></app-want-key>
    </div>`,
  })
;


export const WrappedKey: Story<WantWrapperComponent> = args => ({
    subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent},
    moduleMetadata: {
      declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent],
    },
    props: {
      ...args,
      want: new WantedKeyPress('a')
    },
    template: `
    <div style="margin: 50px;position: relative">
        <app-want-wrapper [want]="want">
            <app-want-key  [want]="want"></app-want-key>
        </app-want-wrapper>
    </div>`,
  })
;


export const CompositeKey: Story<WantWrapperComponent> = args => ({
    subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent},
    moduleMetadata: {
      declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent, WantCompositeComponent],
    },
    props: {
      ...args,
      want: new WantedComposite([new WantedKeyPress('a'), new WantedKeyPress('b')])
    },
    template: `
    <div style="margin: 50px;position: relative">
        <app-want-wrapper [want]="want">
            <app-want-composite [want]="want"></app-want-composite>
        </app-want-wrapper>
    </div>`,
  })
;


const wantedShortCut = new WantedShortCut([new WantedKeyPress('a'), new WantedKeyPress('b')]);
wantedShortCut.timeout = 100;
wantedShortCut.time = 10;
wantedShortCut.isCurrentlySatisfied = false;
export const ShortcutKey: Story<WantWrapperComponent> = args => ({
  subcomponents: {WantWrapperComponent, WantKeyComponent, WantClickComponent},
  moduleMetadata: {
    declarations: [WantWrapperComponent, WantKeyComponent, WantClickComponent,
      WantCompositeComponent, WantShortcutComponent],
  },
  props: {
    ...args,
      want: wantedShortCut
    },
    template: `
    <div style="margin: 50px;position: relative">
        <app-want-wrapper [want]="want">
            <app-want-shortcut [want]="want"></app-want-shortcut>
        </app-want-wrapper>
    </div>`,
  })
;
