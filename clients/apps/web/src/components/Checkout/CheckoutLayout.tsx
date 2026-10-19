import { PolarThemeProvider } from '@/app/providers'
import type { schemas } from '@polar-sh/client'
import type { AcceptedLocale } from '@polar-sh/i18n'
import { getLocaleDirection } from '@polar-sh/i18n'
import { DirectionProvider } from '@radix-ui/react-direction'
import CheckoutEmbedLayout from './Embed/CheckoutEmbedLayout'

const CheckoutLayout = ({
  children,
  checkout,
  embed,
  theme,
  locale,
}: React.PropsWithChildren<{
  checkout: schemas['CheckoutPublic']
  embed: boolean
  theme?: 'light' | 'dark'
  locale: AcceptedLocale
}>) => {
  const direction = getLocaleDirection(locale)

  return (
    <DirectionProvider dir={direction}>
      {embed ? (
        <CheckoutEmbedLayout
          checkout={checkout}
          theme={theme}
          locale={locale}
          direction={direction}
        >
          {children}
        </CheckoutEmbedLayout>
      ) : (
        <PolarThemeProvider>
          <div
            dir={direction}
            lang={locale}
            className="md:dark:bg-polar-950 dark:bg-polar-900 h-full min-h-screen bg-white md:bg-gray-50 dark:text-white"
          >
            {children}
          </div>
        </PolarThemeProvider>
      )}
    </DirectionProvider>
  )
}

export default CheckoutLayout
