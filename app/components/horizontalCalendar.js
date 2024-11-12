import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json";

const DATA = [
    { date: 7, day: 1, id: 1, status: true },
    { date: 8, day: 2, id: 2, status: false },
    { date: 9, day: 3, id: 3, status: false },
    { date: 10, day: 4, id: 4, status: false },
    { date: 11, day: 5, id: 5, status: false },
    { date: 12, day: 6, id: 6, status: false },
    { date: 13, day: 0, id: 7, status: false },
];

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
                    borderRadius: 25,
                    width: 72,
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    alignItems: "center",
                    backgroundColor: day === currentDay ? colorTheme["light-green"] : null,
                }}
            >
                <Text category="h2">{date}</Text>
                <Text category="h2">{getDayString(day)}</Text>
            </View>
        </TouchableOpacity>
    );
};

/**
 * Horizontal calendar component
 */
export function HorizontalCalendar({ handleSetDay, currentDay }) {
    return (
        <>
            <Text category="p2">October</Text>
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
