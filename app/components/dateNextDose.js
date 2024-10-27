import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const DoseMonth = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      value={data[selectedIndex-1]}
    >
      <SelectItem title='January' />
      <SelectItem title='February' />
      <SelectItem title='March' />
      <SelectItem title='April' />
      <SelectItem title='May' />
      <SelectItem title='June' />
      <SelectItem title='July' />
      <SelectItem title='August' />
      <SelectItem title='September' />
      <SelectItem title='October' />
      <SelectItem title='November' />
      <SelectItem title='December' />
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    backgroundColor: 'none'
  },
});