import {Colors} from '@src/themes/color';
import {scalePresets} from '@src/themes/metrics';
import * as React from 'react';
import {
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {TextAtom} from '@src/components/atoms/TextAtom';
import {CharacterOrganism} from '../organism/CharacterOrganism';

interface CharacterMoleculeProps {
  character: ResultData;
}

export const CharacterMolecule: React.FC<CharacterMoleculeProps> = ({
  character,
}) => {
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <Modal visible={modal} transparent animationType="slide">
        <CharacterOrganism onClose={setModal} character={character} />
      </Modal>
      <Pressable onPress={() => setModal(!modal)}>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={{uri: character.image}}
            style={styles.imageBg}
            imageStyle={{
              borderRadius: scalePresets.baseScale,
            }}>
            <View style={styles.textContainer}>
              <TextAtom
                title={character.name}
                preset="bodyBold"
                style={{color: Colors.white}}
              />
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: scalePresets.screenWidth / 2 - scalePresets.baseScale,
    height: scalePresets.screenWidth / 2 - scalePresets.baseScale,
    margin: scalePresets.smallScale,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: scalePresets.baseScale,
  },
  imageBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: scalePresets.mediumScale,
    borderRadius: scalePresets.baseScale,
    paddingVertical: scalePresets.baseScale,
  },
});
