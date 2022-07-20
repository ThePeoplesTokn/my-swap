import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      {
        label: 'DApp',
        href: 'https://dapp.nhancv.com',
      },
      {
        label: 'ThePeoplesLotto',
        href: 'https://thepeopleslotto.com',
      },
    ],
  },
]

export default config
