import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {baseUrl} from '@src/constants/apiConstants';
import {scalePresets} from '@src/themes/metrics';
import {CharacterMolecule} from '@src/components/molecules/CharacterMolecule';
import {BannerAtom} from '@src/components/atoms/BannerAtom';
import {LoaderAtom} from '@src/components/atoms/LoaderAtom';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const [data, setData] = React.useState<ResultData[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchChararcter();
  }, []);

  const fetchChararcter = async (page: number = 1) => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl + '/character/?page=' + page, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
        }),
      });
      const res: ResultType = await response.json();
      if (data.length) {
        let temp = data;
        temp = temp.concat(res.results);
        setData(temp);
      } else {
        setData(res.results);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flexDirection: 'column'}}
        contentContainerStyle={styles.listStyle}
        initialNumToRender={6}
        numColumns={2}
        data={data}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => <BannerAtom />}
        renderItem={({item, index}) => {
          return <CharacterMolecule key={index} character={item} />;
        }}
        ListFooterComponent={() => {
          return <LoaderAtom loading={loading} />;
        }}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          const page = data.length / 20 + 1;
          fetchChararcter(page);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    rowGap: scalePresets.smallScale,
    columnGap: scalePresets.smallScale,
  },
});
