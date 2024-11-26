import React from 'react';
import { TopNavigation, TopNavigationAction, Icon, Text } from "@ui-kitten/components";
import { default as theme } from "@/custom-theme.json";
import { ThemeContext } from '../theme-context';

export const Header = ({ navigation, title, showSettings = true }) => {
  const colorTheme = theme[React.useContext(ThemeContext).theme];
  // Back button action
  const BackAction = () => (
    <TopNavigationAction
      onPress={() => navigation.goBack()}
      icon={(props) => <Icon {...props} name="arrow-ios-back-outline" fill="#A0A0A0" style={{width: 45, height: 45}} />}
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
        <Text {...props} style={{ color: colorTheme['header'], fontSize: 18 }}>
          {title}
        </Text>
      )}
      style={{
        width: "100%",
        backgroundColor: colorTheme["generic-bg"],
        paddingVertical: 40,
        paddingHorizontal: 8,
      }}
    />
  );
};
