import { Dispatch, Fragment, SetStateAction } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";

import ThemeSwitch from "@/components/utility/theme-switch";
import { type NavbarProps } from "@/layout/navbar";
import { classNames } from "@/utility/classNames";

export interface MobileMenuProps extends NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  openMenu,
  routes,
  setOpenMenu,
}: MobileMenuProps) {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = (href: string) => {
    setOpenMenu(false);
    router.push(href);
  };

  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" className="z-10" onClose={setOpenMenu}        >
        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="-translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="ease-out duration-300"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-full "
          >
            <Dialog.Panel className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center overflow-y-auto bg-background px-6 py-8 text-accent shadow-lg shadow-accent/10 md:px-10 md:py-16 z-10">
              <div className="flex flex-col items-center gap-6 text-center">

                <button   className="w-28 h-28 rounded-full bg-yellow-500/60 absolute top-4 right-4 opacity-0 "  onClick={()=>setOpenMenu(false)}  >
                  click me
                </button>


                <button   className="w-28 h-28 rounded-full bg-yellow-500/60 absolute top-4 left-4 opacity-0 "  onClick={()=>{
                  setOpenMenu(false);
                  router.push('/')
                }}  >
                  click me
                </button>
                {routes.map((link, i) => (
                  <button
                    key={i}
                    className="group relative py-2 text-3xl font-medium"
                    onClick={() => handleClick(link.href)}
                  >
                    <span
                      className={classNames(
                        pathName === link.href ? "w-full" : "w-0",
                        "absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full",
                      )}
                    ></span>
                    {link.title}
                  </button>
                ))}
                <ThemeSwitch setClose={setOpenMenu} />
              </div>
              <div className="absolute bottom-0 py-6">©2024 Waleed Ahmad</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
