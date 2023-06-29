import {Images} from '@src/assets';
import {scalePresets} from '@src/themes/metrics';
import * as React from 'react';
import {Image, View} from 'react-native';

interface BannerAtomProps {}

export const BannerAtom: React.FC<BannerAtomProps> = ({}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={Images.headerLogo}
        style={{
          width: scalePresets.screenWidth - 60,
          height: scalePresets.screenWidth - 60,
        }}
      />
    </View>
  );
};
