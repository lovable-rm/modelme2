import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollingWords from "@/components/ScrollingWords";
import heroBackground from "@/assets/Jennifer_Teles_Model_Me_1.jpg";
// import volLogo from "@/assets/VOL_RGB.svg";
import mouldMeLogo from "@/assets/ModelMe_sub_Negativ_Logo.svg";
import volLogoFooter from "@/assets/VOL_RGB-footer.svg";
import fashion1 from "@/assets/bilder-neu/0F8A0577.jpg";
import fashion2 from "@/assets/bilder-neu/0F8A2417.jpg";
import fashion3 from "@/assets/bilder-neu/0F8A2610.jpg";
import fashion4 from "@/assets/bilder-neu/0F8A2684.jpg";
import fashion5 from "@/assets/bilder-neu/0F8A3074.jpg";
import fashion6 from "@/assets/bilder-neu/0F8A4633.jpg";
import fashion7 from "@/assets/bilder-neu/0F8A6037.jpg";
import testimonialRunway from "@/assets/0F8A5164.jpg";
import bubblesImg from "@/assets/bubbles.png";
import kreisImg from "@/assets/kreis.png";
import arrowDown from "@/assets/Arrow_Down.svg";
import arrowUp from "@/assets/Arrow_Up.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ArticleListSection from "@/components/ArticleListSection";

// Partner logos
import logo1 from "@/assets/logos/imgi_4_vn_farbig-500w.png";
import logo2 from "@/assets/logos/imgi_5_Vol.at-500w.png";
import logo3 from "@/assets/logos/imgi_6_1000x1000px-500w.png";
import logo4 from "@/assets/logos/imgi_7_bURGER-684960cc-500w.png";
import logo5 from "@/assets/logos/imgi_8_Mike-Galeli-bb85eab2-500w.png";
import logo6 from "@/assets/logos/imgi_9_RedBull_Logo-dbe4d092-500w.png";
import logo7 from "@/assets/logos/imgi_10_Black_BG-d812a03d-500w.png";
import logo8 from "@/assets/logos/imgi_11_MO_Catering-500w.png";
import logo9 from "@/assets/logos/imgi_12_Logo_1000x1000px-500w.png";
import logo10 from "@/assets/logos/imgi_14_team-agentur-logo-rgb.pngneu-500w.png";
import logo11 from "@/assets/logos/imgi_15_Logo_black-500w.png";
import logo12 from "@/assets/logos/imgi_16_Lenz_Trachtenmode_Logo-500w.png";
import logo13 from "@/assets/logos/imgi_17_mango-500w.png";
import logo14 from "@/assets/logos/imgi_18_Claus_Tyler_Logo-500w.png";
import logo15 from "@/assets/logos/imgi_19_NEU-500w.png";
import logo16 from "@/assets/logos/imgi_193_Petersturm_WEB-500w.png";
import logo17 from "@/assets/logos/imgi_194_JUKLhealth-Logo-mit-untertitel_black-500w.png";
import logo18 from "@/assets/logos/imgi_195_Black_BG-500w.png";
import logo19 from "@/assets/logos/imgi_20_balck-wihte-500w.png";
import logo20 from "@/assets/logos/imgi_21_Black_Wihte_Logo-500w.png";
import logo21 from "@/assets/logos/imgi_22_black-500w.png";
import logo22 from "@/assets/logos/imgi_23_WEB-500w.png";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Partner logos array
  const partnerLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22
  ];

  useEffect(() => {
    const targetDate = new Date("2026-02-19T17:00:00+01:00").getTime();
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollElement = document.querySelector('[data-scroll-text="deine-reise"]');
          if (scrollElement) {
            const rect = scrollElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress when element is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
              const translateX = -100 + (progress * 200); // From -100% to 100%
              (scrollElement as HTMLElement).style.setProperty('--scroll-x', `${translateX}%`);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const nichtPerfektElement = document.querySelector('[data-scroll-text="nicht-perfekt"]');
          if (nichtPerfektElement) {
            const rect = nichtPerfektElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress when element is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
              const translateX = 30 + (progress * -110); // Start at 30% right, move to -120% left
              (nichtPerfektElement as HTMLElement).style.transform = `translateX(${translateX}%)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const galleryElement = document.querySelector('[data-gallery="horizontal-scroll"]');
          if (galleryElement) {
            const rect = galleryElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress when element is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
              // Calculate how much to translate - reduced speed by 0.5x multiplier
              const maxScroll = galleryElement.scrollWidth - galleryElement.clientWidth;
              const translateX = -(progress * maxScroll * 0.5);
              (galleryElement as HTMLElement).style.transform = `translateX(${translateX}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:min-h-screen w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 20%",
          }}
        />
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 lg:h-[103px] bg-white/50 z-10" />
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 lg:h-[103px] flex items-center justify-between px-4 md:px-8 lg:px-12 z-20">
          {/* <img src={volLogo} alt="VOL.AT Logo" className="h-10 md:h-12 lg:h-16" /> */}
          <img src={mouldMeLogo} alt="Mould Me Logo" className="h-10 md:h-12 lg:h-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Hero Text - positioned at bottom */}
        <h1
          data-scroll-text="nicht-perfekt"
          className="absolute bottom-0.5 left-0 right-0 text-center text-white text-[80px] md:text-7xl lg:text-[118px] xl:text-[200px] px-4 md:pl-12 lg:pl-24 xl:pl-[400px] -mb-2 md:-mb-6 lg:-mb-8 whitespace-nowrap"
          style={{
            fontFamily: "norman-variable, sans-serif",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "110%",
            fontFeatureSettings: "'liga' off, 'clig' off",
            mixBlendMode: "exclusion",
            transform: "translateX(30%)",
          }}
        >
          Nicht Perfekt?
        </h1>
      </section>

      {/* Perfekt Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 grid-rows-2 gap-x-4 md:gap-x-8 lg:gap-x-16">
          {/* Top Left - empty */}
          <div></div>
          
          {/* Top Right */}
          <div className="py-24 md:py-48 lg:py-64 flex flex-col items-end">
            <h2
              className="text-lime font-bold text-6xl sm:text-6xl md:text-8xl lg:text-[148px] xl:text-[198px] leading-[110%] -mb-5"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Perfekt.
            </h2>
            <p className="font-inter text-foreground text-lg md:text-lg lg:text-[26px] font-light !leading-[1.3] max-w-2xl mt-4 text-right">
              Schönheit lebt im Unvollkommenen. Sie zeigt sich, wenn Menschen echt sind und sich nicht inszenieren müssen.
              Wenn Ausdruck entsteht, ohne Perfektionsdruck.
            </p>
          </div>
          
          {/* Bottom Left */}
          <div className="pb-8 md:pb-12 lg:pb-16">
            <p className="font-inter text-foreground text-lg md:text-lg lg:text-[26px] font-light !leading-[1.3] max-w-2xl">
              <span className="text-pink font-bold">Model Me</span> stellt genau diese Menschen in den
              Mittelpunkt – Menschen mit Geschichte. Keine glatten Kataloggesichter, sondern Individualität,
              die Haltung hat.
            </p>
          </div>
          
          {/* Bottom Right - empty */}
          <div></div>
        </div>
      </section>

      {/* Horizontal Scrollable Image Gallery */}
      <section id="impressionen" className="w-full bg-white overflow-hidden relative pb-20 md:pb-34 pt-4 md:pt-0">
        <h2
          className="absolute right-4 md:right-8 lg:right-16 xl:right-24 top-auto bottom-[calc(6rem)] md:bottom-[calc(7rem-70px)] lg:bottom-[calc(9rem-70px)] xl:bottom-[calc(11rem-70px)] text-white text-6xl md:text-6xl lg:text-8xl xl:text-[148px] font-bold leading-[110%] pointer-events-none z-10"
          style={{ fontFamily: "norman-variable, sans-serif", mixBlendMode: "difference" }}
        >
          2025
        </h2>
        <h2
          className="absolute left-4 md:left-8 lg:left-16 xl:left-24 top-auto bottom-[calc(10rem+20px)] md:bottom-[calc(15rem)] lg:bottom-[calc(20rem)] xl:bottom-[calc(24rem)] text-white text-6xl md:text-6xl lg:text-8xl xl:text-[148px] font-bold leading-[110%] pointer-events-none z-10"
          style={{ fontFamily: "norman-variable, sans-serif", mixBlendMode: "difference" }}
        >
          Impressionen
        </h2>
        <div data-gallery="horizontal-scroll" className="flex items-center gap-4 md:gap-6 lg:gap-[35px] px-4 md:px-8 lg:px-12 mb-8 md:mb-12" style={{ willChange: 'transform' }}>
          {[fashion1, fashion2, fashion3, fashion4, fashion5, fashion6, fashion7].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fashion model ${index + 1}`}
              className="flex-shrink-0 h-64 md:h-96 lg:h-[500px] xl:h-[600px] w-auto object-cover rounded-2xl"
            />
          ))}
        </div>
        
        {/* Gallery Buttons */}
        {/* <div className="w-full flex justify-center mt-[6rem]">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex h-14 md:h-[67px] px-5 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-lg md:text-lg lg:text-[26px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
            >
              Bildgalerie
            </a>
            <a
              href="#"
              className="inline-flex h-14 md:h-[67px] px-5 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-lg md:text-lg lg:text-[26px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
            >
              Kennenlern-Videos
            </a>
          </div>
        </div> */} 
      </section>

      {/* Modeln heute ist section */}
      <section className="w-full bg-white py-[106px] md:py-[202px] lg:py-[266px] my-[150px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <p
            className="text-foreground text-[25px] md:text-5xl lg:text-6xl xl:text-[68px] font-black leading-[110%] tracking-tight whitespace-nowrap"
            style={{ fontFamily: "Public Sans" }}
          >
            Modeln heute ist{" "}
            <ScrollingWords 
              words={["anders", "individuell", "ausdrucksstark", "einfach du"]} 
              className="text-lime font-bold"
              style={{ fontFamily: "norman-variable, sans-serif" }}
              mobileBottom="-2px"
            />
          </p>
        </div>
      </section>

      {/* Deine Reise bei section */}
      <section id="die-reise" className="w-full bg-white overflow-hidden">
        <div className="w-full">
          <p
            data-scroll-text="deine-reise"
            className="text-black font-bold text-6xl sm:text-6xl md:text-7xl lg:text-[118px] xl:text-[198px] leading-[109%] whitespace-nowrap"
            style={{ 
              fontFamily: "norman-variable, sans-serif",
              transform: "translateX(var(--scroll-x, -100%))",
            }}
          >
            Deine Reise bei
          </p>
        </div>

        {/* Black section */}
        <div className="w-full bg-black pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2
              className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[148px] leading-[110%] mb-12 md:mb-24 lg:mb-32"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Model Me
            </h2>

            <div className="flex flex-col gap-16 md:gap-24 lg:gap-36">
              {/* Step 01 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
                <p
                  className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[148px] leading-[110%] md:min-w-[150px] lg:min-w-[250px] xl:min-w-[350px] flex-shrink-0"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  01
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
                  <p
                    className="text-white text-3xl md:text-3xl lg:text-5xl xl:text-[68px] font-black leading-[110%]"
                    style={{ fontFamily: "Public Sans" }}
                  >
                    Casting – dein Startmoment
                  </p>
                  <p className="text-white font-inter text-base md:text-lg lg:text-xl xl:text-[26px] font-light !leading-[1.3] max-w-3xl">
                    <span className="text-lime font-bold">Model Me</span> beginnt mit einem offenen Casting, bei
                    dem sich jede:r bewerben kann – unabhängig von Kleidergröße, Alter oder Erfahrung. Hier geht es darum, zu zeigen, wer du
                    bist und was dich einzigartig macht.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
                <p
                  className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[148px] leading-[110%] md:min-w-[150px] lg:min-w-[250px] xl:min-w-[350px] flex-shrink-0"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  02
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
                  <p
                    className="text-white text-3xl md:text-3xl lg:text-5xl xl:text-[68px] font-black leading-[110%]"
                    style={{ fontFamily: "Public Sans" }}
                  >
                    Training - gemeinsam wachsen
                  </p>
                  <p className="text-white font-inter text-base md:text-lg lg:text-xl xl:text-[26px] font-light !leading-[1.3] max-w-3xl">
                    Aus allen Bewerber:innen entsteht eine ausgewählte Gruppe, die durch Workshops,
                    Laufstegtraining und professionelle Fotoshootings begleitet wird. In dieser Phase wächst
                    du in deinen Ausdruck hinein: selbstbewusst, mutig und sichtbar.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
                <p
                  className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-[148px] leading-[110%] md:min-w-[150px] lg:min-w-[250px] xl:min-w-[350px] flex-shrink-0"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  03
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
                  <p
                    className="text-white text-3xl md:text-3xl lg:text-5xl xl:text-[68px] font-black leading-[110%]"
                    style={{ fontFamily: "Public Sans" }}
                  >
                    Finale - die große Show
                  </p>
                  <p className="text-white font-inter text-base md:text-lg lg:text-xl xl:text-[26px] font-light !leading-[1.3] max-w-3xl">
                    Der Höhepunkt ist die Award-Show am XX in der Otten Gravour in Hohenems. Dort werden die
                    Gewinner:innen gekürt – und eine Person erhält den Modelvertrag mit der TEAM AGENTUR und
                    läuft für Mike Galeli bei den Düsseldorf Fashion Days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casting 2026 Section */}
      <section className="w-full bg-white py-24 md:py-48 lg:py-64">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <p
            className="text-foreground font-bold text-6xl sm:text-6xl md:text-7xl lg:text-[118px] xl:text-[198px] leading-[110%] text-center mb-12 md:mb-24"
            style={{ fontFamily: "norman-variable, sans-serif" }}
          >
            Casting 2026
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-8 lg:gap-10 flex-wrap">
            {[
              { value: timeLeft.days, label: "TAGE" },
              { value: timeLeft.hours, label: "STUNDEN" },
              { value: timeLeft.minutes, label: "MINUTEN" },
              { value: timeLeft.seconds, label: "SEKUNDEN" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p
                  className="text-foreground text-5xl md:text-5xl lg:text-[68px] font-black leading-[100%]"
                  style={{ fontFamily: "Public Sans" }}
                >
                  {item.value}
                </p>
                <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-light uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 md:mt-24">
            <a
              href="https://form.jotform.com/253023649691360"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 md:h-[67px] px-5 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-lg md:text-lg lg:text-[26px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
            >
              Jetzt anmelden
            </a>
          </div>
        </div>
      </section>

      {/* Video and Image Section with Text Overlay */}
      <section className="w-full bg-white overflow-hidden relative pb-16 md:pb-24 lg:pb-32">
        {/* Text overlay */}
        <h2
          className="absolute left-[50px] md:left-[148px] lg:left-[592px] bottom-[58px] md:bottom-[96px] lg:bottom-[144px] text-white text-7xl sm:text-7xl md:text-7xl lg:text-[118px] xl:text-[198px] font-bold leading-[110%] pointer-events-none z-10 whitespace-nowrap -mb-2 md:-mb-6 lg:-mb-8"
          style={{ fontFamily: "norman-variable, sans-serif", mixBlendMode: "difference" }}
        >
          einfach du
        </h2>
        
        <div className="w-full flex justify-between items-center px-4 md:px-0">
          {/* Video on left with overflow */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:mr-auto ml-0 md:ml-[-5%] lg:ml-[-5%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full md:w-[110%] lg:w-[600px] xl:w-[800px] h-auto lg:h-[500px] xl:h-[650px] rounded-3xl object-cover"
            >
              <source src="/fuer AE Casino.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-24 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <p
            className="text-foreground text-4xl sm:text-4xl md:text-5xl lg:text-[68px] font-black leading-[110%] mb-12 md:mb-16 lg:mb-20"
            style={{ fontFamily: "Public Sans" }}
          >
            Das sagen andere <br className="hidden md:block" /> über{" "}
            <span className="text-[#E76038]">Model Me</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-0">
            {/* Text content - stays in place */}
            <div className="lg:max-w-2xl lg:pr-8">
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                {/* Testimonial 1 */}
                <div>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-light !leading-[1.3]">
                  „Bei Model Me geht es nicht darum, wie gut jemand in ein vorgegebenes Bild passt. Entscheidend ist die Persönlichkeit dahinter und die Geschichte, die jemand mitbringt. Vielfalt ist hier keine Ausnahme, sondern das Prinzip.“
                  </p>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-semibold mt-4 md:mt-5">
                    Tanja Schwendinger, VN-Redakteurin
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-light !leading-[1.3]">
                  „Wir suchen nach Persönlichkeiten, nach einem außergewöhnlichen Look und ganz viel Wandelbarkeit.
                    Bei Model Me geht es vor allem auch um die Ausstrahlung und das gewisse Auftreten. Wichtig sind auch Durchhaltevermögen, Disziplin, Freundlichkeit und eine große Portion Leidenschaft.“
                  </p>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-semibold mt-4 md:mt-5">
                  Simone Sturn, Geschäftsführerin Team Agentur
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-light !leading-[1.3]">
                  „Ich stand lieber im Schatten, als sichtbar zu sein. Heute weiß ich,wer nicht wagt, findet keinen Weg und manchmal beginnt alles mit dem Glauben eines Menschen an dich. Man wächst nicht im Schatten, sondern dort, wo man sich zeigt.“
                  </p>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-[26px] font-semibold mt-4 md:mt-5">
                  Jennifer Teles, Model Me Gewinnerin 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Image - overflows viewport */}
            <div className="lg:self-center -mr-[10%] md:-mr-[15%] lg:-mr-[calc(1rem+5vw)]">
              <img
                src={testimonialRunway}
                alt="Fashion runway show"
                className="w-[120%] md:w-[110%] lg:w-[450px] xl:w-[550px] h-auto lg:h-[400px] xl:h-[500px] rounded-3xl object-cover ml-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alle Antworten Section */}
      <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
        <div className="w-full flex justify-end">
          <div className="relative w-[405px] h-[405px] md:w-[633px] md:h-[633px] lg:w-[822px] lg:h-[822px] xl:w-[1012px] xl:h-[1012px]" style={{ marginRight: '-5%' }}>
            {/* Green bubbles layer */}
            <img
              src={bubblesImg}
              alt=""
              className="absolute inset-0 w-[180%] h-[180%] object-contain"
              style={{ left: '5%', top: '-45%' }}
            />
            {/* Circle with text layer */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={kreisImg}
                alt="Alle Antworten auf deine Fragen"
                className="w-[60%] h-auto"
                style={{ animation: "spin 20s linear infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full bg-white pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2
            className="text-foreground text-6xl md:text-4xl lg:text-5xl xl:text-[68px] font-black leading-[110%] mb-8 md:mb-12"
            style={{ fontFamily: "Public Sans" }}
          >
            FAQ
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Wer kann bei Model Me mitmachen?",
                answer: "Größe, Alter oder Erfahrung spielen keine Rolle. Entscheidend ist, dass du du selbst bist.",
              },
              {
                question: "Brauche ich professionelle Fotos?",
                answer: "Nein. Auch einfache Bilder reichen. Wichtig ist, dass man dich gut erkennt und deine Ausstrahlung sichtbar wird.",
              },
              {
                question: "Kann ich zum Casting jemanden mitbringen?",
                answer: "Ja. Du kannst gerne eine Begleitperson mitnehmen, wenn dir das Sicherheit gibt.",
              },
              {
                question: "Was passiert nach dem Casting?",
                answer: "Aus allen Bewerbungen wird eine Gruppe ausgewählt, die an Workshops, Laufstegtraining und Fotoshootings teilnimmt.",
              },
              {
                question: "Kostet die Teilnahme etwas?",
                answer: "Nein. Die Teilnahme am Casting und am Programm ist kostenlos.",
              },
              {
                question: "Muss ich Erfahrung im Modeln haben?",
                answer: "Nein. Model Me richtet sich ausdrücklich auch an Menschen ohne Vorerfahrung.",
              },
              {
                question: "Wie läuft das Finale ab?",
                answer: "Das Programm endet mit einer Show. Dort werden die Gewinner:innen gekürt.",
              },
              {
                question: "Was kann ich gewinnen?",
                answer: "Ein:e Teilnehmer:in erhält einen Modelvertrag mit der TEAM AGENTUR.",
              },
              {
                question: "Kann ich mich mehrfach bewerben?",
                answer: "Ja. Wenn es dieses Jahr nicht klappt, kannst du es im nächsten Jahr wieder versuchen.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border py-3 md:py-4">
                <AccordionTrigger
                  hideChevron
                  className="flex justify-between items-center w-full hover:no-underline [&[data-state=open]_.arrow-down]:hidden [&[data-state=closed]_.arrow-up]:hidden"
                >
                  <span className="text-foreground font-inter text-base md:text-lg lg:text-xl xl:text-[26px] font-semibold leading-relaxed text-left pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    <img src={arrowDown} alt="" className="arrow-down w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                    <img src={arrowUp} alt="" className="arrow-up w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground font-inter text-base md:text-lg lg:text-xl xl:text-[26px] font-light leading-[1.3] pt-3 md:pt-4 pr-8 md:pr-12">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Mediale Berichterstattung Section */}
      <section className="w-full bg-white mt-24 md:mt-32 lg:mt-48">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <p
            className="text-black font-bold text-6xl md:text-6xl lg:text-8xl xl:text-[148px] leading-[109%]"
            style={{ fontFamily: "norman-variable, sans-serif" }}
          >
            Mediale
          </p>
        </div>

        <div className="w-full bg-black py-12 md:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <h2
              className="text-white font-bold text-5xl md:text-6xl lg:text-8xl xl:text-[148px] leading-[110%] mb-12 md:mb-16 lg:mb-24"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Berichterstattung
            </h2>

            <ArticleListSection />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[68px] font-bold leading-[110%] tracking-tight mb-8 md:mb-12 lg:mb-16 px-4 md:px-8 lg:px-16"
            style={{ fontFamily: "Public Sans" }}
          >
            Unsere Partner
          </h2>
          <div className="relative w-full overflow-hidden">
            <style>{`
              @keyframes scroll-logos {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .logo-scroll {
                animation: scroll-logos 40s linear infinite;
              }
              .logo-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex items-center gap-1 md:gap-5 lg:gap-8 logo-scroll">
              {/* First set of logos */}
              {partnerLogos.map((logo, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((logo, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-6 md:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 lg:gap-12">
            {/* Model Me and Tagline */}
            <div className="flex flex-col gap-2">
              <span className="text-black font-bold text-sm md:text-lg lg:text-xl" style={{ fontFamily: "Public Sans" }}>
                Model Me
              </span>
              <span className="font-inter text-sm md:text-lg lg:text-xl font-light">
                <span className="text-black">Nicht Perfekt? </span>
                <span className="text-lime">Perfekt.</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 md:gap-8">
              <a 
                href="https://www.facebook.com/share/17oQdQzCmA/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold text-sm md:text-lg lg:text-xl hover:text-lime transition-colors" 
                style={{ fontFamily: "Public Sans" }}
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/modelme.at?igsh=aHM1aWx4dmEwMGc4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-bold text-sm md:text-lg lg:text-xl hover:text-lime transition-colors" 
                style={{ fontFamily: "Public Sans" }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Left Navigation */}
            <div className="flex flex-col gap-3 md:gap-4">
              <a href="#die-reise" className="text-black font-inter text-sm md:text-lg lg:text-xl font-light hover:text-lime transition-colors">Die Reise</a>
              <a href="#faq" className="text-black font-inter text-sm md:text-lg lg:text-xl font-light hover:text-lime transition-colors">FAQ</a>
              <a href="#impressionen" className="text-black font-inter text-sm md:text-lg lg:text-xl font-light hover:text-lime transition-colors">Impressionen</a>
            </div>

            {/* Right Navigation */}
            <div className="flex flex-col gap-3 md:gap-4 md:items-end">
              <a href="mailto:corinna.baumann@russmedia.com" className="text-black font-inter text-sm md:text-lg lg:text-xl font-light underline">
                Kontakt
              </a>
              <a href="https://form.jotform.com/253023649691360" className="text-lime font-inter text-sm md:text-lg lg:text-xl font-light underline">
                Zum Casting anmelden
              </a>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="flex justify-center mt-8 md:mt-12">
            <img src={volLogoFooter} alt="VOL.AT Logo" className="h-10 md:h-12 lg:h-14" />
          </div>

          {/* Footer Bottom Text */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 lg:gap-12 mt-6 md:mt-8 text-center">
            <Link to="/impressum" className="text-black font-inter text-xs md:text-sm lg:text-base font-light hover:text-lime transition-colors">
              Impressum & Datenschutz
            </Link>
            <span className="text-black font-inter text-xs md:text-sm lg:text-base font-light">© 2026 Alle Rechte vorbehalten</span>
            <span className="text-black font-inter text-xs md:text-sm lg:text-base font-light">Russmedia Verlag</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
