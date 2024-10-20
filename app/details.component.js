import React from 'react';
import { SafeAreaView, styles, StyleSheet, ScrollView, TouchableWithoutFeedback, ViewProps} from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, container, withStyles, Avatar, SelectItem, OverflowMenu, Select, Tooltip, IconElement, Input, MenuItem, Card } from '@ui-kitten/components';
import { View } from 'react-native';

const Header = (props: ViewProps): React.ReactElement => (
  <View {...props}>
    <Text category='h6'>
      Jujutsu Kaisen
    </Text>
    <Text category='s1'>
      By Gege Akutami
    </Text>
  </View>
); 

const Footer = (props: ViewProps): React.ReactElement => (
  <View 
    {...props}
    // eslint-disable-next-line react/prop-types
    style={[props.style, cardStyles.footerContainer]}
  >
    <Button
      style={cardStyles.footerControl}
      size='small'
      status='basic'
    >
      Deny
    </Button>
    <Button
      style={cardStyles.footerControl}
      size='small'
    >
      OK
    </Button>
  </View>
);

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

  const zoomIconRefpress = React.useRef(null);
  const pulseIconRefpress = React.useRef(null);
  const shakeIconRefpress = React.useRef(null);

  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [selectIndex, selectedIndex] = React.useState(undefined);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const zoomIconRef = React.useRef(null);
  const pulseIconRef = React.useRef(null);
  const shakeIconRef = React.useRef(null);
  const infiniteAnimationIconRef = React.useRef(null);
  const noAnimationIconRef = React.useRef();

  React.useEffect(() => {
    infiniteAnimationIconRef.current.startAnimation();
    zoomIconRef.current.startAnimation();
    pulseIconRef.current.startAnimation();
    shakeIconRef.current.startAnimation();
  }, []);

  const renderZoomIconani = (props): IconElement => (
    <Icon 
      {...props}
      ref={zoomIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='zoom'
      name='maximize-outline'/>
  );

  const renderPulseIconani = (props): IconElement => (
    <Icon
      {...props}
      ref={pulseIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='pulse'
      name='activity' />
  );

  const renderShakeIconani = (props): IconElement => (
    <Icon
      {...props}
      ref={shakeIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='shake'
      name='shake' />
  );

  const renderZoomIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={zoomIconRefpress}
      animation='zoom'
      name='maximize-outline'
    />
  );

  const renderPulseIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={pulseIconRefpress}
      animation='pulse'
      name='activity'
    />
  );

  const renderShakeIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={shakeIconRefpress}
      animation='shake'
      name='shake'
    />
  );

  const renderInfiniteAnimationIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={infiniteAnimationIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='shake'
      name='clock-outline'
    />
  );

  const renderNoAnimationIcon = (props): IconElement => (
    <Icon
      {...props}
      ref={noAnimationIconRef}
      animation={null}
      name='eye'
    />
  );

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const toggleTooltip = (): void => {
    setTooltipVisible(!tooltipVisible);
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
    <ScrollView>
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

          <Button
            style={buttonStyles.button}
            accessoryLeft={renderZoomIcon}
            onPress={() => zoomIconRefpress.current.startAnimation()}
              >
            ZOOM
          </Button>

          <Button
            appearance='outline'
            status='success'
            style={buttonStyles.button}
            accessoryLeft={renderPulseIcon}
            onPress={() => pulseIconRefpress.current.startAnimation()}
          >
            PULSE
          </Button>

          <Button
            appearance='ghost'
            status='danger'
            style={buttonStyles.button}
            accessoryLeft={renderShakeIcon}
            onPress={() => shakeIconRefpress.current.startAnimation()}
          >
            SHAKE
          </Button>

          <Button
            appearance='ghost'
            status='info'
            style={buttonStyles.button}
            accessoryRight={renderInfiniteAnimationIcon}
          >
            INFINITE
          </Button>

          <Button
            appearance='ghost'
            status='warning'
            style={buttonStyles.button}
            accessoryRight={renderNoAnimationIcon}
          >
            NO ANIMATION
          </Button>

        </View>

        <View>
          <Button style={anibuttonStyles.button}
            accessoryLeft={renderZoomIconani}>
            ZooooooM      
          </Button>

          <Button
            appearance='outline'
            style={anibuttonStyles.button}
            accessoryLeft={renderPulseIconani}
          >
            PULSE BUMP BUMP
          </Button>

          <Button
            appearance='ghost'
            style={anibuttonStyles.button}
            accessoryLeft={renderShakeIconani}
          >
            SHAKE!
          </Button>
        </View>

        <View style={{ gap: 10 }}>
          <Card>
            <Text>
              Bee Movie
                By Jerry Seinfeld

                NARRATOR:
                (Black screen with text; The sound of buzzing bees can be heard)
                According to all known laws
                of aviation,
                :
                there is no way a bee
                should be able to fly.
                :
                Its wings are too small to get
                its fat little body off the ground.
                :
                The bee, of course, flies anyway
                :
                because bees don't care
                what humans think is impossible.
                BARRY BENSON:
                (Barry is picking out a shirt)
                Yellow, black. Yellow, black.
                Yellow, black. Yellow, black.
                :
                Ooh, black and yellow!
                Let's shake it up a little.
                JANET BENSON:
                Barry! Breakfast is ready!
                BARRY:
                Coming!
                :
                Hang on a second.
                (Barry uses his antenna like a phone)
                :
                Hello?
                ADAM FLAYMAN:

                (Through phone)
                - Barry?
                BARRY:
                - Adam?
                ADAM:
                - Can you believe this is happening?
                BARRY:
                - I can't. I'll pick you up.
                (Barry flies down the stairs)
            </Text>
          </Card>
        </View>

        <View style={cardStyles.topContainer}>
          <Card style={cardStyles.card} header={Header}>
            <Text>
              Header
            </Text>
          </Card>

          <Card style={cardStyles.card} footer={Footer}>
            Footer
          </Card>
        </View>

        <Card style={cardStyles.card} header={Header} footer={Footer}>
          <Text>
          Jujutsu Kaisen is a Japanese manga series written and illustrated 
          by Gege Akutami. It was serialized in Shueisha's shōnen manga 
          magazine Weekly Shōnen Jump from March 2018 to September 2024, 
          with its chapters collected in 28 tankōbon volumes as of October 
          2024.
          </Text>
        </Card>

        <View style={{ flexDirection: 'row', flexwrap: 'wrap ', gap: 10, marginTop: 20 }}>
          <Card status='primary' style={{ margin: 2 }}>
            <Text>
              Primary
            </Text>
          </Card>

          <Card status='success' style={{ margin: 2 }}>
            <Text>
              Success
            </Text>
          </Card>
          
          <Card status='info' style={{ margin: 2 }}>
            <Text>
              Info
            </Text>
          </Card>

          <Card status='warning' style={{ margin: 2 }}>
            <Text>
              Warning
            </Text>
          </Card>

          <Card status='danger' style={{ margin: 2 }}>
            <Text>
              Danger
            </Text>
          </Card>

          <Card status='basic' style={{ margin: 2 }}>
            <Text>
              Basic
            </Text>
          </Card>
          
        </View>
     
      {/* </ScrollView> */}
    </Layout>
    </ScrollView>
  );
};

const cardStyles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  
  card: {
    flex: 1,
    margin: 2,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  footerControl: {
    marginHorizontal: 2,
  }
})

const anibuttonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexwrap: 'wrap',
  },
  button: {
    margin: 2,
  }
})

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

const buttonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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

