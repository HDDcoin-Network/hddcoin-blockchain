import { alpha } from '@mui/material';

const Color = {
  Royal: {
    '50': '#F0F4FE',
    '100': '#DCE6FD',
    '200': '#C1D4FC',
    '300': '#7EA9F8',
    '400': '#6595F5',
    '500': '#416FF0',
    '600': '#2C50E4',
    '700': '#233CD2',
    '800': '#2333AA',
    '900': '#223086',
  },
  Grape: {
    '50': '#F1F2FC',
    '100': '#E6E7F9',
    '200': '#D2D3F3',
    '300': '#C3C3EE',
    '400': '#9E99E0',
    '500': '#8D80D4',
    '600': '#7B66C5',
    '700': '#6B55AD',
    '800': '#57478C',
    '900': '#493F70',
  },
  Purple: {
    '50': '#FCF4FF',
    '100': '#F9E8FF',
    '200': '#F2D0FE',
    '300': '#EAACFB',
    '400': '#DC6EF7',
    '500': '#CD48ED',
    '600': '#B428D1',
    '700': '#981EAD',
    '800': '#7E1A8E',
    '900': '#691B74',
  },
  Red: {
    '50': '#FFF1F2',
    '100': '#FEE5E7',
    '200': '#FCCFD3',
    '300': '#FAA7B0',
    '400': '#F56073',
    '500': '#EE455F',
    '600': '#DA2449',
    '700': '#B8183C',
    '800': '#9A1739',
    '900': '#841737',
  },
  Orange: {
    '50': '#FFF8EB',
    '100': '#FFEAC6',
    '200': '#FFD388',
    '300': '#FFAF3A',
    '400': '#FF9B20',
    '500': '#F97507',
    '600': '#DD5102',
    '700': '#B73506',
    '800': '#94280C',
    '900': '#7A220D',
  },
  Yellow: {
    '50': '#FEFEE8',
    '100': '#FEFFBD',
    '200': '#FFFD88',
    '300': '#FFF544',
    '400': '#FEE611',
    '500': '#EECC04',
    '600': '#CD9F01',
    '700': '#A47204',
    '800': '#87590C',
    '900': '#734910',
  },
  Lime: {
    '50': '#FAFFE5',
    '100': '#F1FFC7',
    '200': '#E2FF95',
    '300': '#D4FF72',
    '400': '#B4F625',
    '500': '#94DD05',
    '600': '#72B100',
    '700': '#568605',
    '800': '#46690B',
    '900': '#3B590E',
  },
  Green: {
    '50': '#F1FCF3',
    '100': '#E0F8E3',
    '200': '#C2F0C9',
    '300': '#92E39F',
    '400': '#5ECE71',
    '500': '#35B24B',
    '600': '#269339',
    '700': '#217430',
    '800': '#1F5C2A',
    '900': '#1B4C24',
  },
  Aqua: {
    '50': '#F1FCFA',
    '100': '#D1F6F2',
    '200': '#A2EDE6',
    '300': '#6CDCD6',
    '400': '#3EC3C1',
    '500': '#24A8A7',
    '600': '#1A8284',
    '700': '#196A6C',
    '800': '#195356',
    '900': '#194648',
  },
  Blue: {
    '50': '#EFF9FF',
    '100': '#DFF2FF',
    '200': '#B7E6FF',
    '300': '#77D4FF',
    '400': '#2FBEFF',
    '500': '#04A9F6',
    '600': '#0085D0',
    '700': '#006AA8',
    '800': '#015A8B',
    '900': '#084A72',
  },
  Comet: {
    '50': '#F6F7F9',
    '100': '#ECEEF2',
    '200': '#D4D9E3',
    '300': '#AEB9CB',
    '400': '#8292AE',
    '500': '#637694',
    '600': '#4E5E7B',
    '700': '#404C64',
    '800': '#384154',
    '900': '#323948',
  },
  Storm: {
    '50': '#F6F6F9',
    '100': '#ECECF2',
    '200': '#D5D5E2',
    '300': '#B1B2C8',
    '400': '#8789A9',
    '500': '#686A8F',
    '600': '#535376',
    '700': '#474765',
    '800': '#3B3B51',
    '900': '#353446',
  },
  Wine: {
    '50': '#F8F6F9',
    '100': '#F1ECF2',
    '200': '#DFD6E1',
    '300': '#C3B2C7',
    '400': '#A188A8',
    '500': '#886A90',
    '600': '#6F5475',
    '700': '#5B4460',
    '800': '#4E3B51',
    '900': '#433545',
  },
  Cosmic: {
    '50': '#F9F6F8',
    '100': '#F5EEF2',
    '200': '#EDDDE6',
    '300': '#DEC3D3',
    '400': '#C99DB5',
    '500': '#BE8CA6',
    '600': '#A06280',
    '700': '#874F67',
    '800': '#714357',
    '900': '#603B4B',
  },
  Sand: {
    '50': '#F9F6F3',
    '100': '#F0EBE4',
    '200': '#E0D5C8',
    '300': '#CCB9A5',
    '400': '#B19176',
    '500': '#A88267',
    '600': '#9B715B',
    '700': '#815C4D',
    '800': '#694C43',
    '900': '#564038',
  },
  Husk: {
    '50': '#F9F9F3',
    '100': '#F2F2E2',
    '200': '#E4E2C4',
    '300': '#D2CE9F',
    '400': '#C3BA7F',
    '500': '#B2A35D',
    '600': '#A59151',
    '700': '#897545',
    '800': '#705F3C',
    '900': '#5B4E33',
  },
  Bean: {
    '50': '#F6F6EF',
    '100': '#E9EBDC',
    '200': '#D7DABC',
    '300': '#BCC294',
    '400': '#A1AA71',
    '500': '#879155',
    '600': '#677040',
    '700': '#505734',
    '800': '#42472D',
    '900': '#393E29',
  },
  Forest: {
    '50': '#F3F6F3',
    '100': '#E4E9E2',
    '200': '#C9D3C7',
    '300': '#9BAE98',
    '400': '#799176',
    '500': '#587356',
    '600': '#425A41',
    '700': '#354834',
    '800': '#2B3A2B',
    '900': '#243024',
  },
  Sea: {
    '50': '#F5F8F7',
    '100': '#DDEAE7',
    '200': '#BBD4D0',
    '300': '#9FC0BC',
    '400': '#6A9793',
    '500': '#507C79',
    '600': '#3E6360',
    '700': '#35504F',
    '800': '#2D4242',
    '900': '#293838',
  },
  Glacier: {
    '50': '#F2F8F9',
    '100': '#DEEBEF',
    '200': '#C0D7E1',
    '300': '#95BBCB',
    '400': '#689AB1',
    '500': '#477A93',
    '600': '#3D647D',
    '700': '#375467',
    '800': '#334757',
    '900': '#2E3E4B',
  },
  Neutral: {
    '50': '#F8FBFC',
    '100': '#F1F7F9',
    '200': '#E2EDF0',
    '300': '#CCDDE1',
    '400': '#95B0B7',
    '500': '#65838A',
    '600': '#486268',
    '700': '#344E54',
    '800': '#1E353B',
    '900': '#0F252A',
  },
  HDDcoin: {
    Primary: '#5ECE71',
    Secondary: {
      '100': '#FFFAE3',
      '200': '#E8FBBA',
      '300': '#D4FF72',
      '400': '#1EBF89',
      '500': '#1A8284',
      '600': '#094D4C',
      Purple: {
        '100': '#C3C3EE',
        '200': '#7676A9',
        '300': '#474765',
      },
      Blue: {
        '100': '#BCEFF2',
        '200': '#25729C',
        '300': '#0D3349',
      },
    },
  },
  Text: {
    Light: {
      Primary: alpha('#0F252A', 0.87),
      Secondary: alpha('#0F252A', 0.6),
      Disabled: alpha('#0F252A', 0.32),
    },
    Dark: {
      Primary: alpha('#FFFFFF', 0.9),
      Secondary: alpha('#FFFFFF', 0.7),
      Disabled: alpha('#FFFFFF', 0.32),
    },
  },
};

export default Color;
