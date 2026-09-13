"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/connextions-logo-black-cropped.png";
import {
  ChevronDown,
  ChevronRight,
  Grid2x2,
  Search,
  Menu,
  X,
} from "lucide-react";
import CommonImage from "./CommonImage";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import XIcon from "@/public/assets/x-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setOpenNestedDropdown(null);
  };

  const toggleNestedDropdown = (menu) => {
    setOpenNestedDropdown(openNestedDropdown === menu ? null : menu);
  };

  const handleLinkClick = (hasDropdown = false, event) => {
    event?.stopPropagation();
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
    if (!hasDropdown) {
      setMenuOpen(false);
    }
  };

  const handleDropdownToggle = (menu, event) => {
    event?.stopPropagation();
    toggleDropdown(menu);
  };

  const handleNestedDropdownToggle = (menu, event) => {
    event?.stopPropagation();
    toggleNestedDropdown(menu);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  }, [pathname]);

  // Helper function to check if nav item is active
  const isNavItemActive = (item) => {
    if (item.href && pathname === item.href) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some((sub) => {
        if (sub.href && pathname === sub.href) {
          return true;
        }
        if (sub.nested) {
          return sub.nested.some((nested) => pathname === nested.href);
        }
        return false;
      });
    }
    return false;
  };

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Apple",
      dropdown: [
        {
          label: "Apple Launches",
          nested: [
            { label: "iPhone 18 Pro", href: "/iphone-18-pro" },
            { label: "iPhone Duo", href: "/iphone-duo" },
            { label: "iPhone 17", href: "/iphone-17" },
            { label: "iPhone 17 Pro", href: "/iphone-17pro" },
            { label: "iPhone 17 Air", href: "/iphone-17air" },
                        { label: "iPhone 17e ", href: "/iphone-17e" },
                                    { label: "ipad Pro", href: "/ipadpro" },
                                     { label: "Macbook Neo", href: "/macbook-neo" },
            { label: "Macbook Pro M5", href: "/macbookpro-m5" },
            { label: "Macbook Air 5", href: "/macbook-air" },
            { label: "Av/Vc", href: "/apple-ac-vc" },
            { label: "Apple Watch SE3", href: "/apple-watch" },
            { label: "Apple Airpods Pro 3", href: "/apple-airpods" },
            { label: "Mac studio with m5 max and m5 ultra", href: "/mac-studio-with-m5-max-and-m5-ultra" },
            { label: "Mac mini with m6 and m5 pro", href: "/mac-mini-with-m6-and-m5-pro" },
           
          ],
        },
        { label: "Apple Solutions", href: "/apple-solutions" },
        { label: "Apple for Enterprise", href: "/apple-for-enterprise" },
        { label: "Apple for Work", href: "/apple-for-work" },
        { label: "Apple Business Manager", href: "/apple-business-manager" },
        { label: "Applecare for Enterprise", href: "/apple-for-care" },
        { label: "Apple Switcher Program", href: "/apple-switch" },
        {
          label: "Apple Consultant Partner",
          href: "/apple-consultant-partner",
        },
      ],
    },
    // { label: "MacBooks", href: "/apple-macbooks" },
 
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top Social + Contact Bar */}
      <div className="w-full px-4 py-3 sm:px-8 sm:py-4 lg:px-20 bg-[#222] text-white flex flex-col sm:flex-row gap-2 sm:gap-3 justify-between items-center">
        <div className="flex items-center gap-5 cursor-pointer">
          <Link
            href={"https://www.facebook.com/share/1DQySs4f9D/?mibextid=wwXIfr"}
            target="_blank"
          >
            <CommonImage
              width={14}
              height={14}
              src={FacebookIcon.src || FacebookIcon}
              alt="fb"
            />
          </Link>
          <Link
            href={
              "https://www.instagram.com/connexions.pune?igsh=MTdnc3hwamJteTdtZw=="
            }
            target="_blank"
          >
            <CommonImage
              width={14}
              height={14}
              src={InstagramIcon.src || InstagramIcon}
              alt="ig"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-1 text-center text-[11px] text-white min-[420px]:flex-row min-[420px]:gap-3 sm:text-sm">
          <a href="tel:+918149882686" className="hover:underline">
            Call: +91-8149882686
          </a>
          <div className="hidden min-[420px]:block w-px bg-white/50 h-5"></div>
          <a
            href="mailto:nikhil@connexionsmobile.com"
            className="hover:underline"
          >
            Email: nikhil@connexionsmobile.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div
        ref={navRef}
        className="relative z-40 px-4 py-4 sm:px-8 sm:py-5 lg:px-20 lg:py-6 flex flex-col gap-4 bg-white"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"} onClick={(event) => handleLinkClick(false, event)}>
              <CommonImage
                width={220}
                height={80}
                src={Logo.src || Logo}
                alt="Logo"
                className="h-auto w-auto max-w-[180px] max-h-[64px] sm:max-w-[220px] sm:max-h-[80px]"
              />
            </Link>
          </div>

          {/* Search + Button (Desktop Only) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex border border-[#E7EAEE] rounded-sm">
              <input
                className="rounded-tl-sm rounded-bl-sm w-[250px] lg:w-[400px] px-2 text-[#5C728E] text-xs outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 lg:px-6 py-2 lg:py-3">
                <Search size={14} />
              </button>
            </div>
            <Link
              href="/contact-us"
              passHref
              onClick={(event) => handleLinkClick(false, event)}
            >
              <button className="bg-primary cursor-pointer text-secondary rounded-sm px-4 lg:px-6 py-2 text-sm font-light">
                Contact us
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={20} className="outline-none" />
            ) : (
              <Menu size={20} className="outline-none" />
            )}
          </button>
        </div>

        {/* Desktop / Tablet Nav */}
        <div className="hidden md:block text-sm">
          {/* Tablet: Two Rows */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-center mb-2">
              <div className="flex items-center gap-2">
                {/* <Grid2x2 size={14} />
                <span>BROWSE ALL CATEGORIES</span> */}
              </div>
              {/* <div>
                <Link
                  href="/contact-us"
                  target="_blank"
                  className="underline"
                  onClick={() => handleLinkClick(false)}
                >
                  Buy and Try
                </Link>
              </div> */}
            </div>
            <div className="flex justify-center">
              <ul className="flex gap-6 flex-wrap">
                {navItems.map((item) => {
                  const isActive = isNavItemActive(item);
                  return (
                    <li
                      key={item.label}
                      className="relative flex flex-col cursor-pointer"
                    >
                      <div
                        className="flex items-center gap-1"
                        onClick={(event) =>
                          item.dropdown && handleDropdownToggle(item.label, event)
                        }
                      >
                        {item.dropdown ? (
                          <button
                            type="button"
                            className={`cursor-pointer bg-transparent p-0 text-left ${
                              isActive
                                ? "text-[#A6CE39] underline"
                                : "text-black"
                            }`}
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className={`${
                              isActive
                                ? "text-[#A6CE39] underline"
                                : "text-black"
                            }`}
                            onClick={(event) => handleLinkClick(false, event)}
                          >
                            {item.label}
                          </Link>
                        )}
                        {item.dropdown && (
                          <ChevronDown
                            size={14}
                            className={isActive ? "text-[#A6CE39]" : ""}
                          />
                        )}
                      </div>
                      {item.dropdown && openDropdown === item.label && (
                        <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded text-sm p-2 w-40 z-50">
                          {item.dropdown.map((sub, index) => (
                            <li
                              key={sub.label}
                              className={`relative px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                index !== item.dropdown.length - 1
                                  ? "border-b border-gray-100"
                                  : ""
                              }`}
                            >
                              {sub.nested ? (
                                <>
                                  <div
                                    className="flex items-center justify-between"
                                    onMouseEnter={() =>
                                      setOpenNestedDropdown(sub.label)
                                    }
                                    onClick={(event) => { event.stopPropagation(); setOpenNestedDropdown(sub.label); }
                                    }
                                  >
                                    <span>{sub.label}</span>
                                    <ChevronRight size={14} />
                                  </div>
                                  {openNestedDropdown === sub.label && (
                                    <ul className="absolute left-full top-0 ml-1 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                                      {sub.nested.map(
                                        (nestedItem, nestedIndex) => (
                                          <li
                                            key={nestedItem.label}
                                            className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                              nestedIndex !==
                                              sub.nested.length - 1
                                                ? "border-b border-gray-100"
                                                : ""
                                            }`}
                                          >
                                            <Link
                                              href={nestedItem.href}
                                              className={`block -mx-3 -my-1 px-3 py-1 ${pathname === nestedItem.href ? "text-[#A6CE39]" : ""}`}
                                              onClick={(event) =>
                                                handleLinkClick(false, event)
                                              }
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={sub.href}
                                  className={`block -mx-3 -my-1 px-3 py-1 ${pathname === sub.href ? "text-[#A6CE39]" : ""}`}
                                  onClick={(event) => handleLinkClick(false, event)}
                                >
                                  {sub.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Desktop: One Row */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-2">
              {/* <Grid2x2 size={14} />
              <span>BROWSE ALL CATEGORIES</span> */}
            </div>
            <ul className="flex gap-8 flex-wrap">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item);
                return (
                  <li
                    key={item.label}
                    className="relative flex flex-col cursor-pointer"
                  >
                    <div
                      className="flex items-center gap-1"
                      onClick={(event) =>
                        item.dropdown && handleDropdownToggle(item.label, event)
                      }
                    >
                      {item.dropdown ? (
                        <button
                          type="button"
                          className={`cursor-pointer bg-transparent p-0 text-left ${
                            isActive ? "text-[#A6CE39]" : "text-primary"
                          }`}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`${
                            isActive ? "text-[#A6CE39]" : "text-primary"
                          }`}
                          onClick={(event) => handleLinkClick(false, event)}
                        >
                          {item.label}
                        </Link>
                      )}
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          className={isActive ? "text-[#A6CE39]" : ""}
                        />
                      )}
                    </div>
                    {item.dropdown && openDropdown === item.label && (
                      <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                        {item.dropdown.map((sub, index) => (
                          <li
                            key={sub.label}
                            className={`relative px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                              index !== item.dropdown.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }`}
                          >
                            {sub.nested ? (
                              <>
                                <div
                                  className="flex items-center justify-between"
                                  onMouseEnter={() =>
                                    setOpenNestedDropdown(sub.label)
                                  }
                                  onClick={(event) => { event.stopPropagation(); setOpenNestedDropdown(sub.label); }
                                  }
                                >
                                  <span>{sub.label}</span>
                                  <ChevronRight size={14} />
                                </div>
                                {openNestedDropdown === sub.label && (
                                  <ul className="absolute left-full top-0 ml-1 bg-white border border-gray-200 rounded-md text-sm p-2 w-40 z-50">
                                    {sub.nested.map(
                                      (nestedItem, nestedIndex) => (
                                        <li
                                          key={nestedItem.label}
                                          className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                                            nestedIndex !==
                                            sub.nested.length - 1
                                              ? "border-b border-gray-100"
                                              : ""
                                          }`}
                                        >
                                          <Link
                                            href={nestedItem.href}
                                            className={`block -mx-3 -my-1 px-3 py-1 ${pathname === nestedItem.href ? "text-[#A6CE39]" : ""}`}
                                            onClick={(event) =>
                                              handleLinkClick(false, event)
                                            }
                                          >
                                            {nestedItem.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link
                                href={sub.href}
                                className={`block -mx-3 -my-1 px-3 py-1 ${pathname === sub.href ? "text-[#A6CE39]" : ""}`}
                                onClick={(event) => handleLinkClick(false, event)}
                              >
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* <div>
              <Link
                href="/contact-us"
                target="_blank"
                className="underline"
                onClick={() => handleLinkClick(false)}
              >
                Buy and Try
              </Link>
            </div> */}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-navigation"
          className={`md:hidden max-h-[calc(100vh-9rem)] flex-col gap-4 overflow-y-auto border-t border-gray-200 pt-4 pb-6 text-sm transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {/* Search + Button */}
          <div className="flex flex-col gap-4 px-2">
            <div className="flex border border-[#E7EAEE] rounded-sm">
              <input
                className="rounded-tl-sm rounded-bl-sm w-full px-2 text-[#5C728E] text-xs outline-none"
                placeholder="What are you looking for?"
              />
              <button className="bg-primary text-secondary rounded-tr-sm rounded-br-sm px-4 py-2">
                <Search size={14} />
              </button>
            </div>
            <Link
              href="/contact-us"
              passHref
              onClick={(event) => handleLinkClick(false, event)}
            >
              <button className="bg-primary cursor-pointer text-secondary rounded-sm px-4 py-2 text-sm font-light w-full">
                Contact us
              </button>
            </Link>
          </div>

          {/* Browse Categories */}
          <div className="flex items-center gap-2 px-2">
            {/* <Grid2x2 size={14} />
            <span>BROWSE ALL CATEGORIES</span> */}
          </div>

          {/* Nav Items - Mobile with Active State */}
          <ul className="flex flex-col gap-4 px-2">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);
              return (
                <li key={item.label} className="flex flex-col">
                  {item.dropdown ? (
                    <>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span className={isActive ? "text-[#A6CE39]" : ""}>
                          {item.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          } ${isActive ? "text-[#A6CE39]" : ""}`}
                        />
                      </div>

                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === item.label ? "max-h-[1400px]" : "max-h-0"
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <li
                            key={sub.label}
                            className="border-b border-gray-100"
                          >
                            {sub.nested ? (
                              <div className="flex flex-col">
                                <div
                                  className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={(event) =>
                                    handleNestedDropdownToggle(sub.label, event)
                                  }
                                >
                                  <span>{sub.label}</span>
                                  <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${
                                      openNestedDropdown === sub.label
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                                <ul
                                  className={`overflow-hidden transition-all duration-300 ${
                                    openNestedDropdown === sub.label
                                      ? "max-h-[1000px]"
                                      : "max-h-0"
                                  }`}
                                >
                                  {sub.nested.map((nestedItem) => (
                                    <li
                                      key={nestedItem.label}
                                      className="pl-6 pr-3 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-100"
                                    >
                                      <Link
                                        href={nestedItem.href}
                                        className={`block -ml-6 -mr-3 -my-2 pl-6 pr-3 py-2 ${pathname === nestedItem.href ? "text-[#A6CE39]" : ""}`}
                                        onClick={(event) =>
                                          handleLinkClick(false, event)
                                        }
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link
                                  href={sub.href}
                                  className={`block -mx-3 -my-2 px-3 py-2 ${pathname === sub.href ? "text-[#A6CE39]" : ""}`}
                                  onClick={(event) => handleLinkClick(false, event)}
                                >
                                  {sub.label}
                                </Link>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block w-full cursor-pointer py-1 ${
                        isActive ? "text-[#A6CE39]" : ""
                      }`}
                      onClick={(event) => handleLinkClick(false, event)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Buy and Try */}
          {/* <div className="px-2 mt-2">
            <Link
              href="/contact-us"
              target="_blank"
              className="underline"
              onClick={() => handleLinkClick(false)}
            >
              Buy and Try
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;

