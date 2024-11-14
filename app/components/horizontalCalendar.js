import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json";

const DATA = [
    { date: getDateOfWeekday(1), day: 1, id: 1, status: true },
    { date: getDateOfWeekday(2), day: 2, id: 2, status: false },
    { date: getDateOfWeekday(3), day: 3, id: 3, status: false },
    { date: getDateOfWeekday(4), day: 4, id: 4, status: false },
    { date: getDateOfWeekday(5), day: 5, id: 5, status: false },
    { date: getDateOfWeekday(6), day: 6, id: 6, status: false },
    { date: getDateOfWeekday(7), day: 0, id: 7, status: false },
];

//thanks gpt
function getDateOfWeekday(dayOfWeek) {
    const today = new Date();
    const currentDay = today.getDay(); // Get the current day of the week (0-6, where 0 is Sunday)
    const diff = dayOfWeek - currentDay; // Calculate the difference to the target day
    const targetDate = new Date(today); // Clone today's date
    targetDate.setDate(today.getDate() + diff); // Adjust to the target date
    return targetDate.getDate(); // Return the date number
}

/**
 * Individual calendar item component
 */
const Item = ({ date, day, handleSetDay, currentDay }) => {
    function getDayString(dayNum) {
        switch (dayNum) {
            case 0 : return "Sun";
            case 1 : return "Mon";
            case 2 : return "Tue";
            case 3 : return "Wed";
            case 4 : return "Thu";
            case 5 : return "Fri";
            case 6 : return "Sat";
        }
    }
    return (
        <TouchableOpacity onPress={() => {
            handleSetDay(day);
        }}>
            <View
                style={{
                    marginHorizontal: 8, // Column gap between days
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 4,
                    width: 60,
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    alignItems: "center",
                    backgroundColor: day === currentDay ? colorTheme["dark-green"] : "#fff",
                    borderColor: "transparent"
                }}
            >
                <Text category="c1" style={{color: day === currentDay ? "#fff" : "000"}}>{date}</Text>
                <Text category="h2" style={{color: day === currentDay ? "#fff" : "000"}}>{getDayString(day)}</Text>
            </View>
        </TouchableOpacity>
    );
};

function parseMonth(monthNum) {
    switch (monthNum) {
        case 0 : return "January";
        case 1 : return "February";
        case 2 : return "March";
        case 3 : return "April";
        case 4 : return "May";
        case 5 : return "June";
        case 6 : return "July";
        case 7 : return "August";
        case 8 : return "September";
        case 9 : return "October";
        case 10 : return "November";
        case 11 : return "December";
    }
}

/**
 * Horizontal calendar component
 */
export function HorizontalCalendar({ handleSetDay, currentDay }) {
    return (
        <>
            <Text category="p2" style={{color: colorTheme["text-off-black"]}}>{parseMonth(new Date().getMonth())}</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        date={item.date}
                        day={item.day}
                        handleSetDay={handleSetDay}
                        currentDay={currentDay}
                    />
                )}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 16, marginTop: 6.4 }}
            />
        </>
    );
}
