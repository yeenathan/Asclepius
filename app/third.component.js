import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout, Text, Datepicker, Icon, IconElement } from "@ui-kitten/components";

const CalendarIcon = (props): IconElement => (
  <Icon
    {...props}
    name='calendar'
  />
);

export const DatepickerAccessoriesShowcase = (): React.ReactElement => {

  const [date, setDate] = React.useState(new Date());

  return (
    <Layout
      style={styles.datepickerContainer}
      level='1'
    >
      <Datepicker
        label='Label'
        caption='Caption'
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
      />
    </Layout>
  );
};

export const ThirdScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>3</Text>

        <DatepickerAccessoriesShowcase />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  datepickerContainer: {
    minHeight: 360,
    marginTop: 20,
  },
});
