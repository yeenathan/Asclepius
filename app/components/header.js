import React from 'react';
import { TopNavigation, TopNavigationAction, Icon, Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json";

export const Header = ({ navigation, title, showSettings = true }) => {
  // Back button action
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-back" />}
    />
  );

  // Settings button action
  const SettingsAction = () => (
    showSettings && (
      <TopNavigationAction
        onPress={() => navigation.navigate("Settings")}
        icon={(props) => <Icon {...props} name="settings-2-outline" />}
      />
    )
  );

  return (
    <TopNavigation
      accessoryLeft={BackAction}
      accessoryRight={SettingsAction}
      title={(props) => (
        <Text {...props} style={{ color: colorTheme['black'], fontSize: 18 }}>
          {title}
        </Text>
      )}
      style={{
        width: "100%",
        backgroundColor: colorTheme["silver-white"],
        paddingVertical: 32,
        paddingHorizontal: 24,
      }}
    />
  );
};
