import * as React from 'react';
import {View} from 'react-native';
import {Colors} from '@src/themes/color';
import {scalePresets} from '@src/themes/metrics';

interface SeparatorAtomProps {}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({}) => {
  return (
    <View style={{paddingVertical: scalePresets.smallScale}}>
      <View
        style={{
          backgroundColor: Colors.black,
          height: 1,
        }}
      />
    </View>
  );
};
