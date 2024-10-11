import { Dices, Heading } from '@tamagui/lucide-icons'
import { memo } from 'react'
import {
  Button,
  Label,
  SizableText,
  Square,
  Switch,
  ToggleGroup,
  TooltipGroup,
  TooltipSimple,
  XStack,
  YStack,
  styled,
  useThemeName,
} from 'tamagui'

import { useDemoProps } from '~/features/studio/theme/hooks/useDemoProps'
import { useThemeBuilderStore } from '~/features/studio/theme/store/ThemeBuilderStore'
import { StudioPaletteBar } from '../StudioPaletteBar'
import { optionValues } from './constants/demoOptions'
import { Panel } from './preview/Panel'

export const StudioPreviewComponentsBar = memo(({ scrollView }: { scrollView: any }) => {
  return (
    <XStack
      zi={1000}
      data-tauri-drag-region
      className="all ease-in ms300"
      mt="$4"
      ml="$4"
      mr="$10"
      $gtMd={{
        mr: 560,
      }}
    >
      <XStack
        fw="wrap"
        f={1}
        className="all ease-in ms300"
        gap="$3"
        p="$2"
        px="$4"
        br="$10"
      >
        <TooltipGroup delay={{ open: 0, close: 300 }}>
          <BorderRadiusInput />

          <BorderWidthInput />

          {/* <FontFamilyInput /> */}

          <FillStyleInput />

          <ElevationInput />

          <SpacingInput />

          <TextAccentInput />

          <BackgroundAccentInput />

          {/* <InverseAccentInput /> */}

          <RandomizeButton />
        </TooltipGroup>
      </XStack>
    </XStack>
  )
})

const ToggleGroupItem = styled(ToggleGroup.Item, {
  height: 28,
  w: 30,

  focusVisibleStyle: {
    outlineWidth: 0,
  },
} as any)

export function BorderRadiusInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.borderRadius?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            borderRadius: value as any,
          }
        }}
      >
        <TooltipSimple label="No border radius">
          <ToggleGroupItem
            value={optionValues.borderRadius[0] as any}
            aria-label="No border radius"
          >
            <Square
              size={11}
              bg="$color9"
              borderRadius={0}
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Small border radius">
          <ToggleGroupItem
            value={optionValues.borderRadius[1] as any}
            aria-label="Small border radius"
          >
            <Square
              size={11}
              bg="$color9"
              borderRadius={2}
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Medium border radius">
          <ToggleGroupItem
            value={optionValues.borderRadius[2] as any}
            aria-label="Medium border radius"
          >
            <Square
              size={11}
              bg="$color9"
              borderRadius={3}
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Large border radius">
          <ToggleGroupItem
            value={optionValues.borderRadius[3] as any}
            aria-label="Large border radius"
          >
            <Square
              size={11}
              bg="$color9"
              borderRadius={4}
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Very large border radius">
          <ToggleGroupItem
            value={optionValues.borderRadius[4] as any}
            aria-label="Very large border radius"
          >
            <Square
              size={11}
              bg="$color9"
              borderRadius={7}
            />
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function BorderWidthInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.borderWidth?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            borderWidth: +value as any,
          }
        }}
      >
        <TooltipSimple label="No border width">
          <ToggleGroupItem
            value={`${optionValues.borderWidth[0]}`}
            aria-label="No border width"
          >
            <Square
              size={11}
              bc="$color9"
              bw={0.5}
              borderStyle="dotted"
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Slim border width">
          <ToggleGroupItem
            value={`${optionValues.borderWidth[1]}`}
            aria-label="Slim border width"
          >
            <Square
              size={11}
              bc="$color9"
              bw={1}
            />
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Small border width">
          <ToggleGroupItem
            value={`${optionValues.borderWidth[2]}`}
            aria-label="Small border width"
          >
            <Square
              size={11}
              bc="$color9"
              bw={2}
            />
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

const niceNames = {
  $heading: 'Inter',
  $headingNohemi: 'Nohemi',
  $headingDmSans: 'DM Sans',
  $headingDmSerifDisplay: 'DM Serif',
}

export function FontFamilyInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.headingFontFamily?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            headingFontFamily: value as any,
          }
        }}
      >
        {optionValues.headingFontFamily.map((font, idx) => {
          const niceName = niceNames[font as any]
          const label = `${niceName} Font`
          return (
            <TooltipSimple
              groupId={idx.toString()}
              key={String(font)}
              label={niceName}
            >
              <ToggleGroupItem
                value={font as any}
                aria-label={label}
              >
                <SizableText
                  fontFamily={font as any}
                  size="$1"
                  textTransform="none"
                  letterSpacing={0}
                  lineHeight={0}
                  y={0.5}
                  mt={-2}
                  scale={1.15}
                  {...(niceName === 'Nohemi' && {
                    scale: 0.9,
                    y: 1.5,
                  })}
                  {...(niceName === 'DM Sans' && {
                    scale: 0.95,
                  })}
                  {...(niceName === 'DM Serif' && {
                    y: 0,
                    scale: 0.85,
                  })}
                >
                  Aa
                </SizableText>
              </ToggleGroupItem>
            </TooltipSimple>
          )
        })}
      </ToggleGroup>
    </XStack>
  )
}

export function FillStyleInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.fillStyle?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            fillStyle: value as any,
          }
        }}
      >
        <TooltipSimple
          groupId="1"
          label="Filled"
        >
          <ToggleGroupItem
            value="filled"
            aria-label="Filled"
          >
            <Square
              size={10}
              br="$4"
              bg="$color8"
              bw={1}
              bc="$color"
            />
          </ToggleGroupItem>
        </TooltipSimple>
        <TooltipSimple
          groupId="2"
          label="Outlined"
        >
          <ToggleGroupItem
            value="outlined"
            aria-label="Outlined"
          >
            <Square
              size={10}
              br="$4"
              bw={1}
              bc="$color"
            />
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function ElevationInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.elevation?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            elevation: value as any,
          }
        }}
      >
        <TooltipSimple label="No Shadow">
          <ToggleGroupItem
            value="$0"
            aria-label="No Shadow"
          >
            <Square
              size={10}
              bw={1}
              bc="$color"
            />
          </ToggleGroupItem>
        </TooltipSimple>
        <TooltipSimple label="Subtle Shadow">
          <ToggleGroupItem
            value="$1"
            aria-label="Subtle Shadow"
          >
            <Square
              size={10}
              y={-1}
              x={-1}
            >
              <Square
                size={10}
                pos="absolute"
                bg="$color8"
                bottom={-2}
                right={-2}
              />
              <Square
                size={10}
                pos="absolute"
                bw={1}
                bc="$color"
              />
            </Square>
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Intense Shadow">
          <ToggleGroupItem
            value="$2"
            aria-label="Intense Shadow"
          >
            <Square
              size={10}
              y={-2}
              x={-2}
            >
              <Square
                size={12}
                pos="absolute"
                bg="$color8"
                bottom={-4}
                right={-4}
              />
              <Square
                size={10}
                pos="absolute"
                bw={1}
                bc="$color"
              />
            </Square>
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function SpacingInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.spacing?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            spacing: value as any,
          }
        }}
      >
        <TooltipSimple label="Small Padding">
          <ToggleGroupItem
            value="sm"
            aria-label="Small Padding"
          >
            <Square
              br="$1"
              size={10}
              borderWidth="$0.5"
              borderColor="$color"
            >
              <Square
                size={6}
                pos="absolute"
                bg="$color"
              />
            </Square>
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Medium Padding">
          <ToggleGroupItem
            value="md"
            aria-label="Medium Padding"
          >
            <Square
              br="$1"
              size={10}
              borderWidth="$0.5"
              borderColor="$color"
            >
              <Square
                size={3}
                pos="absolute"
                bg="$color"
              />
            </Square>
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Large Padding">
          <ToggleGroupItem
            value="lg"
            aria-label="Large Padding"
          >
            <Square
              br="$1"
              size={10}
              borderWidth="$0.5"
              borderColor="$color"
            >
              <Square
                size={1}
                pos="absolute"
                bg="$color"
              />
            </Square>
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function TextAccentInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.textAccent?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            textAccent: value as any,
          }
        }}
      >
        <TooltipSimple label="Text Low Contrast">
          <ToggleGroupItem
            value="low"
            aria-label="Text Low Contrast"
            p="$0"
          >
            <XStack
              ai="flex-end"
              o={0.4}
            >
              <Heading size={10} />
            </XStack>
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Text High Contrast">
          <ToggleGroupItem
            value="high"
            aria-label="Text High Contrast"
            p="$0"
          >
            <XStack ai="flex-end">
              <Heading size={10} />
            </XStack>
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function BackgroundAccentInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <ToggleGroup
        disableDeactivation
        orientation={'horizontal'}
        type={'single'}
        size="$2"
        value={store.demosOptions.backgroundAccent?.toString()}
        onValueChange={(value) => {
          store.demosOptions = {
            ...store.demosOptions,
            backgroundAccent: value as any,
          }
        }}
      >
        <TooltipSimple label="Soft Background Accent">
          <ToggleGroupItem
            value="high"
            aria-label="Soft Background Accent"
            p="$0"
          >
            <XStack
              ai="center"
              gap="$1"
            >
              <Square
                size={8}
                backgroundColor="$color"
                o={0.5}
              />
            </XStack>
          </ToggleGroupItem>
        </TooltipSimple>

        <TooltipSimple label="Normal Background Accent">
          <ToggleGroupItem
            value="low"
            aria-label="Normal Background Accent"
            p="$0"
          >
            <XStack
              ai="center"
              gap="$1"
            >
              <Square
                size={8}
                backgroundColor="$color"
              />
            </XStack>
          </ToggleGroupItem>
        </TooltipSimple>
      </ToggleGroup>
    </XStack>
  )
}

export function InverseAccentInput() {
  const store = useThemeBuilderStore()

  return (
    <XStack
      gap="$3"
      ai="center"
    >
      <Label
        size="$2"
        theme="alt1"
        htmlFor="switch-accent-switch"
        onPress={() => {
          // for some reason id+htmlFor is not triggering - manually change the value here
          store.demosOptions = {
            ...store.demosOptions,
            inverseAccent: !store.demosOptions.inverseAccent,
          }
        }}
      >
        Inverse Accent
      </Label>
      <Switch
        id="switch-accent-switch"
        size="$1"
        checked={store.demosOptions.inverseAccent}
        onCheckedChange={(newVal) => {
          store.demosOptions = {
            ...store.demosOptions,
            inverseAccent: newVal,
          }
        }}
      >
        <Switch.Thumb animation="quickest" />
      </Switch>
    </XStack>
  )
}

export function RandomizeButton() {
  const store = useThemeBuilderStore()

  return (
    <TooltipSimple label="Randomize">
      <Button
        aria-label="Randomize"
        onPress={() => {
          store.randomizeDemoOptions()
        }}
        icon={Dices}
        size="$2"
        height={28}
        scaleIcon={1.4}
        br="$5"
      />
    </TooltipSimple>
  )
}

const PalettePreviewPanels = memo(() => {
  const themeBuilderStore = useThemeBuilderStore()
  const themeName = useThemeName()
  const isThemeDark = themeName.startsWith('dark_') || themeName === 'dark'
  const demoProps = useDemoProps()
  const theme = themeBuilderStore.baseTheme

  if (!theme) return null

  const palettes = themeBuilderStore.palettesBuilt

  if (!palettes) return null

  return (
    <YStack gap="$2">
      {[theme.palette, theme.accent?.palette || ''].filter(Boolean).map((name) => {
        const scheme = isThemeDark ? 'dark' : 'light'
        const palette = palettes[name] || palettes[`${scheme}_${name}`]

        if (!palette) {
          return null
        }

        return (
          <Panel
            key={name}
            disableSettings
            m={0}
            f={0}
            h="auto"
            w="calc(100% + 24px)"
            ml={-1}
          >
            <YStack
              {...demoProps.stackOutlineProps}
              {...demoProps.borderRadiusProps}
              {...demoProps.elevationProps}
              {...demoProps.panelPaddingProps}
              borderWidth={0}
              gap="$0"
              p="$0"
              ov="hidden"
            >
              <StudioPaletteBar
                showLabelIndices
                colors={palette}
              />
            </YStack>
          </Panel>
        )
      })}
    </YStack>
  )
})
