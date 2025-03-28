import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export function ProfileButton(){
    
    return(
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="py-1.5 inline-flex w-full justify-center shadow-xs text-white">
                <img src='/user-solid.svg' className="h-9 w-10 p-1 justify-center items-center bg-white rounded-full object-cover" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="login"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Sign in
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="signup"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Sign up
                </a>
              </MenuItem>
              {/*<form action="#" method="POST">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>*/}
            </div>
          </MenuItems>
        </Menu>
    )
}