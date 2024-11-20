import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const DisplayDropdown = ({data, setUnit, style=null}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  function handleSelect(index) {
    setSelectedIndex(index);
    setUnit(data[index-1]);
  }
  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => handleSelect(index)}
      value={data[selectedIndex-1]}
      style={{...style}}
    >
      {data.map((options, index) => {
        return <SelectItem key={index} title={options}></SelectItem>
      })}
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    backgroundColor: 'none'
  },
});
