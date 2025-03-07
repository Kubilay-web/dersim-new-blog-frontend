import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../redux/languageSlice";

const Accessibility = () => {
  const { t } = useTranslation();
  const currentLanguage = useSelector(selectLanguage); // Kullanıcı dilini al
  console.log(currentLanguage); // Dilin doğru şekilde alındığından emin ol

  // Dil haritası (Koddan Ad'a Çevirme)
  const languageMap = {
    tr: "turkish", // Türkçe
    en: "english", // İngilizce
    ku: "kurdish", // Kürtçe
    de: "german", // Almanca
    zaz: "zazaki",
  };

  // `ger`'i `de`'ye dönüştürmek için bir fonksiyon
  const getLanguageParam = (language) => {
    if (language === "ger") {
      return "german";
    } else if (language === "zza") {
      return "zazaki";
    } else return languageMap[language] || "turkish"; // Eğer başka bir dil kodu ise, dil haritasına göre döndür
  };

  //Content area

  const [content, setContent] = useState([]);

  const fetchContentById = async (categoryId, setPostFunc) => {
    try {
      const language = getLanguageParam(currentLanguage);

      const res = await fetch(
        `https://dersim-new-blog-backend.vercel.app/api/contents/${categoryId}/${language}`
      );
      const data = await res.json();
      setPostFunc([data]); // Eğer bir içerik döndürüyorsa array içinde tek bir içerik döndürüyoruz
    } catch (error) {
      console.error(`Failed to fetch content for ID ${categoryId}:`, error);
    }
  };

  // useEffect ile verileri çek
  useEffect(() => {
    const contentPrefix = getLanguageParam(currentLanguage); // Dil kodunu al
    console.log(contentPrefix);
    console.log(currentLanguage);

    // Kategoriler dil bazında dinamik olarak ayarlanıyor
    const category1 = `${contentPrefix}-content-4`;

    fetchContentById(category1, setContent);
  }, [currentLanguage]); // currentLanguage değiştiğinde yeniden veri çekilecek

  //Accordion area

  const [accordionData, setAccordionData] = useState([]); // Accordion verileri
  const [accordionData2, setAccordionData2] = useState([]); // Accordion verileri
  const [accordionData3, setAccordionData3] = useState([]); // Accordion verileri

  const fetchAccordionData = async (accordionId) => {
    try {
      const language = getLanguageParam(currentLanguage);
      const res = await fetch(
        `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${accordionId}/${language}`
      );
      const data = await res.json();
      setAccordionData(data); // Accordion verilerini güncelliyoruz
    } catch (error) {
      console.error(
        `Failed to fetch accordion data for category ${accordionId}:`,
        error
      );
    }
  };

  const fetchAccordionData2 = async (accordionId2) => {
    try {
      const language = getLanguageParam(currentLanguage);
      const res = await fetch(
        `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${accordionId2}/${language}`
      );
      const data2 = await res.json();
      setAccordionData2(data2); // Accordion verilerini güncelliyoruz
    } catch (error) {
      console.error(
        `Failed to fetch accordion data for category ${accordionId2}:`,
        error
      );
    }
  };

  const fetchAccordionData3 = async (accordionId3) => {
    try {
      const language = getLanguageParam(currentLanguage);
      const res = await fetch(
        `https://dersim-new-blog-backend.vercel.app/api/accordion/accordion/${accordionId3}/${language}`
      );
      const data3 = await res.json();
      setAccordionData3(data3); // Accordion verilerini güncelliyoruz
    } catch (error) {
      console.error(
        `Failed to fetch accordion data for category ${accordionId3}:`,
        error
      );
    }
  };

  // useEffect ile verileri çek
  useEffect(() => {
    const accordionPrefix = getLanguageParam(currentLanguage); // Dil kodunu al
    console.log(accordionPrefix);
    console.log(currentLanguage);

    // Kategoriler dil bazında dinamik olarak ayarlanıyor
    const accordion1 = `${accordionPrefix}-accordion-17`;
    const accordion2 = `${accordionPrefix}-accordion-2`;
    const accordion3 = `${accordionPrefix}-accordion-3`;

    fetchAccordionData(accordion1, setAccordionData);
    fetchAccordionData2(accordion2, setAccordionData2);
    fetchAccordionData3(accordion3, setAccordionData3);
  }, [currentLanguage]);

  return (
    <div>
      <div>
        <Helmet>
          <script src="/js-general/jquery.min.js" type="text/javascript" />
          <script src="/js-general/uc.js" type="text/javascript" />
          <script
            src="/js-general/js_AHW1Gd1in6RiZJasw3hcMl6NiLhRChyCxmU4q_j0Uf4.js"
            type="text/javascript"
          />
          <script
            src="/js-general/js_SPkMj3SpZ70JzzRSNrXpOjN64UdICR25YexAv-ckrcM.js"
            type="text/javascript"
          />
        </Helmet>
        <meta charSet="utf-8" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".teaser--exhibition-3418 .teaser__wrapper:hover:before {background-color:#0080C9 !important} .teaser--exhibition-3418 .teaser__wrapper:hover .teaser__defacer {color:#0080C9} .teaser--exhibition-3418 .teaser__defacer {background-color:#0080C9} .teaser--exhibition-3418 .teaser__title strong {color:#0080C9} .teaser--exhibition-2232 .teaser__wrapper:hover:before {background-color:#0085B9 !important} .teaser--exhibition-2232 .teaser__wrapper:hover .teaser__defacer {color:#0085B9} .teaser--exhibition-2232 .teaser__defacer {background-color:#0085B9} .teaser--exhibition-2232 .teaser__title strong {color:#0085B9} .teaser--exhibition-2013 .teaser__wrapper:hover:before {background-color:#008CA7 !important} .teaser--exhibition-2013 .teaser__wrapper:hover .teaser__defacer {color:#008CA7} .teaser--exhibition-2013 .teaser__defacer {background-color:#008CA7} .teaser--exhibition-2013 .teaser__title strong {color:#008CA7} .teaser--exhibition-3143 .teaser__wrapper:hover:before {background-color:#008F7C !important} .teaser--exhibition-3143 .teaser__wrapper:hover .teaser__defacer {color:#008F7C} .teaser--exhibition-3143 .teaser__defacer {background-color:#008F7C} .teaser--exhibition-3143 .teaser__title strong {color:#008F7C} .teaser--exhibition-1397 .teaser__wrapper:hover:before {background-color:#009699 !important} .teaser--exhibition-1397 .teaser__wrapper:hover .teaser__defacer {color:#009699} .teaser--exhibition-1397 .teaser__defacer {background-color:#009699} .teaser--exhibition-1397 .teaser__title strong {color:#009699} .teaser--exhibition-4801 .teaser__wrapper:hover:before {background-color:#009AB4 !important} .teaser--exhibition-4801 .teaser__wrapper:hover .teaser__defacer {color:#009AB4} .teaser--exhibition-4801 .teaser__defacer {background-color:#009AB4} .teaser--exhibition-4801 .teaser__title strong {color:#009AB4} .teaser--exhibition-4450 .teaser__wrapper:hover:before {background-color:#009BB3 !important} .teaser--exhibition-4450 .teaser__wrapper:hover .teaser__defacer {color:#009BB3} .teaser--exhibition-4450 .teaser__defacer {background-color:#009BB3} .teaser--exhibition-4450 .teaser__title strong {color:#009BB3} .teaser--exhibition-4400 .teaser__wrapper:hover:before {background-color:#009D3D !important} .teaser--exhibition-4400 .teaser__wrapper:hover .teaser__defacer {color:#009D3D} .teaser--exhibition-4400 .teaser__defacer {background-color:#009D3D} .teaser--exhibition-4400 .teaser__title strong {color:#009D3D} .teaser--exhibition-3070 .teaser__wrapper:hover:before {background-color:#00AFAD !important} .teaser--exhibition-3070 .teaser__wrapper:hover .teaser__defacer {color:#00AFAD} .teaser--exhibition-3070 .teaser__defacer {background-color:#00AFAD} .teaser--exhibition-3070 .teaser__title strong {color:#00AFAD} .teaser--exhibition-3607 .teaser__wrapper:hover:before {background-color:#00B2B2 !important} .teaser--exhibition-3607 .teaser__wrapper:hover .teaser__defacer {color:#00B2B2} .teaser--exhibition-3607 .teaser__defacer {background-color:#00B2B2} .teaser--exhibition-3607 .teaser__title strong {color:#00B2B2} .teaser--exhibition-4409 .teaser__wrapper:hover:before {background-color:#00B451 !important} .teaser--exhibition-4409 .teaser__wrapper:hover .teaser__defacer {color:#00B451} .teaser--exhibition-4409 .teaser__defacer {background-color:#00B451} .teaser--exhibition-4409 .teaser__title strong {color:#00B451} .teaser--exhibition-441 .teaser__wrapper:hover:before {background-color:#00BBB4 !important} .teaser--exhibition-441 .teaser__wrapper:hover .teaser__defacer {color:#00BBB4} .teaser--exhibition-441 .teaser__defacer {background-color:#00BBB4} .teaser--exhibition-441 .teaser__title strong {color:#00BBB4} .teaser--exhibition-2226 .teaser__wrapper:hover:before {background-color:#067E15 !important} .teaser--exhibition-2226 .teaser__wrapper:hover .teaser__defacer {color:#067E15} .teaser--exhibition-2226 .teaser__defacer {background-color:#067E15} .teaser--exhibition-2226 .teaser__title strong {color:#067E15} .teaser--exhibition-4301 .teaser__wrapper:hover:before {background-color:#2198D8 !important} .teaser--exhibition-4301 .teaser__wrapper:hover .teaser__defacer {color:#2198D8} .teaser--exhibition-4301 .teaser__defacer {background-color:#2198D8} .teaser--exhibition-4301 .teaser__title strong {color:#2198D8} .teaser--exhibition-3231 .teaser__wrapper:hover:before {background-color:#31AA6C !important} .teaser--exhibition-3231 .teaser__wrapper:hover .teaser__defacer {color:#31AA6C} .teaser--exhibition-3231 .teaser__defacer {background-color:#31AA6C} .teaser--exhibition-3231 .teaser__title strong {color:#31AA6C} .teaser--exhibition-2106 .teaser__wrapper:hover:before {background-color:#338F73 !important} .teaser--exhibition-2106 .teaser__wrapper:hover .teaser__defacer {color:#338F73} .teaser--exhibition-2106 .teaser__defacer {background-color:#338F73} .teaser--exhibition-2106 .teaser__title strong {color:#338F73} .teaser--exhibition-5224 .teaser__wrapper:hover:before {background-color:#3A8340 !important} .teaser--exhibition-5224 .teaser__wrapper:hover .teaser__defacer {color:#3A8340} .teaser--exhibition-5224 .teaser__defacer {background-color:#3A8340} .teaser--exhibition-5224 .teaser__title strong {color:#3A8340} .teaser--exhibition-2225 .teaser__wrapper:hover:before {background-color:#3EC2EA !important} .teaser--exhibition-2225 .teaser__wrapper:hover .teaser__defacer {color:#3EC2EA} .teaser--exhibition-2225 .teaser__defacer {background-color:#3EC2EA} .teaser--exhibition-2225 .teaser__title strong {color:#3EC2EA} .teaser--exhibition-4804 .teaser__wrapper:hover:before {background-color:#4E77C1 !important} .teaser--exhibition-4804 .teaser__wrapper:hover .teaser__defacer {color:#4E77C1} .teaser--exhibition-4804 .teaser__defacer {background-color:#4E77C1} .teaser--exhibition-4804 .teaser__title strong {color:#4E77C1} .teaser--exhibition-4200 .teaser__wrapper:hover:before {background-color:#547D7D !important} .teaser--exhibition-4200 .teaser__wrapper:hover .teaser__defacer {color:#547D7D} .teaser--exhibition-4200 .teaser__defacer {background-color:#547D7D} .teaser--exhibition-4200 .teaser__title strong {color:#547D7D} .teaser--exhibition-1393 .teaser__wrapper:hover:before {background-color:#55DA85 !important} .teaser--exhibition-1393 .teaser__wrapper:hover .teaser__defacer {color:#55DA85} .teaser--exhibition-1393 .teaser__defacer {background-color:#55DA85} .teaser--exhibition-1393 .teaser__title strong {color:#55DA85} .teaser--exhibition-4237 .teaser__wrapper:hover:before {background-color:#5E8AB4 !important} .teaser--exhibition-4237 .teaser__wrapper:hover .teaser__defacer {color:#5E8AB4} .teaser--exhibition-4237 .teaser__defacer {background-color:#5E8AB4} .teaser--exhibition-4237 .teaser__title strong {color:#5E8AB4} .teaser--exhibition-4595 .teaser__wrapper:hover:before {background-color:#607B94 !important} .teaser--exhibition-4595 .teaser__wrapper:hover .teaser__defacer {color:#607B94} .teaser--exhibition-4595 .teaser__defacer {background-color:#607B94} .teaser--exhibition-4595 .teaser__title strong {color:#607B94} .teaser--exhibition-3428 .teaser__wrapper:hover:before {background-color:#648F82 !important} .teaser--exhibition-3428 .teaser__wrapper:hover .teaser__defacer {color:#648F82} .teaser--exhibition-3428 .teaser__defacer {background-color:#648F82} .teaser--exhibition-3428 .teaser__title strong {color:#648F82} .teaser--exhibition-3164 .teaser__wrapper:hover:before {background-color:#68972F !important} .teaser--exhibition-3164 .teaser__wrapper:hover .teaser__defacer {color:#68972F} .teaser--exhibition-3164 .teaser__defacer {background-color:#68972F} .teaser--exhibition-3164 .teaser__title strong {color:#68972F} .teaser--exhibition-5428 .teaser__wrapper:hover:before {background-color:#6EA5E6 !important} .teaser--exhibition-5428 .teaser__wrapper:hover .teaser__defacer {color:#6EA5E6} .teaser--exhibition-5428 .teaser__defacer {background-color:#6EA5E6} .teaser--exhibition-5428 .teaser__title strong {color:#6EA5E6} .teaser--exhibition-2231 .teaser__wrapper:hover:before {background-color:#724F7A !important} .teaser--exhibition-2231 .teaser__wrapper:hover .teaser__defacer {color:#724F7A} .teaser--exhibition-2231 .teaser__defacer {background-color:#724F7A} .teaser--exhibition-2231 .teaser__title strong {color:#724F7A} .teaser--exhibition-1383 .teaser__wrapper:hover:before {background-color:#7482BE !important} .teaser--exhibition-1383 .teaser__wrapper:hover .teaser__defacer {color:#7482BE} .teaser--exhibition-1383 .teaser__defacer {background-color:#7482BE} .teaser--exhibition-1383 .teaser__title strong {color:#7482BE} .teaser--exhibition-3557 .teaser__wrapper:hover:before {background-color:#75B843 !important} .teaser--exhibition-3557 .teaser__wrapper:hover .teaser__defacer {color:#75B843} .teaser--exhibition-3557 .teaser__defacer {background-color:#75B843} .teaser--exhibition-3557 .teaser__title strong {color:#75B843} .teaser--exhibition-4939 .teaser__wrapper:hover:before {background-color:#75BEE9 !important} .teaser--exhibition-4939 .teaser__wrapper:hover .teaser__defacer {color:#75BEE9} .teaser--exhibition-4939 .teaser__defacer {background-color:#75BEE9} .teaser--exhibition-4939 .teaser__title strong {color:#75BEE9} .teaser--exhibition-3439 .teaser__wrapper:hover:before {background-color:#796CA7 !important} .teaser--exhibition-3439 .teaser__wrapper:hover .teaser__defacer {color:#796CA7} .teaser--exhibition-3439 .teaser__defacer {background-color:#796CA7} .teaser--exhibition-3439 .teaser__title strong {color:#796CA7} .teaser--exhibition-1399 .teaser__wrapper:hover:before {background-color:#82B7AD !important} .teaser--exhibition-1399 .teaser__wrapper:hover .teaser__defacer {color:#82B7AD} .teaser--exhibition-1399 .teaser__defacer {background-color:#82B7AD} .teaser--exhibition-1399 .teaser__title strong {color:#82B7AD} .teaser--exhibition-2803 .teaser__wrapper:hover:before {background-color:#8441DC !important} .teaser--exhibition-2803 .teaser__wrapper:hover .teaser__defacer {color:#8441DC} .teaser--exhibition-2803 .teaser__defacer {background-color:#8441DC} .teaser--exhibition-2803 .teaser__title strong {color:#8441DC} .teaser--exhibition-2222 .teaser__wrapper:hover:before {background-color:#8630AB !important} .teaser--exhibition-2222 .teaser__wrapper:hover .teaser__defacer {color:#8630AB} .teaser--exhibition-2222 .teaser__defacer {background-color:#8630AB} .teaser--exhibition-2222 .teaser__title strong {color:#8630AB} .teaser--exhibition-5455 .teaser__wrapper:hover:before {background-color:#8AF6FF !important} .teaser--exhibition-5455 .teaser__wrapper:hover .teaser__defacer {color:#8AF6FF} .teaser--exhibition-5455 .teaser__defacer {background-color:#8AF6FF} .teaser--exhibition-5455 .teaser__title strong {color:#8AF6FF} .teaser--exhibition-2100 .teaser__wrapper:hover:before {background-color:#90B0A1 !important} .teaser--exhibition-2100 .teaser__wrapper:hover .teaser__defacer {color:#90B0A1} .teaser--exhibition-2100 .teaser__defacer {background-color:#90B0A1} .teaser--exhibition-2100 .teaser__title strong {color:#90B0A1} .teaser--exhibition-3438 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-3438 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-3438 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-3438 .teaser__title strong {color:#92C56E} .teaser--exhibition-4609 .teaser__wrapper:hover:before {background-color:#92C56E !important} .teaser--exhibition-4609 .teaser__wrapper:hover .teaser__defacer {color:#92C56E} .teaser--exhibition-4609 .teaser__defacer {background-color:#92C56E} .teaser--exhibition-4609 .teaser__title strong {color:#92C56E} .teaser--exhibition-2223 .teaser__wrapper:hover:before {background-color:#9370DB !important} .teaser--exhibition-2223 .teaser__wrapper:hover .teaser__defacer {color:#9370DB} .teaser--exhibition-2223 .teaser__defacer {background-color:#9370DB} .teaser--exhibition-2223 .teaser__title strong {color:#9370DB} .teaser--exhibition-705 .teaser__wrapper:hover:before {background-color:#9AB9AD !important} .teaser--exhibition-705 .teaser__wrapper:hover .teaser__defacer {color:#9AB9AD} .teaser--exhibition-705 .teaser__defacer {background-color:#9AB9AD} .teaser--exhibition-705 .teaser__title strong {color:#9AB9AD} .teaser--exhibition-2228 .teaser__wrapper:hover:before {background-color:#A29062 !important} .teaser--exhibition-2228 .teaser__wrapper:hover .teaser__defacer {color:#A29062} .teaser--exhibition-2228 .teaser__defacer {background-color:#A29062} .teaser--exhibition-2228 .teaser__title strong {color:#A29062} .teaser--exhibition-442 .teaser__wrapper:hover:before {background-color:#A6C38D !important} .teaser--exhibition-442 .teaser__wrapper:hover .teaser__defacer {color:#A6C38D} .teaser--exhibition-442 .teaser__defacer {background-color:#A6C38D} .teaser--exhibition-442 .teaser__title strong {color:#A6C38D} .teaser--exhibition-5332 .teaser__wrapper:hover:before {background-color:#A77E55 !important} .teaser--exhibition-5332 .teaser__wrapper:hover .teaser__defacer {color:#A77E55} .teaser--exhibition-5332 .teaser__defacer {background-color:#A77E55} .teaser--exhibition-5332 .teaser__title strong {color:#A77E55} .teaser--exhibition-4404 .teaser__wrapper:hover:before {background-color:#A9B875 !important} .teaser--exhibition-4404 .teaser__wrapper:hover .teaser__defacer {color:#A9B875} .teaser--exhibition-4404 .teaser__defacer {background-color:#A9B875} .teaser--exhibition-4404 .teaser__title strong {color:#A9B875} .teaser--exhibition-2984 .teaser__wrapper:hover:before {background-color:#ABE1FA !important} .teaser--exhibition-2984 .teaser__wrapper:hover .teaser__defacer {color:#ABE1FA} .teaser--exhibition-2984 .teaser__defacer {background-color:#ABE1FA} .teaser--exhibition-2984 .teaser__title strong {color:#ABE1FA} .teaser--exhibition-5097 .teaser__wrapper:hover:before {background-color:#ADACAA !important} .teaser--exhibition-5097 .teaser__wrapper:hover .teaser__defacer {color:#ADACAA} .teaser--exhibition-5097 .teaser__defacer {background-color:#ADACAA} .teaser--exhibition-5097 .teaser__title strong {color:#ADACAA} .teaser--exhibition-3549 .teaser__wrapper:hover:before {background-color:#B156D2 !important} .teaser--exhibition-3549 .teaser__wrapper:hover .teaser__defacer {color:#B156D2} .teaser--exhibition-3549 .teaser__defacer {background-color:#B156D2} .teaser--exhibition-3549 .teaser__title strong {color:#B156D2} .teaser--exhibition-2194 .teaser__wrapper:hover:before {background-color:#B2A48E !important} .teaser--exhibition-2194 .teaser__wrapper:hover .teaser__defacer {color:#B2A48E} .teaser--exhibition-2194 .teaser__defacer {background-color:#B2A48E} .teaser--exhibition-2194 .teaser__title strong {color:#B2A48E} .teaser--exhibition-2230 .teaser__wrapper:hover:before {background-color:#B2B2A4 !important} .teaser--exhibition-2230 .teaser__wrapper:hover .teaser__defacer {color:#B2B2A4} .teaser--exhibition-2230 .teaser__defacer {background-color:#B2B2A4} .teaser--exhibition-2230 .teaser__title strong {color:#B2B2A4} .teaser--exhibition-2009 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2009 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2009 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2009 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2022 .teaser__wrapper:hover:before {background-color:#B2B2B2 !important} .teaser--exhibition-2022 .teaser__wrapper:hover .teaser__defacer {color:#B2B2B2} .teaser--exhibition-2022 .teaser__defacer {background-color:#B2B2B2} .teaser--exhibition-2022 .teaser__title strong {color:#B2B2B2} .teaser--exhibition-2105 .teaser__wrapper:hover:before {background-color:#B35674 !important} .teaser--exhibition-2105 .teaser__wrapper:hover .teaser__defacer {color:#B35674} .teaser--exhibition-2105 .teaser__defacer {background-color:#B35674} .teaser--exhibition-2105 .teaser__title strong {color:#B35674} .teaser--exhibition-4778 .teaser__wrapper:hover:before {background-color:#BCD15F !important} .teaser--exhibition-4778 .teaser__wrapper:hover .teaser__defacer {color:#BCD15F} .teaser--exhibition-4778 .teaser__defacer {background-color:#BCD15F} .teaser--exhibition-4778 .teaser__title strong {color:#BCD15F} .teaser--exhibition-5447 .teaser__wrapper:hover:before {background-color:#C1BA38 !important} .teaser--exhibition-5447 .teaser__wrapper:hover .teaser__defacer {color:#C1BA38} .teaser--exhibition-5447 .teaser__defacer {background-color:#C1BA38} .teaser--exhibition-5447 .teaser__title strong {color:#C1BA38} .teaser--exhibition-4661 .teaser__wrapper:hover:before {background-color:#C2BB36 !important} .teaser--exhibition-4661 .teaser__wrapper:hover .teaser__defacer {color:#C2BB36} .teaser--exhibition-4661 .teaser__defacer {background-color:#C2BB36} .teaser--exhibition-4661 .teaser__title strong {color:#C2BB36} .teaser--exhibition-4403 .teaser__wrapper:hover:before {background-color:#C5C4BE !important} .teaser--exhibition-4403 .teaser__wrapper:hover .teaser__defacer {color:#C5C4BE} .teaser--exhibition-4403 .teaser__defacer {background-color:#C5C4BE} .teaser--exhibition-4403 .teaser__title strong {color:#C5C4BE} .teaser--exhibition-4960 .teaser__wrapper:hover:before {background-color:#C75B8F !important} .teaser--exhibition-4960 .teaser__wrapper:hover .teaser__defacer {color:#C75B8F} .teaser--exhibition-4960 .teaser__defacer {background-color:#C75B8F} .teaser--exhibition-4960 .teaser__title strong {color:#C75B8F} .teaser--exhibition-2224 .teaser__wrapper:hover:before {background-color:#CAB011 !important} .teaser--exhibition-2224 .teaser__wrapper:hover .teaser__defacer {color:#CAB011} .teaser--exhibition-2224 .teaser__defacer {background-color:#CAB011} .teaser--exhibition-2224 .teaser__title strong {color:#CAB011} .teaser--exhibition-2012 .teaser__wrapper:hover:before {background-color:#CAB482 !important} .teaser--exhibition-2012 .teaser__wrapper:hover .teaser__defacer {color:#CAB482} .teaser--exhibition-2012 .teaser__defacer {background-color:#CAB482} .teaser--exhibition-2012 .teaser__title strong {color:#CAB482} .teaser--exhibition-2202 .teaser__wrapper:hover:before {background-color:#D73C61 !important} .teaser--exhibition-2202 .teaser__wrapper:hover .teaser__defacer {color:#D73C61} .teaser--exhibition-2202 .teaser__defacer {background-color:#D73C61} .teaser--exhibition-2202 .teaser__title strong {color:#D73C61} .teaser--exhibition-1324 .teaser__wrapper:hover:before {background-color:#D76062 !important} .teaser--exhibition-1324 .teaser__wrapper:hover .teaser__defacer {color:#D76062} .teaser--exhibition-1324 .teaser__defacer {background-color:#D76062} .teaser--exhibition-1324 .teaser__title strong {color:#D76062} .teaser--exhibition-1217 .teaser__wrapper:hover:before {background-color:#D9AA00 !important} .teaser--exhibition-1217 .teaser__wrapper:hover .teaser__defacer {color:#D9AA00} .teaser--exhibition-1217 .teaser__defacer {background-color:#D9AA00} .teaser--exhibition-1217 .teaser__title strong {color:#D9AA00} .teaser--exhibition-2473 .teaser__wrapper:hover:before {background-color:#DCD5C5 !important} .teaser--exhibition-2473 .teaser__wrapper:hover .teaser__defacer {color:#DCD5C5} .teaser--exhibition-2473 .teaser__defacer {background-color:#DCD5C5} .teaser--exhibition-2473 .teaser__title strong {color:#DCD5C5} .teaser--exhibition-3168 .teaser__wrapper:hover:before {background-color:#DD7237 !important} .teaser--exhibition-3168 .teaser__wrapper:hover .teaser__defacer {color:#DD7237} .teaser--exhibition-3168 .teaser__defacer {background-color:#DD7237} .teaser--exhibition-3168 .teaser__title strong {color:#DD7237} .teaser--exhibition-1408 .teaser__wrapper:hover:before {background-color:#DEC372 !important} .teaser--exhibition-1408 .teaser__wrapper:hover .teaser__defacer {color:#DEC372} .teaser--exhibition-1408 .teaser__defacer {background-color:#DEC372} .teaser--exhibition-1408 .teaser__title strong {color:#DEC372} .teaser--exhibition-2229 .teaser__wrapper:hover:before {background-color:#DF2312 !important} .teaser--exhibition-2229 .teaser__wrapper:hover .teaser__defacer {color:#DF2312} .teaser--exhibition-2229 .teaser__defacer {background-color:#DF2312} .teaser--exhibition-2229 .teaser__title strong {color:#DF2312} .teaser--exhibition-4660 .teaser__wrapper:hover:before {background-color:#DFC070 !important} .teaser--exhibition-4660 .teaser__wrapper:hover .teaser__defacer {color:#DFC070} .teaser--exhibition-4660 .teaser__defacer {background-color:#DFC070} .teaser--exhibition-4660 .teaser__title strong {color:#DFC070} .teaser--exhibition-4793 .teaser__wrapper:hover:before {background-color:#E0352F !important} .teaser--exhibition-4793 .teaser__wrapper:hover .teaser__defacer {color:#E0352F} .teaser--exhibition-4793 .teaser__defacer {background-color:#E0352F} .teaser--exhibition-4793 .teaser__title strong {color:#E0352F} .teaser--exhibition-4783 .teaser__wrapper:hover:before {background-color:#E13C0D !important} .teaser--exhibition-4783 .teaser__wrapper:hover .teaser__defacer {color:#E13C0D} .teaser--exhibition-4783 .teaser__defacer {background-color:#E13C0D} .teaser--exhibition-4783 .teaser__title strong {color:#E13C0D} .teaser--exhibition-2023 .teaser__wrapper:hover:before {background-color:#EB0000 !important} .teaser--exhibition-2023 .teaser__wrapper:hover .teaser__defacer {color:#EB0000} .teaser--exhibition-2023 .teaser__defacer {background-color:#EB0000} .teaser--exhibition-2023 .teaser__title strong {color:#EB0000} .teaser--exhibition-4305 .teaser__wrapper:hover:before {background-color:#EC008C !important} .teaser--exhibition-4305 .teaser__wrapper:hover .teaser__defacer {color:#EC008C} .teaser--exhibition-4305 .teaser__defacer {background-color:#EC008C} .teaser--exhibition-4305 .teaser__title strong {color:#EC008C} .teaser--exhibition-4318 .teaser__wrapper:hover:before {background-color:#EC409D !important} .teaser--exhibition-4318 .teaser__wrapper:hover .teaser__defacer {color:#EC409D} .teaser--exhibition-4318 .teaser__defacer {background-color:#EC409D} .teaser--exhibition-4318 .teaser__title strong {color:#EC409D} .teaser--exhibition-5365 .teaser__wrapper:hover:before {background-color:#EF4036 !important} .teaser--exhibition-5365 .teaser__wrapper:hover .teaser__defacer {color:#EF4036} .teaser--exhibition-5365 .teaser__defacer {background-color:#EF4036} .teaser--exhibition-5365 .teaser__title strong {color:#EF4036} .teaser--exhibition-440 .teaser__wrapper:hover:before {background-color:#EF7B47 !important} .teaser--exhibition-440 .teaser__wrapper:hover .teaser__defacer {color:#EF7B47} .teaser--exhibition-440 .teaser__defacer {background-color:#EF7B47} .teaser--exhibition-440 .teaser__title strong {color:#EF7B47} .teaser--exhibition-5278 .teaser__wrapper:hover:before {background-color:#F01329 !important} .teaser--exhibition-5278 .teaser__wrapper:hover .teaser__defacer {color:#F01329} .teaser--exhibition-5278 .teaser__defacer {background-color:#F01329} .teaser--exhibition-5278 .teaser__title strong {color:#F01329} .teaser--exhibition-4177 .teaser__wrapper:hover:before {background-color:#F15B4E !important} .teaser--exhibition-4177 .teaser__wrapper:hover .teaser__defacer {color:#F15B4E} .teaser--exhibition-4177 .teaser__defacer {background-color:#F15B4E} .teaser--exhibition-4177 .teaser__title strong {color:#F15B4E} .teaser--exhibition-5330 .teaser__wrapper:hover:before {background-color:#F65681 !important} .teaser--exhibition-5330 .teaser__wrapper:hover .teaser__defacer {color:#F65681} .teaser--exhibition-5330 .teaser__defacer {background-color:#F65681} .teaser--exhibition-5330 .teaser__title strong {color:#F65681} .teaser--exhibition-5204 .teaser__wrapper:hover:before {background-color:#F9B853 !important} .teaser--exhibition-5204 .teaser__wrapper:hover .teaser__defacer {color:#F9B853} .teaser--exhibition-5204 .teaser__defacer {background-color:#F9B853} .teaser--exhibition-5204 .teaser__title strong {color:#F9B853} .teaser--exhibition-2227 .teaser__wrapper:hover:before {background-color:#FA1CFF !important} .teaser--exhibition-2227 .teaser__wrapper:hover .teaser__defacer {color:#FA1CFF} .teaser--exhibition-2227 .teaser__defacer {background-color:#FA1CFF} .teaser--exhibition-2227 .teaser__title strong {color:#FA1CFF} .teaser--exhibition-4676 .teaser__wrapper:hover:before {background-color:#FAA21B !important} .teaser--exhibition-4676 .teaser__wrapper:hover .teaser__defacer {color:#FAA21B} .teaser--exhibition-4676 .teaser__defacer {background-color:#FAA21B} .teaser--exhibition-4676 .teaser__title strong {color:#FAA21B} .teaser--exhibition-2698 .teaser__wrapper:hover:before {background-color:#FBBA00 !important} .teaser--exhibition-2698 .teaser__wrapper:hover .teaser__defacer {color:#FBBA00} .teaser--exhibition-2698 .teaser__defacer {background-color:#FBBA00} .teaser--exhibition-2698 .teaser__title strong {color:#FBBA00} .teaser--exhibition-4682 .teaser__wrapper:hover:before {background-color:#FC4C02 !important} .teaser--exhibition-4682 .teaser__wrapper:hover .teaser__defacer {color:#FC4C02} .teaser--exhibition-4682 .teaser__defacer {background-color:#FC4C02} .teaser--exhibition-4682 .teaser__title strong {color:#FC4C02} .teaser--exhibition-5125 .teaser__wrapper:hover:before {background-color:#FDBC54 !important} .teaser--exhibition-5125 .teaser__wrapper:hover .teaser__defacer {color:#FDBC54} .teaser--exhibition-5125 .teaser__defacer {background-color:#FDBC54} .teaser--exhibition-5125 .teaser__title strong {color:#FDBC54} .teaser--exhibition-4949 .teaser__wrapper:hover:before {background-color:#FE987D !important} .teaser--exhibition-4949 .teaser__wrapper:hover .teaser__defacer {color:#FE987D} .teaser--exhibition-4949 .teaser__defacer {background-color:#FE987D} .teaser--exhibition-4949 .teaser__title strong {color:#FE987D} .teaser--exhibition-2233 .teaser__wrapper:hover:before {background-color:#FF0000 !important} .teaser--exhibition-2233 .teaser__wrapper:hover .teaser__defacer {color:#FF0000} .teaser--exhibition-2233 .teaser__defacer {background-color:#FF0000} .teaser--exhibition-2233 .teaser__title strong {color:#FF0000} .teaser--exhibition-4472 .teaser__wrapper:hover:before {background-color:#FF1A00 !important} .teaser--exhibition-4472 .teaser__wrapper:hover .teaser__defacer {color:#FF1A00} .teaser--exhibition-4472 .teaser__defacer {background-color:#FF1A00} .teaser--exhibition-4472 .teaser__title strong {color:#FF1A00} .teaser--exhibition-643 .teaser__wrapper:hover:before {background-color:#FFAE3B !important} .teaser--exhibition-643 .teaser__wrapper:hover .teaser__defacer {color:#FFAE3B} .teaser--exhibition-643 .teaser__defacer {background-color:#FFAE3B} .teaser--exhibition-643 .teaser__title strong {color:#FFAE3B} .teaser--exhibition-3359 .teaser__wrapper:hover:before {background-color:#FFCD1C !important} .teaser--exhibition-3359 .teaser__wrapper:hover .teaser__defacer {color:#FFCD1C} .teaser--exhibition-3359 .teaser__defacer {background-color:#FFCD1C} .teaser--exhibition-3359 .teaser__title strong {color:#FFCD1C} .teaser--exhibition-4807 .teaser__wrapper:hover:before {background-color:#FFE800 !important} .teaser--exhibition-4807 .teaser__wrapper:hover .teaser__defacer {color:#FFE800} .teaser--exhibition-4807 .teaser__defacer {background-color:#FFE800} .teaser--exhibition-4807 .teaser__title strong {color:#FFE800} .teaser--exhibition-1830 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1830 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1830 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1830 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1831 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1831 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1831 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1831 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1832 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1832 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1832 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1832 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-1877 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-1877 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-1877 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-1877 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2054 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2054 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2054 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2054 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2719 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2719 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2719 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2719 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2757 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2757 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2757 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2757 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-2924 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-2924 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-2924 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-2924 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3035 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3035 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3035 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3035 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3086 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3086 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3086 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3086 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3087 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3087 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3087 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3087 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3089 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3089 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3089 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3089 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-3174 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-3174 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-3174 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-3174 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4085 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4085 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4085 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4085 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4226 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4226 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4226 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4226 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4228 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4228 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4228 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4228 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4239 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4239 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4239 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4239 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4307 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4307 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4307 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4307 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4401 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4401 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4401 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4401 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4509 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4509 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4509 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4509 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4533 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4533 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4533 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4533 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4534 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4534 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4534 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4534 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4535 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4535 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4535 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4535 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-4547 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-4547 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-4547 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-4547 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5189 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5189 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5189 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5189 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5190 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5190 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5190 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5190 .teaser__title strong {color:#FFFFFF} .teaser--exhibition-5191 .teaser__wrapper:hover:before {background-color:#FFFFFF !important} .teaser--exhibition-5191 .teaser__wrapper:hover .teaser__defacer {color:#FFFFFF} .teaser--exhibition-5191 .teaser__defacer {background-color:#FFFFFF} .teaser--exhibition-5191 .teaser__title strong {color:#FFFFFF}",
          }}
        />
        <meta
          name="description"
          content="We welcome everyone at the Dersim Museum. Plan your visit, find accessibility information, including accessible parking, accessible toilets and BSL guides, a sensory map and discover our interactive and welcoming access events."
        />
        <link
          rel="canonical"
          href="http://localhost:3000/visit/accessibility-museum"
        />
        <link
          rel="image_src"
          href="http://localhost:3000/sites/default/files/styles/uncropped_large/public/2019-10/south-africa-object-handling-session.jpg?itok=VwELrelW"
        />
        <meta property="og:site_name" content="The Dersim Museum" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="http://localhost:3000/visit/accessibility-museum"
        />
        <meta property="og:title" content="Accessibility at the Museum" />
        <meta
          property="og:description"
          content="Find out how to make the most of your visit to the Museum."
        />
        <meta
          property="og:image"
          content="/images/Accessibility/south-africa-object-handling-session_2.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Find out how to make the most of your visit to the Museum."
        />
        <meta name="twitter:site" content="@britishmuseum" />
        <meta name="twitter:title" content="Accessibility at the Museum" />
        <meta
          name="twitter:image"
          content="http://localhost:3000/sites/default/files/styles/uncropped_large/public/2019-10/south-africa-object-handling-session.jpg?itok=VwELrelW"
        />
        <meta name="Generator" content="Drupal 10 (https://www.drupal.org)" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" type="image/vnd.microsoft.icon" />
        <title>Accessibility at the Museum | Dersim Museum</title>
        <link rel="preconnect" href="https://googletagmanager.com" />
        <link rel="preconnect" href="https://google-analytics.com" />
        <link
          rel="stylesheet"
          media="all"
          href="css/css_AZT9uoK8DrAxJy0QDeijN2yNf3cO275yMRKSxmq79WY.css"
        />
        <link
          rel="stylesheet"
          media="all"
          href="css/css_VAvkHRcLHSWwq0ovHYJ-IGyjWbQie-FPraftF1kr7dQ.css"
        />
        <link
          rel="stylesheet"
          media="print"
          href="css/css_i1O0tjo3bjgkU5-alNhpaD4VyRDHezJx1RhRnDHIExI.css"
        />
        {/* Google Consent Mode */}
        {/* End Google Consent Mode */}
        {/* Google Tag Manager */}
        {/* End Google Tag Manager */}
        {/* Cookiebot */}
        {/* End Cookiebot */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/Accessibility/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/Accessibility/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/Accessibility/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/Accessibility/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Dersim Museum" />
        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="8rxgufrjnmm08rnfosf5ers9d1q7a5"
        />
        {/* End Facebook domain verification */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MW5VCK"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <symbol id="sprite-icon-facebook" viewBox="0 0 20 20">
              <path d="M11.84 4.06a1.73 1.73 0 0 1 1.34-.41H15v-3A19.44 19.44 0 0 0 12.36.5a4.39 4.39 0 0 0-3.2 1.17A4.36 4.36 0 0 0 8 5v2.45H5v3.38h3v8.67h3.54v-8.67h2.94l.45-3.38h-3.44V5.3a1.91 1.91 0 0 1 .35-1.24Z" />
            </symbol>
            <symbol id="sprite-icon-instagram" viewBox="0 0 17 17">
              <path
                d="M10.503 10.503a2.73 2.73 0 0 0 .83-2.003 2.73 2.73 0 0 0-.83-2.003 2.73 2.73 0 0 0-2.003-.83 2.73 2.73 0 0 0-2.003.83 2.73 2.73 0 0 0-.83 2.003c0 .782.276 1.45.83 2.003a2.73 2.73 0 0 0 2.003.83 2.73 2.73 0 0 0 2.003-.83Zm1.085-5.09c.848.848 1.273 1.877 1.273 3.087 0 1.21-.425 2.24-1.273 3.088-.849.848-1.878 1.273-3.088 1.273-1.21 0-2.24-.425-3.088-1.273C4.564 10.739 4.14 9.71 4.14 8.5c0-1.21.425-2.24 1.273-3.088C6.261 4.564 7.29 4.14 8.5 4.14c1.21 0 2.24.425 3.088 1.273Zm2.17-2.17c.198.2.298.439.298.72 0 .28-.1.52-.299.719a.98.98 0 0 1-.72.298.98.98 0 0 1-.719-.298.98.98 0 0 1-.298-.72c0-.28.1-.52.298-.72a.98.98 0 0 1 .72-.298c.28 0 .52.1.72.299ZM9.34 1.527H8.5l-.847-.005a60.042 60.042 0 0 0-1.167 0c-.266.003-.622.015-1.068.033a8.77 8.77 0 0 0-1.14.11 4.438 4.438 0 0 0-.792.205 2.871 2.871 0 0 0-.974.642 2.88 2.88 0 0 0-.642.974c-.08.214-.149.478-.204.792a8.77 8.77 0 0 0-.111 1.14c-.018.446-.03.802-.033 1.068-.004.265-.004.655 0 1.167l.005.847-.005.847c-.004.512-.004.902 0 1.167.003.266.015.622.033 1.068.018.447.055.827.11 1.14.056.314.124.578.205.792a2.89 2.89 0 0 0 1.616 1.616c.214.08.478.149.792.204a8.77 8.77 0 0 0 1.14.111c.446.018.802.03 1.068.033.265.004.655.004 1.167 0l.847-.005.847.005c.512.004.902.004 1.167 0 .266-.003.622-.015 1.068-.033a8.77 8.77 0 0 0 1.14-.11c.314-.056.578-.124.792-.205a2.89 2.89 0 0 0 1.616-1.616c.08-.214.149-.478.204-.792a8.77 8.77 0 0 0 .111-1.14c.018-.446.03-.802.033-1.068.004-.265.004-.655 0-1.167a294.85 294.85 0 0 1-.005-.847l.005-.847c.004-.512.004-.902 0-1.167a41.003 41.003 0 0 0-.033-1.068 8.77 8.77 0 0 0-.11-1.14 4.438 4.438 0 0 0-.205-.792 2.871 2.871 0 0 0-.642-.974 2.871 2.871 0 0 0-.974-.642 4.438 4.438 0 0 0-.792-.204 8.77 8.77 0 0 0-1.14-.111c-.446-.018-.802-.03-1.068-.033a45.224 45.224 0 0 0-1.173.005Zm7.604 3.465C16.982 5.64 17 6.81 17 8.5s-.018 2.86-.055 3.508c-.074 1.535-.532 2.723-1.373 3.564-.84.841-2.029 1.299-3.564 1.373-.649.037-1.818.055-3.508.055s-2.86-.018-3.508-.055c-1.535-.074-2.723-.532-3.564-1.373-.841-.84-1.299-2.029-1.373-3.564C.018 11.36 0 10.19 0 8.5s.018-2.86.055-3.508C.13 3.457.587 2.269 1.428 1.428 2.268.587 3.457.129 4.992.055 5.64.018 6.81 0 8.5 0s2.86.018 3.508.055c1.535.074 2.723.532 3.564 1.373.841.84 1.299 2.029 1.373 3.564Z"
                fillRule="nonzero"
              />
            </symbol>
            <symbol id="sprite-icon-twitter" viewBox="0 0 20 20">
              <path d="M19.61 4.47a7.87 7.87 0 0 1-2 1.89v.48a9.69 9.69 0 0 1-.46 2.94 10.15 10.15 0 0 1-1.41 2.81A11.33 11.33 0 0 1 13.53 15a10.22 10.22 0 0 1-3.15 1.65 12.37 12.37 0 0 1-3.94.62 11.59 11.59 0 0 1-6.05-1.66 9.13 9.13 0 0 0 1 0 8.1 8.1 0 0 0 4.89-1.56 4.07 4.07 0 0 1-2.29-.73 3.57 3.57 0 0 1-1.39-1.81 4.91 4.91 0 0 0 .74.06 4.06 4.06 0 0 0 1-.13 3.93 3.93 0 0 1-2.27-1.26 3.41 3.41 0 0 1-.89-2.33A4.16 4.16 0 0 0 3 8.31 3.62 3.62 0 0 1 1.67 7a3.42 3.42 0 0 1 .06-3.59 11.14 11.14 0 0 0 3.59 2.7 11.64 11.64 0 0 0 4.53 1.14 4.14 4.14 0 0 1-.09-.84 3.4 3.4 0 0 1 1.15-2.59 4 4 0 0 1 2.79-1.07 3.94 3.94 0 0 1 2.88 1.16 8.21 8.21 0 0 0 2.5-.91 3.62 3.62 0 0 1-1.74 2 8.5 8.5 0 0 0 2.27-.53Z" />
            </symbol>
            <symbol id="sprite-icon-wechat" viewBox="0 0 20 18">
              <path d="M13.895 5.67c-1.856.096-3.47.66-4.78 1.93-1.326 1.285-1.93 2.86-1.764 4.81-.726-.09-1.387-.188-2.051-.244-.23-.02-.502.008-.697.117-.644.365-1.264.776-1.997 1.234.135-.609.222-1.142.377-1.654.113-.377.06-.586-.287-.832C.468 9.458-.47 7.104.232 4.68.882 2.438 2.478 1.077 4.649.369c2.962-.968 6.29.02 8.092 2.37a5.553 5.553 0 0 1 1.154 2.93zm-8.544-.756c.018-.443-.367-.842-.823-.856a.831.831 0 0 0-.865.804.822.822 0 0 0 .814.853.845.845 0 0 0 .874-.8zm4.458-.856c-.458.008-.845.398-.838.844.009.46.389.822.86.816a.821.821 0 0 0 .826-.841.826.826 0 0 0-.848-.819z" />
              <path d="M18.065 17.242c-.588-.261-1.127-.654-1.7-.714-.573-.06-1.174.27-1.772.331-1.822.187-3.455-.32-4.8-1.566-2.561-2.368-2.195-6 .766-7.94 2.633-1.726 6.494-1.15 8.35 1.243 1.62 2.088 1.43 4.86-.548 6.615-.573.507-.779.925-.412 1.595.07.124.077.28.116.436zm-6.69-6.478a.693.693 0 0 0 .696-.662.697.697 0 0 0-.692-.721.703.703 0 0 0-.7.717.698.698 0 0 0 .695.666zm4.312-1.381a.691.691 0 0 0-.686.661.681.681 0 0 0 .677.716.673.673 0 0 0 .685-.656.686.686 0 0 0-.676-.721z" />
            </symbol>
            <symbol id="sprite-icon-weibo" viewBox="0 0 20 17">
              <path
                d="M1.47 11.164c0 2.328 3.032 4.215 6.77 4.215 3.738 0 6.77-1.887 6.77-4.215S11.978 6.95 8.24 6.95c-3.738 0-6.77 1.887-6.77 4.215"
                fill="none"
              />
              <path d="M8.4 15.037c-3.31.329-6.168-1.17-6.383-3.34-.216-2.174 2.295-4.2 5.602-4.527 3.31-.329 6.169 1.17 6.381 3.34.218 2.174-2.292 4.202-5.6 4.527m6.618-7.214c-.281-.085-.475-.14-.328-.51.32-.803.353-1.495.005-1.992-.648-.927-2.425-.877-4.46-.024 0 0-.64.278-.475-.227.312-1.007.265-1.848-.22-2.336-1.104-1.106-4.042.041-6.56 2.56C1.094 7.178 0 9.178 0 10.908c0 3.304 4.24 5.315 8.386 5.315 5.437 0 9.054-3.158 9.054-5.666.003-1.517-1.274-2.378-2.422-2.734m3.611-6.049a5.287 5.287 0 0 0-5.037-1.63.765.765 0 0 0 .32 1.495 3.76 3.76 0 0 1 4.367 4.839.764.764 0 0 0 1.456.471v-.003a5.28 5.28 0 0 0-1.106-5.172" />
              <path d="M16.612 3.594a2.57 2.57 0 0 0-2.452-.791.657.657 0 1 0 .273 1.288 1.26 1.26 0 0 1 1.462 1.62.66.66 0 0 0 1.255.406 2.576 2.576 0 0 0-.538-2.523m-8.03 7.509c-.116.2-.372.293-.571.21-.199-.08-.26-.303-.146-.496.116-.194.361-.287.557-.21.199.072.27.295.16.496m-1.056 1.352c-.32.51-1.007.734-1.523.5-.508-.232-.66-.825-.34-1.325.318-.496.98-.717 1.493-.502.518.224.684.811.37 1.327m1.202-3.614c-1.575-.41-3.354.376-4.038 1.763-.698 1.415-.022 2.988 1.567 3.5 1.65.533 3.591-.283 4.267-1.809.668-1.495-.165-3.032-1.796-3.454" />
            </symbol>
            <symbol id="sprite-icon-x" viewBox="0 0 23 21">
              <path
                fill="currentColor"
                d="m1.04.5 8.25 11.031-8.303 8.97h1.869l7.268-7.853 5.873 7.852h6.359L13.64 8.848 21.37.5h-1.868l-6.694 7.232L7.398.5H1.039Zm2.747 1.376h2.921l12.9 17.248h-2.922L3.787 1.876Z"
              />
            </symbol>
            <symbol id="sprite-icon-youtube" viewBox="0 0 20 14">
              <path
                d="M7.935 9.578 13.337 6.8 7.935 3.989v5.589ZM10 0c1.25 0 2.457.017 3.621.05 1.165.033 2.019.069 2.562.106l.814.044.19.017c.12.01.205.022.257.033.052.011.14.028.262.05.123.022.229.052.318.089.09.037.194.085.313.144.119.06.234.132.346.217a2.642 2.642 0 0 1 .496.5c.07.093.179.31.324.65.145.34.243.715.296 1.122.06.474.106.98.14 1.517.033.537.053.957.06 1.261v1.956a23.422 23.422 0 0 1-.2 3.222 4.417 4.417 0 0 1-.28 1.105c-.133.33-.252.558-.357.684l-.156.189c-.104.11-.212.209-.323.294a1.882 1.882 0 0 1-.346.211 8.016 8.016 0 0 1-.313.139 1.56 1.56 0 0 1-.318.089l-.268.05a6.852 6.852 0 0 1-.44.05c-1.868.14-4.2.211-6.998.211a211.23 211.23 0 0 1-4.012-.072 87.372 87.372 0 0 1-2.238-.084l-.546-.044-.402-.044a5.32 5.32 0 0 1-.608-.112 3.438 3.438 0 0 1-.57-.233 2.125 2.125 0 0 1-.804-.661c-.07-.093-.178-.31-.323-.65a4.216 4.216 0 0 1-.296-1.122c-.06-.474-.106-.98-.14-1.517A35.533 35.533 0 0 1 .002 8.2V6.244A23.384 23.384 0 0 1 .2 3.022c.053-.407.146-.776.28-1.105.133-.33.252-.558.357-.684l.156-.189c.104-.11.212-.209.323-.294.112-.085.227-.157.346-.217A5.11 5.11 0 0 1 1.976.39 1.56 1.56 0 0 1 2.294.3a9.82 9.82 0 0 0 .262-.05c.052-.011.138-.022.257-.033L3.003.2C4.87.067 7.203 0 10 0Z"
                fillRule="nonzero"
              />
            </symbol>
            <symbol id="sprite-icon-accessible" viewBox="0 0 18 18">
              <path d="M18 0v18H0V0h18Zm-7.885 3H7.888L3.3 15h2.16l1.122-3.176h4.772L12.476 15h2.243L10.115 3ZM9.043 5.032l1.805 5.13H7.171l1.822-5.13h.05Z" />
            </symbol>
            <symbol id="sprite-icon-alert" viewBox="0 0 27 27">
              <defs>
                <path id="alert-path-1" d="M0 .91h26.09V27H0z" />
              </defs>
              <g fill="none" fillRule="evenodd">
                <mask id="alert-mask-2" fill="#fff">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#alert-path-1"
                  />
                </mask>
                <path
                  d="M26.09 13.955C26.09 21.16 20.25 27 13.046 27 5.84 27 0 21.16 0 13.955S5.84.91 13.045.91 26.09 6.75 26.09 13.955"
                  fill="#010202"
                  mask="url(#alert-mask-2)"
                />
                <path
                  d="M12.08 8h2v3.296l-.528 4.944h-.945l-.527-4.944V8ZM12 19.424h2.144v-2H12v2Z"
                  id="Fill-4"
                  fill="#FEFEFE"
                  mask="url(#alert-mask-2)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-arrow" viewBox="0 0 9 20">
              <path d="M4.32 19.286a.353.353 0 0 0 .256-.112l3.907-4.286a.358.358 0 0 0 .055-.39.324.324 0 0 0-.323-.212h-2.5V.357a.348.348 0 0 0-.1-.257.348.348 0 0 0-.257-.1H3.215a.348.348 0 0 0-.257.1.348.348 0 0 0-.1.257v13.929h-2.5c-.15 0-.257.07-.324.212a.358.358 0 0 0 .056.39l3.962 4.286a.365.365 0 0 0 .268.112z" />
            </symbol>
            <symbol id="sprite-icon-audio-description" viewBox="0 0 36 14">
              <g fillRule="evenodd">
                <g id="audio-description" fillRule="nonzero">
                  <path d="M18.645 3.495a3.475 3.475 0 0 1 3.478 3.479 3.481 3.481 0 0 1-3.478 3.493h-.912V3.495h.912Zm.354 10.015c3.61 0 6.547-2.926 6.547-6.536 0-3.62-2.907-6.547-6.517-6.547h-4.045V13.52h4.015v-.01ZM13.632.427V13.52h-2.87v-1.73H5.966l-1.11 1.731h-4.2L10.053.427h3.58Zm-2.85 3.944L7.769 9.06h3.013V4.37ZM33.211.417h-1.61a9.711 9.711 0 0 1 2.866 6.855c0 2.284-.82 4.471-2.273 6.198h1.539a10.545 10.545 0 0 0 2.02-6.198c0-2.521-.922-4.956-2.542-6.855" />
                  <path d="M29.92.417h-1.615a9.695 9.695 0 0 1 2.87 6.855 9.628 9.628 0 0 1-2.278 6.198h1.535a10.48 10.48 0 0 0 2.025-6.198c0-2.521-.917-4.956-2.537-6.855" />
                  <path d="M26.624.417h-1.61a9.702 9.702 0 0 1 2.856 6.855 9.67 9.67 0 0 1-2.264 6.198h1.535a10.47 10.47 0 0 0 2.015-6.198c0-2.521-.912-4.956-2.532-6.855" />
                </g>
              </g>
            </symbol>
            <symbol id="sprite-icon-calendar" viewBox="0 0 18 17">
              <g fillRule="evenodd">
                <path
                  d="M16.363 6.709H1.636V3.927a.82.82 0 0 1 .818-.818h1.964v.655a.818.818 0 0 0 1.636 0v-.655h5.891v.655a.818.818 0 0 0 1.637 0v-.655h1.964c.45 0 .817.367.817.818v2.782Zm-2.945 5.973a1.636 1.636 0 1 1 0-3.273 1.636 1.636 0 0 1 0 3.273Zm-4.418 0a1.637 1.637 0 1 1 0-3.274 1.637 1.637 0 0 1 0 3.274Zm-4.418 0a1.636 1.636 0 1 1 0-3.273 1.636 1.636 0 0 1 0 3.273Zm10.964-11.21h-1.964V.819a.818.818 0 1 0-1.637 0v.655h-5.89V.818a.818.818 0 1 0-1.637 0v.655H2.454A2.456 2.456 0 0 0 0 3.927v9.819C0 15.099 1.1 16.2 2.454 16.2h13.092A2.457 2.457 0 0 0 18 13.746v-9.82a2.457 2.457 0 0 0-2.454-2.453Z"
                  id="path-1"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-camera" viewBox="0 0 14 10">
              <path
                d="M13.7.29a.51.51 0 0 0-.2 0 .45.45 0 0 0-.35.15L10 3.54V2.25A2.17 2.17 0 0 0 9.34.66 2.17 2.17 0 0 0 7.75 0h-5.5A2.17 2.17 0 0 0 .66.66 2.17 2.17 0 0 0 0 2.25v5.5a2.17 2.17 0 0 0 .66 1.59 2.17 2.17 0 0 0 1.59.66h5.5A2.25 2.25 0 0 0 10 7.75v-1.3l3.15 3.15a.45.45 0 0 0 .35.15.51.51 0 0 0 .2 0 .47.47 0 0 0 .3-.46V.75a.47.47 0 0 0-.3-.46Z"
                data-name="Layer 1"
              />
            </symbol>
            <symbol id="sprite-icon-chevron-large" viewBox="0 0 50 50">
              <g strokeWidth={0}>
                <circle cx={25} cy={25} r={25} />
                <path strokeWidth={2} d="m20 15 10 10-10 10" />
              </g>
            </symbol>
            <symbol id="sprite-icon-chevron" viewBox="0 0 18 18">
              <g strokeWidth={0}>
                <circle cx={9} cy={9} r={9} />
                <path strokeWidth={2} d="m6.923 5.538 4 3.808-4 3.808" />
              </g>
            </symbol>
            <symbol id="sprite-icon-clock" viewBox="0 0 18 18">
              <path
                id="clock"
                d="M9 0a9 9 0 1 1-9 9 9 9 0 0 1 9-9Zm0 15.8A6.8 6.8 0 0 0 9 2.2a6.8 6.8 0 0 0 0 13.6Zm3.3-6h-4V3.5h1.5v4.7h2.5Z"
                style={{ "fill-rule": "evenodd" }}
              />
            </symbol>
            <symbol id="sprite-icon-copyright" viewBox="0 0 17 17">
              <path d="M8.096 16.456c1.07 0 2.094-.198 3.069-.594a7.956 7.956 0 0 0 2.574-1.672 7.892 7.892 0 0 0 1.76-2.596c.433-1.012.649-2.134.649-3.366 0-1.232-.216-2.354-.649-3.366a7.892 7.892 0 0 0-1.76-2.596A7.956 7.956 0 0 0 11.165.594 8.081 8.081 0 0 0 8.096 0a8.22 8.22 0 0 0-3.102.594 7.927 7.927 0 0 0-2.585 1.672 7.892 7.892 0 0 0-1.76 2.596C.216 5.874 0 6.996 0 8.228c0 1.173.202 2.262.605 3.267a7.955 7.955 0 0 0 1.672 2.607 7.661 7.661 0 0 0 2.552 1.727c.99.418 2.079.627 3.267.627Zm0-1.43c-.983 0-1.863-.18-2.64-.539a6.023 6.023 0 0 1-1.991-1.463A6.463 6.463 0 0 1 2.2 10.868a7.792 7.792 0 0 1-.44-2.64c0-.997.161-1.914.484-2.75a6.465 6.465 0 0 1 1.342-2.156 6.023 6.023 0 0 1 2.013-1.397 6.271 6.271 0 0 1 2.497-.495c.88 0 1.701.165 2.464.495.763.33 1.43.796 2.002 1.397a6.465 6.465 0 0 1 1.342 2.156c.323.836.484 1.753.484 2.75 0 1.012-.161 1.932-.484 2.761a6.489 6.489 0 0 1-1.342 2.145 6.053 6.053 0 0 1-2.002 1.397 6.137 6.137 0 0 1-2.464.495ZM8.36 13.2a4.07 4.07 0 0 0 1.375-.231 3.564 3.564 0 0 0 1.155-.671 4.162 4.162 0 0 0 1.364-2.486h-1.518a2.157 2.157 0 0 1-.748 1.408c-.425.367-.968.55-1.628.55-.44 0-.84-.095-1.199-.286a2.917 2.917 0 0 1-.924-.77 3.402 3.402 0 0 1-.583-1.122 4.578 4.578 0 0 1-.198-1.364c0-.455.062-.884.187-1.287a3.03 3.03 0 0 1 .55-1.045c.242-.293.539-.528.891-.704.352-.176.763-.264 1.232-.264.63 0 1.162.176 1.595.528.433.352.708.807.825 1.364h1.496c-.147-1.085-.583-1.91-1.309-2.475-.726-.565-1.595-.847-2.607-.847-.719 0-1.364.125-1.936.374a4.385 4.385 0 0 0-1.452 1.001 4.3 4.3 0 0 0-.913 1.496 5.352 5.352 0 0 0-.319 1.859c0 .704.11 1.36.33 1.969a4.65 4.65 0 0 0 .946 1.584c.41.447.902.796 1.474 1.045.572.25 1.21.374 1.914.374Z" />
            </symbol>
            <symbol id="sprite-icon-data" viewBox="0 0 20 20">
              <path d="M0 18h20v2H0zM0 6h20v2H0zm0 6h12v2H0zM0 0h12v2H0z" />
            </symbol>
            <symbol id="sprite-icon-download" viewBox="0 0 16 18">
              <g fillRule="evenodd">
                <g id="Document-download" fillRule="nonzero">
                  <path d="m9.47 9.39-.78.77V5.19H7.31v4.97l-.78-.77-.98.98L8 12.81l2.45-2.44z" />
                  <path d="M15.41 3.94 11.67.2a.68.68 0 0 0-.49-.2H1.08a.69.69 0 0 0-.7.69v16.62a.69.69 0 0 0 .7.69h13.84a.69.69 0 0 0 .7-.69V4.43a.71.71 0 0 0-.21-.49Zm-3.53-1.58 1.37 1.38h-1.37V2.36ZM1.77 16.62V1.38h8.72v3.05c0 .381.309.69.69.69h3.05v11.5H1.77Z" />
                </g>
              </g>
            </symbol>
            <symbol id="sprite-icon-grid" viewBox="0 0 19 19">
              <path
                d="M0 5h5V.001H0zm7 0h4.999V.001H7zm7 0h4.999V.001H14zM0 12h5V7.001H0zm7 0h5V7H7zm7 0h4.999V7.001H14zM0 19h5v-5H0zm7 0h4.999v-5H7zm7 0h4.999v-5H14z"
                fillRule="evenodd"
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-headphones" viewBox="0 0 40 40">
              <path
                d="M14.66 35.605H8.014a3.537 3.537 0 0 1-2.595-1.078 3.537 3.537 0 0 1-1.078-2.595V20c0-2.167.41-4.2 1.231-6.102a15.83 15.83 0 0 1 3.354-4.973 15.94 15.94 0 0 1 4.973-3.362C15.8 4.738 17.833 4.325 20 4.325s4.2.413 6.102 1.238a15.94 15.94 0 0 1 4.973 3.362 15.94 15.94 0 0 1 3.362 4.973c.825 1.901 1.238 3.935 1.238 6.102v11.932c0 1.012-.36 1.877-1.082 2.595a3.56 3.56 0 0 1-2.606 1.078h-6.648V21.729h6.648V20c0-3.333-1.165-6.164-3.493-8.493-2.329-2.33-5.16-3.494-8.491-3.494-3.332 0-6.163 1.165-8.494 3.494-2.33 2.33-3.496 5.16-3.496 8.493v1.729h6.648v13.876Z"
                fill="currentColor"
              />
            </symbol>
            <symbol id="sprite-icon-image" viewBox="0 0 22 22">
              <path
                d="M0 0v22h22V0H0zm20 2v15.7l-5.5-8.2L2 19V2h18zm-.9 18H4l10-7.6 5.1 7.6zM5.5 7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S7.8 8.5 7 8.5 5.5 7.8 5.5 7z"
                clipRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-info" viewBox="0 0 8 21">
              <g transform="translate(-21 -15)" fillRule="nonzero">
                <path
                  d="M25.497 16.274c0-.351.125-.651.374-.9.249-.25.549-.374.9-.374.352 0 .652.125.901.374.25.249.374.549.374.9 0 .352-.125.655-.374.909s-.549.38-.9.38c-.362 0-.665-.129-.909-.388a1.273 1.273 0 0 1-.366-.9Zm1.084 15.66h.703a9.144 9.144 0 0 1-1.794 2.52c-.738.732-1.448 1.098-2.132 1.098-.459 0-.861-.164-1.208-.491-.347-.327-.52-.808-.52-1.443 0-.517.273-1.509.82-2.973l1.685-4.468c.39-1.045.586-1.68.586-1.905 0-.195-.047-.341-.14-.439-.092-.098-.231-.146-.417-.146-.38 0-.832.295-1.355.886-.522.59-.891 1.125-1.106 1.604H21c.537-1.065 1.15-1.905 1.838-2.52.689-.615 1.33-.923 1.927-.923.459 0 .835.157 1.128.47.293.312.439.722.439 1.23 0 .517-.259 1.464-.776 2.841l-1.407 3.809c-.517 1.377-.776 2.241-.776 2.593 0 .283.056.495.169.637.112.142.275.212.49.212.723 0 1.572-.864 2.55-2.592Z"
                  id="i"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-list" viewBox="0 0 19 19">
              <path d="M0 0h19v2H0zm0 13h19v2H0zm0 4h13v2H0zM0 4h13v2H0z" />
            </symbol>
            <symbol fill="none" id="sprite-icon-magazine" viewBox="0 0 69 68">
              <path
                d="M67.88 25.64c-.43-.69-1.19-1.1-2.03-1.1-.08 0-.17 0-.25.01-1.33.13-1.87 1.22-2.05 1.59l-5.69 11.64c-4.13 8.44-8.25 16.87-12.37 25.32 0 .01-.01.02-.02.03h-.06c-4.74-.12-9.17-.61-13.45-1.47 2.63-.07 5.31-.31 7.97-.74 1.12-.18 1.87-.75 2.38-1.78 6.2-12.69 12.4-25.38 18.61-38.06l4.23-8.64c.12-.24.24-.48.33-.74a2.403 2.403 0 0 0-2.27-3.2c-.79 0-1.52.39-1.97 1.04-.12.17-.22.36-.34.62l-5.91 12.07c-5.54 11.32-11.07 22.63-16.63 34.01-.55.06-1.1.13-1.64.2-.71.09-1.42.18-2.14.24-1.44.12-2.89.18-4.32.18-1.3 0-5.97-.62-9.59-1.13-2.53-.36-.34-.4 3.42-.82 3.12-.35 6.14-1.06 9.01-2.36.56-.26.94-.63 1.21-1.19 5.38-11.02 10.77-22.03 16.16-33.04 2.62-5.36 5.25-10.72 7.87-16.07.37-.75.29-1.39-.22-1.86-.52-.49-1.17-.49-1.92-.1-.96.5-1.93 1-2.93 1.4-5.24 2.08-10.73 3.06-16.3 3.69-4.28.48-8.57.69-12.87.67-.9 0-1.45.35-1.85 1.16A24800.2 24800.2 0 0 0 .66 50.37c-.15.31-.2.76-.1 1.09.11.35.4.68.69.91 2.62 2.11 5.47 3.88 8.43 5.46 4.45 2.37 7.53 4.37 14.42 6.92 6.89 2.54 14.72 3.19 22.49 3.25h.03c1.23 0 2.1-.55 2.65-1.67 4.37-8.96 8.75-17.91 13.14-26.87l3.95-8.07c.55-1.11 1.09-2.22 1.62-3.33.38-.8.34-1.71-.1-2.42ZM23.76 20.4l3.23-6.62a1.7 1.7 0 0 1 1.41-.95l14.23-.92c1.26-.08 2.17 1.2 1.67 2.36l-3.18 7.38a1.68 1.68 0 0 1-1.54 1.02l-14.28.15c-1.26.01-2.09-1.3-1.54-2.44v.02Z"
                fill="#231F20"
              />
            </symbol>
            <symbol id="sprite-icon-maximise" viewBox="0 0 16 16">
              <path
                d="M10 1h4.5v4.5m-5.25.75 4.575-4.575M5.5 14.5H1V10m5.25-.75-4.575 4.575"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              />
            </symbol>
            <symbol id="sprite-icon-museum" viewBox="0 0 18 19">
              <path
                d="M17.182 16.373H.819a.819.819 0 1 0 0 1.636h16.363a.818.818 0 1 0 0-1.636m-4.419-2.945h1.309V5.41h-1.309v8.018Zm-2.945 0h1.309V5.41H9.818v8.018ZM7.51 2.837a1.49 1.49 0 1 1 2.98-.002 1.49 1.49 0 0 1-2.98.002Zm-.637 10.59h1.309V5.41H6.873v8.018Zm-1.637 0H3.927l.001-8.017h1.308v8.018Zm11.946 0h-1.473V5.41h1.473a.818.818 0 0 0 .451-1.501L9.451.135a.82.82 0 0 0-.902 0L.367 3.909a.818.818 0 0 0 .451 1.5h1.473v8.019H.818a.818.818 0 0 0 0 1.637h16.364a.819.819 0 0 0 0-1.637Z"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-osd-minus" viewBox="0 0 12 2">
              <path d="M12 0v2H0V0h12z" />
            </symbol>
            <symbol id="sprite-icon-osd-plus" viewBox="0 0 12 12">
              <path d="M12 7H7v5H5V7H0V5h5V0h2v5h5v2z" />
            </symbol>
            <symbol id="sprite-icon-person" viewBox="0 0 15 18">
              <g fillRule="evenodd">
                <path
                  d="M10.185 4.797a4.74 4.74 0 0 1-4.741 4.74 4.741 4.741 0 1 1 4.741-4.741"
                  transform="translate(2 -.055)"
                />
                <path
                  d="M14.887 18.945H0a7.444 7.444 0 1 1 14.887 0"
                  transform="translate(0 -1)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-pin" viewBox="0 0 15 18">
              <path
                d="M7.087 10.63a3.543 3.543 0 1 1-.001-7.085 3.543 3.543 0 0 1 0 7.085m0-10.63A7.087 7.087 0 0 0 0 7.087C0 11.001 7.087 18 7.087 18s7.087-6.999 7.087-10.913A7.087 7.087 0 0 0 7.087 0"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-plus" viewBox="0 0 26 26">
              <g strokeWidth={0} fillRule="evenodd">
                <circle fillRule="nonzero" cx={13} cy={13} r={13} />
                <path
                  d="M6 0v12M0 6h12"
                  transform="translate(7 7)"
                  strokeWidth={2}
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-print" viewBox="0 0 19 18">
              <path d="M14.643 17.143c.297 0 .55-.104.759-.313.208-.208.312-.461.312-.759v-1.785h2.5c.097 0 .18-.036.251-.106a.343.343 0 0 0 .106-.251V9.286c0-.588-.21-1.092-.63-1.513-.42-.42-.925-.63-1.512-.63h-.715V4.286c0-.298-.074-.625-.223-.982-.149-.358-.327-.64-.536-.849L13.26.76c-.21-.21-.492-.388-.85-.537C12.054.074 11.726 0 11.429 0h-7.5c-.298 0-.551.104-.76.313a1.033 1.033 0 0 0-.312.758v6.072h-.714c-.588 0-1.092.21-1.512.63C.21 8.193 0 8.698 0 9.286v4.643c0 .096.035.18.106.25.07.071.154.107.251.107h2.5v1.785c0 .298.104.551.313.76.208.208.461.312.759.312h10.714Zm-.357-8.572h-10V1.43h7.143v1.785c0 .298.104.55.312.76.208.208.461.312.759.312h1.786V8.57ZM16.429 10a.686.686 0 0 1-.503-.212.686.686 0 0 1-.212-.502.69.69 0 0 1 .212-.503.686.686 0 0 1 .503-.212.69.69 0 0 1 .502.212.686.686 0 0 1 .212.503c0 .193-.07.36-.212.502a.686.686 0 0 1-.502.212Zm-2.143 5.714h-10v-2.857h10v2.857Z" />
            </symbol>
            <symbol id="sprite-icon-search" viewBox="0 0 17 17">
              <path
                d="M3.409 10.208a4.775 4.775 0 0 1-1.41-3.4c0-1.286.5-2.494 1.41-3.403A4.8 4.8 0 0 1 6.81 2a4.8 4.8 0 0 1 3.402 1.406 4.817 4.817 0 0 1 0 6.803 4.818 4.818 0 0 1-6.804 0m13.299 5.081-4.432-4.432c1.977-2.664 1.765-6.45-.65-8.866a6.818 6.818 0 0 0-9.631 0A6.768 6.768 0 0 0 0 6.807c0 1.82.709 3.53 1.995 4.815a6.79 6.79 0 0 0 4.816 1.992 6.793 6.793 0 0 0 4.05-1.343l4.433 4.432a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414"
                fillRule="evenodd"
              />
            </symbol>
            <symbol id="sprite-icon-share" viewBox="0 0 19 19">
              <path d="M13.36 18.214c.892 0 1.647-.308 2.265-.926l1.64-1.63c.633-.617.95-1.372.95-2.265s-.313-1.652-.938-2.277l-2.322-2.321a3.1 3.1 0 0 0-2.276-.938c-.908 0-1.682.328-2.322.982l-.982-.982a3.14 3.14 0 0 0 .982-2.332c0-.893-.309-1.649-.926-2.266L7.13.949C6.515.316 5.756 0 4.856 0 3.963 0 3.208.309 2.59.926L.95 2.556C.316 3.173 0 3.929 0 4.82a3.1 3.1 0 0 0 .938 2.277l2.32 2.322c.626.625 1.385.937 2.278.937.907 0 1.681-.327 2.321-.982l.982.982a3.14 3.14 0 0 0-.982 2.333c0 .893.309 1.648.926 2.265l2.3 2.31c.617.633 1.376.95 2.276.95ZM5.535 8.204c-.305 0-.558-.101-.76-.302L2.457 5.58a1.033 1.033 0 0 1-.313-.759c0-.29.104-.539.312-.747l1.641-1.63c.216-.2.469-.301.759-.301.298 0 .55.104.759.312l2.299 2.31c.208.209.312.462.312.76 0 .312-.122.584-.368.814a30.68 30.68 0 0 1-.206-.212 6.902 6.902 0 0 0-.24-.24A2.657 2.657 0 0 0 7.2 5.72a.898.898 0 0 0-.592-.184c-.297 0-.55.104-.759.312a1.033 1.033 0 0 0-.312.76.898.898 0 0 0 .184.592c.07.095.126.166.167.21.041.045.121.125.24.24l.212.207c-.223.23-.49.346-.803.346Zm7.823 7.856c-.305 0-.558-.1-.759-.301l-2.299-2.31a1.033 1.033 0 0 1-.312-.76c0-.312.123-.583.368-.814l.207.212c.115.12.195.2.24.24.044.04.115.097.212.167a.898.898 0 0 0 .591.185c.298 0 .55-.105.76-.313.207-.208.312-.461.312-.759 0-.111-.013-.214-.04-.307a.898.898 0 0 0-.145-.284 2.657 2.657 0 0 0-.167-.212 6.903 6.903 0 0 0-.24-.24 30.68 30.68 0 0 1-.212-.207c.223-.238.491-.357.804-.357.297 0 .55.104.758.313l2.322 2.32c.208.21.312.462.312.76 0 .29-.104.54-.312.748l-1.64 1.63a1.08 1.08 0 0 1-.76.29Z" />
            </symbol>
            <symbol id="sprite-icon-shop" viewBox="0 0 18 18">
              <g fillRule="evenodd">
                <path
                  d="M6.792 15.83a1.274 1.274 0 1 0 .002 2.549 1.274 1.274 0 0 0-.002-2.548m6.116-.001a1.274 1.274 0 1 0 .002 2.549 1.274 1.274 0 0 0-.002-2.548"
                  transform="translate(0 -1)"
                />
                <path
                  d="M15.35 8.408a.799.799 0 0 1-.787.66l-.008.001-.01-.002-9.528.178-.558-4.613 11.719.025-.827 3.751Zm.9-5.579H4.242l-.07-.567c-.001-.008-.006-.014-.007-.02A1.745 1.745 0 0 0 2.429.621H.9a.9.9 0 1 0 0 1.8h1.488c0 .02-.007.037-.004.056l1.23 10.176c.002.008.007.014.007.022a1.748 1.748 0 0 0 1.736 1.62h9.175a.9.9 0 0 0 0-1.8H5.399v-.003c-.001-.019.007-.036.004-.055l-.168-1.396 9.345-.175.01-.002c1.252-.014 2.315-.91 2.526-2.106l.863-3.908.02-.273c0-.964-.784-1.749-1.75-1.749Z"
                  transform="translate(0 -.62)"
                />
              </g>
            </symbol>
            <symbol id="sprite-icon-tag" viewBox="0 0 16 16">
              <path
                d="M5.836 5.826A1.907 1.907 0 1 1 3.14 3.128a1.907 1.907 0 0 1 2.696 2.698m9.813 3.138L7.046.351a1.17 1.17 0 0 0-.86-.35C5.849 0 .26.253.26.253S0 5.837 0 6.176c0 .338.118.625.353.86l8.622 8.611c.234.235.52.352.859.352.338 0 .625-.117.859-.352l4.957-4.966a1.17 1.17 0 0 0 .35-.859c0-.339-.116-.625-.35-.859"
                fillRule="evenodd"
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-tea" viewBox="0 0 70 69">
              <g clipPath="url(#clip0_1208_5484)" fill="#231F20">
                <path d="M.088 63.53c.03.64.42 1.22 1.01 1.47 4.83 2.02 16.11 3.45 28.93 3.45s24.11-1.44 28.94-3.45c.59-.25.98-.83 1.01-1.47l.09-1.74c.05-.94-.71-1.73-1.65-1.73H1.648c-.95 0-1.7.79-1.65 1.74l.09 1.74v-.01Zm30.234-48.14c-.94-.05-1.77-.41-2.41-1.06-.78-.79-1.17-1.75-1.22-2.94-.05-1.41.37-2.79 1.25-4.1.45-.66.9-1.32 1.36-1.98.43-.61.51-1.17.26-1.83-.16-.44-.31-.88-.46-1.32l-.18-.52c-.15-.45-.05-.77.07-.97.29-.48.88-.58 1.17-.62.22-.04.45-.06.67-.06.64 0 1.25.16 1.76.46.99.58 1.59 1.4 1.8 2.44.06.33.1.65.13.98l.05.4c.18 1.51-.52 2.78-1.15 3.71-.27.4-.55.8-.83 1.2l-.54.78c-.35.5-.45 1.06-.34 1.81.06.42.21.82.45 1.21.46.77.23 1.35.1 1.56-.3.54-.97.85-1.8.85h-.16.02Zm11.038-.3c-1.43-.01-2.48-.29-3.28-1.62-.39-.65-.6-1.4-.62-2.17 0-1.07.35-2.04 1.07-3.05l.35-.49c.25-.34.49-.68.73-1.02.33-.47.39-.93.19-1.49-.13-.38-.25-.77-.36-1.16l-.04-.14c-.14-.51 0-1.16.85-1.42.29-.09.59-.13.9-.13.9 0 1.8.37 2.39 1 .54.57.71 1.23.82 1.8.28 1.42-.09 2.8-1.17 4.35-.23.32-.46.64-.72.95-.3.35-.38.72-.27 1.17.14.57.32 1.1.53 1.57.17.38.13.83-.1 1.2-.27.41-.74.65-1.26.65h-.01Zm-20.48 0c-1.41-.01-2.5-.29-3.27-1.6-.89-1.53-.84-3.17.13-4.75.19-.31.41-.61.63-.91l.3-.41c.08-.12.47-.69.47-.69.32-.47.37-.92.18-1.46-.15-.43-.27-.86-.4-1.29-.1-.34-.07-.64.08-.9.21-.37.56-.5.85-.58.26-.07.54-.11.82-.11 1.03 0 2.02.48 2.6 1.25.45.61.69 1.62.69 2.29.01 1.57-.67 2.76-1.26 3.62-.22.31-.45.62-.7.92-.32.37-.4.76-.28 1.25.15.6.32 1.07.51 1.5.18.39.15.84-.09 1.21-.26.41-.74.66-1.26.66Zm39.349 8.39c-1.5 0-3.57.33-4.77.87v-3.08a4.242 4.242 0 0 0-4.24-4.21h-30.22c-.2 0-.36.16-.36.36v7.97c0 .2.16.36.36.36h1.38c1.71 0 3.1 1.39 3.1 3.1v6.52c0 1.71-1.39 3.1-3.1 3.1h-6.52c-1.71 0-3.1-1.39-3.1-3.1v-6.52c0-1.71 1.39-3.1 3.1-3.1h1.38c.2 0 .36-.16.36-.36v-7.97c0-.2-.16-.36-.36-.36h-7.63c-2.33 0-4.23 1.89-4.23 4.23v14.08c0 7.77 3.59 14.8 9.19 19.29 1.07.86 2.42 1.29 3.79 1.29h24.08c1.36 0 2.7-.42 3.76-1.27 2.28-1.83 4.29-4.17 5.73-6.8a25.17 25.17 0 0 0 2.11-4.7h6.17c5.57 0 9.77-4.66 9.77-9.91s-4.21-9.77-9.77-9.77l.02-.02Zm-.14 14.27h-4.22v-4.36c0-2.41 1.97-4.5 4.22-4.5 2.55 0 4.35 2.09 4.35 4.5 0 2.25-1.8 4.36-4.35 4.36Z" />
              </g>
              <defs>
                <clipPath id="clip0_1208_5484">
                  <path fill="#fff" d="M0 0h70v68.46H0z" />
                </clipPath>
              </defs>
            </symbol>
            <symbol
              fill="none"
              id="sprite-icon-ten-percent-tag"
              viewBox="0 0 71 71"
            >
              <g clipPath="url(#clip0_1208_5496)">
                <path
                  d="M30.98 70.14c-1.83 0-3.65-.69-5.04-2.08L2.6 44.78a7.096 7.096 0 0 1-2.1-5.05c0-1.91.74-3.7 2.09-5.05L34.35 2.92A7.104 7.104 0 0 1 39.19.83l24-.68c1.98-.06 3.85.68 5.25 2.09 1.4 1.4 2.14 3.27 2.09 5.25l-.69 24a7.06 7.06 0 0 1-2.09 4.84L36.02 68.06a7.125 7.125 0 0 1-5.05 2.09l.01-.01Z"
                  fill="#231F20"
                />
                <path
                  d="M22.33 44.98a.4.4 0 0 0-.29-.12.4.4 0 0 0-.29.12l-1.97 1.96c-.46.46-1.21.46-1.66 0 0 0-.55-.55-.85-.86-.3-.31-.18-.73.02-.96.2-.23.56-.63.78-.97.31-.46.54-.94.66-1.43s.14-.99.05-1.5c-.06-.35-.19-.7-.38-1.05-.21-.27-.2-.8.03-1.06s.97-.97.97-.97a1.17 1.17 0 0 1 1.66 0l10.87 10.93c.46.46.46 1.21 0 1.67l-1.11 1.1c-.46.46-1.21.46-1.67 0l-6.83-6.87.01.01Zm15.03-1.44c-.18 0-.37 0-.56-.03-.92-.09-1.94-.43-3.02-1.03-1.08-.59-2.24-1.52-3.48-2.76-1.2-1.2-2.1-2.36-2.68-3.42-.58-1.07-.92-2.09-1-3.01-.08-.93.05-1.8.4-2.58.34-.77.84-1.48 1.46-2.1.64-.63 1.35-1.13 2.13-1.47a5.06 5.06 0 0 1 2.06-.42c.17 0 .35 0 .53.02.93.08 1.95.42 3.02 1.01 1.06.58 2.21 1.49 3.41 2.69 1.23 1.24 2.16 2.41 2.75 3.49.59 1.09.93 2.11 1.01 3.04.08.94-.06 1.81-.41 2.59-.34.77-.84 1.49-1.48 2.12-.62.62-1.33 1.11-2.11 1.45-.62.27-1.31.41-2.03.41Zm-4.71-12.6c-.14 0-.29.01-.43.04-.31.06-.59.23-.86.5s-.44.55-.5.85c-.06.31-.05.61.03.93.08.32.22.65.41.98.19.34.41.66.65.95.24.3.49.59.74.84.25.26.47.49.65.67.31.31.69.67 1.13 1.07.44.4.91.75 1.41 1.04.49.28.98.45 1.47.5h.15c.41 0 .79-.18 1.15-.53.41-.41.6-.85.56-1.32-.04-.5-.2-.99-.48-1.48-.29-.5-.64-.97-1.04-1.42-.41-.46-.77-.84-1.07-1.14-.18-.18-.4-.4-.67-.66-.26-.25-.54-.5-.85-.73-.3-.24-.63-.46-.95-.66-.32-.19-.65-.33-.97-.41-.17-.04-.35-.06-.52-.06l-.01.04Zm13.59-20.28.15-.15c.56-.55 1.5-.31 1.72.45l5.24 18.46c.1.36 0 .75-.26 1.01l-.18.18c-.56.55-1.51.31-1.72-.45l-5.21-18.49c-.1-.36 0-.75.27-1.01h-.01Zm-3.6 16.15c-.14 0-.28 0-.42-.03a3.83 3.83 0 0 1-1.52-.57c-.49-.3-.96-.68-1.42-1.14-.45-.46-.83-.95-1.12-1.46-.29-.52-.47-1.06-.54-1.6-.07-.55 0-1.1.18-1.64.19-.54.54-1.07 1.04-1.56.53-.53 1.07-.88 1.61-1.05.35-.11.7-.17 1.05-.17.19 0 .38.02.57.05.53.09 1.06.3 1.57.63.5.32.98.72 1.43 1.17.45.46.82.94 1.1 1.44.28.5.44 1.02.49 1.54.05.52-.03 1.05-.24 1.58-.21.52-.56 1.04-1.06 1.53-.52.52-1.05.87-1.57 1.07-.39.14-.77.21-1.16.21h.01Zm-1.42-6.25c-.16 0-.31.07-.45.21-.17.17-.26.34-.26.52 0 .2.04.39.13.58.09.2.22.39.38.57.16.19.32.35.45.49.13.13.28.27.45.43.16.15.33.26.51.35.16.08.32.12.49.12h.04c.18 0 .34-.09.51-.27.16-.16.25-.33.26-.5.01-.19-.02-.36-.1-.54-.08-.18-.2-.36-.33-.52a6.31 6.31 0 0 0-.41-.45c-.12-.12-.27-.26-.46-.42-.18-.16-.37-.29-.57-.4-.2-.11-.39-.16-.58-.18h-.04l-.02.01Zm16.41 3c-.16 0-.32-.01-.47-.04-.51-.08-1.01-.27-1.5-.58-.48-.3-.95-.67-1.39-1.12-.44-.44-.8-.92-1.08-1.41-.27-.49-.44-1.01-.49-1.53-.05-.52.01-1.05.2-1.57s.53-1.03 1.02-1.51c.52-.51 1.04-.86 1.56-1.03.35-.12.71-.18 1.06-.18.16 0 .33.01.49.04.51.08 1.01.28 1.5.59.47.3.94.68 1.38 1.13.44.44.8.92 1.08 1.41.27.49.44 1.01.5 1.52.06.52 0 1.04-.21 1.56-.2.52-.54 1.02-1.02 1.5-.51.5-1.02.85-1.54 1.03-.36.13-.73.19-1.09.19Zm-1.35-5.97c-.15 0-.29.06-.43.2-.16.16-.24.32-.25.48-.01.17.02.34.09.51.08.18.19.35.32.51.14.17.28.32.4.44s.26.25.42.4c.16.14.32.26.5.35.17.09.33.13.51.13.16 0 .32-.08.48-.23.15-.15.23-.31.23-.47 0-.18-.03-.35-.12-.52-.08-.18-.2-.35-.33-.5-.14-.16-.27-.31-.39-.42-.11-.11-.25-.24-.41-.38-.16-.14-.32-.25-.5-.34-.17-.09-.34-.13-.52-.14h-.02l.02-.02Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1208_5496">
                  <path
                    fill="#fff"
                    transform="translate(.5)"
                    d="M0 0h70.5v70.15H0z"
                  />
                </clipPath>
              </defs>
            </symbol>
            <symbol id="sprite-icon-ticket" viewBox="0 0 18 18">
              <path
                d="M10.8 3.7a.89.89 0 0 0-1.2 0l-5.9 6a.78.78 0 0 0 0 1.1l3.5 3.5a.91.91 0 0 0 1.2 0l5.9-6 .2-.5c0-.2 0-.5-.2-.6ZM10.2.5a1.63 1.63 0 0 1 2.4 0l1 1a2.12 2.12 0 0 0 3 3l.9.9a1.63 1.63 0 0 1 0 2.4l-9.7 9.7a1.63 1.63 0 0 1-2.4 0l-1-1a2.12 2.12 0 0 0-3-3l-.9-.9a1.63 1.63 0 0 1 0-2.4ZM7.8 12.8l-2.6-2.6 5-5 2.6 2.6Z"
                style={{ "fill-rule": "evenodd" }}
              />
            </symbol>
            <symbol fill="none" id="sprite-icon-wallet" viewBox="0 0 30 22">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.057 5.16h29.918c0-.21.006-.418.011-.623.012-.453.023-.895-.024-1.33C29.757 1.341 28.038.201 26.65.214c-6.629.059-13.257.049-19.889.04L3.142.249c-.831 0-1.491.317-2.07.857C-.145 2.246-.046 3.7.057 5.161Zm29.909 4.175H.056l-.005.009c0 .918-.002 1.831-.004 2.74-.005 2.261-.01 4.5.017 6.74.022 1.667 1.835 2.974 3.313 2.961 7.766-.069 15.532-.073 23.297 0 1.68.017 3.36-1.659 3.326-3.364a229.99 229.99 0 0 1-.012-5.572c.006-.928.012-1.857.012-2.786 0-.156-.01-.314-.02-.481l-.014-.247Zm-4.012 6.081c-.017.613-.45.956-1.268.965h-.005c-1.418.012-7.157.004-8.601 0-.673 0-1.114-.369-1.14-.926-.021-.57.369-.977 1.084-.982 2.915-.02 5.833-.025 8.747-.004.832.005 1.2.356 1.183.947Z"
                fill="#231F20"
              />
            </symbol>
            <symbol id="sprite-icon-zoom" viewBox="0 0 26 26">
              <circle
                cx={13}
                cy={13}
                r={13}
                fillRule="evenodd"
                clipRule="evenodd"
              />
              <g fill="none" stroke="#fff" strokeWidth="1.4">
                <path d="M14.8 14.8c-1.4 1.4-3.7 1.4-5.1 0s-1.4-3.7 0-5.1c1.4-1.4 3.7-1.4 5.1 0 1.4 1.4 1.4 3.7 0 5.1z" />
                <path strokeLinecap="round" d="m17.6 17.6-2.8-2.8" />
              </g>
            </symbol>
          </svg>{" "}
        </div>
        <div className="page-content | js-page-content">
          <a
            href="#main-content"
            className="visually-hidden-focusable skip-link button"
          >
            Skip to main content
          </a>
          {/* No JS Warning */}
          <noscript>
            &lt;div class="alert alert--warning" role="alert" style="display:
            block;"&gt; &lt;div class="container"&gt; &lt;div
            class="alert__inner"&gt; &lt;div class="alert__content"&gt;
            &lt;p&gt;Please enable JavaScript in your web browser to get the
            best experience.&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
            &lt;/div&gt;
          </noscript>
          {/* End of No JS Warning */}
          <div
            className="dialog-off-canvas-main-canvas"
            data-off-canvas-main-canvas
          >
            <div className="layout-container">
              <Header />
              <div>
                <div id="block-alerts"></div>
              </div>
              <div>
                <div data-drupal-messages-fallback className="hidden" />
              </div>
              <main id="main-content" className="js-main">
                <div>
                  <div
                    className="hero--has-overlay paragraph paragraph--type--slice-generic-hero paragraph--view-mode--default hero align_left hero--background-pinned js-hero"
                    role="article"
                    aria-labelledby="paragraph-1319-title"
                  >
                    <div className="hero__background">
                      <div className="media media-hero media-image js-media">
                        <picture>
                          {/*[if IE 9]><video style="display: none;"><![endif]*/}
                          <source
                            srcSet="/images/Accessibility/south-africa-object-handling-session_1.jpg 1x"
                            media="all and (min-width: 1440px)"
                            type="image/jpeg"
                            width={1600}
                            height={901}
                          />
                          <source
                            srcSet="/images/Accessibility/south-africa-object-handling-session_2.jpg 1x"
                            media="all and (min-width: 1024px)"
                            type="image/jpeg"
                            width={1300}
                            height={732}
                          />
                          <source
                            srcSet="/images/Accessibility/south-africa-object-handling-session_3.jpg 1x"
                            media="all and (min-width: 768px)"
                            type="image/jpeg"
                            width={1000}
                            height={1000}
                          />
                          {/*[if IE 9]></video><![endif]*/}
                          <img
                            loading="eager"
                            width={750}
                            height={750}
                            data-focal-position="center center"
                            src="/images/Accessibility/south-africa-object-handling-session.jpg"
                            alt="Two people handling a pot at a South Africa object handling session. "
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="container">
                      <div className="hero__inner">
                        <div className="hero__content-container">
                          {content && content.length > 0 ? (
                            content.slice(0, 1).map((item, index) => (
                              <h1
                                dangerouslySetInnerHTML={{
                                  __html: item.title,
                                }}
                                key={index}
                                id="paragraph-1319-title"
                                className="hero__title"
                              ></h1>
                            ))
                          ) : (
                            <p>No content available</p>
                          )}
                          {/* <h1
                            id="paragraph-1319-title"
                            className="hero__title hero__title--small"
                          >
                            {" "}
                            Accessibility at the Museum
                          </h1> */}
                        </div>
                        <div className="hero__controls">
                          <div className="hero__caption | js-hero-caption">
                            <button
                              type="button"
                              className="hero__caption-button | js-hero-caption-btn"
                              id="hero-image-caption-button-1319"
                              aria-expanded="false"
                              aria-controls="hero-image-caption-content-1319"
                            >
                              <span className="visually-hidden">
                                Show image caption
                              </span>
                              <svg
                                className="icon icon--info"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-info" />
                              </svg>
                            </button>
                            <div
                              className="hero__caption-content | js-hero-caption-content"
                              id="hero-image-caption-content-1319"
                              aria-hidden="true"
                              aria-labelledby="hero-image-caption-button-1319"
                            >
                              <button
                                type="button"
                                className="hero__caption-content-close | js-hero-caption-btn"
                                id="hero-image-caption-close-button-1319"
                                aria-expanded="false"
                                aria-controls="hero-image-caption-content-1319"
                              >
                                <span className="visually-hidden">
                                  Close image caption
                                </span>
                                <span className="hero__caption-close">
                                  <span className="hero__caption-close-lines" />
                                </span>
                              </button>
                              <p>
                                {" "}
                                Two people handling a pot at a South Africa
                                object handling session.&nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="breadcrumb--bg-white section--breadcrumb">
                  <div className="container">
                    <div className="breadcrumb__inner">
                      <div id="block-breadcrumbs">
                        <nav aria-labelledby="system-breadcrumb">
                          <h2
                            id="system-breadcrumb"
                            className="visually-hidden"
                          >
                            You are in the Visit section
                          </h2>
                          <ul className="breadcrumb__list">
                            <li className="breadcrumb__item breadcrumb__item--link">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a href="/" className="breadcrumb__link">
                                <span>Home</span>
                              </a>
                            </li>
                            <li className="breadcrumb__item breadcrumb__item--link">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a href="/visit" className="breadcrumb__link">
                                <span>Visit</span>
                              </a>
                            </li>
                            <li className="breadcrumb__item breadcrumb__item--current">
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                              <a
                                href="http://localhost:3000/visit/accessibility-museum"
                                className="breadcrumb__current"
                                aria-current="page"
                              >
                                Accessibility at the Museum
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="social-share">
                        <h3 className="social-share__title">Share the page</h3>
                        <ul className="social-share__list">
                          <li className="social-share__item">
                            <a
                              className="social-share__link"
                              href="http://www.facebook.com/share.php?u=http://localhost:3000/visit/accessibility-museum"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <span className="visually-hidden">
                                Share on Facebook
                              </span>
                              <svg
                                className="icon icon--facebook"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-facebook" />
                              </svg>
                            </a>
                          </li>
                          <li className="social-share__item">
                            <a
                              className="social-share__link"
                              href="https://twitter.com/intent/tweet?text=Accessibility%20at%20the%20Museum&url=http://localhost:3000/visit/accessibility-museum"
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <span className="visually-hidden">
                                Share on X (formerly Twitter)
                              </span>
                              <svg
                                className="icon icon--x"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-x" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div id="block-jumplinkblock">
                    <nav
                      className="section--bg-white section section--no-padding-bottom"
                      aria-labelledby="jump-links"
                    >
                      <h2 id="jump-links" className="visually-hidden">
                        Jump links
                      </h2>
                      <div className="container">
                        <div className="section__inner">
                          <div className="jump-links">
                            <button
                              id="jump-link-button"
                              type="button"
                              className="jump-links__toggle | js-jump-links-toggle"
                            >
                              Contents
                              <svg
                                className="icon icon--chevron"
                                role="presentation"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use xlinkHref="#sprite-icon-chevron" />
                              </svg>
                            </button>
                            <div
                              id="jump-link-content"
                              className="jump-links__content | js-jump-links-content"
                            >
                              <ul className="jump-links__list" role="list">
                                <li className="jump-links__item">
                                  <a
                                    href="#ticketing-and-events"
                                    className="jump-links__link"
                                  >
                                    <span>Ticketing and events</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#getting-to-the-museum"
                                    className="jump-links__link"
                                  >
                                    <span>Getting to the Museum</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#accessibility-around-the-museum"
                                    className="jump-links__link"
                                  >
                                    <span>Accessibility around the Museum</span>
                                  </a>
                                </li>
                                <li className="jump-links__item">
                                  <a
                                    href="#accessible-resources"
                                    className="jump-links__link"
                                  >
                                    <span>Accessible resources</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="paragraph paragraph--type--slice-generic-intro paragraph--view-mode--default section section--intro section--bg-white">
                    <div className="container">
                      <div className="section__inner">
                        <div className="section--intro__container">
                          <div className="section--intro__info">
                            <h2 className="section--intro__info-title">
                              {" "}
                              Contact us
                            </h2>
                            <div className="section--intro__info-slices">
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <p>
                                  Email:{" "}
                                  <a href="/cdn-cgi/l/email-protection#b6d7d5d5d3c5c5f6d4c4dfc2dfc5dedbc3c5d3c3db98d9c4d1">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="29484a4a4c5a5a694b5b405d405a41445c5a4c5c4407465b4e"
                                    >
                                      [email&nbsp;protected]
                                    </span>
                                  </a>
                                  <br />
                                  Phone: +44 (0)20 7323 8971, phone opening
                                  hours are Monday–Friday, 09.00–17.00
                                </p>
                              </div>
                              <div className="paragraph paragraph--type--info-content paragraph--view-mode--default section--intro__info-content wysiwyg">
                                <h3 className="section--intro__info-content-title">
                                  <svg
                                    className="icon icon--ticket"
                                    role="presentation"
                                    focusable="false"
                                    aria-hidden="true"
                                  >
                                    <use xlinkHref="#sprite-icon-ticket" />
                                  </svg>
                                  Advance booking recommended
                                </h3>
                              </div>
                              <div className="intro-link--button paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="button button--chevron"
                                  href="https://ticketing.britishmuseum.org/events?k=general%20admission"
                                >
                                  <span>Book tickets</span>
                                </a>
                              </div>
                              <div className="intro-link--button paragraph paragraph--type--info-link paragraph--view-mode--default">
                                <a
                                  data-tracking="cta"
                                  className="button button--chevron"
                                  href="/files/museum-map.pdf"
                                >
                                  <span>View the Museum map</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="section--intro__content">
                            {content && content.length > 0 ? (
                              content.slice(0, 1).map((item, index) => (
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: item.body,
                                  }}
                                  key={index}
                                ></p>
                              ))
                            ) : (
                              <p>No content available</p>
                            )}

                            {/* <p className="h3">
                              Find out how to make the most of your visit to the
                              Museum.
                            </p>
                            <div className="wysiwyg">
                              <p>
                                We want to be open and accessible to all
                                visitors to ensure that the widest number of
                                people can enjoy the building, collection and
                                exhibitions. We hope the following information
                                will help you plan your trip to the Museum. If
                                you require any further information please
                                contact us via:
                              </p>
                              <ul>
                                <li>
                                  Email:{" "}
                                  <a href="/cdn-cgi/l/email-protection#3b5a58585e48487b5949524f524853564e485e4e561554495c">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="1170727274626251736378657862797c646274647c3f7e6376"
                                    >
                                      [email&nbsp;protected]
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  Phone: +44 (0)20 7323 8971, phone opening
                                  hours are Monday–Friday, 09.00–17.00
                                </li>
                              </ul>
                              <p>
                                Wheelchair reservations and Blue Badge Parking
                                are booked through the Dersim Museum Ticketing
                                team. For information on how to borrow a
                                wheelchair or obtain on-site parking, please see
                                the '
                                <a href="http://localhost:3000/visit/accessibility-museum#accessibility-around-the-museum">
                                  Borrow a wheelchair
                                </a>
                                ' and '
                                <a href="http://localhost:3000/visit/accessibility-museum#getting-to-the-museum">
                                  Accessible parking
                                </a>
                                ' sections below.
                              </p>
                              <ul>
                                <li>
                                  Email:{" "}
                                  <a href="/cdn-cgi/l/email-protection#add9c4cec6c8d9deedcfdfc4d9c4dec5c0d8dec8d8c083c2dfca">
                                    <span
                                      className="__cf_email__"
                                      data-cfemail="67130e040c0213142705150e130e140f0a121402120a49081500"
                                    >
                                      [email&nbsp;protected]
                                    </span>
                                  </a>
                                </li>
                                <li>Phone: +44 (0)20 7323 8181</li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout-content">
                  <div>
                    <div id="block-numiko-mainpagecontent">
                      <div>
                        <div>
                          <section
                            className="paragraph paragraph--type--slice-content paragraph--view-mode--default section section--slice-content section--slice-content--align-left section--bg-white"
                            aria-labelledby="paragraph-6646-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="ticketing-and-events"
                              />{" "}
                              <div className="section__inner">
                                <h2
                                  id="paragraph-6646-title"
                                  className="section__title section--slice-content__title"
                                >
                                  Ticketing and events
                                </h2>
                                <div className="section--slice-content__main">
                                  <div className="section--slice-content__wysiwyg wysiwyg">
                                    <ul>
                                      <li>
                                        You're advised to{" "}
                                        <a href="https://ticketing.britishmuseum.org/events?k=general%20admission">
                                          book a timed slot in advance
                                        </a>{" "}
                                        to guarantee entry and help control the
                                        numbers of individuals who can visit.
                                      </li>
                                      <li>
                                        At peak times there may be large queues.
                                        If queueing is difficult due to
                                        disability, please speak to a uniformed
                                        member of staff who'll be happy to
                                        assist.
                                      </li>
                                      <li>
                                        Concessions for paid exhibitions and
                                        events and special morning tours are
                                        available for disabled visitors.
                                      </li>
                                      <li>
                                        A companion ticket is also provided free
                                        of charge.
                                      </li>
                                      <li>
                                        See a full list of{" "}
                                        <a href="/exhibitions-events/exhibition">
                                          exhibitions
                                        </a>{" "}
                                        at the Museum.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <aside className="section--slice-content__embed">
                                  <div className="paragraph paragraph--type--embedded-media paragraph--view-mode--default">
                                    <figure className="media media-embed media-image js-media">
                                      <img
                                        loading="eager"
                                        className="lazyload not-full-width"
                                        srcSet="/images/Accessibility/chisato-minamimura-hokusai-bsl-tour_4.jpg 400w, /images/Accessibility/chisato-minamimura-hokusai-bsl-tour_2.jpg 750w, /images/Accessibility/chisato-minamimura-hokusai-bsl-tour_1.jpg 1000w, /images/Accessibility/chisato-minamimura-hokusai-bsl-tour_3.jpg 1300w, /images/Accessibility/chisato-minamimura-hokusai-bsl-tour.jpg 1600w"
                                        sizes="100vw"
                                        width={1600}
                                        height={801}
                                        src="/images/Accessibility/chisato-minamimura-hokusai-bsl-tour.jpg"
                                        alt="Chisato Minamimura - deaf-led BSL tour of the Hokusai exhibition"
                                      />
                                      <figcaption>
                                        Deaf-led BSL tour of the Hokusai
                                        exhibition.
                                      </figcaption>
                                    </figure>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </section>
                          <section
                            className="paragraph paragraph--type--slice-banner paragraph--view-mode--default section section--slice-banner section--maintain-spacer-top section--bg-white banner"
                            aria-labelledby="paragraph-4803-title"
                          >
                            <div className="container">
                              <div className="banner__outer">
                                <div className="banner__inner">
                                  <div className="banner__title">
                                    <h2
                                      id="paragraph-4803-title"
                                      className="section__title"
                                    >
                                      Become a Member
                                    </h2>
                                  </div>
                                  <div className="banner__content">
                                    <p>
                                      Members enjoy unlimited entry to all
                                      exhibitions, use of an exclusive Members'
                                      Room, a programme of special events and
                                      much more.&nbsp;
                                    </p>
                                    <div className="banner__button-container">
                                      <a
                                        href="/membership"
                                        className="button button--chevron"
                                        data-tracking="cta"
                                      >
                                        <span>Find out more</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18594-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="getting-to-the-museum"
                              />

                              <div className="section__inner">
                                {accordionData && accordionData.length > 0 ? (
                                  accordionData
                                    .slice(0, 1)
                                    .map((item, index) => (
                                      <h2
                                        key={index}
                                        id="paragraph-18453-title"
                                        className="section__title"
                                      >
                                        {item.categoryId}
                                      </h2>
                                    ))
                                ) : (
                                  <p>No content available</p>
                                )}

                                {accordionData.length > 0 ? (
                                  <ul>
                                    {accordionData.map((item, index) => (
                                      <div
                                        key={index}
                                        className="accordion__item | js-accordion-item"
                                        data-js-collapse-first="true"
                                      >
                                        <h3 className="accordion__heading">
                                          <button
                                            className="accordion__button | js-accordion-btn"
                                            id={`accordion-btn-${index}`} // Benzersiz id
                                            aria-expanded="false"
                                            aria-controls={`accordion-content-${index}`} // Benzersiz content id
                                          >
                                            <svg
                                              className="icon icon--plus"
                                              role="presentation"
                                              focusable="false"
                                              aria-hidden="true"
                                            >
                                              <use xlinkHref="#sprite-icon-plus" />
                                            </svg>
                                            <span>{item.title}</span>
                                          </button>
                                        </h3>
                                        <div
                                          className="accordion__content | js-accordion-content"
                                          id={`accordion-content-${index}`} // Benzersiz content id
                                          aria-hidden="true"
                                          aria-labelledby={`accordion-btn-${index}`} // Button id ile eşleşiyor
                                        >
                                          <ul>
                                            <li>{item.content}</li>
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>
                                    No accordion data available for this
                                    category.
                                  </p>
                                )}
                              </div>

                              {/* <div className="section__inner">
                                <h2
                                  id="paragraph-18594-title"
                                  className="section__title"
                                >
                                  Getting to the Museum
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18591"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18591"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Museum entrance and exit</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18591"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18591"
                                  >
                                    <ul>
                                      <li>
                                        Entry can be from either Great Russell
                                        Street (Main entrance), or via Montague
                                        Place (North entrance). If the weather
                                        is poor, we recommend using the Montague
                                        Place entrance.
                                      </li>
                                      <li>
                                        The Main entrance on Great Russell
                                        Street has 12 steps with a handrail.
                                      </li>
                                      <li>
                                        The North entrance on Montague Place has
                                        12 steps and lift access.
                                      </li>
                                      <li>
                                        There are self-operable lifts on both
                                        sides of these steps.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18592"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18592"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Security, bag searches and large luggage
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18592"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18592"
                                  >
                                    <ul>
                                      <li>
                                        For everyone's safety, all bags,
                                        rucksacks, packages and personal items
                                        may be searched before entry.
                                      </li>
                                      <li>
                                        Wheeled cases, sports equipment and
                                        large items of luggage are not allowed
                                        on Dersim Museum premises.
                                      </li>
                                      <li>
                                        Storage for luggage is available at
                                        major rail stations, including Euston,
                                        King's Cross and Charing Cross.
                                      </li>
                                      <li>
                                        If you need to bring large luggage onto
                                        the site for medical reasons that you
                                        are not able to be without, please
                                        contact{" "}
                                        <a href="/cdn-cgi/l/email-protection#b696d7d5d5d3c5c5f6d4c4dfc2dfc5dedbc3c5d3c3db98d9c4d1">
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="88e9ebebedfbfbc8eafae1fce1fbe0e5fdfbedfde5a6e7faef"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        The Visitor and Member cloakroom is open
                                        daily from 10.00–17.00 (20.30 on
                                        Fridays). Last deposits are 1 hour
                                        before closing time. Please collect
                                        items 30 minutes before closing time.
                                        More information is available on the{" "}
                                        <a href="http://localhost:3000/visit#facilities">
                                          Visit page
                                        </a>
                                        .
                                      </li>
                                      <li>
                                        An easy access route is available for
                                        disabled visitors and visitors with
                                        buggies and/or children under five.
                                        Please speak to a uniformed member of
                                        staff for assistance.
                                      </li>
                                      <li>
                                        If you require assistance or the
                                        entrance into the Museum poses an
                                        accessibility barrier, please let our
                                        uniformed staff know and they'll be
                                        happy to assist you.
                                      </li>
                                      <li>
                                        Please don't leave your bags unattended
                                        at any point during your visit.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18593"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18593"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Accessible parking</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18593"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18593"
                                  >
                                    <p>
                                      <strong>
                                        On-site Blue Badge parking
                                      </strong>
                                    </p>
                                    <ul>
                                      <li>
                                        There are a limited number of on-site
                                        parking spaces available for visitors to
                                        the Museum who have a Blue Badge.
                                      </li>
                                      <li>
                                        These spaces must be booked in advance.
                                      </li>
                                      <li>
                                        To request a space:
                                        <ul>
                                          <li>
                                            Email:{" "}
                                            <a href="/cdn-cgi/l/email-protection#a4d0cdc7cfc1d0d7e4c6d6cdd0cdd7ccc9d1d7c1d1c98acbd6c3">
                                              <span
                                                className="__cf_email__"
                                                data-cfemail="1a6e7379717f6e695a7868736e736972776f697f6f773475687d"
                                              >
                                                [email&nbsp;protected]
                                              </span>
                                            </a>
                                          </li>
                                          <li>Phone: +44 (0)20 7323 8181</li>
                                        </ul>
                                      </li>
                                      <li>
                                        Please allow at least two working days'
                                        notice for bookings. Any parking or
                                        wheelchair requests for a Monday must be
                                        received no later than the previous
                                        Friday afternoon.
                                      </li>
                                      <li>
                                        When booking, you'll be asked to
                                        provide:
                                        <ul>
                                          <li>Your name</li>
                                          <li>Contact details</li>
                                          <li>
                                            Vehicle registration number, make
                                            and model
                                          </li>
                                          <li>
                                            The date and time of your visit
                                          </li>
                                          <li>Blue Badge number</li>
                                        </ul>
                                      </li>
                                      <li>
                                        On arrival at the Museum, the driver of
                                        the vehicle will be asked to show their
                                        driving license as proof of identity.
                                        Please have your Blue Badge clearly on
                                        display during your visit.
                                      </li>
                                      <li>
                                        For safety and security, vehicles will
                                        be searched before entry.
                                      </li>
                                      <li>
                                        If asked, you must allow our security
                                        officers to search your bags or those of
                                        the passengers travelling in the vehicle
                                        before you enter the Museum.
                                      </li>
                                      <li>
                                        You're not permitted to leave your
                                        guide, assistant or companion animals
                                        unattended in your vehicle at any time.
                                      </li>
                                      <li>
                                        Vehicle access for Blue Badge holders is
                                        through the main entrance on Great
                                        Russell Street. Visitors using Blue
                                        Badge parking can exit via the South
                                        entrance.
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>
                                        Off-site Blue Badge parking
                                      </strong>
                                    </p>
                                    <ul>
                                      <li>
                                        There are Blue Badge parking bays near
                                        the Museum on Montague Place, Montague
                                        Street and Coptic Street.
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>Minibus bookings</strong>
                                    </p>
                                    <ul>
                                      <li>
                                        Due to space restrictions we are unable
                                        to accommodate minibus bookings. We
                                        apologise for any inconvenience this
                                        causes to your visit.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18606-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="accessibility-around-the-museum"
                              />

                              <div className="section__inner">
                                {accordionData2 && accordionData2.length > 0 ? (
                                  accordionData2
                                    .slice(0, 1)
                                    .map((item, index2) => (
                                      <h2
                                        key={index2}
                                        id="paragraph-18453-title"
                                        className="section__title"
                                      >
                                        {item.categoryId}
                                      </h2>
                                    ))
                                ) : (
                                  <p>No content available</p>
                                )}

                                {accordionData2.length > 0 ? (
                                  <ul>
                                    {accordionData2.map((item2, index2) => (
                                      <div
                                        key={index2}
                                        className="accordion__item | js-accordion-item"
                                        data-js-collapse-first="true"
                                      >
                                        <h3 className="accordion__heading">
                                          <button
                                            className="accordion__button | js-accordion-btn"
                                            id={`accordion-btn-${index2}-second`} // Benzersiz id
                                            aria-expanded="false"
                                            aria-controls={`accordion-content-${index2}-second`} // Benzersiz content id
                                          >
                                            <svg
                                              className="icon icon--plus"
                                              role="presentation"
                                              focusable="false"
                                              aria-hidden="true"
                                            >
                                              <use xlinkHref="#sprite-icon-plus" />
                                            </svg>
                                            <span>{item2.title}</span>
                                          </button>
                                        </h3>
                                        <div
                                          className="accordion__content | js-accordion-content"
                                          id={`accordion-content-${index2}-second`} // Benzersiz content id
                                          aria-hidden="true"
                                          aria-labelledby={`accordion-btn-${index2}-second`} // Button id ile eşleşiyor
                                        >
                                          <ul>
                                            <li>{item2.content}</li>
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>
                                    No accordion data available for this
                                    category.
                                  </p>
                                )}
                              </div>

                              {/* <div className="section__inner">
                                <h2
                                  id="paragraph-18606-title"
                                  className="section__title"
                                >
                                  Accessibility around the Museum
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18600"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18600"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Lifts and access to galleries
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18600"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18600"
                                  >
                                    <ul>
                                      <li>
                                        View the locations of the lifts on the{" "}
                                        <a href="/files/museum-map.pdf">
                                          Museum map
                                        </a>
                                        , or pick up a free paper map of the
                                        Museum in the Great Court.
                                      </li>
                                      <li>
                                        Most lifts in the Museum are wheelchair
                                        accessible, have audio announcements and
                                        include braille signage.
                                      </li>
                                      <li>
                                        Galleries with no lift or level access
                                        at present:
                                        <ul>
                                          <li>
                                            Ground floor
                                            <ul>
                                              <li>
                                                <a
                                                  href="/collection/galleries/greece-bassai-sculptures"
                                                  data-entity-type="node"
                                                  data-entity-uuid="3ffe6de0-3574-402c-b876-8d86e3b09431"
                                                  data-entity-substitution="canonical"
                                                  title="Greece: Bassai sculptures"
                                                >
                                                  Room 16: Bassai sculptures
                                                </a>{" "}
                                                (Mezzanine)
                                              </li>
                                              <li>Room 20a: Greek vases</li>
                                              <li>
                                                <a
                                                  href="/collection/galleries/mausoleum-halikarnassos"
                                                  data-entity-type="node"
                                                  data-entity-uuid="96044c10-5c61-4aac-a0f4-965b187c346c"
                                                  data-entity-substitution="canonical"
                                                  title="Mausoleum of Halikarnassos"
                                                >
                                                  Room 21: Mausoleum of
                                                  Halikarnassos
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="/collection/galleries/world-alexander"
                                                  data-entity-type="node"
                                                  data-entity-uuid="4cfa31e0-04c6-4fff-96dd-db99362ea12c"
                                                  data-entity-substitution="canonical"
                                                  title="The world of Alexander"
                                                >
                                                  Room 22: The world of
                                                  Alexander
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li>
                                            Upper floors
                                            <ul>
                                              <li>
                                                <a
                                                  href="/collection/galleries/greek-and-roman-life"
                                                  data-entity-type="node"
                                                  data-entity-uuid="5b6775e8-b865-4415-93d0-fce8efd36c57"
                                                  data-entity-substitution="canonical"
                                                  title="Greek and Roman life"
                                                >
                                                  Room 69: Greek and Roman life
                                                </a>{" "}
                                                (Mezzanine)
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        For more information on lift dimensions
                                        and access features please contact:
                                        <ul>
                                          <li>
                                            Email:{" "}
                                            <a href="/cdn-cgi/l/email-protection#3a5b59595f49497a5848534e534952574f495f4f571455485d">
                                              <span
                                                className="__cf_email__"
                                                data-cfemail="254446464056566547574c514c564d4850564050480b4a5742"
                                              >
                                                [email&nbsp;protected]
                                              </span>
                                            </a>
                                          </li>
                                          <li>Phone: +44 (0)20 7323 8971</li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18595"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18595"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Quieter times and sensory map
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18595"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18595"
                                  >
                                    <p>
                                      Please note, quieter times and sensory
                                      information will vary. If you have any
                                      queries or concerns please get in touch
                                      with the Access team. Contact information
                                      is provided at the top of this page.
                                    </p>
                                    <ul>
                                      <li>
                                        View our{" "}
                                        <a href="http://localhost:3000/sites/default/files/2023-11/Dersim-Museum-Sensory-Map_2023.pdf">
                                          sensory map
                                        </a>
                                        .
                                      </li>
                                      <li>
                                        The Museum can sometimes be crowded and
                                        noisy.
                                      </li>
                                      <li>
                                        The quietest times to visit the Museum
                                        are when the galleries first open
                                        between 10.00 and 11.00 and again in the
                                        afternoon after 16.00. Please remember
                                        that the Museum closes at 17.00, except
                                        Fridays when we're open until 20.30.
                                      </li>
                                      <li>
                                        The middle of the day is usually the
                                        busiest time in the Museum galleries,
                                        cafés and shops.
                                      </li>
                                      <li>
                                        Please note that some Friday late
                                        openings have additional activities that
                                        can be busy and noisy – check our{" "}
                                        <a href="/exhibitions-events/accessible-event">
                                          Exhibitions and events
                                        </a>{" "}
                                        page when planning your visit.
                                      </li>
                                      <li>
                                        Our busiest times are at weekends,
                                        during Dersim school holidays, Dersim
                                        bank holidays, Christmas and the New
                                        Year.
                                      </li>
                                      <li>
                                        Our permanent galleries can get
                                        especially busy during the first and
                                        final weekends of a special exhibition.
                                        Check our{" "}
                                        <a href="/exhibitions-events/accessible-event">
                                          Exhibitions and events
                                        </a>{" "}
                                        page when planning your visit.
                                      </li>
                                      <li>
                                        The quietest time of the year tends to
                                        be November and early December.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18596"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18596"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Quieter areas</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18596"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18596"
                                  >
                                    <p>
                                      <strong>
                                        Spaces that tend to be quieter:
                                      </strong>
                                    </p>
                                    <ul>
                                      <li>Room 1: Level 0&nbsp;</li>
                                      <li>Room 2: Level 0</li>
                                      <li>Room 2a: Level 0</li>
                                      <li>Room 15: Level 0</li>
                                      <li>
                                        Rooms 19–20 and 20a: Level 0 and
                                        mezzanine
                                      </li>
                                      <li>Room 21: Level 0</li>
                                      <li>Room 42: Level 3</li>
                                      <li>Rooms 43 and 43a: Level 3</li>
                                      <li>Rooms 46–47: Level 3</li>
                                      <li>Room 48: Level 3</li>
                                      <li>Rooms 90 and 90a</li>
                                      <li>Rooms 92–93 and 94: Level 5</li>
                                    </ul>
                                    <p>
                                      <strong>
                                        Spaces that tend to be crowded and
                                        noisier:
                                      </strong>
                                    </p>
                                    <ul>
                                      <li>Great Russell Street entrance</li>
                                      <li>
                                        Montague Place exit: Level minus 1
                                      </li>
                                      <li>
                                        North entrance foyer: Level minus 1
                                      </li>
                                      <li>Weston Great Hall: Level 0</li>
                                      <li>The Postcard Gallery: Level 0</li>
                                      <li>The Great Court: Level 0</li>
                                      <li>Room 4: Level 0</li>
                                      <li>Rooms 6–6a and 6b: Level 0</li>
                                      <li>Room 17: Level 0</li>
                                      <li>Room 18: Level 0</li>
                                      <li>Room 23: Level 0</li>
                                      <li>Room 24: Level 0</li>
                                      <li>
                                        Room 30 (special exhibition space):
                                        Level 0
                                      </li>
                                      <li>Room 33: Level 1</li>
                                      <li>
                                        Room 35 (special exhibition space):
                                        Level 1
                                      </li>
                                      <li>Rooms 53–54–55–56: Level 3</li>
                                      <li>Rooms 57–58: Level 3</li>
                                      <li>Rooms 59–61–62–63–64–65: Level 3</li>
                                      <li>Room 66: Level 3</li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18597"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18597"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Lighting and temperature</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18597"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18597"
                                  >
                                    <h4>Lighting</h4>
                                    <p>
                                      Light levels vary across the Museum. Some
                                      of the rooms are dimly lit to preserve the
                                      exhibits. Other rooms have natural or
                                      bright lights. We sometimes have moving
                                      lights as part of our exhibitions.
                                    </p>
                                    <p>Spaces with natural light:</p>
                                    <ul>
                                      <li>The Great Court: Level 0</li>
                                      <li>Room 1: Level 0</li>
                                      <li>Room 2: Level 0</li>
                                      <li>Room 4: Level 0</li>
                                      <li>Rooms 7–8: Level 0</li>
                                      <li>Room 9: Level 0</li>
                                      <li>Room 33: Level 1</li>
                                      <li>Rooms 67 and 95: Level 2</li>
                                    </ul>
                                    <p>Spaces with low or subdued light:</p>
                                    <ul>
                                      <li>Room 2a: Level 0</li>
                                      <li>Room 25: Level minus 2</li>
                                      <li>Rooms 26 and 27: Level 0</li>
                                      <li>
                                        Room 30 (special exhibition space):
                                        Level 0
                                      </li>
                                      <li>
                                        Room 35 (special exhibition space):
                                        Level 1
                                      </li>
                                      <li>Rooms 61–63: Level 3</li>
                                      <li>Rooms 90 and 90a</li>
                                      <li>Rooms 92–94: Level 5</li>
                                    </ul>
                                    <p>
                                      <strong>Temperature variations</strong>
                                      <br />
                                      The temperature varies as you move through
                                      the Museum and some galleries and spaces
                                      are quite cold. You may want to bring an
                                      extra layer of clothing to put on in these
                                      areas.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18598"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18598"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Borrow a wheelchair</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18598"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18598"
                                  >
                                    <p>
                                      Manual wheelchairs are available to
                                      pre-book free of charge for your visit.
                                      These can be collected at the Great
                                      Russell Street entrance only and returned
                                      to either the Great Russell Street
                                      entrance or the Montague Place exit at the
                                      end of your visit.
                                    </p>
                                    <ul>
                                      <li>
                                        If you'd like to reserve a wheelchair,
                                        please:
                                        <ul>
                                          <li>
                                            Email:{" "}
                                            <a href="/cdn-cgi/l/email-protection#b8ccd1dbd3ddcccbf8dacad1ccd1cbd0d5cdcbddcdd596d7cadf">
                                              <span
                                                className="__cf_email__"
                                                data-cfemail="2a5e4349414f5e596a4858435e435942475f594f5f470445584d"
                                              >
                                                [email&nbsp;protected]
                                              </span>
                                            </a>
                                          </li>
                                          <li>Phone: +44 (0)20 7323 8181</li>
                                        </ul>
                                      </li>
                                      <li>
                                        Please allow at least two working days'
                                        notice for reservations.
                                      </li>
                                      <li>
                                        Unfortunately, the Museum is unable to
                                        provide staff assistance around the
                                        Museum for wheelchair users.
                                      </li>
                                      <li>
                                        Wheelchairs may not be taken outside of
                                        the Museum site.
                                      </li>
                                    </ul>
                                    <h4>
                                      <strong>Mobility scooters</strong>
                                    </h4>
                                    <ul>
                                      <li>
                                        Mobility scooters are welcome and
                                        permitted inside the Museum.
                                      </li>
                                      <li>
                                        If you have a Class 3 vehicle you will
                                        be asked to set the speed limiter to
                                        4mph (6.44 km/hour).
                                      </li>
                                      <li>
                                        Please remember to reduce your speed
                                        accordingly in congested areas or to
                                        adjust to others who may not be able to
                                        move out of your way quickly.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18599"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18599"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Assistance and alarms</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18599"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18599"
                                  >
                                    <p>
                                      If you need assistance during your visit,
                                      staff members will be able to help you:
                                    </p>
                                    <ul>
                                      <li>
                                        The Visitor Services team wear blue or
                                        black shirts and a red lanyard/name
                                        badge.
                                      </li>
                                      <li>
                                        You can also ask for assistance at the
                                        Ticket Desk in the Great Court.
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>Alarms</strong>
                                      <br />
                                      It's unlikely that an alarm will sound
                                      during your visit. If one does, please
                                      don't worry – just follow any instructions
                                      you are given by members of staff and make
                                      your way to the nearest exit.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18601"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18601"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Accessible toilets</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18601"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18601"
                                  >
                                    <ul>
                                      <li>
                                        View the locations of accessible
                                        toilets, baby changing and baby feeding
                                        areas on the latest{" "}
                                        <a
                                          href="/visit/museum-map"
                                          data-entity-type="node"
                                          data-entity-uuid="7c536aee-22b1-4d7e-acf3-63102d8b003f"
                                          data-entity-substitution="canonical"
                                          title="Museum map"
                                        >
                                          Museum map
                                        </a>
                                        , or pick up a free paper map of the
                                        Museum in the Great Court.
                                      </li>
                                      <li>
                                        Accessible toilets are available in the
                                        Great Court: Level 0
                                      </li>
                                      <li>
                                        All of our accessible toilets have:
                                        <ul>
                                          <li>
                                            Pull-cord alarms that link back to
                                            our Control Room.
                                          </li>
                                          <li>
                                            A flashing light to indicate when
                                            the building is being evacuated.
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        We don't have a Changing Places toilet
                                        on-site. The nearest Changing Places
                                        toilet is at Great Ormond Street
                                        Hospital.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18602"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18602"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Seating</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18602"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18602"
                                  >
                                    <ul>
                                      <li>
                                        There are some seats in selected
                                        galleries, special exhibitions, public
                                        spaces, cafés and the{" "}
                                        <a
                                          href="/visit/food-and-drink/great-court-restaurant"
                                          data-entity-type="node"
                                          data-entity-uuid="11a37713-3038-40b6-8068-eeee441576f6"
                                          data-entity-substitution="canonical"
                                          title="Great Court Restaurant"
                                        >
                                          Great Court Restaurant
                                        </a>
                                        .
                                      </li>
                                      <li>
                                        Most of our seating is benches or
                                        stools.
                                      </li>
                                      <li>
                                        There is some seating with backs in
                                        selected galleries and in the outside
                                        space at the front of the Museum.
                                      </li>
                                      <li>
                                        You're welcome to use walking sticks or
                                        folding stools with seat attachments,
                                        provided they have rubber stoppers.
                                      </li>
                                      <li>
                                        A limited number of folding stools are
                                        available at the Main entrance on Great
                                        Russell Street. Please drop these off at
                                        the Montague Place exit as as you leave
                                        the Museum.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18603"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18603"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Sound enhancement system / Induction
                                        loops
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18603"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18603"
                                  >
                                    <p>
                                      Induction Loops are installed at the
                                      Ticket Desk in the Great Court.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18604"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18604"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Service, assistant and emotional support
                                        animals
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18604"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18604"
                                  >
                                    <ul>
                                      <li>
                                        Service, assistant and emotional support
                                        animals – including assistant dogs in
                                        training – are welcome at the Museum.
                                      </li>
                                      <li>
                                        Your service, assistant or emotional
                                        support animal should remain under your
                                        care and control throughout your visit,
                                        and ideally should be identifiable as
                                        working and remain on a leash. Where
                                        possible dog owners should bring the
                                        dog's Assistance Dogs (Dersim)
                                        identification book (or the appropriate
                                        international equivalent) with them and
                                        animals should wear the appropriate
                                        tabards or harness, but these are not
                                        requirements for entry.
                                      </li>
                                      <li>
                                        If your service, assistant or emotional
                                        support animal is not a dog, please
                                        contact the accessibility team at{" "}
                                        <a href="/cdn-cgi/l/email-protection#d9b8bababcaaaa99bbabb0adb0aab1b4acaabcacb4f7b6abbe">
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="254446464056566547574c514c564d4850564050480b4a5742"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>{" "}
                                        prior to your visit to avoid
                                        disappointment on the day.
                                      </li>
                                      <li>
                                        The nearest toilet/toileting area for
                                        service, assistant and emotional support
                                        animals is located in Russell Square,
                                        Bloomsbury, Dersim WC1B 5BG.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18605"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18605"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> AccessAble access guides</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18605"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18605"
                                  >
                                    <p>
                                      To download in-depth access guides for
                                      different galleries and spaces across the
                                      Museum please visit{" "}
                                      <a href="https://www.accessable.co.uk/the-british-museum">
                                        AccessAble
                                      </a>
                                      .
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="accordion section--no-keyline-next js-accordion paragraph paragraph--type--slice-accordion paragraph--view-mode--default section section--slice-accordion section--bg-white"
                            aria-labelledby="paragraph-18615-title"
                          >
                            <div className="container">
                              <a
                                className="js-jump-link-anchor"
                                id="accessible-resources"
                              />

                              <div className="section__inner">
                                {accordionData3 && accordionData3.length > 0 ? (
                                  accordionData3
                                    .slice(0, 1)
                                    .map((item, index2) => (
                                      <h2
                                        key={index2}
                                        id="paragraph-18453-title"
                                        className="section__title"
                                      >
                                        {item.categoryId}
                                      </h2>
                                    ))
                                ) : (
                                  <p>No content available</p>
                                )}

                                {accordionData3.length > 0 ? (
                                  <ul>
                                    {accordionData3.map((item2, index2) => (
                                      <div
                                        key={index2}
                                        className="accordion__item | js-accordion-item"
                                        data-js-collapse-first="true"
                                      >
                                        <h3 className="accordion__heading">
                                          <button
                                            className="accordion__button | js-accordion-btn"
                                            id={`accordion-btn-${index2}-third`} // Benzersiz id
                                            aria-expanded="false"
                                            aria-controls={`accordion-content-${index2}-third`} // Benzersiz content id
                                          >
                                            <svg
                                              className="icon icon--plus"
                                              role="presentation"
                                              focusable="false"
                                              aria-hidden="true"
                                            >
                                              <use xlinkHref="#sprite-icon-plus" />
                                            </svg>
                                            <span>{item2.title}</span>
                                          </button>
                                        </h3>
                                        <div
                                          className="accordion__content | js-accordion-content"
                                          id={`accordion-content-${index2}-third`} // Benzersiz content id
                                          aria-hidden="true"
                                          aria-labelledby={`accordion-btn-${index2}-third`} // Button id ile eşleşiyor
                                        >
                                          <ul>
                                            <li>{item2.content}</li>
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>
                                    No accordion data available for this
                                    category.
                                  </p>
                                )}
                              </div>

                              {/* <div className="section__inner">
                                <h2
                                  id="paragraph-18615-title"
                                  className="section__title"
                                >
                                  Accessible resources
                                </h2>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18607"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18607"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Dersim Sign Language (BSL) Guides
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18607"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18607"
                                  >
                                    <p>
                                      Dersim Sign Language Guides are available
                                      on the{" "}
                                      <a href="/visit/audio-app">
                                        Dersim Museum app
                                      </a>
                                      .
                                    </p>
                                    <p>
                                      You can also access a selection of{" "}
                                      <a href="https://www.youtube.com/channel/UCLfLjjPGUaEMuzbnbN5K_Cw">
                                        BSL films
                                      </a>{" "}
                                      on your own device.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18608"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18608"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Audio Descriptive Guides</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18608"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18608"
                                  >
                                    <p>
                                      Please note the Audio Descriptive Guides
                                      are temporarily unavailable, until further
                                      notice.&nbsp;
                                    </p>
                                    <p>
                                      Access a{" "}
                                      <a href="https://soundcloud.com/britishmuseum/sets/new-audio-descriptive-guide">
                                        selection of tracks
                                      </a>
                                      &nbsp;on your own device.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18609"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18609"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Object handling</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18609"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18609"
                                  >
                                    <div
                                      data-langcode="en"
                                      data-entity-type="media"
                                      data-entity-uuid="3e9de7b3-d079-4151-82e3-ce7d195cd32c"
                                      data-embed-button="media"
                                      data-entity-embed-display="view_mode:media.embed"
                                      data-entity-embed-display-settings="[]"
                                      className="embedded-entity"
                                    >
                                      <figure className="media media-embed media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload not-full-width"
                                          srcSet="/images/Accessibility/southafrica-object-handling-session_1.jpg 400w, /images/Accessibility/southafrica-object-handling-session_4.jpg 750w, /images/Accessibility/southafrica-object-handling-session_2.jpg 1000w, /images/Accessibility/southafrica-object-handling-session_3.jpg 1300w, /images/Accessibility/southafrica-object-handling-session.jpg 1600w"
                                          sizes="100vw"
                                          width={1600}
                                          height={800}
                                          src="/images/Accessibility/southafrica-object-handling-session.jpg"
                                          alt="Two people handling a wooden object at a South Africa object handling session. "
                                        />
                                        <figcaption>
                                          Two people handling a wooden object at
                                          a South Africa object handling
                                          session.&nbsp;
                                        </figcaption>
                                      </figure>
                                    </div>
                                    <p>
                                      Touch objects from the collection and
                                      learn about them from one of our
                                      volunteers at our Hands on desks. Sessions
                                      are free and take place daily from
                                      11.00–16.00,&nbsp;subject to availability,
                                      in the galleries listed below:
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/enlightenment"
                                        data-entity-type="node"
                                        data-entity-uuid="6e4b9f7c-2739-4f56-a367-f3bbc821f644"
                                        data-entity-substitution="canonical"
                                        title="Enlightenment"
                                      >
                                        Room 1
                                      </a>{" "}
                                      - Enlightenment
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/collecting-world"
                                        data-entity-type="node"
                                        data-entity-uuid="af0c1fa2-e201-4943-8d5d-2c6b8b8cbe7d"
                                        data-entity-substitution="canonical"
                                        title="Collecting the world "
                                      >
                                        Room 2
                                      </a>{" "}
                                      - Collecting the world
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/living-and-dying"
                                        data-entity-type="node"
                                        data-entity-uuid="fbd1bdd0-6e33-4a10-9c03-b5833ddd1c6f"
                                        data-entity-substitution="canonical"
                                        title="Living and Dying"
                                      >
                                        Room 24
                                      </a>{" "}
                                      - Living and Dying
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/roman-britain"
                                        data-entity-type="node"
                                        data-entity-uuid="57904f64-d258-4d2c-add2-c2842cd6213c"
                                        data-entity-substitution="canonical"
                                        title="Roman Dersim"
                                      >
                                        Room 49
                                      </a>{" "}
                                      - Roman Dersim
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/money"
                                        data-entity-type="node"
                                        data-entity-uuid="a52c61be-e49d-44c5-8245-5fe7a9b7f57f"
                                        data-entity-substitution="canonical"
                                        title="Money"
                                      >
                                        Room 68
                                      </a>{" "}
                                      - Money gallery
                                    </p>
                                    <p>
                                      <a href="https://islamicworld.britishmuseum.org/">
                                        Room 42–43
                                      </a>{" "}
                                      - The Islamic world
                                    </p>
                                    <p>
                                      <a
                                        href="/collection/galleries/china-and-south-asia"
                                        data-entity-type="node"
                                        data-entity-uuid="b7a989f4-3561-47ed-a786-f0f723756df3"
                                        data-entity-substitution="canonical"
                                        title="China and South Asia"
                                      >
                                        Room 33
                                      </a>{" "}
                                      - China and South Asia
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18610"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18610"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Touch tours</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18610"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18610"
                                  >
                                    <div
                                      data-caption="Two visitors on a Touch tour in the Egyptian sculpture gallery. "
                                      data-langcode="en"
                                      data-entity-type="media"
                                      data-entity-uuid="f1dedc47-0ca7-46c1-a5d2-52d25ac75c1a"
                                      data-embed-button="media"
                                      data-entity-embed-display="view_mode:media.embed"
                                      data-entity-embed-display-settings="[]"
                                      className="embedded-entity"
                                    >
                                      <figure className="media media-embed media-image js-media">
                                        <img
                                          loading="eager"
                                          className="lazyload not-full-width"
                                          srcSet="/images/Accessibility/touch-tour-1000x500_3.jpg 400w, /images/Accessibility/touch-tour-1000x500_2.jpg 750w, /images/Accessibility/touch-tour-1000x500_1.jpg 1000w"
                                          sizes="100vw"
                                          width={1000}
                                          height={500}
                                          src="/images/Accessibility/touch-tour-1000x500.jpg"
                                          alt="Two visitors on a Touch tour in the Egyptian sculpture gallery. "
                                        />
                                        <figcaption>
                                          Two visitors on a Touch tour in the
                                          Egyptian sculpture gallery.&nbsp;
                                        </figcaption>
                                      </figure>
                                    </div>
                                    <h4>The Egyptian sculpture gallery</h4>
                                    <ul>
                                      <li>
                                        A free self-guided or volunteer-led
                                        touch tour is available for the Egyptian
                                        sculpture gallery (
                                        <a
                                          href="/collection/galleries/egyptian-sculpture"
                                          data-entity-type="node"
                                          data-entity-uuid="918e1211-0af3-4fb9-9645-620724aa8d29"
                                          data-entity-substitution="canonical"
                                          title="Egyptian sculpture"
                                        >
                                          Room 4
                                        </a>
                                        ).
                                      </li>
                                      <li>
                                        The tour consists of nine highlight
                                        objects in the Egyptian sculpture
                                        gallery that can be explored by touch.
                                      </li>
                                      <li>
                                        Supporting information for the Touch
                                        tour is available in the following
                                        formats:
                                        <ul>
                                          <li
                                            data-gc-list-depth={1}
                                            data-gc-list-style="bullet"
                                          >
                                            Large print
                                          </li>
                                          <li
                                            data-gc-list-depth={1}
                                            data-gc-list-style="bullet"
                                          >
                                            Tactile drawings with braille
                                            information
                                          </li>
                                          <li
                                            data-gc-list-depth={1}
                                            data-gc-list-style="bullet"
                                          >
                                            Audio on your own smartphone or
                                            tablet
                                          </li>
                                          <li
                                            data-gc-list-depth={1}
                                            data-gc-list-style="bullet"
                                          >
                                            As a Guided Touch tour for blind and
                                            partially sighted visitors to the
                                            Museum (advance booking only)
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        Visitors wishing to go on a self-guided
                                        Touch tour should go to the Information
                                        Desk in the Great Court to collect Touch
                                        tour identification, large print and
                                        braille books.
                                      </li>
                                      <li>
                                        The audio-descriptive guide can be
                                        downloaded below, along with the
                                        contents for the large print guide and
                                        the tactile drawings and braille book.
                                      </li>
                                      <li>
                                        Please note audio information is only
                                        available on your own smartphone, tablet
                                        or MP3 Player.
                                      </li>
                                      <li>
                                        To book a Guided Touch tour, email{" "}
                                        <a href="/cdn-cgi/l/email-protection#f1909292948282b1938398859882999c848294849cdf9e8396">
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="86e7e5e5e3f5f5c6e4f4eff2eff5eeebf3f5e3f3eba8e9f4e1"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>{" "}
                                        at least four weeks in advance of your
                                        visit with the following information:
                                        <ul>
                                          <li>Your contact details</li>
                                          <li>
                                            The number of blind and
                                            partially-sighted people in your
                                            party and the number of access
                                            companions (if applicable)
                                          </li>
                                          <li>Your preferred date and time</li>
                                        </ul>
                                      </li>
                                      <li>
                                        <a
                                          href="/sites/default/files/2023-11/Room-4-Touch-Tour-Guide.pdf"
                                          data-gc-link="http://localhost:3000/pdf/Room_4_Touch_Tour_Guide.pdf"
                                        >
                                          Download large print guide
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/sites/default/files/2019-09/Room_4_Touch_Tour_Braille_Book.pdf"
                                          data-gc-link="http://localhost:3000/pdf/Room_4_Touch_Tour_Braille_Book.pdf"
                                        >
                                          Download braille book with raised
                                          drawings
                                        </a>
                                      </li>
                                      <li>
                                        Using a mobile or tablet device?{" "}
                                        <a
                                          href="https://soundcloud.com/britishmuseum/sets/room-4-touch-tour/s-GOZpW"
                                          data-gc-link="https://soundcloud.com/britishmuseum/sets/room-4-touch-tour/s-GOZpW"
                                        >
                                          Play audio on SoundCloud
                                        </a>
                                      </li>
                                    </ul>
                                    <h4>The Parthenon galleries</h4>
                                    <ul>
                                      <li>
                                        A free self-guided tour is available for
                                        the Parthenon galleries (
                                        <a href="http://localhost:3000/collection/galleries/greece-parthenon">
                                          Room 18 &amp; 18b
                                        </a>
                                        ).
                                      </li>
                                      <li>
                                        The tour consists of 12 stops which
                                        provide an introduction to some of the
                                        sculptures that decorated the Parthenon
                                        <ul>
                                          <li>
                                            Supporting information for the Touch
                                            tour is available in the following
                                            formats:
                                          </li>
                                          <li>Large print</li>
                                          <li>
                                            Tactile drawings with braille
                                            information
                                          </li>
                                          <li>
                                            Audio on your own smartphone or
                                            tablet
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        To book a Guided Touch tour, email{" "}
                                        <a href="/cdn-cgi/l/email-protection#adcccecec8dedeedcfdfc4d9c4dec5c0d8dec8d8c083c2dfca">
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="365755555345457654445f425f455e5b434553435b18594451"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>{" "}
                                        at least four weeks in advance of your
                                        visit with the following information:
                                        <ul>
                                          <li>Your contact details</li>
                                          <li>
                                            The number of blind and
                                            partially-sighted people in your
                                            party and the number of access
                                            companions (if applicable)
                                          </li>
                                          <li>Your preferred date and time</li>
                                        </ul>
                                      </li>
                                      <li>
                                        You can listen and enjoy the{" "}
                                        <a href="https://soundcloud.com/britishmuseum/sets/parthenon-gallery-touch-tour">
                                          Audio Description on our SoundCloud
                                          channel
                                        </a>
                                        .
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18611"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18611"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> Large print guides</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18611"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18611"
                                  >
                                    <ul>
                                      <li>
                                        Large print guides for selected
                                        galleries and some temporary exhibitions
                                        are available to download as a PDF from
                                        the relevant Gallery pages.
                                      </li>
                                      <li>
                                        Email:{" "}
                                        <a href="/cdn-cgi/l/email-protection#ed8c8e8e889e9ead8f9f8499849e8580989e889880c3829f8a">
                                          <span
                                            className="__cf_email__"
                                            data-cfemail="bfdedcdcdaccccffddcdd6cbd6ccd7d2caccdacad291d0cdd8"
                                          >
                                            [email&nbsp;protected]
                                          </span>
                                        </a>{" "}
                                        for more information.
                                      </li>
                                      <li>
                                        Large print guides are available for all
                                        paid-for exhibitions and are
                                        downloadable from the relevant
                                        exhibition webpage, under the access
                                        tab.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18612"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18612"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Family sensory support backpacks
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18612"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18612"
                                  >
                                    <ul>
                                      <li>
                                        <a
                                          href="/visit/family-visits/backpacks"
                                          data-entity-type="node"
                                          data-entity-uuid="906d1f6f-a94c-4518-9444-27f215b4fee7"
                                          data-entity-substitution="canonical"
                                          title="Backpacks"
                                        >
                                          Sensory support backpacks
                                        </a>{" "}
                                        – designed as a fun way to help families
                                        explore the Museum – are available from
                                        the Families Desk in the Great Court,
                                        which is open on weekends and school
                                        holidays from 10.00–16.30.
                                      </li>
                                      <li>
                                        They include an activity booklet to
                                        guide you around the Museum, giving you
                                        information about the collection and fun
                                        sensory-based activities you can
                                        complete along the route.
                                      </li>
                                      <li>
                                        See the{" "}
                                        <a
                                          href="/visit/family-visits/backpacks"
                                          data-entity-type="node"
                                          data-entity-uuid="906d1f6f-a94c-4518-9444-27f215b4fee7"
                                          data-entity-substitution="canonical"
                                          title="Backpacks"
                                        >
                                          Family backpacks page
                                        </a>{" "}
                                        for more information.
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18613"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18613"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span>
                                        {" "}
                                        Relaxed event resources from home
                                      </span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18613"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18613"
                                  >
                                    <p>
                                      These resources have been adapted from
                                      Early morning explorers event activities
                                      for you to do at home.
                                    </p>
                                    <blockquote>
                                      <ul>
                                        <li>
                                          <a href="http://localhost:3000/sites/default/files/2023-11/Nereid_colouring_sheets.pdf">
                                            Nereid colouring sheets
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/sites/default/files/2023-11/Nereid-sensory-bin.pdf">
                                            Under the sea sensory bin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/sites/default/files/2023-08/Parthenon_Challenge.pdf">
                                            Parthenon challenge
                                          </a>{" "}
                                          and{" "}
                                          <a href="/sites/default/files/2023-11/Parthenon_Challenge_Metope_puzzle.pdf">
                                            metope puzzle sheet
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/sites/default/files/2023-11/EME_Revisited_The_story_of_Odysseus_script.pdf">
                                            Odysseus sensory storytelling
                                            session script
                                          </a>
                                        </li>
                                        <li>
                                          <a href="http://localhost:3000/sites/default/files/2023-11/Build_your_own_Trojan_Horse.pdf">
                                            Build your own Trojan Horse
                                          </a>
                                        </li>
                                      </ul>
                                    </blockquote>
                                  </div>
                                </div>
                                <div
                                  className="accordion__item | js-accordion-item"
                                  data-js-collapse-first="true"
                                >
                                  <h3 className="accordion__heading">
                                    <button
                                      className="accordion__button | js-accordion-btn"
                                      id="accordion-18614"
                                      aria-expanded="false"
                                      aria-controls="accordion-content-18614"
                                    >
                                      <svg
                                        className="icon icon--plus"
                                        role="presentation"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use xlinkHref="#sprite-icon-plus" />
                                      </svg>
                                      <span> SEN students</span>
                                    </button>
                                  </h3>
                                  <div
                                    className="accordion__content | js-accordion-content"
                                    id="accordion-content-18614"
                                    aria-hidden="true"
                                    aria-labelledby="accordion-18614"
                                  >
                                    <p>
                                      The Museum has a range of{" "}
                                      <a
                                        href="/learn/schools/access-and-sen"
                                        data-entity-type="node"
                                        data-entity-uuid="2576e8ac-c8bc-4c03-bce5-22ea58c49b6b"
                                        data-entity-substitution="canonical"
                                        title="Access and SEN "
                                      >
                                        inclusive learning opportunities
                                      </a>{" "}
                                      available for SEN (Special Educational
                                      Needs) schools including taught
                                      handling-sessions and digital workshops.
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </section>
                          <div className="spacer spacer--small-divider" />
                          <section
                            className="paragraph paragraph--type--slice-teaser paragraph--view-mode--default section section--slice-teaser section--z-index-scope section--has-carousel section--bg-white"
                            aria-labelledby="paragraph-6163-title"
                          >
                            <div className="container">
                              <div className="section__inner">
                                <div className="teaser-listing__container">
                                  <h2
                                    id="paragraph-6163-title"
                                    className="section__title teaser-listing__title"
                                  >
                                    You may also be interested in
                                  </h2>
                                  <div className="carousel-container | js-carousel-container">
                                    <div
                                      className="teaser-listing carousel carousel--2-col swiper-container | js-carousel-2-col"
                                      data-items-length={4}
                                      data-slides-to-show={2}
                                    >
                                      <ul className="l-grid l-grid--4-col | teaser-listing__teasers swiper-wrapper">
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    src="/images/Accessibility/image-01.jpg"
                                                  />
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="http://localhost:3000/visit"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Plan your visit
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Find travel, entry and
                                                    facilities information and
                                                    details of our Museum
                                                    activities.&nbsp;
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    src="/images/Accessibility/image-02.webp"
                                                  />
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="http://localhost:3000/exhibitions-events"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Exhibitions and events
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Discover our latest
                                                    exhibitions and events,
                                                    including&nbsp;'Silk Roads'.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    src="/images/Accessibility/image-03.jpg"
                                                  />
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/visit/food-and-drink"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Food and drink
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Try the refined Great Court
                                                    Restaurant, family-friendly
                                                    pizzeria, or a quick bite to
                                                    eat at one of our Great
                                                    Court cafés.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="l-grid__item swiper-slide">
                                          <div className="teaser">
                                            <div className="teaser__wrapper">
                                              <div className="teaser__image-container">
                                                <div className="media media-teaser_landscape media-image js-media">
                                                  <img
                                                    loading="eager"
                                                    className="lazyload"
                                                    width={750}
                                                    height={422}
                                                    src="/images/Accessibility/image-04.jpg"
                                                  />
                                                </div>
                                              </div>
                                              <div className="teaser__content">
                                                <div className="teaser__content-push">
                                                  <h3 className="teaser__title">
                                                    <a
                                                      href="/visit/tours-and-talks"
                                                      className="teaser__anchor"
                                                    >
                                                      <span>
                                                        <span>
                                                          Tours and talks
                                                        </span>
                                                      </span>
                                                      {/* Add visually hidden defacer for screen-reader. Use full stops for reader punctuation. */}
                                                    </a>
                                                  </h3>
                                                  <div className="teaser__summary">
                                                    Get to know the collection
                                                    on a tour, at a talk or at
                                                    our Hands on desks.
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
        <div
          className="pswp print-none"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-hidden="true"
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                />
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              ></button>
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              ></button>
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="loading-overlay print-none | js-loading-overlay">
          <svg
            className="loading-overlay__icon"
            width="120px"
            height="120px"
            role="presentation"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ background: "none" }}
          >
            <circle
              cx={50}
              cy={50}
              fill="none"
              stroke="#ffffff"
              strokeWidth={10}
              r={35}
              strokeDasharray="164.93361431346415 56.97787143782138"
              transform="rotate(167.878 50 50)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
