// import original module declarations
import 'styled-components';

type ColorsProps = {
  BLACK: string;
  WHITE: string;
  GRAY: string;
  MEDIUM_GRAY: string;
  LIGHT_GRAY: string;
  GRANITE: string;
  ERROR: string;
  FEEDBACK_CORRECT: string;
  FEEDBACK_WARNING: string;
  BACKGROUND_WHITE: string;
  GRAY_LIGHT: string;
  SECONDARY_LIGHT_GRAY: string;
  CARD_TEXT: string;
  BORDER_BLACK: string;
  SECONDARY_MEDIUM_GRAY: string;
  FONT_INPUT: string;
  COLOR_APLICATION: string;
  SOFT_BLACK: string;
  GREY: string;
  SOFT_GREY: string;
  PINK: string;
  PURPLE: string;
  DARK_PURPLE: string;
  BACKGROUND: string;
  BORDER: string;
  BUTTON_TEXT: string;
  DEFAULT_FONT: string;
  BUTTON_ICON: string;
  BUTTON_BACKGROUND: string;
  SUBTITLE: string;
  TITLE_FONT: string;
  FONT_HOME: string;
  INPUT_COLOR: string;
  BORDER_PROFILE: string;
  BACKGROUND_INPUT: string;
  BORDER_SEARCH: string;
  BACKGROUND_MODAL: string;
  TEXT_CLICKABLE: string;
  BUTTON_CANCEL: string;
  SHOW_BUTTON: string;
};

type SizingProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_BUTTON_SEND: number;
  FONTSIZE_BUTTON_TITLE: number;
  FONTSIZE_INPUT: number;
  FONTSIZE_TITLE: number;
  FONTSIZE_INPUT_LABEL: number;
  FONTSIZE_LABEL: number;
  ICON_SIZE_BUTTON: number;
  ICON_SIZE: number;
  FONTSIZE_SUBTITLE: number;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    Sizes: SizingProps;
    Colors: ColorsProps;
  }
}
