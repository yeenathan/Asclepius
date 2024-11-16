import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json";

function getWeek() {
    let _week = [];
    let currentDate = new Date();
    for (let i=0; i<7; i++) {
        _week.push({date: new Date(currentDate), id: i, status: false});
        currentDate.setDate(new Date(currentDate.getDate()+1));
    }
    _week[0].status = true;
    return _week;
}

/**
 * Individual calendar item component
 */
const Item = ({ date, setDay, currentDay }) => {
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
    const day = new Date(date).getDay();
    const current = new Date(currentDay).getDay();
    return (
        <TouchableOpacity onPress={() => {
            setDay(new Date(date));
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
                    backgroundColor: day === current ? colorTheme["dark-green"] : "#fff",
                    borderColor: "transparent"
                }}
            >
                <Text category="c1" style={{color: day === current ? "#fff" : "000"}}>{date.getDate()}</Text>
                <Text category="h2" style={{color: day === current ? "#fff" : "000"}}>{getDayString(day)}</Text>
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
export function HorizontalCalendar({ setDay, currentDay }) {
    return (
        <>
            <Text category="p2" style={{color: colorTheme["text-off-black"]}}>{parseMonth(new Date().getMonth())}</Text>
            <FlatList
                data={getWeek()}
                renderItem={({ item }) => {
                    return <Item
                        date={item.date}
                        setDay={setDay}
                        currentDay={currentDay}
                    />
                }}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 16, marginTop: 6.4 }}
            />
        </>
    );
}
