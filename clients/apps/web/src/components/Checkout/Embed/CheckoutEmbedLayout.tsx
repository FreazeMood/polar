import type { schemas } from '@polar-sh/client'
import type { AcceptedLocale, LocaleDirection } from '@polar-sh/i18n'
import CheckoutEmbedClose from './CheckoutEmbedClose'
import CheckoutEmbedLoaded from './CheckoutEmbedLoaded'

const CheckoutEmbedLayout = ({
  children,
  checkout,
  theme,
  locale,
  direction,
}: React.PropsWithChildren<{
  checkout: schemas['CheckoutPublic']
  theme?: 'light' | 'dark'
  locale: AcceptedLocale
  direction: LocaleDirection
}>) => {
  const colorScheme = theme === 'dark' ? 'dark' : 'light'
  return (
    <div
      className={colorScheme}
      id="polar-embed-layout"
      data-polar-embed-theme={colorScheme}
      dir={direction}
      lang={locale}
    >
      <div className="flex h-full w-full items-center justify-center p-0 md:p-6 dark:text-white">
        <div className="h-full w-full max-w-lg" id="polar-embed-content">
          {children}
        </div>
      </div>
      <CheckoutEmbedClose checkout={checkout} />
      <CheckoutEmbedLoaded checkout={checkout} />
    </div>
  )
}

export default CheckoutEmbedLayout
