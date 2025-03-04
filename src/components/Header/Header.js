import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, selectLanguage } from "../../redux/languageSlice";
import "./Header.css";

const Header = () => {
  // Dropdown menüsünün açılma/kapanma durumunu tutan state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  // Dropdown menüsünü toggle (aç/kapa) etmek için fonksiyon
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropDown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropDown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropDown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropDown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropDown6 = () => {
    setIsOpen6(!isOpen6);
  };

  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);
  const menuRef4 = useRef(null);
  const menuRef5 = useRef(null);

  // Dışarıya tıklama algılaması
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleClickOutside2 = (event) => {
      if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsOpen2(false); // Menüyü kapat
      }
    };

    const handleClickOutside3 = (event) => {
      if (menuRef3.current && !menuRef3.current.contains(event.target)) {
        setIsOpen3(false); // Menüyü kapat
      }
    };

    const handleClickOutside4 = (event) => {
      if (menuRef4.current && !menuRef4.current.contains(event.target)) {
        setIsOpen4(false); // Menüyü kapat
      }
    };

    const handleClickOutside5 = (event) => {
      if (menuRef5.current && !menuRef5.current.contains(event.target)) {
        setIsOpen5(false); // Menüyü kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside2);
    document.addEventListener("mousedown", handleClickOutside3);
    document.addEventListener("mousedown", handleClickOutside4);
    document.addEventListener("mousedown", handleClickOutside5);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside2);
      document.removeEventListener("mousedown", handleClickOutside3);
      document.removeEventListener("mousedown", handleClickOutside4);
      document.removeEventListener("mousedown", handleClickOutside5);
    };
  }, []);

  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <header className="[ region region-header ] header print-none | js-header-main js-col-offset-item js-col-offset-item--main-header">
        <div className="container">
          <div className="header__inner">
            <div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                id="block-numiko-sitebranding"
              >
                <div>
                  <nav className="p-4 bg-gray-800 text-white">
                    <div className="dropdown">
                      <button className="dropdown-button">
                        Language
                        <span className="arrow">&#9662;</span>
                      </button>

                      <ul className="dropdown-menu">
                        <li
                          onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("tr");
                          }}
                          className="dropdown-item cursor-pointer"
                        >
                          TR
                        </li>
                        <li
                          onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("en");
                          }}
                          className="dropdown-item cursor-pointer"
                        >
                          EN
                        </li>
                        <li
                          onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("ku");
                          }}
                          className="dropdown-item cursor-pointer"
                        >
                          KU
                        </li>
                        <li
                          onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("ger");
                          }}
                          className="dropdown-item cursor-pointer"
                        >
                          GER
                        </li>
                        <li
                          onClick={(e) => {
                            e.preventDefault();
                            changeLanguage("zza");
                          }}
                          className="dropdown-item cursor-pointer"
                        >
                          ZAZ
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div>
                  <a
                    href="/"
                    title="Home"
                    rel="home"
                    className="header__logo-container"
                  >
                    <img
                      src="/images/Header/dersim_logo.png"
                      alt="dersim_logo"
                      width={100}
                      height={100}
                      className="header__logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={toggleDropDown}
              className="header__button header__button--menu | js-button-menu"
              type="button"
            >
              <span className="header__button-underline">
                <span className="header__button-icon header__button-icon--hamburger">
                  <span className="hamburger-lines" />
                </span>
                <span className="header__button-text">Menu</span>
              </span>
            </button>

            <div className="header__menu-container | js-menu-container">
              <div>
                <nav
                  className="menu-primary | js-menu-primary"
                  aria-labelledby="block-numiko-mainnavigation-menu"
                  id="block-numiko-mainnavigation"
                >
                  <h2
                    className="visually-hidden"
                    id="block-numiko-mainnavigation-menu"
                  >
                    Main navigation
                  </h2>
                  <div className="js-drilldown">
                    {" "}
                    {/* required */}
                    <div className="js-drilldown-container">
                      {" "}
                      {/* required */}
                      <ul className="menu menu--level-0 js-drilldown-root">
                        <li
                          ref={menuRef}
                          className="menu__item menu__item--expanded menu__item--level-0"
                        >
                          <button
                            onClick={toggleDropDown}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Ziyaret</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Ziyaret
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Ziyaret
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/family-visits"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Aile Ziyaretleri
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/group-visits"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Grup Ziyaretleri
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/audio-app"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Sesli Kayıtlar
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/out-hours-tours"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Ziyaret Dışı Saatler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/tours-and-talks"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Tur ve Rehberlik
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/object-trails"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Nesneler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/accessibility-museum"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Ulaşılabilirlik
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/visit/food-and-drink"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Yeme ve İçme
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/late-opening-on-fridays"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Cuma Günleri
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/visit/museum-map"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Müze Haritası
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="menu__item menu__item--level-0">
                          <a
                            href="/exhibitions-events"
                            className="menu__link menu__link--level-0 menu__toggle"
                          >
                            <span>Sergilerimiz</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </a>
                        </li>
                        <li
                          ref={menuRef2}
                          className="menu__item menu__item--expanded menu__item--level-0"
                        >
                          <button
                            onClick={toggleDropDown2}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Koleksiyon</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen2 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Koleksiyon
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1 menu__item--Koleksiyon homepage">
                                    <a
                                      href="/collection"
                                      className="menu__link menu__link--level-1 menu__toggle menu__link--Koleksiyon homepage js-Koleksiyon homepage"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Koleksiyon
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Online Koleksiyon
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/collection/galleries"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Galeriler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/blog"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Blog
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/the-british-museum-podcast"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        The Dersim Museum podcast
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li
                          ref={menuRef3}
                          className="menu__item menu__item--expanded menu__item--level-0"
                        >
                          <button
                            onClick={toggleDropDown3}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Eğitim</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen3 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Eğitim
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1 menu__item--Eğitiming and schools home">
                                    <a
                                      href="/learn"
                                      className="menu__link menu__link--level-1 menu__toggle menu__link--Eğitiming and schools home js-Eğitiming and schools home"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Eğitim
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/schools"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Okullar
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/communities"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Topluluklar
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/adult-learning"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Yetişkinler için Eğitim
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/learn/young-people"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Gençler için Eğitim
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li
                          ref={menuRef4}
                          className="menu__item menu__item--expanded menu__item--level-0"
                        >
                          <button
                            onClick={toggleDropDown4}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Üyelik</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen4 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Üyelik
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Üyelik
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="http://localhost:3000/exhibitions-events/members-exclusive"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Üyeler için Etkinlikler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/young-friends"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Genç Üyeler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/existing-members"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Mevcut Üyeler
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/membership/visiting-as-a-member"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Üye Olarak Ziyaret
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                        <li
                          ref={menuRef5}
                          className="menu__item menu__item--expanded menu__item--level-0"
                        >
                          <button
                            onClick={toggleDropDown5}
                            className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                          >
                            <span>Bizi Destekleyin</span>
                            <svg
                              className="icon icon--chevron"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-chevron" />
                            </svg>
                          </button>
                          {isOpen5 && (
                            <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                              <div className="menu__submenu-container">
                                <ul className="menu menu--level-1">
                                  <li className="menu__item menu__item--back | js-drilldown-back">
                                    <button
                                      type="button"
                                      className="menu__toggle menu__toggle--back | js-drilldown-button"
                                    >
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                      <span>
                                        Back{" "}
                                        <span className="visually-hidden">
                                          to previous menu
                                        </span>
                                      </span>
                                    </button>
                                  </li>
                                  <li className="menu__item menu__item--main menu__item--level-1">
                                    <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Bizi Destekleyin
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </div>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/donate"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Bağış
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/corporate-support"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Kurumsal Destek
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/patrons"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Destekçi Ol
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/supporter-case-studies"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Bağış Yapma Yöntemleri
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/volunteer"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Gönüllü Ol
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--collapsed menu__item--level-1">
                                    <a
                                      href="/support-us/existing-patrons"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Mevcut Destekçilerimiz
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/leave-legacy"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Geleceğe Miras
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                  <li className="menu__item menu__item--level-1">
                                    <a
                                      href="/support-us/american-friends-british-museum"
                                      className="menu__link menu__link--level-1 menu__toggle"
                                    >
                                      <span>
                                        <span
                                          className="menu__sub-nav-indicator"
                                          role="presentation"
                                          aria-hidden="true"
                                        >
                                          —
                                        </span>
                                        Yurtdışındaki Dostlarımız
                                      </span>
                                      <svg
                                        className="icon icon--chevron"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-chevron" />
                                      </svg>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="header__menu-secondary">
                <nav
                  aria-labelledby="block-secondarynavigation-menu"
                  id="block-secondarynavigation"
                >
                  <h2
                    className="visually-hidden"
                    id="block-secondarynavigation-menu"
                  >
                    Secondary navigation
                  </h2>
                  <ul className="menu menu--level-0 menu--header-secondary">
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--shop js-shop"
                        href="/shop"
                      >
                        <svg
                          className="icon icon--shop"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-shop" />
                        </svg>
                        <span>Alışveriş</span>
                      </a>
                    </li>
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--search js-search"
                        href="/search"
                      >
                        <svg
                          className="icon icon--search"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-search" />
                        </svg>
                        <span>Arama</span>
                      </a>
                    </li>
                    <li className="menu-item menu__item--level-0">
                      <a
                        className="menu__link menu__link--level-0 menu__link--donate"
                        href="/support-us/donate"
                      >
                        <span>Bağış</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {isOpen6 && (
              <div className="header__menu-container-visible | js-menu-container">
                <div>
                  <nav
                    className="menu-primary | js-menu-primary"
                    aria-labelledby="block-numiko-mainnavigation-menu"
                    id="block-numiko-mainnavigation"
                  >
                    <h2
                      className="visually-hidden"
                      id="block-numiko-mainnavigation-menu"
                    >
                      Main navigation
                    </h2>
                    <div className="js-drilldown">
                      {" "}
                      {/* required */}
                      <div className="js-drilldown-container">
                        {" "}
                        {/* required */}
                        <ul className="menu menu--level-0 js-drilldown-root">
                          <li
                            ref={menuRef}
                            className="menu__item menu__item--expanded menu__item--level-0"
                          >
                            <button
                              onClick={toggleDropDown}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Ziyaret</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Ziyaret
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Ziyaret
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/family-visits"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Aile Ziyaretleri
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/group-visits"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Grup Ziyaretleri
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/audio-app"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Sesli Kayıtlar
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/out-hours-tours"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Ziyaret Dışı Saatler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/tours-and-talks"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Tur ve Rehberlik
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/object-trails"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Nesneler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/accessibility-museum"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Ulaşılabilirlik
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/visit/food-and-drink"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Yeme ve İçme
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/late-opening-on-fridays"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Cuma Günleri
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/visit/museum-map"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Müze Haritası
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--level-0">
                            <a
                              href="/exhibitions-events"
                              className="menu__link menu__link--level-0 menu__toggle"
                            >
                              <span>Sergilerimiz</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </a>
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown2}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Koleksiyon</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen2 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Koleksiyon
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1 menu__item--Koleksiyon homepage">
                                      <a
                                        href="/collection"
                                        className="menu__link menu__link--level-1 menu__toggle menu__link--Koleksiyon homepage js-Koleksiyon homepage"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Koleksiyon
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Online Koleksiyon
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/collection/galleries"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Galeriler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/blog"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Blog
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/the-british-museum-podcast"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          The Dersim Museum podcast
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown3}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Eğitim</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen3 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Eğitim
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1 menu__item--Eğitiming and schools home">
                                      <a
                                        href="/learn"
                                        className="menu__link menu__link--level-1 menu__toggle menu__link--Eğitiming and schools home js-Eğitiming and schools home"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Eğitim
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/schools"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Okullar
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/communities"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Topluluklar
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/adult-learning"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Yetişkinler için Eğitim
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/learn/young-people"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Gençler için Eğitim
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown4}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Üyelik</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen4 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Üyelik
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Üyelik
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="http://localhost:3000/exhibitions-events/members-exclusive"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Üyeler için Etkinlikler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/young-friends"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Genç Üyeler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/existing-members"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Mevcut Üyeler
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/membership/visiting-as-a-member"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Üye Olarak Ziyaret
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="menu__item menu__item--expanded menu__item--level-0">
                            <button
                              onClick={toggleDropDown5}
                              className="menu__link menu__link--level-0 menu__toggle menu__link--expanded js-drilldown-button"
                            >
                              <span>Bizi Destekleyin</span>
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            {isOpen5 && (
                              <div className="menu__submenu menu__submenu--level-1 js-drilldown-sub-dropdown">
                                <div className="menu__submenu-container">
                                  <ul className="menu menu--level-1">
                                    <li className="menu__item menu__item--back | js-drilldown-back">
                                      <button
                                        type="button"
                                        className="menu__toggle menu__toggle--back | js-drilldown-button"
                                      >
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                        <span>
                                          Back{" "}
                                          <span className="visually-hidden">
                                            to previous menu
                                          </span>
                                        </span>
                                      </button>
                                    </li>
                                    <li className="menu__item menu__item--main menu__item--level-1">
                                      <div className="menu__link menu__link--main menu__link--level-1 menu__toggle">
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Bizi Destekleyin
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </div>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/donate"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Bağış
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/corporate-support"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Kurumsal Destek
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/patrons"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Destekçi Ol
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/supporter-case-studies"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Bağış Yapma Yöntemleri
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/volunteer"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Gönüllü Ol
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--collapsed menu__item--level-1">
                                      <a
                                        href="/support-us/existing-patrons"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Mevcut Destekçilerimiz
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/leave-legacy"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Geleceğe Miras
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li className="menu__item menu__item--level-1">
                                      <a
                                        href="/support-us/american-friends-british-museum"
                                        className="menu__link menu__link--level-1 menu__toggle"
                                      >
                                        <span>
                                          <span
                                            className="menu__sub-nav-indicator"
                                            role="presentation"
                                            aria-hidden="true"
                                          >
                                            —
                                          </span>
                                          Yurtdışındaki Dostlarımız
                                        </span>
                                        <svg
                                          className="icon icon--chevron"
                                          role="presentation"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use xlinkHref="#sprite-icon-chevron" />
                                        </svg>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="header__menu-secondary">
                  <nav
                    aria-labelledby="block-secondarynavigation-menu"
                    id="block-secondarynavigation"
                  >
                    <h2
                      className="visually-hidden"
                      id="block-secondarynavigation-menu"
                    >
                      Secondary navigation
                    </h2>
                    <ul className="menu menu--level-0 menu--header-secondary">
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--shop js-shop"
                          href="/shop"
                        >
                          <svg
                            className="icon icon--shop"
                            role="presentation"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use xlinkHref="#sprite-icon-shop" />
                          </svg>
                          <span>Alışveriş</span>
                        </a>
                      </li>
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--search js-search"
                          href="/search"
                        >
                          <svg
                            className="icon icon--search"
                            role="presentation"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use xlinkHref="#sprite-icon-search" />
                          </svg>
                          <span>Arama</span>
                        </a>
                      </li>
                      <li className="menu-item menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--donate"
                          href="/support-us/donate"
                        >
                          <span>Bağış</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          <button
            type="button"
            className="button button--icon header__col-toggle | js-col-menu-toggle"
          >
            Hide menu
            <svg
              className="icon icon--chevron"
              role="presentation"
              focusable="false"
              aria-hidden="true"
            >
              <use xlinkHref="#sprite-icon-chevron" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
