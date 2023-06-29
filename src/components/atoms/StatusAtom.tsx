import {Colors} from '@src/themes/color';
import {scalePresets} from '@src/themes/metrics';
import * as React from 'react';
import {View} from 'react-native';
import {TextAtom} from './TextAtom';

enum Status {
  Dead = 'Dead',
  Alive = 'Alive',
  Unknown = 'Unknown',
}

interface StatusAtomProps {
  status: string;
}

export const StatusAtom: React.FC<StatusAtomProps> = ({status}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor:
            status === Status.Alive
              ? Colors.success
              : status === Status.Dead
              ? Colors.error
              : Colors.gray,
          padding: scalePresets.smallScale,
          borderRadius: scalePresets.smallScale,
        }}
      />
      <TextAtom
        title={status}
        style={{
          paddingHorizontal: scalePresets.smallScale,
          textTransform: 'capitalize',
        }}
      />
    </View>
  );
};
