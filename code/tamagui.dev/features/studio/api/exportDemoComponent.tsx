// import { readFile } from 'node:fs/promises'
// import type { DemoOptions } from '../theme/demoOptions'

// TODO move to api

export async function exportDemoComponent() {
  // // this only really gets called from the next.js app - so we create the direction based on that.
  // let component = (
  //   await readFile(
  //     join(process.cwd(), `../studio/src/theme-builder/preview/${componentName}.tsx`)
  //   )
  // ).toString()
  // const demoProps = getDemoProps(options)
  // component = component.replaceAll('const demoProps = useDemoProps()', '')
  // component = component.replaceAll('useDemoProps', '')
  // component = component.replaceAll('<AccentTheme>', '')
  // component = component.replaceAll('</AccentTheme>', '')
  // component = component.replaceAll('AccentTheme,', '')
  // component = component.replaceAll('AccentTheme', '')
  // component = component.replace(/import .* from \'src\/accentThemeName\'/g, '')
  // for (const [key, value] of Object.entries(demoProps)) {
  //   component = component.replaceAll(
  //     `{...demoProps.${key}}`,
  //     `{...${JSON.stringify(value)}}`
  //   )
  // }
  // return component
  return null
}
