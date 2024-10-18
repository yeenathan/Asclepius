import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { default as colorTheme } from '../custom-theme.json';
import { default as mapping } from "../mapping.json"

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider
      {...eva}
      theme={{...eva.light, ...colorTheme,}}
      customMapping={mapping}
    >
      <AppNavigator/>
    </ApplicationProvider>
  </>
);