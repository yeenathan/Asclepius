import {styles} from "@/app/stylesheet"
import { Image, View } from "react-native"
import { Button, Text } from "@ui-kitten/components"
import { useEffect, useState, useContext } from "react";
import {default as theme} from "@/custom-theme.json"
import { ThemeContext } from "@/app/theme-context";

export function MedReminder({navigation, data, currentDay, getDayData, handleTaken}) {
  const colorTheme = theme[useContext(ThemeContext).theme];
  const _dayData = getDayData(currentDay, data);

  function findNextIndex(data, currentDay) {
    const _currentDate = new Date(currentDay).getDate();
    for (let i=0; i<data.length; i++) {
      for (let j=0; j<data[i].dates.length; j++) {
        const _taken = data[i].dates[j].taken;
        const _date = new Date(data[i].dates[j].date).getDate();
        if (_date === _currentDate) {
          if (!_taken) return i;
        }
      }
    }
    return -1;
  }

  function getNextMed(data, currentDay) {
    if (findNextIndex(data, currentDay) === -1) {
      return -1;
    }
    return data[findNextIndex(data, currentDay)];
  }

  const formatTime = (time=null) => {
    let t;
    if (time) t = new Date(time);
    else t = new Date();
    let minutes = t.getMinutes().toString().length < 2 ? `0${t.getMinutes()}` : t.getMinutes();
    return `${t.getHours()}:${minutes}`;
  }
  const _med = getNextMed(_dayData, currentDay);
  const [nextMed, setNextMed] = useState(_med);

  useEffect(() => {
    setNextMed(() => getNextMed(_dayData, currentDay));
  }, [data])

  return(
    <View style={styles.customShape}>
      {data && data.length<1 ?
      <>
        <Text category="h2" style={{ color: 'white', fontSize: 17 }}>
          No Medications Added Yet.
        </Text>
        <Text category="c1" style={{ color: 'white'}}>
          Tap below to start managing your reminders.
        </Text>
      </> :
      nextMed !== -1?
      <View style={{flexDirection: "row", gap: 32, alignItems: "center" }}>
        <Image source={nextMed.icon} resizeMode="contain" style={{maxHeight: 80, maxWidth: 80}}/>
        <View>
          <Text category="h2" style={{color: "#ffffff"}}>{`${nextMed.nickname || nextMed.name}`}</Text>
          <Text category="p1" style={{color: "#ffffff"}}>{`${nextMed.dose}`}</Text>
          <Text category="h1" style={{color: "#BDD6D2", fontFamily:"Poppins-Semibold"}}>{formatTime(nextMed.time)}</Text>
        </View>
      </View>
      :
      <View>
        <Text category="p2" style={{color: "#ffffff"}}>Well done, Nathan!</Text>
        <Text category="c1" style={{color: "#ffffff"}}>All medications done for today.</Text>
      </View>
      }
      <View style={{width: "100%", alignItems: "flex-end"}}>
        {
          !data || data && data.length<1?
          <Button
            size="small"
            style={{
              ...styles.whiteButton,
              borderRadius: 16,
              maxWidth: "fit-content",
              position: "absolute",
              marginTop: 4
            }}
            onPress={() => navigation.navigate("Med Stack", {screen: "Add Med"})}
            children={() => <Text category="c1" style={{paddingHorizontal: 8, color: colorTheme["generic-text"]}}>Add Medication</Text>}
          /> :
          nextMed !== -1?
          <Button
          size="small"
          style={{
            ...styles.whiteButton,
            borderRadius: 16,
            maxWidth: "fit-content",
            position: "absolute",
            marginTop: 4
          }}
          onPress={() => handleTaken(nextMed, currentDay)}
          children={() => <Text category="c1" style={{paddingHorizontal: 8, color: colorTheme["generic-text"]}}>Take Now</Text>}
          />
          : null
        }
        
      </View>
    </View>
  )
}