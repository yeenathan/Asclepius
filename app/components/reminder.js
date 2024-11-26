import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReminderApp = () => {
  const [reminderTimes, setReminderTimes] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const onAddTime = () => {
    setShowPicker(true);
  };

  const onTimeChange = (event, selectedTime) => {
    setShowPicker(false);
    if (selectedTime) {
      const newTime = new Date(selectedTime);
      setReminderTimes([...reminderTimes, newTime]);
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {reminderTimes.map((time, index) => (
          <TouchableOpacity key={index} style={{ margin: 5, padding: 10, backgroundColor: '#e0f7fa', borderRadius: 20 }}>
            <Text>{time.toLocaleTimeString()}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={onAddTime} style={{ margin: 5, padding: 10, backgroundColor: '#e0e0e0', borderRadius: 20 }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

export default ReminderApp;
