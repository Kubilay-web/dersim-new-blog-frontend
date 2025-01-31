import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Visit from "./pages/Visit/Visit";
import FamilyVisit from "./pages/FamilyVisit/FamilyVisit";
import GroupVisit from "./pages/GroupVisit/GroupVisit";
import AudioApp from "./pages/Audioapp/AudioApp";
import OutTours from "./pages/OutTours/OutTours";
import TourAndTalk from "./pages/TourAndTalks/TourAndTalk";
import ObjectTrail from "./pages/ObjectTrail/ObjectTrail";
import Accessibility from "./pages/Accessibility/Accessibility";
import FoodDrink from "./pages/FoodDrink/FoodDrink";
import LateOpen from "./pages/LateOpen/LateOpen";
import MuseumMap from "./pages/MuseumMap/MuseumMap";
import Exhibition from "./pages/Exhibition/Exhibition";
import Collection from "./pages/Collection/Collection";
import CollectionGalery from "./pages/CollectionGalery/CollectionGalery";
import Blog from "./pages/Blog/Blog";
import Podcast from "./pages/Podcast/Podcast";
import Learn from "./pages/Learn/Learn";
import LearnSchool from "./pages/LearnSchool/LearnSchool";
import Communities from "./pages/Communities/Communities";
import AdultLearning from "./pages/AdultLearning/AdultLearning";
import YoungPeople from "./pages/YoungPeople/YoungPeople";
import Membership from "./pages/Membership/Membership";
import YoungFriend from "./pages/YoungFriend/YoungFriend";
import ExistingMember from "./pages/ExistingMember/ExistingMember";
import Donate from "./pages/Donate/Donate";
import Corporate from "./pages/Corporate/Corporate";
import Patrons from "./pages/Patrons/Patrons";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Volunteer from "./pages/Volunteer/Volunteer";
import ExistPatron from "./pages/ExistPatron/ExistPatron";
import LeaveLegacy from "./pages/LeaveLegacy/LeaveLegacy";
import DersimMuseum from "./pages/DersimMuseum/DersimMuseum";
import Search from "./pages/Search/Search";
import AboutUs from "./pages/AboutUs/AboutUs";
import Govarnance from "./pages/Governance/Govarnance";
import Story from "./pages/Story/Story";
import Jobs from "./pages/Jobs/Jobs";
import Press from "./pages/Press/Press";
import Contact from "./pages/Contact/Contact";
import OurWork from "./pages/OurWork/OurWork";
import Departments from "./pages/Departments/Departments";
import National from "./pages/National/National";
import International from "./pages/International/International";
import Borrow from "./pages/Borrow/Borrow";
import Research from "./pages/Research/Research";
import Projects from "./pages/Projects/Projects";
import Publications from "./pages/Publications/Publications";
import Science from "./pages/Science/Science";
import Commercial from "./pages/Commercial/Commercial";
import Hire from "./pages/Hire/Hire";
import Filming from "./pages/Filming/Filming";
import Licensing from "./pages/Licensing/Licensing";
import CommercialPress from "./pages/CommercialPress/CommercialPress";
import Travel from "./pages/Travel/Travel";
import Resources from "./pages/Resources/Resources";
import Study from "./pages/Study/Study";
import Library from "./pages/Library/Library";
import SilkRoad from "./pages/SilkRoad/SilkRoad";
import HewLocke from "./pages/HewLocke/HewLocke";
import PrintMaker from "./pages/PrintMaker/PrintMaker";
import ExhibitionLocke from "./pages/ExhibitionLocke/ExhibitionLocke";
import CookMedieval from "./pages/CookMedieval/CookMedieval";
import Egypt from "./pages/Egypt/Egypt";
import LoveIdentity from "./pages/LoveIdentity/LoveIdentity";
import Animals from "./pages/Animals/Animals";
import BeyondSand from "./pages/BeyondSand/BeyondSand";
import FarHome from "./pages/FarHome/FarHome";
import SriLanka from "./pages/SriLanka/SriLanka";
import FootSteps from "./pages/FootSteps/FootSteps";
import LittleFeet from "./pages/LittleFeet/LittleFeet";
import DeafLed from "./pages/DeafLed/DeafLed";
import Nexus from "./pages/Nexus/Nexus";
import LittleFeetExplore from "./pages/LittleFeetExplore/LittleFeetExplore";
import Admonitions from "./pages/Admonitions/Admonitions";
import ExhibitionEvents from "./pages/ExhibitionEvents/ExhibitionEvents";
import VisitMember from "./pages/VisitMember/VisitMember";
import Admin from "./pages/Admin/Admin";
import PrivateRoute from "./PrivateRoute";
import Masterplan from "./pages/Masterplan/Masterplan";
import BlogDetail from "./components/BlogDetail/BlogDetail";

import NavbarCommerce from "./components/NavbarCommerce/NavbarCommerce";
import CartCommerce from "./components/CartCommerce/CartCommerce";
import HomeCommerce from "./components/HomeCommerce/HomeCommerce";
import Checkout from "./components/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/visit/family-visits" element={<FamilyVisit />} />
          <Route path="/visit/group-visits" element={<GroupVisit />} />
          <Route path="/visit/audio-app" element={<AudioApp />} />
          <Route path="/visit/out-hours-tours" element={<OutTours />} />
          <Route path="/visit/tours-and-talks" element={<TourAndTalk />} />
          <Route path="/visit/object-trails" element={<ObjectTrail />} />
          <Route
            path="/visit/accessibility-museum"
            element={<Accessibility />}
          />
          <Route path="/visit/food-and-drink" element={<FoodDrink />} />
          <Route path="/visit/late-opening-on-fridays" element={<LateOpen />} />
          <Route path="/visit/museum-map" element={<MuseumMap />} />
          <Route path="/exhibitions-events" element={<Exhibition />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/galleries" element={<CollectionGalery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/the-british-museum-podcast" element={<Podcast />} />

          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/schools" element={<LearnSchool />} />
          <Route path="/learn/communities" element={<Communities />} />
          <Route path="/learn/adult-learning" element={<AdultLearning />} />
          <Route path="/learn/young-people" element={<YoungPeople />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/young-friends" element={<YoungFriend />} />
          <Route
            path="/membership/existing-members"
            element={<ExistingMember />}
          />

          <Route path="/support-us/donate" element={<Donate />} />
          <Route path="/support-us/corporate-support" element={<Corporate />} />
          <Route path="/support-us/patrons" element={<Patrons />} />
          <Route
            path="/support-us/supporter-case-studies"
            element={<CaseStudies />}
          />
          <Route path="/support-us/volunteer" element={<Volunteer />} />
          <Route
            path="/support-us/existing-patrons"
            element={<ExistPatron />}
          />
          <Route path="/support-us/leave-legacy" element={<LeaveLegacy />} />
          <Route
            path="/support-us/american-friends-british-museum"
            element={<DersimMuseum />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/governance" element={<Govarnance />} />
          <Route path="/about-us/dersim-museum-story" element={<Story />} />
          <Route path="/about-us/jobs" element={<Jobs />} />
          <Route path="/about-us/press" element={<Press />} />
          <Route path="/about-us/contact-us" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/departments" element={<Departments />} />
          <Route path="/our-work/national" element={<National />} />
          <Route path="/our-work/international" element={<International />} />
          <Route
            path="/our-work/how-borrow-dersim-museum-objects"
            element={<Borrow />}
          />
          <Route path="/research" element={<Research />} />
          <Route path="/research/projects" element={<Projects />} />
          <Route
            path="/research/dersim-museum-publications"
            element={<Publications />}
          />
          <Route
            path="/scientific-study-dersim-museum-collection"
            element={<Science />}
          />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/commercial/commercial-hire" element={<Hire />} />
          <Route path="/commercial/filming" element={<Filming />} />
          <Route path="/commercial/licensing" element={<Licensing />} />
          <Route
            path="/commercial/dersim-museum-press"
            element={<CommercialPress />}
          />
          <Route path="/commercial/travel-trade-tours" element={<Travel />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/study-rooms" element={<Study />} />
          <Route path="/resources/library-and-archive" element={<Library />} />
          <Route path="/exhibitions/silk-roads" element={<SilkRoad />} />
          <Route
            path="/exhibitions/hew-locke-what-have-we-here"
            element={<HewLocke />}
          />

          <Route
            path="/exhibitions/picasso-printmaker"
            element={<PrintMaker />}
          />
          <Route
            path="/exhibitions/hew-locke-what-have-we-here#inside-the-exhibition"
            element={<ExhibitionLocke />}
          />

          <Route
            path="/blog/how-cook-medieval-feast-11-recipes-middle-ages"
            element={<CookMedieval />}
          />

          <Route path="/collection/egypt" element={<Egypt />} />
          <Route
            path="/collection/desire-love-and-identity"
            element={<LoveIdentity />}
          />
          <Route path="/collection/animals" element={<Animals />} />
          <Route
            path="/blog/beyond-sand-and-spices-introduction-silk-roads"
            element={<BeyondSand />}
          />

          <Route
            path="/blog/far-home-travelling-silk-roads"
            element={<FarHome />}
          />

          <Route
            path="/exhibitions/silk-roads/sri-lanka-suffolk-sutton-hoo-and-silk-roads"
            element={<SriLanka />}
          />

          <Route
            path="/blog/footsteps-history-travelling-silk-roads-today"
            element={<FootSteps />}
          />

          <Route
            path="/events/little-feet-silk-roads-exhibition-explorer-17-Jan"
            element={<LittleFeet />}
          />

          <Route
            path="/events/deaf-led-bsl-tour-silk-roads"
            element={<DeafLed />}
          />

          <Route path="/events/istanbul-nexus-silk-roads" element={<Nexus />} />
          <Route
            path="/events/little-feet-explore-silk-roads-10-Feb"
            element={<LittleFeetExplore />}
          />
          <Route
            path="/exhibitions/admonitions-instructress-court-ladies"
            element={<Admonitions />}
          />

          <Route
            path="/exhibitions-events/members-exclusive"
            element={<ExhibitionEvents />}
          />

          <Route
            path="/membership/visiting-as-a-member"
            element={<VisitMember />}
          />

          {/* <Route path="/admin" element={<Admin />} /> */}

          <Route
            path="/admin"
            element={<PrivateRoute element={<Admin />} />} // PrivateRoute ile Admin sayfası korunuyor
          />

          <Route path="/about-us/masterplan" element={<Masterplan />} />

          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />

          <Route
            path="/cart"
            element={
              <>
                <NavbarCommerce />
                <CartCommerce />
              </>
            }
          />

          <Route
            path="/cart/:id"
            element={
              <>
                <NavbarCommerce />
                <CartCommerce />
              </>
            }
          />

          <Route
            path="/shop"
            element={
              <>
                <NavbarCommerce />
                <HomeCommerce />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
