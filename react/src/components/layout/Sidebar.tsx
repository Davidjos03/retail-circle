import { NavLink } from 'react-router-dom'

type MenuItem = {
  label: string
  to: string
  icon: string
}

const menu: MenuItem[] = [
  { label: 'Home', to: '/', icon: '/layout/home.png' },
  { label: 'Sell', to: '/sell', icon: '/layout/sell.png' },
  { label: 'Shop', to: '/shop', icon: '/layout/shop.png' },
  { label: 'Wishlist', to: '/wishlist', icon: '/layout/wishlist.png' },
  { label: 'Orders', to: '/orders', icon: '/layout/orders.png' },
  { label: 'Leads', to: '/leads', icon: '/layout/leads.png' },
  { label: 'Stock', to: '/stock', icon: '/layout/stock.png' },
  { label: 'Listings', to: '/listings', icon: '/layout/litings.png' },
  { label: 'Users', to: '/users', icon: '/layout/users.png' },
  { label: 'Settings', to: '/settings', icon: '/layout/settings.png' },
]

export default function Sidebar() {
  return (
    <aside className="hidden w-[92px] shrink-0 flex-col items-center bg-base px-3 pt-4 md:flex">
      <div className="mb-9 h-9 w-9 overflow-hidden rounded-xl bg-surface-2">
        <img src="/logo.png" alt="Retails Circle OS" className="h-full w-full object-cover" />
      </div>

      <nav className="flex flex-col items-center gap-2 rounded-3xl p-2.5">
        {menu.map(({ label, to, icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className="w-[68px]">
            {({ isActive }) => (
              <span className="flex h-16 w-full flex-col items-center justify-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ease-out ${
                    isActive
                      ? 'bg-[linear-gradient(90deg,rgba(5,8,16,0)_0%,rgba(118,41,249,0.2)_100%)] text-brand-icon shadow-[0px_8px_16px_-8px_rgba(91,0,255,0.25)]'
                      : 'text-nav'
                  }`}
                >
                  <span
                    className="h-5 w-5 transition-colors duration-300"
                    style={{
                      backgroundColor: 'currentColor',
                      WebkitMaskImage: `url(${icon})`,
                      maskImage: `url(${icon})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                    }}
                  />
                </span>
                <span
                  className={`text-[14px] font-medium leading-none transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-nav'
                  }`}
                >
                  {label}
                </span>
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
