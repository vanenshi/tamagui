import { getVariableValue, styled } from '@tamagui/core'
import { getSize } from '@tamagui/get-token'
import { ThemeableStack } from '@tamagui/stacks'

import { CheckboxStyledContext } from './CheckboxStyledContext'
import { CheckedState } from './createCheckbox'

/* -------------------------------------------------------------------------------------------------
 * CheckboxIndicator
 * -----------------------------------------------------------------------------------------------*/
const INDICATOR_NAME = 'CheckboxIndicator'

export const CheckboxIndicatorFrame = styled(ThemeableStack, {
  // use Checkbox for easier themes
  name: INDICATOR_NAME,
  context: CheckboxStyledContext,
})

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/

const CHECKBOX_NAME = 'Checkbox'

export const CheckboxFrame = styled(ThemeableStack, {
  name: CHECKBOX_NAME,
  tag: 'button',

  context: CheckboxStyledContext,
  variants: {
    unstyled: {
      false: {
        size: '$true',
        backgroundColor: '$background',
        alignItems: 'center',
        justifyContent: 'center',
        pressTheme: true,
        focusable: true,
        borderWidth: 1,
        borderColor: '$borderColor',

        hoverStyle: {
          borderColor: '$borderColorHover',
        },

        focusStyle: {
          borderColor: '$borderColorFocus',
          outlineStyle: 'solid',
          outlineWidth: 2,
          outlineColor: '$borderColorFocus',
        },
      },
    },

    disabled: {
      true: {
        pointerEvents: 'none',
        userSelect: 'none',
        cursor: 'not-allowed',

        hoverStyle: {
          borderColor: '$borderColor',
          backgroundColor: '$background',
        },

        pressStyle: {
          borderColor: '$borderColor',
          backgroundColor: '$backgroundColor',
        },

        focusStyle: {
          outlineWidth: 0,
        },
      },
    },

    size: {
      '...size': (val, { tokens }) => {
        const radiusToken = getVariableValue(getSize(val)) / 8
        return {
          borderRadius: radiusToken,
        }
      },
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1' ? true : false,
  },
})
