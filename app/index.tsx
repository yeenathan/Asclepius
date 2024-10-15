import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to UI Kitten</Text>
    </Layout>
  </ApplicationProvider>
);