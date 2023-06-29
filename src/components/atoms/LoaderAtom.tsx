import {Colors} from '@src/themes/color';
import {scalePresets} from '@src/themes/metrics';
import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';

interface LoaderAtomProps {
  loading: boolean;
}

export const LoaderAtom: React.FC<LoaderAtomProps> = ({loading}) => {
  if (loading) {
    return (
      <View style={{paddingVertical: scalePresets.baseScale}}>
        <ActivityIndicator size={'small'} color={Colors.primaryCTA} />
      </View>
    );
  }
  return null;
};
