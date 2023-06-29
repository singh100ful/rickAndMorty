import {Colors} from '@src/themes/color';
import {scalePresets} from '@src/themes/metrics';
import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {TextAtom} from '../atoms/TextAtom';
import {StatusAtom} from '../atoms/StatusAtom';

interface CharacterOrganismProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  character: ResultData;
}

export const CharacterOrganism: React.FC<CharacterOrganismProps> = ({
  onClose,
  character,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState<Location | null>(null);
  const [episode, setEpisode] = React.useState<Episode | null>(null);

  React.useEffect(() => {
    fetchOrigin();
    fetchLocation();
  }, []);

  const fetchOrigin = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        character.episode[character.episode.length - 1],
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
          }),
        },
      );
      const res: Episode = await response.json();

      setEpisode(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const fetchLocation = async () => {
    try {
      setLoading(true);
      const response = await fetch(character.location.url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
        }),
      });
      const res: Location = await response.json();

      setLocation(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.presableContainer}
        onPress={() => onClose(false)}
      />
      <View style={styles.viewContainer}>
        <Image source={{uri: character.image}} style={styles.imageStyle} />
        <View style={{paddingHorizontal: scalePresets.baseScale}}>
          <View style={styles.textRow}>
            <TextAtom title={character.name} preset="title" />
            <TextAtom title="-" />
            <TextAtom title={character.gender} style={styles.textStyle} />
          </View>
          <View style={styles.textRow}>
            <StatusAtom status={character.status} />
            <TextAtom title="-" />
            <TextAtom
              title={character.species}
              style={{paddingHorizontal: scalePresets.smallScale}}
            />
          </View>
          <View style={styles.textRow}>
            <TextAtom title="Episodes : " preset="bodyBold" />
            <TextAtom
              title={character.episode.length.toString()}
              style={styles.textStyle}
            />
          </View>
          <View style={styles.textRow}>
            <TextAtom title="Origin: " preset="bodyBold" />
            <TextAtom title={character.origin.name} style={styles.textStyle} />
          </View>
          <View style={styles.textRow}>
            <TextAtom title="Location: " preset="bodyBold" />
            <TextAtom
              title={character.location.name}
              style={styles.textStyle}
            />
          </View>
          {!loading && location && episode ? (
            <>
              <View style={styles.textRow}>
                <TextAtom title="Dimension: " preset="bodyBold" />
                <TextAtom title={location.dimension} style={styles.textStyle} />
              </View>
              <View style={styles.textRow}>
                <TextAtom title="Type: " preset="bodyBold" />
                <TextAtom title={location.type} style={styles.textStyle} />
              </View>
              <View style={styles.textRow}>
                <TextAtom title="Number of residents: " preset="bodyBold" />
                <TextAtom
                  title={location.residents.length.toString()}
                  style={styles.textStyle}
                />
              </View>
              <View style={styles.textRow}>
                <TextAtom title="Last seen in: " preset="bodyBold" />
                <TextAtom title={episode.name} style={styles.textStyle} />
              </View>
            </>
          ) : (
            <View style={{paddingVertical: scalePresets.baseScale}}>
              <ActivityIndicator size={'large'} color={Colors.primaryCTA} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primaryTextOpacity},
  presableContainer: {flex: 1, backgroundColor: Colors.transparent},
  viewContainer: {
    flex: 3,
    backgroundColor: Colors.white,
    borderTopLeftRadius: scalePresets.largeScale,
    borderTopRightRadius: scalePresets.largeScale,
  },
  imageStyle: {
    width: scalePresets.screenWidth,
    height: 250,
    borderTopLeftRadius: scalePresets.largeScale,
    borderTopRightRadius: scalePresets.largeScale,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scalePresets.smallScale,
  },
  textStyle: {
    paddingHorizontal: scalePresets.smallScale,
    textTransform: 'capitalize',
  },
});
