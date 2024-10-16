// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon } from '@ui-kitten/components';
// import { default as theme } from '../theme.json'
// import { default as mapping } from '../mapping.json';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';



// export default () => (
//   <>
//   <IconRegistry icons={EvaIconsPack} />
//   <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} 
//     customMapping={mapping}>

//     <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
//       <Text>Welcome to UI Kitten</Text>
//       <Button size='tiny'>Help</Button>
//       <Button size='small'>HELP</Button>
//       <Button size='medium'>HELP</Button>
//       <Button size='large'>HELP</Button>
//       <Button size='giant'>HELP</Button>
//     </Layout>
//   </ApplicationProvider>
//   </>
// );

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppNavigator } from './navigation.component';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <AppNavigator/>
    </ApplicationProvider>
  </>
);