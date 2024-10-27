import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const Measure = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = [
    "Pill(s)",
    "mL",
    "CC",
    "Unit(s)",
    "Application(s)",
    "Pen(s)"
  ]

  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      value={data[selectedIndex-1]}
    >
      <SelectItem title='Pill(s)' />
      <SelectItem title='mL' />
      <SelectItem title='CC' />
      <SelectItem title='Unit(s)' />
      <SelectItem title='Application(s)' />
      <SelectItem title='Pen(s)' />
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    backgroundColor: 'none'
  },
});
