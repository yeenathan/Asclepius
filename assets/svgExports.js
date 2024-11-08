import { ExpoRoot } from "expo-router";
import Svg, { Path, Rect, Polygon } from "react-native-svg";
import ClipPath from "react-native-svg";

export const NavButton = (
  <Svg width="72" height="72" viewBox="0 0 72 72">
    <Rect width="72" height="72" rx="36" fill="#89CCC8"/>
    <Path d="M36 21C36.4973 21 36.9742 21.1975 37.3258 21.5492C37.6775 21.9008 37.875 22.3777 37.875 22.875V34.125H49.125C49.6223 34.125 50.0992 34.3225 50.4508 34.6742C50.8025 35.0258 51 35.5027 51 36C51 36.4973 50.8025 36.9742 50.4508 37.3258C50.0992 37.6775 49.6223 37.875 49.125 37.875H37.875V49.125C37.875 49.6223 37.6775 50.0992 37.3258 50.4508C36.9742 50.8025 36.4973 51 36 51C35.5027 51 35.0258 50.8025 34.6742 50.4508C34.3225 50.0992 34.125 49.6223 34.125 49.125V37.875H22.875C22.3777 37.875 21.9008 37.6775 21.5492 37.3258C21.1975 36.9742 21 36.4973 21 36C21 35.5027 21.1975 35.0258 21.5492 34.6742C21.9008 34.3225 22.3777 34.125 22.875 34.125H34.125V22.875C34.125 22.3777 34.3225 21.9008 34.6742 21.5492C35.0258 21.1975 35.5027 21 36 21Z" fill="#0D352A"/>
  </Svg>
);

export const CAPSULE_ICON = (
  <Svg id="Layer_2" viewBox="0 0 60.48 60.3" width="60.48" height="60.3">
    <Path 
      d="M55.77,4.71h0c-6.28-6.28-16.56-6.28-22.84,0l-10.88,10.88c-.55.55-.55,1.43,0,1.98l15.19,15.19-2.12-2.12c-.55-.55-.55-1.43,0-1.98L56.05,7.73c.65-.65,1.74-.52,2.2.27,3.55,6.24,2.53,14.53-2.98,20.05l-5.07,5.07,5.57-5.57c6.28-6.28,6.28-16.56,0-22.84Z"
      fill="#89ccc8"
    />
    <Path 
      d="M7.74,56.03l22.74-22.74c.55-.55,1.43-.55,1.98,0l-13.07-13.07c-.27-.27-.63-.41-.99-.41s-.72.14-.99.41l-11.7,11.7c-.42.39-.8.78-1.17,1.19-.1.11-.2.22-.3.33-1.89,2.17-3.12,4.57-3.75,7.03-.06.23-.12.46-.17.69-.02.09-.03.19-.05.28-.99,5.18.65,10.51,4.45,14.3.41.41.84.79,1.28,1.14.14.11.29.21.43.31.31.23.62.47.95.68.14.09.28.16.42.25.35.21.7.42,1.06.6.09.04.18.08.27.12h.08c-.4-.19-.8-.4-1.19-.62-.79-.45-.92-1.55-.27-2.2Z"
      fill="#ffb057"
    />
    <Path 
      d="M58.25,8c-.45-.79-1.55-.92-2.2-.27l-20.94,20.94c-.55.55-.55,1.43,0,1.98l2.12,2.12,5.67,5.67c.14.14.29.24.46.31.34.14.72.14,1.05,0,.17-.07.33-.17.46-.31l5.32-5.32,5.07-5.07c5.51-5.51,6.53-13.81,2.98-20.05Z"
      fill="#89ccc8"
    />
    <Path 
      d="M58.25,8c-.45-.79-1.55-.92-2.2-.27l-20.94,20.94c-.55.55-.55,1.43,0,1.98l2.12,2.12,5.67,5.67c.14.14.29.24.46.31.34.14.72.14,1.05,0,.17-.07.33-.17.46-.31l5.32-5.32,5.07-5.07c5.51-5.51,6.53-13.81,2.98-20.05Z"
      fill="#3f3318"
      opacity={0.17}
    />
    <Path 
      d="M32.46,33.29c-.55-.55-1.43-.55-1.98,0L7.74,56.03c-.65.65-.52,1.75.27,2.2.39.22.79.42,1.19.61,5.3,2.44,11.77,1.82,16.77-1.81.31-.22.61-.46.9-.71.08-.07.16-.13.24-.2.32-.28.64-.57.95-.87l12.19-12.19c.14-.14.24-.29.31-.46.21-.51.1-1.11-.31-1.52l-7.79-7.79Z"
      fill="#ffb057"
    />
    <Path 
      d="M32.46,33.29c-.55-.55-1.43-.55-1.98,0L7.74,56.03c-.65.65-.52,1.75.27,2.2.39.22.79.42,1.19.61,5.3,2.44,11.77,1.82,16.77-1.81.31-.22.61-.46.9-.71.08-.07.16-.13.24-.2.32-.28.64-.57.95-.87l12.19-12.19c.14-.14.24-.29.31-.46.21-.51.1-1.11-.31-1.52l-7.79-7.79Z"
      fill="#3f3318"
      opacity={0.17}
    />
  </Svg>
);

export const DROPPER_ICON = (
  <Svg id="Layer_2" viewBox="0 0 19.92 63.53" xmlns="http://www.w3.org/2000/svg" width="19.92" height="63.53">
    <Path d="M12.38,29.87h0s4.01,0,4.01,0l-.19-1.32c-.05-.38-.4-.68-.77-.68H4.49c-.37,0-.72.31-.77.68l-.19,1.32h8.85Z" fill="#89ccc8" />
    <Path d="M12.38,29.87h0s4.01,0,4.01,0l-.19-1.32c-.05-.38-.4-.68-.77-.68h-4.68.96c-.37,0-.72.31-.77.68l-.19,1.32h1.63Z" fill="#19423f" opacity={0.11} />
    <Path d="M12.38,31.46v-1.6H2.01c-.23,0-.43.19-.43.43v.74c0,.23.19.43.43.43h10.37Z" fill="#00a39b" />
    <Path d="M9.88,46.58l1.2-13.61.09-.59h-4.03c-.15,0-.26.13-.24.28l2.15,14.24c.02.15.08.27.14.37.31-.07.62-.29.68-.69Z" fill="#ffb057" />
    <Path d="M3.13,0C1.41,0,0,1.41,0,3.13v.23h13.02V0H3.13Z" fill="#ffb057" />
    <Path d="M9.08,26.28v-1.38c0-.59.37-1.1.9-1.34,1.38-.63,2.47-1.78,3.04-3.19H.44c.57,1.41,1.66,2.56,3.04,3.19.54.24.9.75.9,1.34v1.38c0,.38.31.68.68.68h3.33c.38,0,.68-.31.68-.68Z" fill="#fdc26a" />
    <Path d="M13.02,18.19V5.36H0v12.83c0,.06.01.12.01.18h19.89s-6.88,0-6.88,0c0-.06,0-.12,0-.18Z" fill="#fdc26a" />
    <Path d="M7.11,62.21c.08.04.15.08.23.11,2.52.92,4.82-1.45,4.82-4.5,0-1.08-.33-1.95-.84-3.05,0,0,0,0,0,0-.36-.7-.74-1.5-1.12-2.48-.08-.22-.39-.21-.48,0-1.91,4.95-3.87,5.77-3.41,8.21.18.98.75,1.85,1.56,2.4-.28-.2-.54-.43-.76-.69Z" fill="#00a39b" />
    <Path d="M9.98,23.56c-.54.24-.9.75-.9,1.34v1.38c0,.38-.31.68-.68.68h6.46c.38,0,.68-.31.68-.68v-1.38c0-.15.02-.29.07-.42.09-.27.25-.51.47-.69.11-.09.23-.17.37-.23,1.04-.47,1.91-1.24,2.52-2.18.2-.32.38-.65.52-1h-6.46c-.57,1.41-1.66,2.56-3.04,3.19Z" fill="#ffb057" />
    <Path d="M17.42.06c-.2-.04-.41-.06-.63-.06h-3.78v3.36h6.9v-.23c0-1.5-1.08-2.77-2.5-3.06Z" fill="#3f3318" opacity={0.17} />
    <Path d="M12.78,32.38h-1.61l-.09.59-1.2,13.61c-.06.4-.38.62-.68.69.05.08.11.15.18.21.02.02.05.03.08.05.05.03.11.07.16.09.05.02.1.03.15.04.04,0,.09.02.13.02.05,0,.09,0,.14,0,.06,0,.11-.01.16-.03.03,0,.07-.02.1-.03.07-.03.13-.06.19-.1.02-.01.04-.02.06-.04.07-.06.12-.12.17-.2,0-.01.02-.02.03-.04.05-.1.09-.21.11-.33l2.15-14.24c.02-.14-.09-.27-.24-.27Z" fill="#89ccc8" />
    <Path d="M17.91,29.87h-5.53v1.6h5.53c.23,0,.43-.19.43-.43v-.74c0-.06-.01-.11-.03-.17-.07-.15-.22-.26-.39-.26Z" fill="#00a39b" />
    <Path d="M13.61,59.21c-.03-.16-.07-.31-.12-.46,0-.03-.02-.05-.03-.08-.05-.13-.1-.26-.16-.4-.02-.04-.04-.08-.06-.12-.07-.14-.15-.29-.23-.43-.05-.09-.1-.17-.15-.26-.03-.05-.06-.1-.09-.14-.4-.68-.91-1.48-1.46-2.55,0,0,0,0,0,0,.51,1.1.84,1.97.84,3.05,0,3.05-2.29,5.42-4.82,4.5-.08-.03-.15-.07-.23-.11.22.27.47.5.76.69,0,0,.02.01.03.02.13.09.26.16.4.23.02.01.04.03.07.04.16.07.32.14.5.19,2.52.73,4.82-1.15,4.82-3.56,0-.17-.02-.34-.04-.5,0-.04-.01-.07-.02-.11Z" fill="#19423f" opacity={0.22} />
  </Svg>
);

export const INJECTION_ICON = (
  <Svg width="66.56" height="66.56" viewBox="0 0 66.56 66.56">
    <Path fill="#fdc26a" d="M16.37,51.25l-2.5-2.5c-.53-.53-1.4-.53-1.93,0l-6.15,6.15,3.47,3.47,7.11-7.11Z"/>
    <Path fill="#ffe6c1" d="M16.37,51.25l-7.11,7.11,1.53,1.53.88.88,6.15-6.15c.53-.53.53-1.4,0-1.93l-1.45-1.45Z"/>
    <Path fill="#ebd4b2" d="M16.37,51.25l-7.11,7.11,1.53,1.53.88.88,6.15-6.15c.53-.53.53-1.4,0-1.93l-1.45-1.45Z"/>
    <Path fill="#ffb057" d="M10.79,59.9l-1.53-1.53-3.47-3.47-1.61-1.61c-.49-.49-1.3-.49-1.79,0l-2.01,2.01c-.49.49-.49,1.3,0,1.79l9.11,9.11-2.49-2.49,3.8-3.8Z"/>
    <Path fill="#ffb057" d="M6.98,63.7l2.49,2.49c.49.49,1.3.49,1.79,0l2.01-2.01c.49-.49.49-1.3,0-1.79l-1.61-1.61-.88-.88-3.8,3.8Z"/>
    <Path fill="#1e1307" opacity={0.1} d="M6.98,63.7l2.49,2.49c.49.49,1.3.49,1.79,0l2.01-2.01c.49-.49.49-1.3,0-1.79l-1.61-1.61-.88-.88-3.8,3.8Z"/>
    <Path fill="#89ccc8" d="M66.53.34s0,.04-.02.06c.17-.22-.13-.52-.35-.35l-17.56,14.02-1.72-1.72c-.25-.25-.65-.27-.89-.03l-1.05,1.05,4.27,4.27L66.53.34Z"/>
    <Path fill="#89ccc8" d="M52.49,17.96L66.51.4s0-.04.02-.06l-17.31,17.31,3.97,3.97,1.05-1.05c.12-.12.17-.28.17-.44,0-.08-.02-.16-.05-.24-.03-.08-.08-.15-.14-.21l-1.72-1.72Z"/>
    <Path fill="#0f2825" opacity={0.2} d="M52.49,17.96L66.51.4s0-.04.02-.06l-17.31,17.31,3.97,3.97,1.05-1.05c.12-.12.17-.28.17-.44,0-.08-.02-.16-.05-.24-.03-.08-.08-.15-.14-.21l-1.72-1.72Z"/>
    <Path fill="#00a39b" d="M44.96,13.37l-.24-.24c-.2-.2-.53-.2-.73,0l-1.1,1.1c-.2.2-.2.53,0,.73l8.71,8.71-2.89-2.89,1.83-1.83,2.89,2.89-.24-.24-3.97-3.97-4.27-4.27Z"/>
    <Path fill="#ffb057" d="M18.28,50.62l28.85-28.85-5.43-5.43c-.91-.91-2.36-.97-3.2-.12l-2.85,2.85,4.1,4.1c.54.54.57,1.4.07,1.9s-1.36.47-1.9-.07l-4.1-4.1-3.08,3.08,3.01,3.01c.35.35.37.9.05,1.22h0c-.32.32-.87.3-1.22-.05l-3.01-3.01-3.08,3.08,4.1,4.1c.54.54.57,1.4.07,1.9s-1.36.47-1.9-.07l-4.1-4.1-3.08,3.08,3.01,3.01c.35.35.37.9.05,1.22s-.87.3-1.22-.05l-3.01-3.01-3.08,3.08,4.1,4.1c.54.54.57,1.4.07,1.9h0c-.5.5-1.36.47-1.9-.07l-4.1-4.1-2.78,2.78c-.85.85-.8,2.29.12,3.2l6.71,6.71h0l-1.28-1.28Z"/>
    <Path fill="#00a39b" d="M48.71,20.79l2.89,2.89c.2.2.53.2.73,0l1.1-1.1c.2-.2.2-.53,0-.73l-2.89-2.89-1.83,1.83Z"/>
    <Path fill="#19423f" opacity={0.11} d="M48.71,20.79l2.89,2.89c.2.2.53.2.73,0l1.1-1.1c.2-.2.2-.53,0-.73l-2.89-2.89-1.83,1.83Z"/>
    <Path fill="#ffb057" d="M50.23,24.86l-1.81-1.81-1.28-1.28-28.85,28.85,1.28,1.28,1.81,1.81c.91.91,2.36.97,3.2.12l25.77-25.77c.85-.85.79-2.29-.12-3.2Z"/>
    <Path fill="#1e1307" opacity={0.1} d="M50.23,24.86l-1.81-1.81-1.28-1.28-28.85,28.85,1.28,1.28,1.81,1.81c.91.91,2.36.97,3.2.12l25.77-25.77c.85-.85.79-2.29-.12-3.2Z"/>
  </Svg>
);

export const LIQUID_ICON = (
  <Svg viewBox="0 0 77.19 65.19" width="77.19" height="65.19">
    <Path fill="#89ccc8" d="M55.23,55.89c-.41-.15-.99-.37-1.47-.57-1.08-.46-2.08-.74-3.86-.85-1.74-.11-2.54-.8-3.32-1.29-.98-.61-2.02-2.24-2.89-4.77-.2-.57-.32-1.06-.42-1.5l-.43.43c-.11.11-.25.19-.39.26.25.41.55,1.04.89,2.07.81,2.49.48,5.23.32,5.8-.11.39-.51,1.09-.75,1.48-.08.13.02.3.17.3h11.45c.17,0,.33-.07.43-.19l.52-1.07-.04.08c-.05-.08-.13-.14-.23-.18Z"/>
    <Path fill="#89ccc8" d="M43.69,48.4c.88,2.53,1.91,4.16,2.89,4.77.79.49,1.58,1.18,3.32,1.29,1.78.12,2.79.4,3.86.85.47.2,1.06.42,1.47.57.1.04.18.1.23.18l.04-.08c.11-.23,0-.5-.22-.6-.35-.15-.86-.37-1.27-.57-.93-.46-1.8-.74-3.34-.85-1.51-.11-2.2-.8-2.88-1.29-.85-.61-1.75-2.24-2.5-4.77-.32-1.07-.44-1.88-.51-2.5l-1.5,1.5c.09.44.22.92.42,1.5Z"/>
    <Path fill="#19423f" opacity=".11" d="M43.69,48.4c.88,2.53,1.91,4.16,2.89,4.77.79.49,1.58,1.18,3.32,1.29,1.78.12,2.79.4,3.86.85.47.2,1.06.42,1.47.57.1.04.18.1.23.18l.04-.08c.11-.23,0-.5-.22-.6-.35-.15-.86-.37-1.27-.57-.93-.46-1.8-.74-3.34-.85-1.51-.11-2.2-.8-2.88-1.29-.85-.61-1.75-2.24-2.5-4.77-.32-1.07-.44-1.88-.51-2.5l-1.5,1.5c.09.44.22.92.42,1.5Z"/>
    <Path fill="#00a39b" d="M42.45,47.59c.14-.07.27-.14.39-.26l.43-.43,1.5-1.5-1.84,1.84-1.94-5.07-2.07,2.07c-.32.32-.32.84,0,1.17l1.93,1.93c.43.43,1.08.51,1.61.26Z"/>
    <Path fill="#ffb057" d="M29.08,31.74c-1.12-.06-2.23-.5-3.09-1.36l-12.47-12.47c-1.85-1.85-1.85-4.86,0-6.7l5.64-5.64L17.12.17c-.54.16-1.05.44-1.48.87L1.06,15.62c-1.41,1.41-1.41,3.71,0,5.12l19.63,19.63c2.7,2.7,6.68,3.36,10.02,2,.75-.31,1.55-.37,2.31-.23l-3.94-10.41h0Z"/>
    <Path fill="#fdc26a" d="M15,12.69c-1.03,1.03-1.03,2.7,0,3.73l12.47,12.47c.21.21.45.37.71.49L19.98,7.72l-4.97,4.97Z"/>
    <Path fill="#fdc26a" d="M48.69,63.94c4.4,0,8.05-2.35,8.76-5.43.06-.24,0-.47-.12-.66l.1-.13c.18-.23.47-.37.77-.37h17.16c.24,0,.43-.18.43-.4v-1.1h-16.91c-.29,0-.57.12-.75.34l-2.03,2.4s-.02.05-.04.08h-13.94c-.52,0-.94.54-.81,1.1.26,1.12.91,2.14,1.84,2.99-.21-.19-.41-.4-.6-.61,1.59,1.11,3.74,1.8,6.11,1.8Z"/>
    <Path fill="#ffb057" d="M22.22,2.5l-1.46-1.46c-.16-.16-.33-.29-.5-.41-.05-.04-.11-.07-.16-.11-.13-.08-.27-.15-.4-.21-.06-.03-.12-.06-.18-.08-.17-.06-.34-.11-.51-.15-.12-.03-.24-.04-.36-.06-.06,0-.12-.01-.18-.02-.23-.02-.47,0-.7.02-.16.02-.31.06-.47.1-.06.02-.13.02-.19.04h0s2.04,5.39,2.04,5.39l3.06-3.06Z"/>
    <Path fill="#3f3318" opacity=".15" d="M22.22,2.5l-1.46-1.46c-.16-.16-.33-.29-.5-.41-.05-.04-.11-.07-.16-.11-.13-.08-.27-.15-.4-.21-.06-.03-.12-.06-.18-.08-.17-.06-.34-.11-.51-.15-.12-.03-.24-.04-.36-.06-.06,0-.12-.01-.18-.02-.23-.02-.47,0-.7.02-.16.02-.31.06-.47.1-.06.02-.13.02-.19.04h0s2.04,5.39,2.04,5.39l3.06-3.06Z"/>
    <Path fill="#ffb057" d="M43.8,37.88c.11-.16.19-.34.24-.52.11-.36.11-.75,0-1.12-.05-.18-.13-.36-.24-.52-.07-.11-.16-.21-.25-.31l-.25-.25h0c-1.17-1.17-1.53-2.94-.9-4.47.15-.36.27-.74.37-1.11.14-.52.23-1.05.27-1.59.04-.53.04-1.07,0-1.61-.02-.27-.06-.53-.11-.8-.14-.79-.39-1.57-.74-2.32-.25-.52-.52-1.03-.87-1.51l-4.31,4.31-4.31,4.31s0,0,0,0c-.24.24-.5.45-.78.63-.05.03-.1.05-.15.08-.24.14-.49.27-.75.37-.03,0-.05.01-.08.02-.6.21-1.23.3-1.86.27h0l3.94,10.41c.4.07.78.2,1.14.39,0,0,.02.01.03.02Z"/>
  </Svg>
);

export const OINTMENT_ICON = (
<Svg viewBox="0 0 73.15 67.15" width="73.15" height="67.15">
    <Path fill="#fdc26a" d="M24.57,30.19l-3.55,4.14c-3.04,3.54-3.26,8.44-.65,11.05l6.91,6.91,9.69-9.69-12.4-12.4Z"/>
    <Path fill="#fdc26a" d="M65.43,14.14L51.6.31c-.58-.58-1.75-.33-2.49.55l-10.08,11.79,21.47,21.47-7.52-7.52,12.46-12.46Z"/>
    <Polygon fill="#fdc26a" points="38.76 40.81 51.25 28.32 37.54 14.61 26.12 28.17 44.98 47.02 58.54 35.61 44.98 47.02 38.76 40.81"/>
    <Path fill="#89ccc8" d="M20.81,53.65l-2.95-2.95-1.98,1.98c-.5.5-.5,1.31,0,1.81l2.05,2.05,2.89-2.89Z"/>
    <Path fill="#00a39b" d="M23.35,51.12l-4.43-4.43-1.22,1.22c-.73.73-.73,1.9,0,2.63l.16.16,2.96,2.96,2.53-2.53Z"/>
    <Path fill="#fdc26a" d="M16.02,62.99c-1.05-1.64-1.1-2.97-1.17-4.13-.17-.04-.34-.02-.48.11-.54.52-1.64,1.38-3.48,1.96-2.78.88-6.38.14-8.7,2.39-1.57,1.52-2.06,2.56-2.19,3.18-.08.36.21.69.58.65,1.62-.2,6.44-.75,9.59-.67,1.81.05,4.1.12,6.15.37.03-.07.07-.14.09-.21.42-1.27.69-1.93-.41-3.63Z"/>
    <Path fill="#fdc26a" d="M27.29,52.28l.49.49c1.14,1.14,2.72,1.74,4.43,1.8,0,0,0,0,0,0,.46.02.94-.01,1.41-.07.89-.12,1.8-.38,2.68-.77.88-.4,1.73-.93,2.52-1.6l1.91-1.64,2.23-1.91-5.98-5.98-9.69,9.69Z"/>
    <Path fill="#3f3318" opacity=".17" d="M27.29,52.28l.49.49c1.14,1.14,2.72,1.74,4.43,1.8,0,0,0,0,0,0,.46.02.94-.01,1.41-.07.89-.12,1.8-.38,2.68-.77.88-.4,1.73-.93,2.52-1.6l1.91-1.64,2.23-1.91-5.98-5.98-9.69,9.69Z"/>
    <Polygon fill="#fdc26a" points="38.76 40.81 44.98 47.02 58.54 35.61 51.25 28.32 38.76 40.81"/>
    <Path fill="#3f3318" opacity=".17" d="M73.08,21.93c-.05-.14-.13-.27-.24-.38l-7.41-7.41-12.46,12.46,7.52,7.52,11.79-10.08c.44-.37.72-.85.82-1.31.03-.11.04-.23.04-.34,0-.16-.02-.32-.07-.47Z"/>
    <Path fill="#fdc26a" d="M17.93,56.54l.73.73c.5.5,1.31.5,1.81,0l1.04-1.04.95-.95-1.64-1.64-2.89,2.89Z"/>
    <Path fill="#19423f" opacity=".11" d="M17.93,56.54l.73.73c.5.5,1.31.5,1.81,0l1.04-1.04.95-.95-1.64-1.64-2.89,2.89Z"/>
    <Path fill="#00a39b" d="M20.82,53.65l1.64,1.64h0l.16.16c.36.36.84.54,1.31.54.24,0,.48-.05.7-.14.22-.09.43-.23.61-.41l1.22-1.22-3.11-3.11-2.53,2.53Z"/>
    <Path fill="#19423f" opacity=".11" d="M20.82,53.65l1.64,1.64h0l.16.16c.36.36.84.54,1.31.54.24,0,.48-.05.7-.14.22-.09.43-.23.61-.41l1.22-1.22-3.11-3.11-2.53,2.53Z"/>
    <Path fill="#fdc26a" d="M15.16,59.06c-.04-.05-.09-.09-.15-.13-.05-.03-.11-.05-.16-.07,0,0,0,0,0,0,.06,1.16.11,2.49,1.17,4.13,1.1,1.7.82,2.36.41,3.63-.02.08-.06.15-.09.21.3.04.59.08.88.12.73.11,1.4-.4,1.52-1.13.2-1.19-.04-2.25-.87-3.47-.84-1.23-1.68-1.94-2.7-3.3Z"/>
    <Path fill="#19423f" opacity=".11" d="M15.16,59.06c-.04-.05-.09-.09-.15-.13-.05-.03-.11-.05-.16-.07,0,0,0,0,0,0,.06,1.16.11,2.49,1.17,4.13,1.1,1.7.82,2.36.41,3.63-.02.08-.06.15-.09.21.3.04.59.08.88.12.73.11,1.4-.4,1.52-1.13.2-1.19-.04-2.25-.87-3.47-.84-1.23-1.68-1.94-2.7-3.3Z"/>
  </Svg>
)

export const SCAN_ICON = (props) => (
  
    <Svg
      width="190"
      height="312"
      viewBox="0 0 190 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ClipPath id="clip0_1086_7995">
        <Rect width="190" height="312" fill="white" />
      </ClipPath>
      <G clipPath="url(#clip0_1086_7995)">
        <Path
          d="M149.15 133.77C149.15 132.544 149.094 131.374 148.982 130.148V129.981L147.641 123.574V123.463C144.624 113.211 137.247 104.631 127.579 100.118V95.2713C130.485 94.3241 132.609 91.6499 132.609 88.4184V65.8541C132.609 61.8984 129.368 58.667 125.4 58.667H64.0412C60.0735 58.667 56.8324 61.8984 56.8324 65.8541V88.4184C56.8324 91.817 59.2353 94.6584 62.3647 95.4384V100.174C52.6971 104.687 45.3206 113.267 42.3588 123.518V123.686L41.0735 130.093V130.26C40.9618 131.43 40.9059 132.656 40.9059 133.881V206.198C40.9059 207.313 40.9059 208.483 41.0735 209.597V243.806C41.0735 249.154 45.4324 253.444 50.7412 253.444H139.203C144.568 253.444 148.871 249.098 148.871 243.806V209.597C148.982 208.427 149.038 207.313 149.038 206.198V193.328C149.038 192.994 149.094 192.716 149.094 192.381V152.657C149.094 152.657 149.094 152.323 149.094 152.156V133.881L149.15 133.77ZM123.556 65.4641H125.4C125.4 65.4641 125.735 65.6313 125.735 65.7984V88.3627C125.735 88.3627 125.735 88.5856 125.624 88.6413H119.365V65.4641H123.612H123.556ZM69.2382 98.3913V95.5499H120.65V98.3913H85.4441H69.1824H69.2382ZM106.456 65.4641H112.547V88.6413H106.009V65.4641H106.4H106.456ZM97.9059 65.4641H99.3029V88.6413H91.3118V65.4641H97.9059ZM80.8059 65.4641H84.55V88.6413H77.5088V65.4641H80.8059ZM63.7059 65.7984C63.7059 65.7984 63.8735 65.4641 64.0412 65.4641H70.7471V88.6413H63.8735C63.8735 88.6413 63.7618 88.4741 63.7618 88.3627V65.7984H63.7059ZM142.221 154.774V162.128H103.494V168.981H142.221V177.673H95V184.526H142.221V187.256V192.548C142.221 192.548 141.941 192.827 141.718 192.827H71.3618C71.0824 192.827 70.8029 192.604 70.8029 192.27V152.546C70.8029 152.267 71.0265 151.988 71.3618 151.988H141.718C141.718 151.988 142.165 152.156 142.221 152.378V154.718V154.774ZM142.221 145.191C142.221 145.191 141.885 145.191 141.662 145.191H71.3059C67.2265 145.191 63.8735 148.534 63.8735 152.601V192.326C63.8735 196.393 67.2265 199.736 71.3059 199.736H141.662C141.662 199.736 141.997 199.736 142.109 199.736V206.143C142.109 207.09 142.109 208.093 141.941 209.096V209.263V243.806C141.941 245.366 140.656 246.591 139.147 246.591H50.6853C49.1206 246.591 47.8912 245.31 47.8912 243.806V209.151C47.7794 208.148 47.7235 207.201 47.7235 206.198V133.881C47.7235 132.934 47.7235 131.987 47.8353 131.096L48.9529 125.301C51.5794 116.387 58.3412 109.033 67.0029 105.634L67.6735 105.356H84.3824H122.103L122.774 105.634C131.491 109.033 138.197 116.387 140.824 125.301L141.997 131.096C142.053 131.987 142.109 132.934 142.109 133.881V145.303L142.221 145.191Z"
          fill="#B6DCFE"
        />
        <Path
          d="M162.059 0C138.421 0 51.5794 0 27.9412 0C12.5176 0 0 12.48 0 27.8571V284.143C0 299.52 12.5176 312 27.9412 312H162.059C177.482 312 190 299.52 190 284.143V27.8571C190 12.48 177.482 0 162.059 0ZM139.706 11.1429V27.8571H50.2941V11.1429H139.706ZM178.824 284.143C178.824 293.391 171.335 300.857 162.059 300.857H27.9412C18.6647 300.857 11.1765 293.391 11.1765 284.143V27.8571C11.1765 18.6086 18.6647 11.1429 27.9412 11.1429H39.1176V27.8571C39.1176 33.9857 44.1471 39 50.2941 39H139.706C145.853 39 150.882 33.9857 150.882 27.8571V11.1429H162.059C171.335 11.1429 178.824 18.6086 178.824 27.8571V284.143Z"
          fill="#00A39B"
        />
      </G>
    </Svg>
  
)

export const SPRAY_ICON = (
  <Svg viewBox="0 0 35.44 67.86" width="35.44" height="67.86">
    <Path
      d="M12.19,9.05V2.86h-2.73c-.73,0-1.32.59-1.32,1.32v4.93c.11-.03.21-.07.33-.07h3.72Z"
      fill="#89ccc8"
    />
    <Path
      d="M13.18,9.05h1.93c.12,0,.22.04.33.07v-4.93c0-.73-.59-1.32-1.32-1.32h-1.93v6.19h.99Z"
      fill="#89ccc8"
    />
    <Path
      d="M13.18,9.05h1.93c.12,0,.22.04.33.07v-4.93c0-.73-.59-1.32-1.32-1.32h-1.93v6.19h.99Z"
      fill="rgba(63, 51, 24, 0.11)"
    />
    <Path
      d="M7.63,12.96h5.55v-3.92h-4.71c-.12,0-.22.04-.33.07-.54.15-.96.63-.96,1.22v2.18c0,.25.2.45.45.45Z"
      fill="#00a39b"
    />
    <Path
      d="M13.18,9.05v3.92h2.77c.25,0,.45-.2.45-.45v-2.18c0-.59-.41-1.07-.96-1.22-.11-.03-.21-.07-.33-.07h-1.93Z"
      fill="#00a39b"
    />
    <Path
      d="M13.18,9.05v3.92h2.77c.25,0,.45-.2.45-.45v-2.18c0-.59-.41-1.07-.96-1.22-.11-.03-.21-.07-.33-.07h-1.93Z"
      fill="rgba(63, 51, 24, 0.11)"
    />
    <Path
      d="M26.46,5.62h-6.68c-.63,0-1.15.52-1.15,1.15s.52,1.15,1.15,1.15h6.68c.63,0,1.15-.52,1.15-1.15s-.52-1.15-1.15-1.15Z"
      fill="#00a39b"
    />
    <Path
      d="M19.54,4.78l4.46-1c.71-.16,1.14-.79.96-1.4-.19-.61-.93-.98-1.64-.82l-4.46,1c-.71.16-1.14.79-.96,1.4.19.61.93.98,1.64.82Z"
      fill="#00a39b"
    />
    <Path
      d="M27.34,2.91l2.91-.65c.71-.16,1.14-.79.96-1.4-.19-.61-.93-.98-1.64-.82l-2.91.65c-.71.16-1.14.79-.96,1.4.19.61.93.98,1.64.82Z"
      fill="#89ccc8"
    />
    <Path
      d="M24,9.75l-4.46-1c-.71-.16-1.45.21-1.64.82s.24,1.24.96,1.4l4.46,1c.71.16,1.45-.21,1.64-.82.19-.61-.24-1.24-.96-1.4Z"
      fill="#00a39b"
    />
    <Path
      d="M30.25,11.27l-2.91-.65c-.71-.16-1.45.21-1.64.82-.19.61.24,1.24.96,1.4l2.91.65c.71.16,1.45-.21,1.64-.82.19-.61-.24-1.24-.96-1.4Z"
      fill="#89ccc8"
    />
    <Path
      d="M34.3,5.62h-4.7c-.63,0-1.15.52-1.15,1.15s.52,1.15,1.15,1.15h4.7c.63,0,1.15-.52,1.15-1.15s-.52-1.15-1.15-1.15Z"
      fill="#ffb057"
    />
    <Path
      d="M12.86,20.31h-.07c-.88,0-1.6-1.02-1.6-2.29v-1.25c0-.89-.51-1.63-1.13-1.63h-3.33c-.83,0-1.51.68-1.51,1.52v1.25c0,1.32-1.06,2.39-2.37,2.39-2.85,0-2.85,2.3-2.85,6.53v3.95h14.87v-5.27c0-1.58.28-4.26-2.01-5.21Z"
      fill="#ffb057"
    />
    <Rect x="0" y="33.79" width="14.87" height="16.26" fill="#fdc26a" />
    <Path
      d="M14.87,64.98v-11.93H0v11.93c0,1.58,1.28,2.88,2.85,2.88h10.01c1.11,0,2.01-1.3,2.01-2.88Z"
      fill="#ffb057"
    />
    <Path
      d="M23.08,21.59c-.21-.31-.47-.57-.77-.78-.23-.16-.48-.28-.75-.36-.27-.08-.55-.13-.85-.13h-.1c-.16,0-.31-.02-.46-.05-1.03-.21-1.81-1.14-1.81-2.24v-1.25c0-.34-.1-.65-.28-.91-.29-.43-.78-.72-1.33-.72h-6.68c.62,0,1.13.73,1.13,1.63v1.25c0,1.26.71,2.29,1.6,2.29h.07c2.29.95,2.01,3.63,2.01,5.21v5.27h8.7v-7.6c0-.2-.02-.39-.06-.58-.08-.37-.23-.72-.43-1.03Z"
      fill="#ffb057"
    />
    <Path
      d="M23.08,21.59c-.21-.31-.47-.57-.77-.78-.23-.16-.48-.28-.75-.36-.27-.08-.55-.13-.85-.13h-.1c-.16,0-.31-.02-.46-.05-1.03-.21-1.81-1.14-1.81-2.24v-1.25c0-.34-.1-.65-.28-.91-.29-.43-.78-.72-1.33-.72h-6.68c.62,0,1.13.73,1.13,1.63v1.25c0,1.26.71,2.29,1.6,2.29h.07c2.29.95,2.01,3.63,2.01,5.21v5.27h8.7v-7.6c0-.2-.02-.39-.06-.58-.08-.37-.23-.72-.43-1.03Z"
      fill="rgba(63, 51, 24, 0.11)"
    />
    <Rect x="14.87" y="33.79" width="8.7" height="16.26" fill="#fdc26a" />
    <Rect x="14.87" y="33.79" width="8.7" height="16.26" fill="rgba(63, 51, 24, 0.11)" />
    <Path
      d="M14.87,64.98c0,1.58-.9,2.88-2.01,2.88h7.85c.29,0,.58-.05.85-.13s.52-.21.75-.36c.3-.21.57-.47.77-.78.31-.46.49-1.01.49-1.61v-11.93h-8.7v11.93Z"
      fill="#ffb057"
    />
    <Path
      d="M14.87,64.98c0,1.58-.9,2.88-2.01,2.88h7.85c.29,0,.58-.05.85-.13s.52-.21.75-.36c.3-.21.57-.47.77-.78.31-.46.49-1.01.49-1.61v-11.93h-8.7v11.93Z"
      fill="rgba(63, 51, 24, 0.11)"
    />
  </Svg>
)

export const TABLETS_ICON = (
  <Svg viewBox="0 0 70.1 40.81" width="70.1" height="40.81">
    <Path
      d="M23.17,26.97C10.5,26.97.21,21.91,0,15.63c0,.06,0,.12,0,.19,0,8.13,7.54,15.66,23.17,15.66,2.26,0,4.32-.11,6.22-.32-.71-1.39-1.28-2.86-1.72-4.41-1.45.14-2.96.22-4.49.22Z"
      fill="#00a39b"
    />
    <Path
      d="M23.17,26.97c1.54,0,3.04-.08,4.49-.22,0,0,0,0,0,0-.07-.26-.16-.51-.23-.78-.02-.09-.04-.19-.06-.28-1.16-1.69-1.95-3.56-2.43-5.6v3.67c0,.4-.32.72-.72.72h-.06c-.4,0-.72-.32-.72-.72v-7.03H6.26c-.4,0-.72-.32-.72-.72s.32-.72.72-.72h17.19V7.13c0-.4.32-.72.72-.72h.06c.4,0,.72.32.72.72v1.93c.55-1.66,1.44-3.3,2.82-4.91-1.49-.15-3.03-.23-4.61-.23C10.37,3.92,0,9.08,0,15.45c0,.06,0,.12,0,.18.2,6.28,10.49,11.35,23.16,11.35Z"
      fill="#89ccc8"
    />
    <Path
      d="M27.02,16.73h-2.06v3.37c.48,2.04,1.26,3.91,2.43,5.6-.7-2.99-.81-6.03-.37-8.97Z"
      fill="#89ccc8"
    />
    <Path
      d="M24.96,9.06v6.21h2.34c.51-2.35,1.37-4.63,2.6-6.76.38-.65.78-1.27,1.22-1.88.41-.57.85-1.12,1.31-1.64.03-.03.05-.07.08-.1-1.46-.32-3-.57-4.6-.74-.04,0-.08,0-.13-.01-1.37,1.61-2.26,3.25-2.82,4.91Z"
      fill="#89ccc8"
    />
    <Path
      d="M36.39,30.59c-.36-.52-.71-1.06-1.04-1.62-5.59-9.68-3-21.64,5.79-26.71.5-.29,1-.54,1.52-.77-8.84,3.12-14.19,12.38-12.69,21.98-.01-.09-.03-.17-.04-.26,1.56,3.01,3.81,5.53,6.47,7.38Z"
      fill="#ffb057"
    />
    <Path
      d="M35.36,28.97c.32.56.67,1.1,1.04,1.62,4.43,3.08,10.01,4.32,15.55,2.96.95-.23,1.85-.54,2.72-.91l.3,1.3-2.82-12.22-13.23,2.63c-.53.11-1.05-.24-1.16-.77-.11-.53.24-1.05.77-1.16l13.17-2.62-2.95-12.79c-.12-.53.21-1.06.74-1.18h0c.53-.12,1.06.21,1.18.74l2.97,12.85,12.42-2.47c.53-.11,1.05.24,1.16.77.11.53-.24,1.05-.77,1.16l-12.36,2.46,2.42,10.5c.93-.33,1.84-.72,2.71-1.23,6.52-3.77,9.62-11.33,8.5-18.94-.18-.35-.35-.71-.55-1.06C61.9,1.47,51.23-2.37,42.66,1.49c-.51.23-1.02.48-1.52.77-8.79,5.07-11.38,17.03-5.79,26.71Z"
      fill="#fdc26a"
    />
    <Path
      d="M36.39,30.59c-2.66-1.85-4.91-4.37-6.47-7.38.01.09.03.17.04.26.09.6.2,1.2.35,1.8,0,0,0,0,0,0,.5,2.04,1.28,3.93,2.29,5.64,1.34,2.28,3.09,4.24,5.11,5.8,1.52,1.17,3.19,2.12,4.96,2.8,1.18.46,2.41.8,3.67,1.02,2.51.44,5.14.37,7.76-.27,0,0,0,0,0,0,.56-.14,1.09-.31,1.63-.49.15-.05.3-.1.45-.16.41-.15.81-.33,1.2-.51.26-.12.53-.24.79-.38-7.7,2.51-16.62-.74-21.79-8.14Z"
      fill="#fdc26a"
    />
    <Path
      d="M65.58,33.88c.2-.23.39-.48.58-.72.18-.22.36-.44.52-.67.2-.28.37-.57.56-.86.13-.21.27-.41.39-.63.19-.33.35-.66.52-1,.09-.19.19-.38.28-.57.17-.37.31-.76.46-1.14.06-.17.13-.33.19-.49.14-.42.26-.85.38-1.29.04-.14.08-.27.11-.41.11-.47.2-.94.28-1.42.02-.11.04-.21.05-.32.07-.51.13-1.03.16-1.55,0-.08.01-.15.02-.23.03-.55.04-1.1.02-1.66,0-.05,0-.1,0-.15-.02-.58-.06-1.16-.13-1.74,0-.03,0-.06,0-.08-.07-.6-.17-1.2-.3-1.8,0-.01,0-.02,0-.03-.39-1.85-1.03-3.68-1.93-5.45,0,0,0,0,0,0,1.12,7.61-1.98,15.18-8.5,18.94-.88.51-1.79.9-2.71,1.23l.38,1.66c.12.53-.21,1.06-.74,1.18h0c-.53.12-1.06-.21-1.18-.74l-.3-1.3c-.87.37-1.78.68-2.72.91-5.54,1.36-11.13.12-15.55-2.96,5.16,7.4,14.09,10.65,21.79,8.14,0,0,0,0,0,0,.55-.18,1.09-.38,1.62-.62.51-.23,1.01-.48,1.51-.76.02-.01.05-.02.07-.04,0,0,0,0,0,0,.54-.31,1.05-.65,1.54-1.01.18-.13.33-.28.5-.41.3-.24.61-.48.9-.74.2-.18.38-.39.57-.58.23-.23.46-.45.68-.7Z"
      fill="#3f3318"
      opacity={0.17}
    />
  </Svg>
)

export const VECTOR_ICON = () => (
  <Svg width="35" height="41" viewBox="0 0 35 41" fill="none">
    <Path
      d="M2.03125 40.1875C1.65829 40.1875 1.3006 40.0393 1.03688 39.7756C0.773158 39.5119 0.625 39.1542 0.625 38.7812C0.625 38.4083 0.773158 38.0506 1.03688 37.7869C1.3006 37.5232 1.65829 37.375 2.03125 37.375H4.84375V34.5625C4.84317 32.1746 5.51815 29.8352 6.7907 27.8147C8.06326 25.7941 9.88147 24.1748 12.0353 23.1437C12.8509 22.7528 13.2812 22.0834 13.2812 21.4844V19.5156C13.2812 18.9166 12.8481 18.2472 12.0353 17.8563C9.88147 16.8252 8.06326 15.2059 6.7907 13.1853C5.51815 11.1648 4.84317 8.8254 4.84375 6.4375V3.625H2.03125C1.65829 3.625 1.3006 3.47684 1.03688 3.21312C0.773158 2.9494 0.625 2.59171 0.625 2.21875C0.625 1.84579 0.773158 1.4881 1.03688 1.22438C1.3006 0.960658 1.65829 0.8125 2.03125 0.8125H32.9688C33.3417 0.8125 33.6994 0.960658 33.9631 1.22438C34.2268 1.4881 34.375 1.84579 34.375 2.21875C34.375 2.59171 34.2268 2.9494 33.9631 3.21312C33.6994 3.47684 33.3417 3.625 32.9688 3.625H30.1562V6.4375C30.1568 8.8254 29.4819 11.1648 28.2093 13.1853C26.9367 15.2059 25.1185 16.8252 22.9647 17.8563C22.1491 18.2472 21.7188 18.9166 21.7188 19.5156V21.4844C21.7188 22.0834 22.1519 22.7528 22.9647 23.1437C25.1185 24.1748 26.9367 25.7941 28.2093 27.8147C29.4819 29.8352 30.1568 32.1746 30.1562 34.5625V37.375H32.9688C33.3417 37.375 33.6994 37.5232 33.9631 37.7869C34.2268 38.0506 34.375 38.4083 34.375 38.7812C34.375 39.1542 34.2268 39.5119 33.9631 39.7756C33.6994 40.0393 33.3417 40.1875 32.9688 40.1875H2.03125ZM7.65625 3.625V6.4375C7.65625 7.94781 7.99375 9.37656 8.60406 10.6562H26.3959C27.0034 9.37656 27.3438 7.94781 27.3438 6.4375V3.625H7.65625ZM16.0938 21.4844C16.0938 23.4559 14.7494 24.9606 13.2503 25.6806C11.5749 26.4825 10.1605 27.742 9.17064 29.3137C8.18076 30.8854 7.65574 32.7051 7.65625 34.5625C7.65625 34.5625 10.0919 30.9091 16.0938 30.4V21.4844ZM18.9062 21.4844V30.4C24.9081 30.9091 27.3438 34.5625 27.3438 34.5625C27.3443 32.7051 26.8192 30.8854 25.8294 29.3137C24.8395 27.742 23.4251 26.4825 21.7497 25.6806C20.2506 24.9606 18.9062 23.4559 18.9062 21.4844Z"
      fill="#00A39B"
    />
  </Svg>
);

export const LOGO_ICON = () => (
  <Svg width="324" height="66" viewBox="0 0 324 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_638_6677)">
      <Path d="M46.6805 0H19.0369C8.5415 0 0 8.57944 0 19.1215V46.8878C0 57.4299 8.5415 66.0093 19.0369 66.0093H46.6805C57.1759 66.0093 65.7174 57.4299 65.7174 46.8878V19.1215C65.7174 8.57944 57.1759 0 46.6805 0ZM61.5118 46.8878C61.5118 50.8505 59.9673 54.5888 57.148 57.4112C54.3381 60.2336 50.6163 61.7944 46.6712 61.7944H19.0276C15.0825 61.7944 11.3607 60.243 8.5508 57.4112C5.74085 54.5888 4.18701 50.8505 4.18701 46.8878V19.1215C4.18701 15.1589 5.73155 11.4206 8.5508 8.59813C11.3607 5.7757 15.0825 4.21495 19.0276 4.21495H46.6712C50.6163 4.21495 54.3381 5.76635 57.148 8.59813C59.958 11.4206 61.5118 15.1589 61.5118 19.1215V46.8878Z" fill="#91C7C4" />
      <Path d="M33.6449 49.5234H32.0074C30.5223 49.5234 29.3184 50.7327 29.3184 52.2244V53.8692C29.3184 55.3609 30.5223 56.5702 32.0074 56.5702H33.6449C35.13 56.5702 36.3339 55.3609 36.3339 53.8692V52.2244C36.3339 50.7327 35.13 49.5234 33.6449 49.5234Z" fill="#00A39B" />
      <Path d="M31.5608 12.4581C34.3522 12.4581 36.5015 12.5422 38.2787 12.6544C38.0088 10.0562 36.8179 8.04688 35.2826 8.04688H30.3513C28.8067 8.04688 27.6157 10.0749 27.3552 12.6917C28.5183 12.5329 29.8488 12.4581 31.4213 12.4487C31.4678 12.4487 31.5143 12.4487 31.5608 12.4487V12.4581Z" fill="#00A39B" />
      <Path d="M36.5945 40.645L36.3433 43.7478C37.3202 43.9721 38.2042 44.159 38.902 44.2992C39.8138 44.4768 40.7071 43.9534 40.8838 43.131L40.9024 43.0375C41.0699 42.2525 40.5117 41.4861 39.637 41.3179C38.8276 41.159 37.7668 40.9347 36.6038 40.6544C36.6038 40.6544 36.6038 40.6544 36.5945 40.6544V40.645Z" fill="#EEB569" />
      <Path d="M37.6925 23.7383L37.4599 26.8692C37.9624 27.0094 38.4276 27.1776 38.837 27.3552C40.3071 28.0187 40.4932 28.6823 40.4746 29.2991C40.4746 29.5701 40.4467 30.0841 39.0603 30.5141C38.4927 30.6916 37.8414 30.8038 37.1622 30.8879C36.7621 30.9346 36.362 30.972 35.9619 31.0094C35.5618 31.0374 35.1803 31.0655 34.8175 31.0935C34.101 31.1402 33.4776 31.1776 32.9473 31.2617C32.6309 31.3084 32.3425 31.3645 32.0912 31.4486C32.0261 31.4673 31.9517 31.486 31.8772 31.5047C31.8028 31.5234 31.7098 31.5421 31.6074 31.5701C31.5609 31.5795 31.5144 31.5888 31.4585 31.5982C31.3097 31.6262 31.1422 31.6636 30.9747 31.6916C30.8817 31.7103 30.7886 31.729 30.6956 31.7477C30.221 31.8412 29.7093 31.9533 29.1789 32.0935C28.9649 32.1496 28.7602 32.215 28.5462 32.2804C28.0531 32.4393 27.56 32.6355 27.0854 32.8879C25.392 33.7944 24.3965 35.1869 24.229 36.9346C24.0894 38.3552 25.1036 39.6542 27.2622 40.7757C27.8298 41.0748 28.4904 41.3645 29.2348 41.6542L29.1231 40.3926C29.0859 39.8598 28.9742 39.0748 28.8998 38.0841C28.8998 38.0841 28.844 38.0561 28.8161 38.0374C27.8205 37.4954 27.8112 36.0468 28.8068 35.5141C28.8068 35.5141 28.8254 35.5141 28.8254 35.5047C29.6442 35.0655 30.7421 34.8505 31.7191 34.6542C32.268 34.5421 32.7891 34.4393 33.2264 34.2991C33.4776 34.2243 34.3987 34.1589 35.0687 34.1215C36.6132 34.0187 38.5299 33.8972 40.1768 33.3832C43.1729 32.458 43.8521 30.6916 43.8893 29.3645C43.9637 26.7757 42.0191 25.3458 40.3629 24.6075C39.5534 24.243 38.6416 23.9626 37.7204 23.729C37.7204 23.729 37.7018 23.729 37.6925 23.729V23.7383Z" fill="#EEB569" />
    </G>
  </Svg>
)

export const ONBOARDINGONE_ICON = () => (
  <Svg width="244" height="279" viewBox="0 0 244 279" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#clip0_638_6701)">
      <Path d="M158.926 32.886C147.543 29.7678 151.831 22.7536 150.818 16.463C149.805 10.1724 141.674 9.91602 141.674 9.91602C133.576 12.7337 136.888 11.5001 127.012 15.4274C119.031 23.6111 113.942 61.9599 140.528 61.7249C167.113 61.4913 170.31 36.0042 158.927 32.886H158.926Z" fill="#292C56"/>
      <Path d="M203.124 73.2008L212.677 69.5484C212.677 69.5484 216.995 67.3048 221.973 67.3661C226.952 67.4273 229.498 66.5555 235.964 63.2992C242.43 60.0428 244.108 62.1368 241.484 65.698C238.859 69.2592 232.278 76.0811 229.053 77.0655C225.827 78.0498 221.926 78.3831 221.926 78.3831L210.559 88.7962L203.125 73.2008H203.124Z" fill="white"/>
      <Path d="M210.043 89.0425L202.608 73.4457C202.465 73.1451 202.608 72.7876 202.919 72.6679L212.442 69.0269C212.871 68.809 217.065 66.7349 221.979 66.7962C226.919 66.8503 229.337 65.997 235.706 62.7905C239.359 60.95 241.826 60.6096 242.835 61.8047C243.601 62.7121 243.283 64.215 241.941 66.0369C239.459 69.4044 232.718 76.544 229.219 77.6109C226.346 78.487 223.01 78.8516 222.168 78.9328L210.942 89.2163C210.658 89.4755 210.207 89.3858 210.043 89.0411V89.0425ZM203.903 73.5126L210.741 87.8573L221.54 77.9642C221.633 77.8787 221.751 77.8274 221.876 77.816C221.915 77.8132 225.758 77.4756 228.885 76.5212C231.813 75.628 238.168 69.2349 241.024 65.3603C242.094 63.9087 242.267 62.8973 241.964 62.5398C241.606 62.1181 239.995 61.9073 236.219 63.809C229.756 67.064 227.101 68.0056 221.965 67.9372C217.189 67.8845 212.979 70.0326 212.938 70.0554L203.902 73.5141L203.903 73.5126Z" fill="#292C56"/>
      <Path d="M64.046 43.0752C64.046 43.0752 60.6306 32.7305 58.4421 30.0454C56.2535 27.3588 44.6067 33.4827 39.8776 34.1422C35.177 34.7975 31.2643 28.9514 29.5445 32.0938C28.5272 33.9513 30.901 36.9271 32.6977 39.1792C34.9974 42.0624 37.0022 44.5752 39.7037 44.494C40.5644 44.4684 46.3008 42.1593 47.1472 41.806C47.5604 45.7461 47.9751 49.6849 48.3883 53.625L64.0475 43.0766L64.046 43.0752Z" fill="white"/>
      <Path d="M48.3869 54.1934C48.0948 54.1934 47.8511 53.9726 47.8198 53.6834L46.6585 42.6237C45.805 42.9727 40.6399 45.0368 39.7195 45.0638C36.7415 45.1464 34.6569 42.5496 32.2518 39.5354C30.2883 37.0738 27.8461 34.0112 29.0444 31.8217C29.365 31.2377 29.8466 30.8744 30.1615 30.7434C31.3185 30.2591 32.6393 30.9998 34.1696 31.8573C38.7648 34.43 39.4217 34.0767 46.5958 31.4827C52.0573 29.5083 57.2153 27.6423 58.8838 29.6893C61.1137 32.4257 64.4465 42.4741 64.5875 42.9C64.6673 43.1422 64.5761 43.4086 64.3653 43.551C48.5379 54.2119 48.659 54.1963 48.3869 54.1963V54.1934ZM47.1458 41.2348C47.4379 41.2348 47.6816 41.4556 47.7129 41.7448L48.8557 52.6208L63.3693 42.8445C62.7124 40.91 59.8584 32.6821 58.0018 30.4044C56.8448 28.9856 51.1454 31.0454 46.9848 32.5496C39.6568 35.1992 38.6252 35.6536 33.6139 32.8474C32.3957 32.165 31.2458 31.5226 30.6032 31.7904C30.5377 31.8189 30.247 31.9984 30.0461 32.3659C29.2111 33.8915 31.5778 36.8587 33.1437 38.8217C35.358 41.598 37.2716 43.9997 39.6867 43.9228C40.0557 43.9128 41.4122 43.4 42.2244 43.1066C46.3793 41.608 46.8153 41.2348 47.1458 41.2348Z" fill="#292C56"/>
    </G>
  </Svg>
)

export const ONBOARDINGTWO_ICON = (props) => (
  <Svg width={292} height={269} viewBox="0 0 292 269" fill="none" {...props}>
    <G clipPath="url(#clip0_638_6775)">
      <Path
        d="M109.758 164.731H43.2621C31.3336 186.814 29.7096 203.631 30.6424 215.219C31.1551 221.574 33.7104 237.126 36.5782 269C76.3168 268.848 116.055 268.695 155.792 268.543L109.758 164.731Z"
        fill="#292C56"
      />
      <Path
        d="M165.483 105.472L139.253 135.54C139.253 135.54 118.942 99.0744 109.761 90.4386C100.705 81.9182 82.6158 83.6223 82.6419 83.7208C78.9429 83.7593 73.7768 83.8609 67.6147 84.1318C42.7479 85.2294 30.1559 86.036 22.1774 92.4675C19.5713 94.5687 15.7891 98.3309 10.5199 117.559C2.97239 145.1 -7.04422 181.653 9.64859 194.612C12.6796 196.965 18.3244 199.884 28.8136 199.002L25.6425 222.92H67.684C76.8971 222.92 84.4645 215.644 84.8248 206.439C85.1249 198.8 85.4236 191.162 85.7237 183.524C88.0928 190.428 90.4604 197.332 92.8294 204.236C96.019 213.532 105.112 219.475 114.905 218.664L140.794 216.523L117.274 172.04C121.811 176.935 127.089 181.13 133.174 183.839C160.843 196.154 188.832 137.138 188.832 137.138L165.481 105.47L165.483 105.472Z"
        fill="white"
      />
      <Path
        d="M67.6825 223.538H25.6411C25.2701 223.538 24.9807 223.212 25.0315 222.841L28.1025 199.675C20.2087 200.214 13.8773 198.676 9.26999 195.1C-7.74916 181.887 2.46602 144.613 9.92422 117.398C15.0672 98.6328 18.7448 94.4426 21.7896 91.9889C29.8959 85.4543 42.3739 84.6307 67.5855 83.5162C77.7484 83.0683 81.8585 83.1668 82.5697 83.0868C83.3147 83.0083 100.902 81.2595 110.183 89.9877C118.698 98.0001 136.313 129.043 139.363 134.474L165.018 105.064C165.269 104.778 165.738 104.779 165.977 105.104L189.327 136.772C189.463 136.955 189.486 137.197 189.387 137.402C189.317 137.549 182.24 152.37 171.862 165.489C157.988 183.024 144.523 189.564 132.924 184.401C128.333 182.359 123.92 179.348 119.759 175.425L141.336 216.235C141.541 216.623 141.285 217.1 140.842 217.137L114.953 219.279C104.864 220.11 95.528 214.009 92.243 204.436L86.2057 186.838L85.436 206.463C85.0604 216.037 77.2604 223.536 67.6795 223.536L67.6825 223.538ZM26.3446 222.306H67.6825C76.6 222.306 83.8597 215.327 84.2091 206.417L85.1081 183.502C85.1343 182.826 86.084 182.682 86.3057 183.327L93.4114 204.039C96.5117 213.078 105.326 218.843 114.855 218.055L139.814 215.99L116.73 172.331C116.394 171.698 117.239 171.1 117.726 171.625C122.61 176.895 127.892 180.816 133.424 183.279C159.165 194.737 185.802 141.92 188.116 137.206L165.441 106.456L139.717 135.945C139.437 136.267 138.923 136.212 138.715 135.841C138.512 135.476 118.346 99.3609 109.339 90.8882C100.893 82.9421 84.5431 84.152 82.8437 84.3013C82.4789 84.4399 79.1169 84.2428 67.641 84.7493C42.7018 85.8499 30.3669 86.6581 22.5639 92.9494C20.4735 94.635 16.582 97.7723 11.1141 117.725C3.74677 144.607 -6.34219 181.423 10.0274 194.13C14.53 197.626 20.8337 199.059 28.7629 198.392C29.1693 198.363 29.4756 198.708 29.4248 199.087L26.3461 222.308L26.3446 222.306Z"
        fill="#292C56"
      />
    </G>
  </Svg>
);
