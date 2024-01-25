interface defaultColors {
  neutrals0: string;
}

interface ColorLoginScreen {
  backgroundColor: string;
}

export interface AppThemeProps {
  defaultColor: defaultColors;
  color: {
    default: {
        loginScreen: ColorLoginScreen;
    }
    dark: {
        loginScreen: ColorLoginScreen;
    }
  }
}
