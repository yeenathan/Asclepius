import React, { useState } from "react";
import { SafeAreaView, View, Image, ScrollView } from "react-native";
import {
  Button,
  Layout,
  Text,
  Icon,
  IndexPath,
  Select,
  SelectItem,
  Modal,
  Input,
  Datepicker,
} from "@ui-kitten/components";
import { Header } from "@/app/components/header";
import { MyButton } from "@/app/components/MyButton";

import { default as colorTheme } from "@/custom-theme.json";
import { styles } from "@/app/stylesheet";

import { LIBRARY_DATA } from "@/app/data/medData";
import { HomeScreen } from "./home.component";

const MedButton = ({ index, med, onPress, handleArchive, handleDelete }) => {
  const [showArchiveBottomModal, setShowArchiveBottomModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const toggleArchiveBottomModal = () => {
    setShowArchiveBottomModal((prev) => !prev);
  };
  const actionWord = med.isArchive ? "Delete" : "Archive";
  const description = med.isArchive
    ? "Are you sure you want to delete this medication from the archive?"
    : "This medication will be marked as inactive and stored in the archive for future reference.";

  return (
    <>
      <Modal
        visible={showArchiveBottomModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={toggleArchiveBottomModal}
      >
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            width: "100vw",
            position: "fixed",
            bottom: "0",
            left: "0",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <Text
            style={{ marginBottom: 32, paddingHorizontal: 32 }}
            category="h2"
          >
            {med.name}
          </Text>
          <Button
            size="giant"
            onPress={() => setShowArchiveModal(true)}
            style={{
              backgroundColor: colorTheme["light-green"],
              borderColor: colorTheme["light-green"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">{actionWord} This Med</Text>}
          />
        </View>
      </Modal>
      <Modal
        visible={showArchiveModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowArchiveModal(false)}
      >
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            width: "calc(100vw - 30px)",
            position: "absolute",
            top: "50%",
            transform: "translateY(50px)",
            left: "15px",
            right: "15px",
            borderRadius: "20px",
          }}
        >
          <Text
            style={{ marginBottom: "18px", paddingHorizontal: 32 }}
            category="h2"
          >
            {actionWord} This Medication?
          </Text>
          <Text
            style={{ width: "270px", margin: "auto", marginBottom: "15px" }}
          >
            {description}
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            <Button
              size="small"
              onPress={() => setShowArchiveModal(false)}
              style={{
                flex: 1,
                backgroundColor: colorTheme["white"],
                borderColor: colorTheme["light-green"],
                borderRadius: 16,
              }}
              children={() => <Text category="h2">cancel</Text>}
            />
            <Button
              size="small"
              onPress={() => {
                // archive logic
                med.isArchive ? handleDelete(med) : handleArchive(med);
                setShowArchiveModal(false);
                setShowArchiveBottomModal(false);
              }}
              style={{
                flex: 1,
                backgroundColor: colorTheme["light-green"],
                borderColor: colorTheme["light-green"],
                borderRadius: 16,
              }}
              children={() => <Text category="h2">{actionWord}</Text>}
            />
          </View>
        </View>
      </Modal>
      <Button
        onPress={onPress}
        style={{
          backgroundColor: med.isArchive
            ? colorTheme["light-orange"]
            : colorTheme["light-blue"],
          ...styles.invisBorder,
        }}
        key={index}
        children={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignItems: "center",
            }}
          >
            {/* <Image source={med.icon} /> */}
            <Text category="h2">{med.name}</Text>
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => {
                toggleArchiveBottomModal();
              }}
            >
              &#65049;
            </Text>
          </View>
        )}
      />
    </>
  );
};

export const MedFolder = ({ navigation }) => {
  // med folder component
  const [data, setData] = useState(LIBRARY_DATA);
  const [selectedTab, setSelectedTab] = useState(1);

  function handleSwitch(value) {
    if (value) {
      setData(LIBRARY_DATA.filter((data) => !data.isArchive));
    } else {
      setData(LIBRARY_DATA.filter((data) => data.isArchive));
    }
    setSelectedTab(value);
  }

  const TabSwitch = () => {
    return (
      <View style={{ flexDirection: "row", gap: 0 }}>
        <Text
          onPress={() => handleSwitch(1)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? colorTheme["silver-white"] : "#fff",
            borderColor: colorTheme["silver-white"],
            textAlign: "center",
            border: `solid ${colorTheme["silver-white"]} 3px`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "64px",
            lineHeight: 64,
          }}
        >
          Current
        </Text>
        <Text
          onPress={() => handleSwitch(0)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? "#fff" : colorTheme["silver-white"],
            borderColor: colorTheme["silver-white"],
            textAlign: "center",
            border: `solid ${colorTheme["silver-white"]} 3px`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: "64px",
            lineHeight: 64,
          }}
        >
          Archive
        </Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: colorTheme["silver-white"], flex: 1}}>
      <TabSwitch />
        <View
          style={{
            paddingHorizontal: 40,
            marginTop: 32,
            gap: 16,
          }}
        >
          {data.map((med, index) => (
            <MedButton
              key={med.name}
              med={med}
              index={index}
              onPress={() => navigation.navigate("Info", { medication: med })}
              handleArchive={(med) => {
                setData((prev) => {
                  const newData = prev.map((m) => {
                    if (m.name === med.name) {
                      m.isArchive = true;
                    }
                    return m;
                  });
                  return newData.filter((m) => !m.isArchive);
                });
              }}
              handleDelete={(med) => {
                setData((prev) => prev.filter((m) => m.name !== med.name));
              }}
            />
          ))}
        </View>
      </View>
  );
};

export const InfoScreen = ({ navigation, route }) => {
  // info screen
  const medication = route.params.medication;

  const handleArchive = () => {
    // Handle archiving logic here
    console.log(`${medication.name} archived`);
  };

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <Header navigation={navigation} />
    //   <ScrollView contentContainerStyle={{ padding: 16 }}>
    //     <Layout style={styles.masterLayout}>

    //       Reminder Section
    //       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
    //         <Icon name="clock-outline" fill={colorTheme['persian-green']} style={{ width: 24, height: 24, marginRight: 8 }} />
    //         <Text category="h1" style={{ color: colorTheme['persian-green'] }}>Reminder</Text>
    //       </View>
    //       <View style={{
    //         backgroundColor: "#ffffff",
    //         borderRadius: 10,
    //         padding: 16,
    //         marginBottom: 16,
    //       }}>
    //         {medication.reminder.map((item, index) => (
    //           <Text key={index} category="p1" style={{ marginBottom: 4 }}>
    //             {item}
    //           </Text>
    //         ))}
    //       </View>

    //       Medication Info Section
    //       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
    //         <Icon name="file-text-outline" fill={colorTheme['persian-green']} style={{ width: 24, height: 24, marginRight: 8 }} />
    //         <Text category="h1" style={{ color: colorTheme['persian-green'] }}>Medication Info</Text>
    //       </View>
    //       <View style={{
    //         backgroundColor: "#ffffff",
    //         borderRadius: 10,
    //         padding: 16,
    //         marginBottom: 16,
    //       }}>
    //         <Text category="h3" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>Description</Text>
    //         <Text>{medication.description}</Text>

    //         <Text category="h3" style={{ color: colorTheme['persian-green'], marginTop: 16, marginBottom: 8 }}>Side Effects</Text>
    //         <View style={{ marginTop: 8 }}>
    //           {medication.sideEffects.map((effect, index) => (
    //             <Text key={index}>• {effect}</Text>
    //           ))}
    //         </View>

    //         <Text category="h3" style={{ color: colorTheme['persian-green'], marginTop: 16, marginBottom: 8 }}>Directions for Use</Text>
    //         <View style={{ marginTop: 8 }}>
    //           {medication.directions.map((direction, index) => (
    //             <Text key={index}>• {direction}</Text>
    //           ))}
    //         </View>

    //         Medication Summary
    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
    //           <View>
    //             <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
    //               Drug Strength
    //             </Text>
    //             <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
    //               Dosage Type
    //             </Text>
    //             <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
    //               Quantity Prescribed
    //             </Text>
    //             <Text category="h5" style={{ color: colorTheme['persian-green'], marginBottom: 8 }}>
    //               Number of Refills
    //             </Text>
    //           </View>
    //           <View>
    //             <Text style={{ marginBottom: 8 }}>{medication.strength}</Text>
    //             <Text style={{ marginBottom: 8 }}>{medication.type}</Text>
    //             <Text style={{ marginBottom: 8 }}>{medication.quantity}</Text>
    //             <Text style={{ marginBottom: 8 }}>{medication.refills}</Text>
    //           </View>
    //         </View>
    //       </View>

    //       Archive Button
    //     </Layout>
    //   </ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 12,
              marginBottom: 60,
            }}
          >
            {/* <View style={{flexDirection: "row", alignItems:'center', gap: 6}}>
              {medication.icon}
              <Text>{medication.name} Info</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: 'center', gap: 6}}>
              <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Reminder", medication: medication})}>Edit Reminder</Button>
              <Button onPress={() => navigation.navigate("Med Stack", {screen: "Edit Info", medication: medication})}>Edit Info</Button>
            </View> */}
            {/* Medication Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              {/* <Image
                source={medication.icon}
                style={{ width: 40, height: 40, marginRight: 16 }}
              /> */}
              <Text category="h2">{medication.name}</Text>
            </View>

            {/* Edit Buttons */}
            <View style={{ flexDirection: "row", gap: 8, marginBottom: 16 }}>
              <Button
                onPress={() =>
                  navigation.navigate("Med Stack", {
                    screen: "Edit Reminder",
                    medication,
                  })
                }
                style={{
                  flex: 1,
                  backgroundColor: colorTheme["persian-green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Edit Reminder
              </Button>
              <Button
                onPress={() =>
                  navigation.navigate("Med Stack", {
                    screen: "Edit Info",
                    medication,
                  })
                }
                style={{
                  flex: 1,
                  backgroundColor: colorTheme["persian-green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Edit Info
              </Button>
            </View>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Icon style={{ width: "40px" }} name="clock"></Icon>
                <Text style={{ color: colorTheme["persian-green"] }}>
                  Reminder
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 32,
                  borderRadius: 20,
                }}
              >
                <Text>{medication.reminder}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Icon style={{ width: "40px" }} name="edit"></Icon>
                <Text style={{ color: colorTheme["persian-green"] }}>
                  Medication Info
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: "2rem",
                  borderRadius: 20,
                  gap: "1rem",
                }}
              >
                <View>
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Description
                  </Text>
                  <Text>{medication.description}</Text>
                </View>
                <View>
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Side Effects
                  </Text>
                  {medication.sideEffects.map((effect, index) => (
                    <Text key={index}>• {effect}</Text>
                  ))}
                </View>
                <View>
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Directions for Use
                  </Text>
                  <Text>{medication.directions}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Drug Strength
                  </Text>
                  <Text>{medication.strength}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Dosage Type
                  </Text>
                  <Text>{medication.type}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Quantity Prescribed
                  </Text>
                  <Text>{medication.quantity}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text style={{ color: colorTheme["persian-green"] }}>
                    Number of Refills
                  </Text>
                  <Text>{medication.refills}</Text>
                </View>
              </View>
            </View>
            <Button
              size="giant"
              onPress={handleArchive}
              style={{
                backgroundColor: colorTheme["light-green"],
                borderColor: colorTheme["light-green"],
                borderRadius: "1rem",
              }}
              children={() => <Text category="h2">Archive This Med</Text>}
            />
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export const EditReminderScreen = ({ route, navigation }) => {
  // edit reminder screen
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const strengthOptions = ["2.5mg", "5mg", "10mg", "20mg", "30mg", "40mg"];
  const typeOptions = [
    "Pill",
    "Capsule",
    "Liquid",
    "Spray",
    "Drops",
    "Injection",
    "Cream",
  ];
  const refillsOptions = ["1", "2", "3", "4"];
  const [date, setDate] = React.useState(new Date());

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <View style={{ flex: 1, justifyContent: "flex-start", width: "95%" }}>
          <Icon style={{ width: "40px" }} name="clock"></Icon>
          <Text>
            Lisinoprill
            {/* {medication.name} */}
          </Text>
          <View style={{ gap: 20, margin: 20 }}>
            <View>
              <Text category="p2">Time</Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='10: 30pm'/>
              </View>
            </View>
            <View>
              <Text category="p2">Time Interval</Text>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "sliver-white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='Every 2 hours'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("TimeIntervaledit")}>Edit</Button>
        </View>
            </View>
            <View>
              <Text category="p2">Treatment Start Date</Text>
            </View>
            <Datepicker
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
            <View>
              <Text category="p2">Treatment End Date</Text>
            </View>
            <Datepicker
        date={date}
        onSelect={nextDate => setDate(nextDate)}
      />
            <View>
              <Text category="p2">Refill Reminder</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "sliver-white", width: '90%', borderRadius: 20 }}>
          <Input style={{ flex: 6}} placeholder='10 pill(s) left'/>
          <Button style={{ flex: 3 }} onPress={() => navigation.navigate("Current Pill Number")}>Edit</Button>
          </View>
          <View style={{ gap: 6 }}>
            <Button
              onPress={() => navigation.navigate("Info")}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: "1rem" }}
              children={() => <Text category="h2">Confirm</Text>}
            />
            <Button
              size="giant"
              style={{
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["princeton-orange"],
                borderRadius: "1rem",
              }}
              children={() => <Text category="h2">Scan Med Again</Text>}
            />
          </View>
        </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export const EditInfoScreen = ({ navigation, route }) => {
  // edit info screen
  // const medication = route.params.medication;//not working
  // console.log(medication);
  const [directions, setDirections] = useState("");
  // function handleEditDirections(e) {
  //   setDirections(e.target.value);
  // }

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const strengthOptions = ["2.5mg", "5mg", "10mg", "20mg", "30mg", "40mg"];
  const typeOptions = [
    "Pill",
    "Capsule",
    "Liquid",
    "Spray",
    "Drops",
    "Injection",
    "Cream",
  ];
  const refillsOptions = ["1", "2", "3", "4"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <View style={{ flex: 1, justifyContent: "flex-start", width: "95%" }}>
          <Icon style={{ width: "40px" }} name="edit"></Icon>
          <Text>Edit medication Info</Text>
          <Text>
            Lisinoprill
            {/* {medication.name} */}
          </Text>
          <View style={{ gap: 20, margin: 20 }}>
            <View>
              <Text category="p2">Directions for Use</Text>
              <textarea
                name="directions"
                style={{
                  border: `solid ${colorTheme["light-green"]} 3px`,
                  borderRadius: 20,
                  padding: 16,
                }}
              ></textarea>
            </View>
            <View>
              <Text category="p2">Drug Strength</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={strengthOptions[selectedIndex - 1]}
              >
                {strengthOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
            <View>
              <Text category="p2">Dosage Type</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={typeOptions[selectedIndex - 1]}
              >
                {typeOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
            <View>
              <Text category="p2">Quantity Prescribed</Text>
              <View
                style={{ flexDirection: "row", alignItems: "flex-end", gap: 6 }}
              >
                <input
                  type="number"
                  style={{
                    border: `solid ${colorTheme["light-green"]} 3px`,
                    borderRadius: 10,
                    padding: 8,
                  }}
                ></input>
                <Text>Tablets</Text>
              </View>
            </View>
            <View>
              <Text category="p2">Number of Refills</Text>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                value={refillsOptions[selectedIndex - 1]}
              >
                {refillsOptions.map((i, index) => (
                  <SelectItem key={index} title={i} />
                ))}
              </Select>
            </View>
          </View>
          <View style={{ gap: 6 }}>
            <Button
              onPress={() => navigation.navigate(InfoScreen)}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: "1rem" }}
              children={() => <Text category="h2">Confirm</Text>}
            />
            <Button
              size="giant"
              style={{
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["princeton-orange"],
                borderRadius: "1rem",
              }}
              children={() => <Text category="h2">Scan Med Again</Text>}
            />
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export const MedLibraryScreen = ({ navigation }) => {
  // main med library screen
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{
          ...styles.masterLayout, flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.rowContainer}>
          <Text category="h1" style={{ color: colorTheme["persian-green"] }}>
            Med Library
          </Text>
          <Icon style={{ width: 40 }} name="settings-2-outline"></Icon>
        </View>
      </Layout>
      <View style={{flex: 8}}>
        <MedFolder navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};