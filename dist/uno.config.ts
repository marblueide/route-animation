import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    // transformerDirectives,
    // transformerVariantGroup,
  } from 'unocss'
  
  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
      presetWebFonts({
        fonts: {
          serif: 'DM Serif Display',
          mono: 'DM Mono',
        },
      }),
    ],
    // transformers: [
    //   transformerDirectives(),
    //   transformerVariantGroup(),
    // ],
  })