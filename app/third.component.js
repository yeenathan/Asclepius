import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Layout, Text, Datepicker, Icon, IconElement } from "@ui-kitten/components";

// ThirdScreen 내에서 사용될 아이콘
const CalendarIcon = (props): IconElement => (
  <Icon
    {...props}
    name='calendar'
  />
);

// Datepicker 컴포넌트 추가
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

// ThirdScreen 컴포넌트
export const ThirdScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>3</Text>

        {/* Datepicker 추가 */}
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
