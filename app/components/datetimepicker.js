import { StyleSheet, Text, View, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";

export default function DateTime() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (e, selectedDate) => {
        setDate(selectedDate); 
        setShow(false);
    };

    const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
    }

    return (
        <>
        <Button title="Show Date Picker" onPress={() => showMode("date")} />
        {
            show && (
                <DateTimePicker 
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />
            )
        }
        </>
    )
}