// import React from 'react';
// import { StyleSheet, View, Button } from 'react-native';
// import { useState } from 'react';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// export const DateTimeSet = () => {
//     const [date, setDate] = useState(new Date());
//     const [show, setShow] = useState(false);
//     const [mode, setMode] = useState('date');

//     const onChange = (e, selectedDate) => {
//         setDate(selectedDate);
//         setShow(false);
//     };

//     const showMode = (modeToShow) => {
//         setShow(true);
//         setMode(modeToShow);
//     }

//     return (
//         <>
//         <Button title="Show Date Picker" onPress={() => showMode("date")} />
//         <Button title="Show Time Picker" onPress={() => showMode("time")} />
//         {show && (
//             <DateTimePickerAndroid
//                 value={date}
//                 mode={mode}
//                 is24Hour={true}
//                 onChange={onChange}
//             />
//             )
//         }
//         </>
//     );
// };
// import React, { useState } from 'react';
// import { Button, View, StyleSheet, Text } from 'react-native';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// export const DateTimeSet = () => {
//     const [date, setDate] = useState(new Date());

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setDate(currentDate);
//     };

//     const showMode = (currentMode) => {
//         DateTimePickerAndroid.open({
//             value: date,
//             onChange,
//             mode: currentMode,
//             is24Hour: true,
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <Text>Selected Date: {date.toLocaleString()}</Text>
//             <Button title="Show Date Picker" onPress={() => showMode("date")} />
//             <Button title="Show Time Picker" onPress={() => showMode("time")} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
