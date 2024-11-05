import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json";

const DATA = [
    { date: 7, day: "Mon", id: 1, status: true },
    { date: 8, day: "Tue", id: 2, status: false },
    { date: 9, day: "Wed", id: 3, status: false },
    { date: 10, day: "Thu", id: 4, status: false },
    { date: 11, day: "Fri", id: 5, status: false },
    { date: 12, day: "Sat", id: 6, status: false },
    { date: 13, day: "Sun", id: 7, status: false },
];

/**
 * Individual calendar item component
 */
const Item = ({ date, day, handleSetDay, currentDay }) => {
    return (
        <TouchableOpacity onPress={() => handleSetDay(day)}>
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
                <Text category="h2">{day}</Text>
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
