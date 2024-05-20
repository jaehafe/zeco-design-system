import { Theme } from '@emotion/react';

const colors = {
  /**
   * * BLACK
   */
  black: '#000',

  /**
   * * WHITE
   */
  white: '#FFF',
  white7: 'rgba(255, 255, 255, 0.07)',
  white20: 'rgba(255, 255, 255, 0.20)',

  /**
   * * GRAY
   */
  gray1: '#FAFAFA',
  gray2: '#F5F5F5',
  gray3: '#EDEDED',
  gray4: '#EAEAEA',
  gray5: '#E7E7E7',
  gray6: '#CACACA',
  gray7: '#999999',
  gray8: '#787878',
  gray9: '#5F5F63',
  gray10: '#38383B',
  gray11: '#0A0B0B',

  /**
   * * NEW GREEN
   */
  reableGreen: '#1ADC51',
  green50: '#F3F5F4',
  green100: '#F7FBF7',
  green200: '#EFF8F0',
  green300: '#E4F3E6',
  green400: '#CFE9D3',
  green500: '#08846E',

  green500BoxShadow: '0 0 0 2px rgba(8, 132, 110, 0.3)',

  /**
   * * GREEN_GRAY
   */
  greenGray1: '#D8E0D9',
  greenGray2: '#6E928B',
  greenGray3: '#3A7A6F',
  greenGray4: '#363A3A',

  /**
   * * BLUE
   */
  blue1: '#F9F9FA',
  blue2: '#EFF3FC',
  blue3: '#DCE1EF',
  blue4: '#5979D5',
  blue5: '#0E4AE2',

  /**
   * * YELLOW
   */
  yellow1: '#FFFBEC',
  yellow2: '#FFF9E0',
  yellow3: '#FFF6CF',
  yellow4: '#FFEDA1',
  yellow5: '#FFDA43',
  yellow6: '#F59402',

  /**
   * * RED
   */
  red1: '#FFEAEA',
  red2: '#FFD7D7',
  red3: '#FFBDC5',
  red4: '#FF7E7E',
  red5: '#FF5555',
  red6: '#FF0000',

  red6BoxShadow: '0 0 0 2px rgba(255, 0, 0, 0.30)',

  /**
   * * PURPLE
   */
  purple400: '#AD72F9',

  /**
   * * TRANSPARENT
   */
  transparent: 'transparent',
} as const;

const zIndex = {
  header: 3,
  sidebar: 4,
  stepsCounter: 2,
  steps: 3,
  overlay: 4,
  popover: 10,
  dropdown: 1, // 5 -> 1로 수정 2024.01.09.
  //
  // popUpModal: 10,
  modal: 15,
  dropdownInModal: 16,
  backdrop: 20,
  secondModal: 18,
  secondBackDrop: 17,
  modalPortal: 25,
  restModal: 30,
  toast: 35,
  tooltip: 40,

  progressBar: 50,
} as const;

const theme: Theme = {
  colors,
  zIndex,
} as const;

export default theme;
