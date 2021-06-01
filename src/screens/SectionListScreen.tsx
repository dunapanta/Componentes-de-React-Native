import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContex} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Ironman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Ironman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Naruto',
      'Full Metal Alchimist',
      'Saint Saya',
      'Atack on Titans',
      'Kenshin',
      'Goku',
      'Saitama',
      'Naruto',
      'Full Metal Alchimist',
      'Saint Saya',
      'Atack on Titans',
      'Kenshin',
      'Goku',
      'Saitama',
      'Naruto',
      'Full Metal Alchimist',
      'Saint Saya',
      'Atack on Titans',
      'Kenshin',
      'Goku',
      'Saitama',
      'Naruto',
      'Full Metal Alchimist',
      'Saint Saya',
      'Atack on Titans',
    ],
  },
];

export const SectionListScreen = () => {
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContex);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={casas}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <Header title={section.casa} />
          </View>
        )}
        //Header
        ListHeaderComponent={() => <Header title="Section List" />}
        //Para Android Animacion
        stickySectionHeadersEnabled
        //Footer
        ListFooterComponent={() => <Header title={`Total:  ${casas.length}`} />}
        renderSectionFooter={({section}) => (
          <Header title={`Total:  ${section.data.length}`} />
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        //Scroll
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
