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

import { default as colorTheme } from "@/custom-theme.json";
import { styles } from "@/app/stylesheet";

import { LIBRARY_DATA } from "@/app/data/medData";

const ArchiveModal = ({ open, close, actionWord, onPress, description }) => {
  
  
  
  return (
    <Modal
      visible={open}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onBackdropPress={() => close()}
    >
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          padding: 40,
          paddingTop: 48,
          width: "90%",
          position: "fixed",
          top: "40%",
          left: 15,
          right: 15,
          borderRadius: 20,
        }}
      >
        <Text
          style={{ marginBottom: 18, paddingHorizontal: 32 }}
          category="h2"
        >
          {actionWord} This Medication?
        </Text>
        <Text style={{ width: 270, margin: "auto", marginBottom: 15 }}>
          {description}
        </Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Button
            size="small"
            onPress={() => close()}
            style={{
              flex: 1,
              backgroundColor: colorTheme["white"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">cancel</Text>}
          />
          <Button
            size="small"
            onPress={onPress}
            style={{
              flex: 1,
              backgroundColor: colorTheme["hunyadi-yellow"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">{actionWord}</Text>}
          />
        </View>
      </View>
    </Modal>
  );
};

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
        style={{width: "100%"}}
      >
        <View style={{width: "100%", justifyContent: "flex-end"}}>

        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            padding: 40,
            paddingTop: 48,
            width: "100%",
            height: "25%",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
          }}
        >
          <Text
            style={{ marginBottom: 32, paddingHorizontal: 32 }}
            category="h2"
          >
            {med.icon} {med.name}
          </Text>
          <Button
            size="giant"
            onPress={() => setShowArchiveModal(true)}
            style={{
              backgroundColor: colorTheme["hunyadi-yellow"],
              borderColor: colorTheme["hunyadi-yellow"],
              borderRadius: 16,
            }}
            children={() => <Text category="h2">{actionWord} This Med</Text>}
          />
        </View>
        </View>

      </Modal>
      <ArchiveModal
        open={showArchiveModal}
        close={() => setShowArchiveModal(false)}
        actionWord={actionWord}
        onPress={() => {
          // archive logic
          med.isArchive ? handleDelete(med) : handleArchive(med);
          setShowArchiveModal(false);
          setShowArchiveBottomModal(false);
        }}
        description={description}
      />
      <Button
        onPress={onPress}
        style={{
          backgroundColor: med.isArchive
            ? colorTheme["hunyadi-yellow"]
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
      <View style={{ flexDirection: "row", gap: 0, }}>
        <Text
          onPress={() => handleSwitch(1)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? colorTheme["green"] : "#fff",
            borderColor: "green",
            textAlign: "center",
            border: `solid ${colorTheme["green"]} 3`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 64,
            lineHeight: 64,
            color:
              selectedTab === 1 ? colorTheme["white"] : "black",
          }}
        >
          Current
        </Text>
        <Text
          onPress={() => handleSwitch(0)}
          style={{
            flex: 1,
            backgroundColor:
              selectedTab === 1 ? "#fff" : colorTheme["green"],
            borderColor: colorTheme["green"],
            textAlign: "center",
            border: `solid ${colorTheme["green"]} 3`,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            height: 64,
            lineHeight: 64,
            color:
              selectedTab === 1 ? colorTheme["black"] : "white",
          }}
        >
          Archive
        </Text>
      </View>
    );
  };

  const handleDelete = (med) => {
    setData((prev) => prev.filter((m) => m.name !== med.name));
  };
  const handleArchive = (med) => {
    setData((prev) => {
      const newData = prev.map((m) => {
        if (m.name === med.name) {
          m.isArchive = true;
        }
        return m;
      });
      return newData.filter((m) => !m.isArchive);
    });
  };

  return (
    <View style={{backgroundColor: colorTheme["white"], flex: 1}}>
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
              onPress={() =>
                navigation.navigate("Med Detail", {
                  medication: med,
                  handleDelete,
                  handleArchive,
                })
              }
              handleArchive={handleArchive}
              handleDelete={handleDelete}
            />
          ))}
      </View>
      </View>
  );
};

export const MedDescription = ({ navigation, route }) => {
  const medication = route.params.medication;

  return(
<SafeAreaView style={{ flex: 1, backgroundColor: colorTheme["green"] }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
        <Text category="h1" style={{ color: "white", marginBottom: 8 }}>
          Dosage
        </Text>
        <Text style={{ color: "white", marginBottom: 24 }}>
          ins
        </Text>
        <Text style={{ color: "white", marginBottom: 24 }}>
          description
        </Text>
        <Button
          style={{
            backgroundColor: colorTheme["white"],
            borderColor: colorTheme["green"],
            borderRadius: 20,
            width: "80%",
          }}
          onPress={() => navigation.navigate("Info", {
            medication: medication,
          })
        }
        >
          <Text category="h2" style={{ color: "green" }}>View & Edit Details</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export const InfoScreen = ({ navigation, route }) => {
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  // info screen
  const medication = route.params.medication;
  const handleDelete = route.params.handleDelete;
  const handleArchive = route.params.handleArchive;
  const actionWord = medication.isArchive ? "Delete" : "Archive";
  const description = medication.isArchive
    ? "Are you sure you want to delete this medication from the archive?"
    : "This medication will be marked as inactive and stored in the archive for future reference.";

  const onPress = () => {
    // Handle archiving logic here
    setShowArchiveModal(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Layout style={styles.masterLayout}>
        <ArchiveModal
          open={showArchiveModal}
          close={() => setShowArchiveModal(false)}
          actionWord={actionWord}
          onPress={() => {
            // archive logic
            if (medication.isArchive) {
              handleDelete(medication);
            } else {
              handleArchive(medication);
              navigation.goBack();
            }
            setShowArchiveModal(false);
          }}
          description={description}
        />
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 12,
              marginBottom: 60,
            }}
          >
            <View style={{flexDirection: "row", alignItems:'center', gap: 6}}>
              {medication.icon}
              <Text>{medication.name} Info</Text>
            </View>
            {/* <View style={{flexDirection: "row", justifyContent: 'center', gap: 6}}>
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
                  backgroundColor: colorTheme["green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Reminder
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
                  backgroundColor: colorTheme["green"],
                }}
                accessoryLeft={(props) => (
                  <Icon {...props} name="edit-outline" />
                )}
              >
                Info
              </Button>
            </View>
            <View style={{ flexDirection: "column", gap: 6 }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Icon style={{ width: 40 }} name="clock"></Icon>
                <Text style={{ color: colorTheme["green"] }}>
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
                <Icon style={{ width: 40 }} name="edit"></Icon>
                <Text style={{ color: colorTheme["persian-green"] }}>
                  Medication Info
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 32,
                  borderRadius: 20,
                  gap: 16,
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
              onPress={onPress}
              style={{
                backgroundColor: colorTheme["white"],
                borderColor: colorTheme["green"],
                borderRadius: 20,
              }}
              children={() => <Text category="h2">{actionWord} This Med</Text>}
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
          <Icon style={{ width: 40 }} name="clock"></Icon>
          <Text>
            Lisinoprill
            {/* {medication.name} */}
          </Text>
          <View style={{ gap: 20, margin: 20 }}>
            <View>
              <Text category="p2">Time</Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: "90%",
                  borderRadius: 20,
                }}
              >
                <Input style={{ flex: 6 }} placeholder="10: 30pm" />
              </View>
            </View>
            <View>
              <Text category="p2">Time Interval</Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "sliver-white",
                  width: "90%",
                  borderRadius: 20,
                }}
              >
                <Input style={{ flex: 6 }} placeholder="Every 2 hours" />
                <Button
                  style={{ flex: 3 }}
                  onPress={() => navigation.navigate("TimeIntervaledit")}
                >
                  Edit
                </Button>
              </View>
            </View>
            <View>
              <Text category="p2">Treatment Start Date</Text>
            </View>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
            />
            <View>
              <Text category="p2">Treatment End Date</Text>
            </View>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
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
              onPress={() => navigation.goBack()}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: 16 }}
              children={() => <Text category="h2">Confirm</Text>}
            />
              <Button
                onPress={() => navigation.goBack()}
                size="giant"
                style={{
                  backgroundColor: colorTheme["silver-white"],
                  borderColor: colorTheme["princeton-orange"],
                  borderRadius: 16,
                }}
                children={() => <Text category="h2">Cancel</Text>}
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
  // const med = route.params.medication; //not working
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
          <Icon style={{ width: 40 }} name="edit"></Icon>
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
                  border: `solid ${colorTheme["light-green"]} 3`,
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
                    border: `solid ${colorTheme["light-green"]} 3`,
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
            onPress={() => navigation.goBack()}
              // onPress={() => navigation.navigate("Info", { medication: med })}
              size="giant"
              style={{ ...styles.orangerButton, borderRadius: 16 }}
              children={() => <Text category="h2">Confirm</Text>}
            />
            <Button
              onPress={() => navigation.navigate("Med Stack", {screen: "Scan"})}
              size="giant"
              style={{
                backgroundColor: colorTheme["silver-white"],
                borderColor: colorTheme["princeton-orange"],
                borderRadius: 16,
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
          ...styles.masterLayout,
          flex: "none",
          backgroundColor: "white",
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
