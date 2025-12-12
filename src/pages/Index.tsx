import { useState, useEffect } from "react";
import ScrollingWords from "@/components/ScrollingWords";
import heroBackground from "@/assets/hero-background.jpg";
import volLogo from "@/assets/VOL_RGB.svg";
import mouldMeLogo from "@/assets/ModelMe_sub_Negativ_Logo.svg";
import volLogoFooter from "@/assets/VOL_RGB-footer.svg";
import fashion1 from "@/assets/fashion-1.jpeg";
import fashion2 from "@/assets/fashion-2.jpeg";
import fashion3 from "@/assets/fashion-3.jpeg";
import fashion4 from "@/assets/fashion-4.jpeg";
import fashion5 from "@/assets/fashion-5.jpeg";
import fashion6 from "@/assets/fashion-6.jpeg";
import fashion7 from "@/assets/fashion-7.jpeg";
import testimonialRunway from "@/assets/testimonial-runway.jpeg";
import bubblesImg from "@/assets/bubbles.png";
import kreisImg from "@/assets/kreis.png";
import arrowDown from "@/assets/Arrow_Down.svg";
import arrowUp from "@/assets/Arrow_Up.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ArticleListSection from "@/components/ArticleListSection";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-19T00:00:00").getTime();
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
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const galleryElement = document.querySelector('[data-gallery="horizontal-scroll"]');
      if (galleryElement) {
        const rect = galleryElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress when element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
          // Calculate how much to translate (from 0% to negative percentage based on content width)
          const maxScroll = galleryElement.scrollWidth - galleryElement.clientWidth;
          const translateX = -(progress * maxScroll);
          (galleryElement as HTMLElement).style.transform = `translateX(${translateX}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 lg:h-[103px] bg-white/50 z-10" />
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 lg:h-[103px] flex items-center justify-between px-4 md:px-8 lg:px-12 z-20">
          <img src={volLogo} alt="VOL.AT Logo" className="h-10 md:h-12 lg:h-16" />
          <img src={mouldMeLogo} alt="Mould Me Logo" className="h-10 md:h-12 lg:h-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Hero Text - positioned at bottom */}
        <h1
          className="absolute bottom-0.5 left-0 right-0 text-center text-white text-[clamp(2rem,10vw,200px)] px-4 md:pl-12 lg:pl-24 xl:pl-[400px]"
          style={{
            fontFamily: "norman-variable, sans-serif",
            fontSize: "clamp(2rem, 10vw, 200px)",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "110%",
            fontFeatureSettings: "'liga' off, 'clig' off",
            mixBlendMode: "exclusion",
          }}
        >
          Nicht Perfekt?
        </h1>
      </section>

      {/* Perfekt Section */}
      <section className="w-full bg-white">
        <div className="mx-auto px-[50px] max-w-[1800px] grid grid-cols-2 grid-rows-2 gap-x-4 md:gap-x-8 lg:gap-x-16">
          {/* Top Left - empty */}
          <div></div>
          
          {/* Top Right */}
          <div className="py-24 md:py-48 lg:py-64 flex flex-col items-end">
            <h2
              className="text-lime font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[150px] xl:text-[200px] leading-[110%] -mb-5"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Perfekt.
            </h2>
            <p className="font-inter text-foreground text-base md:text-xl lg:text-[28px] font-light !leading-[1.3] max-w-2xl mt-4 text-right">
              Schönheit lebt im Unvollkommenen. Sie zeigt sich, wenn Menschen echt sind und sich nicht inszenieren müssen.
              Wenn Ausdruck entsteht, ohne Perfektionsdruck.
            </p>
          </div>
          
          {/* Bottom Left */}
          <div className="pb-24 md:pb-48">
            <p className="font-inter text-foreground text-base md:text-xl lg:text-[28px] font-light !leading-[1.3] max-w-2xl">
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
      <section className="w-full bg-white overflow-hidden relative pb-20 md:pb-24">
        <h2
          className="absolute left-4 sm:left-auto sm:right-4 md:right-12 lg:right-48 bottom-[7rem] sm:bottom-[8rem] md:bottom-[9rem] lg:bottom-40 xl:bottom-40 text-white text-2xl sm:text-4xl md:text-6xl lg:text-[120px] xl:text-[180px] font-bold leading-[110%] pointer-events-none z-10"
          style={{ fontFamily: "norman-variable, sans-serif", mixBlendMode: "difference" }}
        >
          2025
        </h2>
        <h2
          className="absolute left-4 md:left-12 lg:left-48 bottom-[9rem] sm:bottom-[12rem] md:bottom-[15rem] lg:bottom-[22rem] xl:bottom-[26rem] text-white text-2xl sm:text-4xl md:text-6xl lg:text-[120px] xl:text-[180px] font-bold leading-[110%] pointer-events-none z-10"
          style={{ fontFamily: "norman-variable, sans-serif" }}
        >
          Impressionen
        </h2>
        <div data-gallery="horizontal-scroll" className="flex items-center gap-4 md:gap-6 lg:gap-[35px] px-4 md:px-8 lg:px-12 mb-8 md:mb-12" style={{ transition: 'transform 0.05s linear', willChange: 'transform' }}>
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
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex h-12 md:h-[67px] px-4 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-base md:text-xl lg:text-[28px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
            >
              Bildgalerie
            </a>
            <a
              href="#"
              className="inline-flex h-12 md:h-[67px] px-4 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-base md:text-xl lg:text-[28px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
            >
              Kennenlern-Videos
            </a>
          </div>
        </div>
      </section>

      {/* Modeln heute ist section */}
      <section className="w-full bg-white py-24 md:py-48 lg:py-64">
        <div className="max-w-7xl px-4 md:px-8 lg:px-16">
          <p
            className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-[70px] font-black leading-[110%] tracking-tight"
            style={{ fontFamily: "Public Sans" }}
          >
            Modeln heute ist{" "}
            <ScrollingWords 
              words={["anders", "individuell", "ausdrucksstark", "einfach du"]} 
              className="text-lime font-bold"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            />
          </p>
        </div>
      </section>

      {/* Deine Reise bei section */}
      <section className="w-full bg-white overflow-hidden">
        <div className="w-full">
          <p
            data-scroll-text="deine-reise"
            className="text-black font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] leading-[110%] whitespace-nowrap"
            style={{ 
              fontFamily: "norman-variable, sans-serif",
              transform: "translateX(var(--scroll-x, -100%))",
              transition: "transform 0.05s linear"
            }}
          >
            Deine Reise bei
          </p>
        </div>

        {/* Black section */}
        <div className="w-full bg-black pt-2 pb-18 md:pt-2 md:pb-22 lg:pt-10 lg:pb-40">
          <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
            <h2
              className="text-white font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] leading-[110%] mb-12 md:mb-24 lg:mb-48"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Model Me
            </h2>

            <div className="flex flex-col gap-16 md:gap-24 lg:gap-36">
              {/* Step 01 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-[70px]">
                <p
                  className="text-white font-bold text-5xl md:text-8xl lg:text-[150px] xl:text-[200px] leading-[110%] md:min-w-[200px] lg:min-w-[300px] xl:min-w-[400px]"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  01
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-[35px]">
                  <p
                    className="text-white text-xl md:text-4xl lg:text-[70px] font-black leading-[100%]"
                    style={{ fontFamily: "Public Sans", lineHeight: "1" }}
                  >
                    Casting – dein Startmoment
                  </p>
                  <p className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3] max-w-2xl">
                    <span className="text-lime font-bold">Model Me</span> beginnt mit einem offenen Casting, bei
                    dem sich jede:r bewerben kann – unabhängig von Kleidergröße, Alter oder Erfahrung. Hier geht es darum, zu zeigen, wer du
                    bist und was dich einzigartig macht.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-[70px]">
                <p
                  className="text-white font-bold text-5xl md:text-8xl lg:text-[150px] xl:text-[200px] leading-[110%] md:min-w-[200px] lg:min-w-[300px] xl:min-w-[400px]"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  02
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-[35px]">
                  <p
                    className="text-white text-xl md:text-4xl lg:text-[70px] font-black leading-[100%]"
                    style={{ fontFamily: "Public Sans", lineHeight: "1" }}
                  >
                    Training - gemeinsam wachsen
                  </p>
                  <p className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3] max-w-2xl">
                    Aus allen Bewerber:innen entsteht eine ausgewählte Gruppe, die durch Workshops,
                    Laufstegtraining und professionelle Fotoshootings begleitet wird. In dieser Phase wächst
                    du in deinen Ausdruck hinein: selbstbewusst, mutig und sichtbar.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 lg:gap-[70px]">
                <p
                  className="text-white font-bold text-5xl md:text-8xl lg:text-[150px] xl:text-[200px] leading-[110%] md:min-w-[200px] lg:min-w-[300px] xl:min-w-[400px]"
                  style={{ fontFamily: "norman-variable, sans-serif" }}
                >
                  03
                </p>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-[35px]">
                  <p
                    className="text-white text-xl md:text-4xl lg:text-[70px] font-black leading-[100%]"
                    style={{ fontFamily: "Public Sans", lineHeight: "1" }}
                  >
                    Finale - die große Show
                  </p>
                  <p className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3] max-w-2xl">
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
            className="text-foreground font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] leading-[110%] text-center mb-12 md:mb-24"
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
                  className="text-foreground text-3xl md:text-5xl lg:text-[70px] font-black leading-[100%]"
                  style={{ fontFamily: "Public Sans" }}
                >
                  {item.value}
                </p>
                <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-light uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 md:mt-24">
            <a
              href="https://www.model-me.at/#Neu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 md:h-[67px] px-4 md:px-5 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-base md:text-xl lg:text-[28px] font-bold leading-[110%] hover:bg-foreground hover:text-background transition-colors"
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
          className="absolute left-4 md:left-12 lg:left-48 bottom-16 md:bottom-24 lg:bottom-36 text-white text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] font-bold leading-[110%] pointer-events-none z-10 whitespace-nowrap"
          style={{ fontFamily: "norman-variable, sans-serif", mixBlendMode: "difference" }}
        >
          einfach du
        </h2>
        
        <div className="w-full flex justify-between items-center">
          {/* Video on left with overflow */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:mr-auto ml-[-10%] md:ml-[-15%] lg:ml-[-5%]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[140%] md:w-[120%] lg:w-[600px] xl:w-[800px] h-auto lg:h-[500px] xl:h-[650px] rounded-3xl object-cover"
            >
              <source src="/fuer AE Casino.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Image on right with overflow */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:ml-auto mr-[-10%] md:mr-[-15%] lg:mr-[-5%]">
            <img
              src={fashion7}
              alt="Fashion model"
              className="w-[140%] md:w-[120%] lg:w-[600px] xl:w-[800px] h-auto lg:h-[500px] xl:h-[650px] rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-24 md:py-48 overflow-hidden">
        <div className="w-full pl-4 pr-0 md:pl-8 md:pr-0 lg:pl-16 lg:pr-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
            {/* Left column */}
              <div className="flex-1 lg:max-w-2xl">
              <p
                className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-[70px] font-black leading-[110%]"
                style={{ fontFamily: "Public Sans" }}
              >
                Das sagen andere <br className="hidden md:block" /> über{" "}
                <span className="text-[#E76038]">Model Me</span>
              </p>

              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                {/* Testimonial 1 */}
                <div>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3]">
                    Model Me zeigt, dass Ausstrahlung wichtiger ist als Normen. Wir suchen Menschen, die
                    Haltung haben – nicht Menschen, die in Vorgaben passen.
                  </p>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-semibold mt-4 md:mt-5">
                    Jurymitglied
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3]">
                    Ich bin hingegangen, obwohl ich dachte, ich passe nicht rein. Genau das war am Ende
                    mein Vorteil.
                  </p>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-semibold mt-4 md:mt-5">
                    Teilnehmerin
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-light !leading-[1.3]">
                    Im Training hab ich verstanden, dass Haltung nicht mit Perfektion zu tun hat.
                  </p>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-semibold mt-4 md:mt-5">
                    Teilnehmer
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: Image */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 lg:ml-auto mr-[-10%] md:mr-[-15%] lg:mr-[-5%] lg:mt-60">
              <img
                src={testimonialRunway}
                alt="Fashion runway show"
                className="w-[120%] md:w-110%] lg:w-[450px] xl:w-[650px] h-auto lg:h-[400px] xl:h-[500px] rounded-3xl object-cover"
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
      <section className="w-full bg-white pb-16 md:pb-24 lg:pb-32">
        <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
          <h2
            className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-[70px] font-black leading-[110%] mb-8 md:mb-12 lg:mb-16"
            style={{ fontFamily: "Public Sans" }}
          >
            FAQ
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "Wer kann bei Model Me mitmachen?",
                answer: "Jede:r. Größe, Alter oder Erfahrung spielen keine Rolle. Entscheidend ist, dass du du selbst bist.",
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
                answer: "Das Programm endet mit einer Show in der Otten Gravour in Hohenems. Dort werden die Gewinner:innen gekürt.",
              },
              {
                question: "Was kann ich gewinnen?",
                answer: "Ein:e Teilnehmer:in erhält einen Modelvertrag mit der TEAM AGENTUR und läuft bei den Düsseldorf Fashion Days für Mike Galeli.",
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
                  <span className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-semibold leading-relaxed text-left">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <img src={arrowDown} alt="" className="arrow-down w-6 h-6 md:w-8 md:h-8 lg:w-[45px] lg:h-[45px]" />
                    <img src={arrowUp} alt="" className="arrow-up w-6 h-6 md:w-8 md:h-8 lg:w-[45px] lg:h-[45px]" />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground font-inter text-sm md:text-xl lg:text-[28px] font-light leading-[1.3] pt-3 md:pt-4 pr-12 md:pr-16 lg:pr-20">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Mediale Berichterstattung Section */}
      <section className="w-full bg-white mt-24 md:mt-48">
        <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
          <p
            className="text-black font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] leading-[110%]"
            style={{ fontFamily: "norman-variable, sans-serif" }}
          >
            Mediale
          </p>
        </div>

        <div className="w-full bg-black py-12 pb:-10 md:py-10 md:pb-12 lg:py-12 lg:pb-40">
          <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
            <h2
              className="text-white font-bold text-3xl sm:text-5xl md:text-7xl lg:text-[120px] xl:text-[200px] leading-[110%] mb-12 md:mb-24"
              style={{ fontFamily: "norman-variable, sans-serif" }}
            >
              Berichterstattung
            </h2>

            <ArticleListSection />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-white py-16 md:py-24 lg:py-32">
        <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
          <h2
            className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold leading-[110%] tracking-tight"
            style={{ fontFamily: "Public Sans" }}
          >
            Unsere Partner
          </h2>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16">
            <div className="w-32 md:w-48 lg:w-[306px] h-16 md:h-24 lg:h-[120px] bg-muted rounded" />
            <div className="w-32 md:w-48 lg:w-[306px] h-20 md:h-28 lg:h-[148px] bg-muted rounded" />
            <div className="w-16 md:w-20 lg:w-[109px] h-20 md:h-28 lg:h-[148px] bg-muted rounded" />
            <div className="w-40 md:w-64 lg:w-[416px] h-12 md:h-16 lg:h-[98px] bg-muted rounded" />
            <div className="w-20 md:w-28 lg:w-[171px] h-24 md:h-32 lg:h-[187px] bg-muted rounded" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-12 md:py-16 lg:py-20">
        <div className="w-full pl-4 pr-4 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
            {/* Model Me and Tagline */}
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-lg md:text-2xl lg:text-[28px]" style={{ fontFamily: "Public Sans" }}>
                Model Me
              </span>
              <span className="font-inter text-lg md:text-2xl lg:text-[28px] font-light">
                <span className="text-white">Nicht Perfekt? </span>
                <span className="text-lime">Perfekt.</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 md:gap-8">
              <span className="text-white font-bold text-lg md:text-2xl lg:text-[28px]" style={{ fontFamily: "Public Sans" }}>
                Facebook
              </span>
              <span className="text-white font-bold text-lg md:text-2xl lg:text-[28px]" style={{ fontFamily: "Public Sans" }}>
                Instagram
              </span>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-16">
            {/* Left Navigation */}
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-white font-inter text-lg md:text-2xl lg:text-[28px] font-light">Die Reise</span>
              <span className="text-white font-inter text-lg md:text-2xl lg:text-[28px] font-light">FAQ</span>
              <span className="text-white font-inter text-lg md:text-2xl lg:text-[28px] font-light">Impressionen</span>
            </div>

            {/* Right Navigation */}
            <div className="flex flex-col gap-4 md:gap-6 md:items-end">
              <a href="#" className="text-white font-inter text-lg md:text-2xl lg:text-[28px] font-light underline">
                Kontakt
              </a>
              <a href="#" className="text-lime font-inter text-lg md:text-2xl lg:text-[28px] font-light underline">
                Zum Casting anmelden
              </a>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="flex justify-center mt-12 md:mt-16">
            <img src={volLogoFooter} alt="VOL.AT Logo" className="h-10 md:h-12 lg:h-[60px]" />
          </div>

          {/* Footer Bottom Text */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16 mt-8 md:mt-12 text-center">
            <span className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light">Impressum</span>
            <span className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light">© 2026 Alle Rechte vorbehalten</span>
            <span className="text-white font-inter text-sm md:text-xl lg:text-[28px] font-light">Datenschutz</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
