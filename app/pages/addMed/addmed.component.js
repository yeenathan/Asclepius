import React, { useContext, useEffect } from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Button, Layout, Text} from '@ui-kitten/components';
import { default as theme } from "@/custom-theme.json"
import { ThemeContext } from '@/app/theme-context';
import { Header } from '@/app/components/header';
import { MyButton } from "@/app/components/MyButton"
import { styles } from "@/app/stylesheet"
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import Animated,{ useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';

// const ScanSVG = () => (
//   <Svg width="190" height="312" viewBox="0 0 190 312" fill="none">
//     <Defs>
//       <ClipPath id="clip0_1086_7995">
//         <Rect width="190" height="312" fill="white" />
//       </ClipPath>
//     </Defs>
//     <G clipPath="url(#clip0_1086_7995)">
//       <Path
//         d="M149.15 133.77C149.15 132.544 149.094 131.374 148.982 130.148V129.981L147.641 123.574V123.463C144.624 113.211 137.247 104.631 127.579 100.118V95.2713C130.485 94.3241 132.609 91.6499 132.609 88.4184V65.8541C132.609 61.8984 129.368 58.667 125.4 58.667H64.0412C60.0735 58.667 56.8324 61.8984 56.8324 65.8541V88.4184C56.8324 91.817 59.2353 94.6584 62.3647 95.4384V100.174C52.6971 104.687 45.3206 113.267 42.3588 123.518V123.686L41.0735 130.093V130.26C40.9618 131.43 40.9059 132.656 40.9059 133.881V206.198C40.9059 207.313 40.9059 208.483 41.0735 209.597V243.806C41.0735 249.154 45.4324 253.444 50.7412 253.444H139.203C144.568 253.444 148.871 249.098 148.871 243.806V209.597C148.982 208.427 149.038 207.313 149.038 206.198V193.328C149.038 192.994 149.094 192.716 149.094 192.381V152.657C149.094 152.657 149.094 152.323 149.094 152.156V133.881L149.15 133.77ZM123.556 65.4641H125.4C125.4 65.4641 125.735 65.6313 125.735 65.7984V88.3627C125.735 88.3627 125.735 88.5856 125.624 88.6413H119.365V65.4641H123.612H123.556ZM69.2382 98.3913V95.5499H120.65V98.3913H85.4441H69.1824H69.2382ZM106.456 65.4641H112.547V88.6413H106.009V65.4641H106.4H106.456ZM97.9059 65.4641H99.3029V88.6413H91.3118V65.4641H97.9059ZM80.8059 65.4641H84.55V88.6413H77.5088V65.4641H80.8059ZM63.7059 65.7984C63.7059 65.7984 63.8735 65.4641 64.0412 65.4641H70.7471V88.6413H63.8735C63.8735 88.6413 63.7618 88.4741 63.7618 88.3627V65.7984H63.7059ZM142.221 154.774V162.128H103.494V168.981H142.221V177.673H95V184.526H142.221V187.256V192.548C142.221 192.548 141.941 192.827 141.718 192.827H71.3618C71.0824 192.827 70.8029 192.604 70.8029 192.27V152.546C70.8029 152.267 71.0265 151.988 71.3618 151.988H141.718C141.718 151.988 142.165 152.156 142.221 152.378V154.718V154.774ZM142.221 145.191C142.221 145.191 141.885 145.191 141.662 145.191H71.3059C67.2265 145.191 63.8735 148.534 63.8735 152.601V192.326C63.8735 196.393 67.2265 199.736 71.3059 199.736H141.662C141.662 199.736 141.997 199.736 142.109 199.736V206.143C142.109 207.09 142.109 208.093 141.941 209.096V209.263V243.806C141.941 245.366 140.656 246.591 139.147 246.591H50.6853C49.1206 246.591 47.8912 245.31 47.8912 243.806V209.151C47.7794 208.148 47.7235 207.201 47.7235 206.198V133.881C47.7235 132.934 47.7235 131.987 47.8353 131.096L48.9529 125.301C51.5794 116.387 58.3412 109.033 67.0029 105.634L67.6735 105.356H84.3824H122.103L122.774 105.634C131.491 109.033 138.197 116.387 140.824 125.301L141.997 131.096C142.053 131.987 142.109 132.934 142.109 133.881V145.303L142.221 145.191Z"
//         fill="#B6DCFE"
//       />
//       <Path
//         d="M162.059 0C138.421 0 51.5794 0 27.9412 0C12.5176 0 0 12.48 0 27.8571V284.143C0 299.52 12.5176 312 27.9412 312H162.059C177.482 312 190 299.52 190 284.143V27.8571C190 12.48 177.482 0 162.059 0ZM139.706 11.1429V27.8571H50.2941V11.1429H139.706ZM178.824 284.143C178.824 293.391 171.335 300.857 162.059 300.857H27.9412C18.6647 300.857 11.1765 293.391 11.1765 284.143V27.8571C11.1765 18.6086 18.6647 11.1429 27.9412 11.1429H39.1176V27.8571C39.1176 33.9857 44.1471 39 50.2941 39H139.706C145.853 39 150.882 33.9857 150.882 27.8571V11.1429H162.059C171.335 11.1429 178.824 18.6086 178.824 27.8571V284.143Z"
//         fill="#00A39B"
//       />
//       <Path
//         d="M33.5294 136.5C36.6029 136.5 39.1176 133.993 39.1176 130.928V114.214H55.8823C58.9559 114.214 61.4706 111.707 61.4706 108.643C61.4706 105.578 58.9559 103.071 55.8823 103.071H33.5294C30.4559 103.071 27.9412 105.578 27.9412 108.643V130.928C27.9412 133.993 30.4559 136.5 33.5294 136.5Z"
//         fill="#00A39B"
//       />
//       <Path
//         d="M55.8823 225.643H39.1176V208.929C39.0618 205.864 36.4912 203.413 33.4176 203.469C30.4 203.524 27.997 205.92 27.9412 208.929V231.214C27.9412 234.279 30.4559 236.786 33.5294 236.786H55.8823C58.9559 236.73 61.4147 234.167 61.3588 231.103C61.3029 228.094 58.9 225.699 55.8823 225.643Z"
//         fill="#00A39B"
//       />
//       <Path
//         d="M156.471 203.357C153.397 203.357 150.882 205.864 150.882 208.928V225.643H134.118C131.044 225.643 128.529 228.15 128.529 231.214C128.529 234.278 131.044 236.786 134.118 236.786H156.471C159.544 236.786 162.059 234.278 162.059 231.214V208.928C162.059 205.864 159.544 203.357 156.471 203.357Z"
//         fill="#00A39B"
//       />
//       <Path
//         d="M156.471 103.071H134.118C131.044 103.071 128.585 105.634 128.641 108.754C128.641 111.763 131.1 114.214 134.118 114.214H150.882V130.928C150.882 133.993 153.397 136.5 156.471 136.5C159.544 136.5 162.059 133.993 162.059 130.928V108.643C162.059 105.578 159.544 103.071 156.471 103.071Z"
//         fill="#00A39B"
//       />
//       <Path
//         d="M156.471 164.357H33.5294C30.4559 164.357 27.9971 166.92 28.0529 170.04C28.0529 173.048 30.5118 175.5 33.5294 175.5H156.471C159.544 175.444 162.003 172.881 161.947 169.817C161.891 166.808 159.488 164.413 156.471 164.357Z"
//         fill="#00A39B"
//       />
//     </G>
//   </Svg>
// )

export const AddScreen = ({navigation}) => {
  const colorTheme = theme[useContext(ThemeContext).theme];
  const medScanImages = [
    require('@/assets/graphics/pillBottleScan.png'),
    require('@/assets/graphics/sprayBottleScan.png'),
    require('@/assets/graphics/injectionScan.png'),
    require('@/assets/graphics/ointmentScan.png'),
    require('@/assets/graphics/liquidScan.png'),
    require('@/assets/graphics/dropperScan.png')
  ];
  const ScanImageFade = ({ image, duration = 2000 }) => {
    const fade = useSharedValue(1);
    const index = useSharedValue(0);

    const imageFade1 = useAnimatedStyle(() => ({
      opacity: fade.value,
    }));

    const imageFade2 = useAnimatedStyle (() => ({
      opacity: 1 - fade.value
    }));

    useEffect(() => {
      const interval = setInterval (() => {
        fade.value = withTiming (0, { duration }, () => {
          index.value = (index.value +1 ) % medScanImages.length;
          fade.value = withTiming (1, { duration });
        });
      }, duration * 2);

      return () => clearInterval(interval);
    }, [fade, index, medScanImages.length, duration]);

    const currentIndex = () => index.value;
    const nextIndex = () => (index.value + 1) % medScanImages.length;

    return (
      <View style ={{flex: 1}}>
        <Animated.View style={{...imageFade1, position: "absolute"}}>
          <Image source = {medScanImages[currentIndex()]} style={{width: 180, height: 310}}/>
        </Animated.View>
        <Animated.View style={{...imageFade2, position: "absolute"}}>
          <Image source = {medScanImages[nextIndex()]} style={{width: 180, height: 310}}/>
        </Animated.View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} showSettings={false} />
      <Layout style={{...styles.masterLayoutNoNav, justifyContent: "flex-start", backgroundColor: colorTheme["generic-bg"], gap: 30 }}>
        {/* <ScanImageFade/> */}
          <Image
            source={require("@/assets/graphics/pillBottleScan.png")}
            style={{flex: 4}}
            resizeMode="contain"
          />
        <View style={{ marginHorizontal: 30, flex: 1}}>
          <Text style={{fontSize: 26, color: colorTheme['persian-green'], textAlign: "center" }} category='h2'>Scan Medication</Text>
          <Text style={{textAlign: "center"}} category='p1'>Scan the label from your pharmacist or the medication package to set reminders. Make sure the DIN is visible.</Text>
        </View>
        <View style={{gap: 25, width: "100%", alignItems: "center", flex: 2}}>
          <Button style={{width: "88%", backgroundColor: colorTheme['green']}} onPress={() => navigation.navigate("Scan")} size='large'>Take a Picture</Button>
          <Text style={{fontSize: 16, color: colorTheme['persian-green'], textDecorationLine: "underline"}} onPress={() => navigation.navigate('Form', {drug: {frequency: 0, duration: 0}})}>Use Manual Input</Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};
