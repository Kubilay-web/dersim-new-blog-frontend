import { useEffect, useState } from "react";
import $ from "jquery";
import axios from "axios";

const Footer = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;

  // Sayfa kaydırma pozisyonunu takip etmek için state
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // jQuery scroll event'ini kapat
    $(window).off("scroll");

    // Temizleme işlemi
    return () => {
      $(window).off("scroll");
    };
  }, []);

  // Sayfa en üstüne scroll yapma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Kayıt Formu

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Backend API'ye form verisini gönderiyoruz
      const response = await axios.post(`${URL}/api/subscribe`, {
        email,
      });
      setSuccess(true);

      // Formu sıfırlıyoruz
      setEmail("");

      // Başarı mesajını 4 saniye sonra kaybolacak şekilde ayarlıyoruz
      setTimeout(() => {
        setSuccess(false);
      }, 4000); // 4 saniye sonra success mesajını gizle
    } catch (err) {
      // Eğer hata mesajı varsa, error mesajını göster
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Bir hata oluştu, lütfen tekrar deneyin.");
      }

      setEmail(""); // Hata durumunda input'u sıfırlıyoruz

      // Hata mesajını gösterdikten sonra, 4 saniye sonra hata mesajını gizleyelim ve input'u sıfırlayalım
      setTimeout(() => {
        setError(null);
      }, 4000); // 4000 ms = 4 saniye sonra hata mesajını ve input'u sıfırlıyoruz
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <footer className="footer print-none | js-footer">
        <div className="region region--pre-footer footer-pre">
          <div className="container">
            <div className="footer-pre__inner footer-spacer">
              <div className="footer-pre__content">
                <div className="footer-pre__content-item footer-pre__content-item--title">
                  <h3 className="footer__title">Bizi Takip Edin</h3>
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--newsletter">
                  <form className="footer__form" onSubmit={handleSubmit}>
                    <input type="hidden" name="_account_id" value={1552} />
                    <input type="hidden" name="_table_id" value={8} />
                    <input type="hidden" name="_list_id" value={126} />
                    <input type="hidden" name="_dedupe" value={1} />
                    <input type="hidden" name="_static_update" value={1} />
                    <input type="hidden" name="_email_field" value="8.email" />
                    <input
                      type="hidden"
                      id="return_page_footer"
                      name="_rp"
                      value="https://emails.britishmuseum.org/k/Dersim-Museum/sign_up_form_from_website_box?email=[*data('email')*]"
                    />

                    <label htmlFor="email">Email Adresinizi Girin</label>
                    <div className="footer__form-fields">
                      <input
                        type="email"
                        id="email"
                        name="8.email"
                        size={30}
                        maxLength={64}
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        className="button button--white footer__form-submit"
                        type="submit"
                        id="footer_submit_button"
                        disabled={loading}
                      >
                        {loading ? "Yükleniyor..." : "Kayıt Ol"}
                      </button>
                    </div>

                    {error && <p className="error-message">{error}</p>}
                    {success && (
                      <p className="success-message">Başarıyla kaydoldunuz!</p>
                    )}
                  </form>
                  <div className="js-email-validation-container" />
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--social">
                  <div id="block-sociallinks">
                    <ul className="menu menu--icon-menu menu--level-0">
                      <li>
                        <a href="https://www.facebook.com/">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--facebook"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-facebook" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--x"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-x" />
                            </svg>
                          </span>
                          <span className="visually-hidden">
                            X (formerly Twitter)
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--instagram"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-instagram" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--youtube"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-youtube" />
                            </svg>
                          </span>
                          <span className="visually-hidden">Youtube</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://weibo.com">
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--weibo"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-weibo" />
                            </svg>
                          </span>
                          <span className="visually-hidden">weibo</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://weixin.qq.com/r/Ui7g_A7ExVO6rUqb93tA"
                          data-js-prevent-default-hyperlink
                          data-js-external-link-ignore
                          data-micromodal-trigger="social-modal-wechat"
                        >
                          <span className="menu--icon__icon-container">
                            <svg
                              className="icon icon--wechat"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use xlinkHref="#sprite-icon-wechat" />
                            </svg>
                          </span>
                          <span className="visually-hidden">wechat</span>
                          <span className="visually-hidden">
                            . Opens a pop-up detailing how to access wechat.
                          </span>
                        </a>
                        <div
                          className="modal micromodal-slide"
                          id="social-modal-wechat"
                          aria-hidden="true"
                        >
                          <div
                            className="modal__overlay"
                            tabIndex={-1}
                            data-micromodal-close
                          >
                            <div
                              className="modal__container"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="social-modal-wechat-title"
                            >
                              <button
                                className="modal__close"
                                aria-label="Close modal"
                                data-micromodal-close
                              >
                                <span data-micromodal-close>Close</span>
                              </button>
                              <div className="modal__content">
                                <div className="modal__text modal__text--full modal__text--center-content">
                                  <h3
                                    id="social-modal-wechat-title"
                                    className="visually-hidden"
                                  >
                                    wechat
                                  </h3>
                                  <p>Scan the QR code to be taken to WeChat.</p>
                                  <img
                                    className="lazyload"
                                    data-src="/themes/custom/numiko/dist/img/wechat-qr.png"
                                    alt="A QR code that directs to WeChat."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-pre__content-item footer-pre__content-item--top-link">
                  <div className="footer-pre__top-link-container">
                    {isVisible && (
                      <span
                        href="#page"
                        className="footer-pre__top-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToTop();
                        }}
                      >
                        <span>Yukarı Çık</span>
                        <svg
                          className="icon icon--chevron"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-chevron" />
                        </svg>
                      </span>
                    )}

                    {/* <a href="#page-top" className="footer-pre__top-link">
                      <span>Yukarı Çık</span>
                      <svg
                        className="icon icon--chevron"
                        role="presentation"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <use xlinkHref="#sprite-icon-chevron" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region region--footer footer-main">
          <div className="container">
            <div className="footer__inner footer-spacer">
              <div className="footer__content">
                <div className="footer__info">
                  <div className="footer__info-inner">
                    <div
                      id="block-freeentry"
                      className="block footer__info-block"
                    >
                      <h2 className="footer__title footer__title--small footer__title--has-icon">
                        <svg
                          className="icon icon--ticket"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-ticket" />
                        </svg>
                        Ücretsiz Giriş
                      </h2>
                      <p>
                        Brüdergasse 16-18
                        <br />
                        53111 Bonn/Deutschland
                      </p>
                      <p>
                        <a href="mailto:info@dersim-stiftung.de">
                          <span>Email: info@dersim-stiftung.de</span>
                        </a>
                        <br />
                        &nbsp;
                      </p>
                    </div>
                    <div
                      id="block-openinghours"
                      className="block footer__info-block"
                    >
                      <h2 className="footer__title footer__title--small footer__title--has-icon">
                        <svg
                          className="icon icon--clock"
                          role="presentation"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use xlinkHref="#sprite-icon-clock" />
                        </svg>
                        Ziyaret Saatleri
                      </h2>
                      <p>
                        Haftaiçi: 10.00–17.00 (Cuma: 20.30)
                        <br />
                        Son Giriş: 16.45&nbsp;(Cuma: 20.15)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="footer__menu">
                  <nav aria-labelledby="block-footer-menu" id="block-footer">
                    <h2 className="visually-hidden" id="block-footer-menu">
                      Footer
                    </h2>
                    <ul className="menu menu--level-0 menu--footer">
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/about-us"
                        >
                          <span>Hakkımızda</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/governance"
                            >
                              <span>Yönetim</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/dersim-museum-story"
                            >
                              <span>Sürgünde Dersim Müzesi</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/jobs"
                            >
                              <span>Açık Pozisyonlar</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/press"
                            >
                              <span>Basın</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/about-us/contact-us"
                            >
                              <span>İletişim</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/visit"
                        >
                          <span>Ziyaret</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/museum-map"
                            >
                              <span>Müze Krokisi</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/exhibitions-events"
                            >
                              <span>Etkinlikler</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/accessibility-museum"
                            >
                              <span>Ulaşılabilirlik</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/food-and-drink"
                            >
                              <span>Yiyecek İçecek</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/visit/audio-app"
                            >
                              <span>Sesli Rehber</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/commercial"
                        >
                          <span>Ticari</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/commercial-hire"
                            >
                              <span>Ticari Kiralama</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/filming"
                            >
                              <span>Dersim Video</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="https://www.dersimimages.com/"
                            >
                              <span>Dersim Resim</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/licensing"
                            >
                              <span>Lisanslama</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/dersim-museum-press"
                            >
                              <span>Dersim Müzesi Yayınları</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/commercial/travel-trade-tours"
                            >
                              <span>Seyahat İmkanları</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/our-work"
                        >
                          <span>Yaptıklarımız</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/departments"
                            >
                              <span>Bölümler</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/national"
                            >
                              <span>Ulusal</span>
                            </a>
                          </li>
                          <li className="menu-item menu-item--collapsed menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/international"
                            >
                              <span>Uluslararası</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/our-work/how-borrow-dersim-museum-objects"
                            >
                              <span>Geçici Koleksiyon</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/research"
                        >
                          <span>Akademik</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/research/projects"
                            >
                              <span>Projeler</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/research/dersim-museum-publications"
                            >
                              <span>Yayınlar</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/scientific-study-dersim-museum-collection"
                            >
                              <span>Bilimsel Çalışmalar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item--expanded menu__item--level-0">
                        <a
                          className="menu__link menu__link--level-0 menu__link--expanded"
                          href="/resources"
                        >
                          <span>Kaynaklar</span>
                        </a>
                        <ul className="menu menu--level-1">
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/resources/study-rooms"
                            >
                              <span>Çalışma Odaları</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/resources/library-and-archive"
                            >
                              <span>Kütüphane</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/collection"
                            >
                              <span>Koleksiyonları Araştır</span>
                            </a>
                          </li>
                          <li className="menu-item menu__item--level-1">
                            <a
                              className="menu__link menu__link--level-1"
                              href="/blog"
                            >
                              <span>Blog</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="region region--post-footer footer-post">
          <div className="container">
            <div className="footer-post__nav">
              <nav
                aria-labelledby="block-footerlegallinks-menu"
                id="block-footerlegallinks"
                className="menu--footer-legal-container"
              >
                <h2
                  className="visually-hidden"
                  id="block-footerlegallinks-menu"
                >
                  Footer Legal Links
                </h2>
                <ul className="menu menu--level-0 menu--footer-legal">
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/privacy-policy"
                    >
                      <span>Privacy policy</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/cookies"
                    >
                      <span>Cookies</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu__link menu__link--level-0 menu__link--Website accessibility statement js-Website accessibility statement"
                      href="/accessibility-statement"
                    >
                      <span>Accessibility statement</span>
                    </a>
                  </li>
                  <li className="menu-item menu-item--collapsed">
                    <a
                      className="menu__link menu__link--level-0"
                      href="/terms-use"
                    >
                      <span>Terms of use</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <span className="footer-post__copyright">© 2024</span> The Trustees
            of the Dersim Museum
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
