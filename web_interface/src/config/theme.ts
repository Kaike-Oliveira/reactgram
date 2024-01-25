// Types
import { AppThemeProps } from '../types/theme';

const defaultColors = {
  neutrals0: '#FFFFFF',
};

const AppTheme: AppThemeProps = {
  defaultColor: defaultColors,
  color: {
    default: {
      loginScreen: {
        backgroundColor: defaultColors.neutrals0,
      },
    },
    dark: {
      loginScreen: {
        backgroundColor: defaultColors.neutrals0,
      },
    },
  },
};

export default AppTheme;
