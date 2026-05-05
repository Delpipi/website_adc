"use client";
import Link from "next/link";
import styles from "./menu.module.css";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navlinks = [
  { name: "Accueil", href: "/" },
  {
    name: "Pôles d'activité",
    submenu: [
      { name: "Foncier", href: "/poles/foncier" },
      { name: "Conseil", href: "/poles/conseil" },
      { name: "BTP", href: "/poles/btp" },
      { name: "Logistique", href: "/poles/logistique" },
      { name: "Agriculture", href: "/poles/agriculture" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLLIElement>(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSubmenuToggle(linkName: string) {
    setOpenSubmenu(openSubmenu === linkName ? null : linkName);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    }

    if (openSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSubmenu]);

  return (
    <>
      <Link
        href="#"
        className={`${styles.menu} ${isOpen ? styles.open : ""} md:hidden`}
        aria-label="Menu"
        onClick={handleToggle}
      ></Link>
      <nav
        className={`${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } absolute top-32 left-0 z-50 w-full bg-primary overflow-hidden transition-all 
        duration-500 ease-in-out md:max-h-full md:opacity-100 md:block md:relative md:top-0 md:overflow-visible`}
      >
        <ul className="flex flex-col md:flex-row md:justify-center">
          {navlinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              ref={link.submenu ? submenuRef : null}
            >
              {link.submenu ? (
                <>
                  {/* Button with submenu */}
                  <button
                    onClick={() => handleSubmenuToggle(link.name)}
                    className={clsx(
                      "w-full block p-small text-center border-b border-gray-600 hover:bg-secondary hover:text-primary md:hover:border-r hover:font-bold transition-colors duration-300 md:border-x md:border-b-0 md:px-medium",
                      pathname.startsWith("/services") ||
                        openSubmenu === link.name
                        ? "bg-secondary text-primary font-bold"
                        : "text-white",
                    )}
                  >
                    {link.name}
                    <span
                      className="ml-1 inline-block transition-transform duration-200"
                      style={{
                        transform:
                          openSubmenu === link.name
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Submenu - Mobile */}
                  <ul
                    className={clsx(
                      "md:hidden bg-gray-700 overflow-hidden transition-all duration-300",
                      {
                        "max-h-96": openSubmenu === link.name,
                        "max-h-0": openSubmenu !== link.name,
                      },
                    )}
                  >
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          href={sublink.href}
                          onClick={() => setOpenSubmenu(null)}
                          className={clsx(
                            "block p-small pl-8 border-b border-gray-600 hover:bg-gray-600 hover:text-primary transition-colors duration-300",
                            pathname === sublink.href
                              ? "bg-gray-600 text-primary font-bold"
                              : "text-white",
                          )}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Submenu - Desktop */}
                  <ul
                    className={clsx(
                      "hidden md:block md:absolute md:top-full md:left-0 md:bg-primary md:shadow-lg md:min-w-max md:z-50 md:transition-all md:duration-300",
                      {
                        "md:opacity-100 md:visible": openSubmenu === link.name,
                        "md:opacity-0 md:invisible": openSubmenu !== link.name,
                      },
                    )}
                  >
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          href={sublink.href}
                          onClick={() => setOpenSubmenu(null)}
                          className={clsx(
                            "block p-small px-medium whitespace-nowrap border-b border-gray-600 hover:bg-secondary hover:text-primary transition-colors duration-300",
                            pathname === sublink.href
                              ? "bg-secondary text-primary font-bold"
                              : "text-white",
                          )}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                // Regular links without submenu
                <Link
                  href={link.href}
                  className={clsx(
                    "block p-small text-center border-b border-gray-600 hover:bg-secondary hover:text-primary md:hover:border-r hover:font-bold transition-colors duration-300 md:border-x md:border-b-0 md:px-medium",
                    pathname === link.href
                      ? "bg-secondary text-primary font-bold"
                      : "text-white",
                  )}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
