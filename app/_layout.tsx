import { Stack } from "expo-router";
import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Stack>
        <Stack.Screen name="home"/>
      </Stack>
    </ApplicationProvider>
  );
}