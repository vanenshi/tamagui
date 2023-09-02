/// <reference types="react" />
import './setup.js';
export * from '@tamagui/accordion';
export * from '@tamagui/adapt';
export * from '@tamagui/alert-dialog';
export * from '@tamagui/animate-presence';
export * from '@tamagui/avatar';
export * from '@tamagui/button';
export * from '@tamagui/card';
export * from '@tamagui/checkbox';
export * from '@tamagui/compose-refs';
export * from '@tamagui/create-context';
export * from '@tamagui/dialog';
export * from '@tamagui/font-size';
export * from '@tamagui/form';
export * from '@tamagui/group';
export * from '@tamagui/helpers-tamagui';
export * from '@tamagui/image';
export * from '@tamagui/label';
export * from '@tamagui/list-item';
export * from '@tamagui/popover';
export * from '@tamagui/popper';
export * from '@tamagui/portal';
export * from '@tamagui/progress';
export * from '@tamagui/radio-group';
export * from '@tamagui/scroll-view';
export * from '@tamagui/select';
export * from '@tamagui/separator';
export * from '@tamagui/shapes';
export * from '@tamagui/sheet';
export * from '@tamagui/slider';
export * from '@tamagui/stacks';
export * from '@tamagui/switch';
export * from '@tamagui/tabs';
export * from '@tamagui/text';
export * from '@tamagui/theme';
export * from '@tamagui/toggle-group';
export * from '@tamagui/tooltip';
export * from '@tamagui/use-controllable-state';
export * from '@tamagui/use-debounce';
export * from '@tamagui/use-force-update';
export * from '@tamagui/use-window-dimensions';
export * from '@tamagui/visually-hidden';
export * from './createTamagui';
export * from './viewTypes';
export * from './views/TamaguiProvider';
export * from './views/Anchor';
export * from './views/EnsureFlexed';
export * from './views/Fieldset';
export * from './views/Grid';
export * from './views/Input';
export * from './views/Layouts';
export * from './views/Spinner';
export * from './views/TextArea';
export type { AnimationKeys, ColorTokens, CreateTamaguiConfig, CreateTamaguiProps, FontColorTokens, FontLanguages, FontLetterSpacingTokens, FontLineHeightTokens, FontSizeTokens, FontStyleTokens, FontTokens, FontTransformTokens, FontWeightTokens, GenericFont, GenericStackVariants, GenericTamaguiConfig, GenericTextVariants, GetAnimationKeys, GetProps, GetRef, GetVariantProps, GroupNames, Longhands, Media, MediaPropKeys, MediaQueries, MediaQueryState, Shorthands, SizeTokens, SpaceTokens, SpacerProps, SpecificTokens, StackNonStyleProps, StackProps, StackPropsBase, StaticConfig, Styleable, TamaguiBaseTheme, TamaguiComponent, TamaguiComponentPropsBase, TamaguiConfig, TamaguiCustomConfig, TamaguiElement, TamaguiInternalConfig, TamaguiProviderProps, TamaguiSettings, TamaguiTextElement, TextNonStyleProps, TextProps, TextPropsBase, ThemeKeys, ThemeName, ThemeParsed, ThemeProps, ThemeTokens, ThemeValueFallback, Themes, Token, Tokens, TransformStyleProps, TypeOverride, VariantSpreadExtras, VariantSpreadFunction, ZIndexTokens, } from '@tamagui/core';
export { AnimationDriverProvider, ComponentContext, FontLanguage, Spacer, Stack, Text, Theme, Unspaced, View, createComponent, createFont, createShorthands, createStyledContext, createTheme, createTokens, createVariable, getAnimationDriver, getConfig, getMedia, getStylesAtomic, getThemes, getToken, getTokenValue, getTokens, getVariable, getVariableName, getVariableValue, insertFont, isChrome, isClient, isServer, isTamaguiComponent, isTamaguiElement, isTouchable, isVariable, isWeb, isWebTouchable, matchMedia, mediaObjectToString, mediaQueryConfig, mediaState, spacedChildren, styled, themeable, useDidFinishSSR, useEvent, useGet, useIsTouchDevice, useIsomorphicLayoutEffect, useMedia, useMediaPropsActive, useProps, useStyle, useTheme, useThemeName, variableToString, withStaticProperties, } from '@tamagui/core';
export declare const MyComponent: import("@tamagui/core").TamaguiComponent<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "fullbleed"> & {
    readonly fullbleed?: boolean | undefined;
} & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "fullbleed"> & {
    readonly fullbleed?: boolean | undefined;
}>> & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
}, "fullbleed"> & {
    readonly fullbleed?: boolean | undefined;
}>>, import("@tamagui/core").TamaguiElement, Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
    style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
} & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
} & {
    readonly fullbleed?: boolean | undefined;
}, {
    displayName: string | undefined;
    __baseProps: Omit<import("react-native").ViewProps, "children" | "style" | "onLayout" | keyof import("react-native").GestureResponderHandlers | "display"> & import("@tamagui/core").ExtendBaseStackProps & import("@tamagui/core").TamaguiComponentPropsBase & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    } & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").RNViewProps & {
        style?: import("@tamagui/core").StyleProp<import("react-native").ViewStyle | import("react").CSSProperties | (import("react").CSSProperties & import("react-native").ViewStyle)>;
    };
    __variantProps: {
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("@tamagui/core").SizeTokens | undefined;
    };
}>;
//# sourceMappingURL=index.d.ts.map