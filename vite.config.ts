import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind4 } from 'unocss'

export default defineConfig({
    plugins: [
        UnoCSS({
            extractors: [
                extractorSvelte(),
            ],
            presets: [
                presetWind4(),
                presetAttributify(),
                presetTypography(),
                presetIcons(),
                presetWebFonts({
                    provider: 'fontsource',          // use the local Fontsource packages
                    fonts: {
                        sans: [
                            {
                                name: 'Roboto',            // generates class font-sans
                                weights: ['400', '700'],
                            },
                        ],
                    },
                    inlineImports: false,
                }),
            ],
            theme: {
                colors: {
                    primary: '#e0e0e0',
                    secondary: '#b0b0b0',
                    muted: '#808080',
                    background: '#0a0a0a',
                },
                fontFamily: {
                    sans: ['Roboto', 'system-ui', 'sans-serif'],
                    mono: ['monospace'],
                }
            },
            preflights: [
                {
                    getCSS: ({ theme }: { theme: any }) => `
            :root {
                --primary: ${theme.colors.primary};
                --secondary: ${theme.colors.secondary};
                --muted: ${theme.colors.muted};
                --background: ${theme.colors.background};
                --font-sans: ${theme.fontFamily.sans.join(', ')};
                --font-mono: ${theme.fontFamily.mono.join(', ')};
            }

            body {
                background-color: var(--background);
                color: var(--primary);
                font-family: var(--font-sans);
            }`
                }
            ],
            shortcuts: {
                'h-link': 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-width after:duration-300 hover:after:w-full hover:text-white',
            }
        }),
        paraglideVitePlugin({
            project: './project.inlang',
            outdir: './src/lib/paraglide',
            strategy: ['url', 'preferredLanguage', 'baseLocale'],
        }),
        sveltekit(),
    ],
    build: {
        rollupOptions: {
            output: {
                inlineDynamicImports: false,
            },
        },
    },
    test: {
        projects: [
            {
                extends: './vite.config.ts',
                test: {
                    name: 'client',
                    environment: 'browser',
                    browser: {
                        enabled: true,
                        provider: 'playwright',
                        instances: [{ browser: 'chromium' }]
                    },
                    include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                    exclude: ['src/lib/server/**'],
                    setupFiles: ['./vitest-setup-client.ts']
                }
            },
            {
                extends: './vite.config.ts',
                test: {
                    name: 'server',
                    environment: 'node',
                    include: ['src/**/*.{test,spec}.{js,ts}'],
                    exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
                }
            }
        ]
    }
});
