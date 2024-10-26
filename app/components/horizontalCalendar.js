import React, { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json"

const DATA = [
    {
        date: 7,
        day: "Mon",
        id: 1,
        status: true
    },
    {
        date: 8,
        day: "Tue",
        id: 2,
        status: false
    },
    {
        date: 9,
        day: "Wed",
        id: 3,
        status: false
    },
    {
        date: 10,
        day: "Thu",
        id: 4,
        status: false
    },
    {
        date: 11,
        day: "Fri",
        id: 5,
        status: false
    },
    {
        date: 12,
        day: "Sat",
        id: 6,
        status: false
    },
    {
        date: 13,
        day: "Sun",
        id: 7,
        status: false
    }
]
/**
 * dw about the onpress stuff
 */
const Item = (props) => {
    return(
        <TouchableOpacity onPress={() => props.handleSetDay(props.day)}>
            <View style={{
                marginHorizontal: ".5rem",
                border: "1px solid black", 
                borderRadius: "5rem",
                width: "4.5rem",
                paddingHorizontal: ".5rem",
                paddingVertical: "1rem",
                alignItems: "center",
                backgroundColor: props.day === props.currentDay ? colorTheme["light-green"] : null
            }}
            >
                <Text category="h2">{props.date}</Text>
                <Text category="h2">{props.day}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function HorizontalCalendar({handleSetDay, currentDay}) {   
    return(
        <>
            <Text category="p2">October</Text>
            <ScrollView horizontal="true" style={{marginBottom: "1rem", marginTop: ".4rem"}}>
                <FlatList // check MedList component in home.component.js for explanation of some properties
                    data={DATA}
                    renderItem={ ({item}) => <Item date={item.date} day={item.day} selected={item.status} handleSetDay={handleSetDay} currentDay={currentDay}/>}
                    keyExtractor={ item => item.id}
                    horizontal="true"
                />
            </ScrollView>
        </>
    )
}