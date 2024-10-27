import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const TimeInterval = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = [
    "Hours",
    "Days",
    "Weeks",
    "Months"
  ]

  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      value={data[selectedIndex-1]}
    >
      <SelectItem title='Hours' />
      <SelectItem title='Days' />
      <SelectItem title='Weeks' />
      <SelectItem title='Months' />
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    backgroundColor: 'none'
  },
});
