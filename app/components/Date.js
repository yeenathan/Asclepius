import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

export const DoseDay = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"

  ]

  return (
    <Select
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      value={data[selectedIndex-1]}
    >
      <SelectItem title='01' />
      <SelectItem title='02' />
      <SelectItem title='03' />
      <SelectItem title='04' />
      <SelectItem title='05' />
      <SelectItem title='06' />
      <SelectItem title='07' />
      <SelectItem title='08' />
      <SelectItem title='09' />
      <SelectItem title='10' />
      <SelectItem title='11' />
      <SelectItem title='12' />
      <SelectItem title='13' />
      <SelectItem title='14' />
      <SelectItem title='15' />
      <SelectItem title='16' />
      <SelectItem title='17' />
      <SelectItem title='18' />
      <SelectItem title='19' />
      <SelectItem title='20' />
      <SelectItem title='21' />
      <SelectItem title='22' />
      <SelectItem title='23' />
      <SelectItem title='24' />
      <SelectItem title='25' />
      <SelectItem title='26' />
      <SelectItem title='27' />
      <SelectItem title='28' />
      <SelectItem title='29' />
      <SelectItem title='30' />
      <SelectItem title='31' />
    </Select>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    backgroundColor: 'none'
  },
});