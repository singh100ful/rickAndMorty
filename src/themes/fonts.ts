import {Colors} from '@src/themes/color';
import {scaleFont} from '@src/themes/metrics';

export const defaultTexts = {
  largeTitle: {
    fontWeight: '700',
    color: Colors.primaryText,
    fontSize: scaleFont(24),
    lineHeight: scaleFont(39),
    letterSpacing: 0,
  },
  bodyBold: {
    fontWeight: '700',
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  body: {
    fontWeight: '500',
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  bodySubtitle: {
    fontWeight: '400',
    color: Colors.primaryText,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
  paragraph: {
    fontWeight: '300',
    color: Colors.primaryText,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
  caption: {
    fontWeight: '300',
    color: Colors.primaryText,
    fontSize: scaleFont(12),
    lineHeight: scaleFont(14),
    letterSpacing: 0,
  },
  smallText: {
    fontWeight: '400',
    color: Colors.primaryText,
    fontSize: scaleFont(9),
    lineHeight: scaleFont(10),
    letterSpacing: 0,
  },
  input: {
    fontWeight: '400',
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
};
