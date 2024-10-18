import React from 'react';
import { SafeAreaView, styles, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, container, withStyles, Avatar, SelectItem, OverflowMenu, Select, Tooltip, IconElement, Input, MenuItem } from '@ui-kitten/components';
import { View } from 'react-native';

const StarIcon = (props): IconElement => (
  <Icon
    {...props}
    name='star'
  />
);

const HeartIcon = (props): IconElement => (
  <Icon
    {...props}
    name='heart'
  />
);

const ForwardIcon = (props): IconElement => (
  <Icon
    {...props}
    name='arrow-ios-forward'
  />
);

export const DetailsScreen = ({ navigation }) => {
  
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [selectIndex, selectedIndex] = React.useState(undefined);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleTooltip = (): void => {
    setTooltipVisible(!menuVisible);
  };

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderInputIcon = (props): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        name={!secureTextEntry ? 'eye' : 'eye-off'}
      />
    </TouchableWithoutFeedback>
  );

  const renderTooltipButton = (): React.ReactElement => (
    <Button
      style={inputStyles.button}
      accessoryLeft={HeartIcon}
      onPress={toggleTooltip}
    >
      PRESS ME :3
    </Button>
  );

  const renderMenuButton = (): React.ReactElement => (
    <Button
      style={inputStyles.button}
      accessoryLeft={HeartIcon}
      onPress={toggleMenu}
    >
      Press Me PLZ!
    </Button>
  );

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8f8f8", gap: 10}}>
      {/* <ScrollView className="scrollview"> */}
        <Text category='h1'>Components</Text>
        
        <View style={{ flexDirection: "column", alignItems: "center", gap: 10}}>
          <Text category='h1'>H1 Header One</Text>
          <Text category='h2'>H2</Text>
          <Text category='h3'>H3</Text>
          <Text category='h4'>H4</Text>
          <Text category='h5'>H5</Text>
          <Text category='h6'>H6</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='S1'>S1</Text>
          <Text category='S2'>S2</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='p1'>p1</Text>
          <Text category='p2'>p2</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text category='c1'>C1</Text>
          <Text category='c2'>C2</Text>
        </View>

        <View style={{ flexDirection: "row"}}>
          <Text category='label'>LABEL</Text>
        </View> 

        <View>
          <Text>Default Text. Hello</Text>
          <Text appearance='hint'>Hint Text :3</Text>
          <Text appearance='alternative'>Alternative Text.....</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text status='primary'>Primary yipee</Text>
          <Text status='sucess'>Sucess Woo Hoo</Text>
          <Text status='info'>Info Smart</Text>
          <Text status='warning'>Warning !!!!</Text>
          <Text status='danger'>Danger Watch out</Text>
          <Text status='basic'>Basic as b*tch</Text>
          <Text style={{ borderRadius: 4, padding: 2, backgroundColor: '#3366FF' }} status='control'>Control your self</Text>
        </View>

        <View style={{ flexDirection: "column", alignItems: "center", gap: 10 }}>
          <Input placeholder='Input' value={value} secureTextEntry={secureTextEntry} onChangeText={setValue} accessoryRight={renderInputIcon}/>

          <Select placeholder='Select' selectIndex={selectIndex} accessoryLeft={StarIcon} onSelect={index => setselectIndex(index)}>
            <SelectItem accessoryLeft={HeartIcon} title='Click here for free food!!!'/>
            <SelectItem accessoryLeft={HeartIcon} title='YIPEEE'/>
            <SelectItem accessoryLeft={HeartIcon} title=';asldkjpgojg'/>
          </Select>

          <OverflowMenu fullWidth={true} onSelect={toggleMenu} visible={menuVisible} anchor={renderMenuButton} onBackdropPress={toggleMenu}>
            <MenuItem title='The First Option' accessoryRight={ForwardIcon}/>
            <MenuItem title='The Second Option' accessoryRight={ForwardIcon}/>
          </OverflowMenu>

          <Tooltip anchor={renderTooltipButton} visible={tooltipVisible} accessoryLeft={StarIcon} onBackdropPress={toggleTooltip}>
            Yipeee
          </Tooltip>

          <Button appearance='ghost' accessoryLeft={StarIcon}/>

        </View>
      {/* </ScrollView> */}
    </Layout>
  );
};

const inputStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 2,
  },
  button: {
    margin: 2,
  },
});


{/* <View style={{flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 5}}>
          <Button style={{  }} size='tiny'>Tiny</Button>
          <Button style={{  }} size='small'>Small</Button>
          <Button style={{  }} size='medium'>Medium</Button>
          <Button style={{  }} size='large'>Large</Button>
          <Button style={{  }} size='giant'>Giant</Button>
        </View> */}

