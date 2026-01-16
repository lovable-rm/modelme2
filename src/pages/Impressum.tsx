import { Link } from "react-router-dom";
import volLogo from "@/assets/VOL_RGB.svg";
import modelMeLogo from "@/assets/modelme-logo.png";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-black py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-4">
            <img src={volLogo} alt="VOL.AT Logo" className="h-8 md:h-10 lg:h-12" />
            <img src={modelMeLogo} alt="Model Me Logo" className="h-12 md:h-16 lg:h-20" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="w-full py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <h1 
            className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-[110%] tracking-tight mb-8 md:mb-12"
            style={{ fontFamily: "Public Sans" }}
          >
            Impressum & Datenschutz
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="text-foreground font-inter text-base md:text-lg leading-relaxed space-y-4">
              <p><strong>Russmedia Verlag GmbH</strong></p>
              <p>Gutenbergstraße</p>
              <p>A-6858 Schwarzach</p>
              <p>Tel. +43 (5572) 501-0</p>
              <p>Fax. +43 (5572) 501-227</p>
              <p>
                E-Mail: <a href="mailto:info@russmedia.com" className="text-lime underline">info@russmedia.com</a>
              </p>

              <br />

              <p>UID ATU 35560905</p>
              <p>FN 59302i, LG Feldkirch</p>

              <br />

              <p>Unternehmensgegenstand: Zeitungsverlag und Druckereien</p>
              <p>Wirtschaftskammer Vorarlberg; FB Buch- und Medienwirtschaft; Lt Gewerbliche Dienstleister</p>
              <p>Behörde gem. E-Commerce Gesetz und Gewerbebehörde: BH Bregenz</p>
              <p>Anwendbare Vorschriften: Gewerbeordnung für Österreich, abrufbar unter</p>
              <p>
                <a href="http://www.ris.bka.gv.at/bundesrecht" target="_blank" rel="noopener noreferrer" className="text-lime underline">
                  http://www.ris.bka.gv.at/bundesrecht
                </a>
              </p>

              <br />

              <p>Haben Sie Anregungen oder Fragen zur Homepage?</p>
              <p>
                E-Mail: <a href="mailto:impact@russmedia.com" className="text-lime underline">impact@russmedia.com</a>
              </p>

              <br />

              <p><strong>Foto Credits</strong></p>
              <p>Philipp Steurer</p>
          

              <br />

              <p><strong>AGBs</strong></p>
              <p>Allgemeine Geschäftsbedingungen für Anzeigenkunden</p>
              <p>Allgemeine Geschäftsbedingungen für Druckkunden</p>

              <br />

              <p><strong>Datenschutz</strong></p>
              <p>
                Der Schutz personenbezogener Daten wie Name, Adresse, Telefonnummer oder E-Mail-Adressen ist 
                uns ein großes Anliegen. Ohne Ihre ausdrückliche Zustimmung verwenden wir keine personenbezogenen 
                Informationen. Es liegt alleine in Ihrer Entscheidung, welche Daten Sie uns bekannt geben. Wenn Sie uns 
                personenbezogene Daten zur Verfügung stellen, verwenden wir diese nur zu dem Zweck, für den sie uns 
                rechtlich gebunden, wie wir diese Daten verwenden und verwalten. Personenbezogene Daten verwenden wir der Regel nur 
                zur Beantwortung Ihrer Anfragen, zur Abwicklung von Verträgen mit Ihnen und für die technische Administration. 
                In keinem Fall verkaufen oder anderweitig vermarkten wir Ihre personenbezogenen Daten an Dritte, ohne Ihre 
                ausdrückliche Einwilligung. Wir geben Ihre Daten auch nicht an Dritte weiter, es sei denn, dies ist zur 
                Vertragsabwicklung erforderlich oder Sie haben zuvor ausdrücklich eingewilligt. Sie können Ihre Einwilligung 
                jederzeit mit Wirkung für die Zukunft widerrufen. Wir speichern Ihre personenbezogenen Daten nur solange, 
                wie dies zur Erfüllung der genannten Zwecke erforderlich ist oder wie es die vom Gesetzgeber 
                vorgesehenen vielfältigen Speicherfristen vorsehen. Nach Fortfall des jeweiligen Zweckes bzw. Ablauf dieser Fristen 
                werden die entsprechenden Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht. 
                Wir löschen Ihre Daten, sobald sie für die angegebenen Verarbeitungszwecke nicht mehr benötigt werden und keine 
                gesetzlichen Aufbewahrungsfristen einer Löschung entgegenstehen. Wir handeln stets in Übereinstimmung mit der aktuellen Rechtslage.
              </p>

              <br />

              <p>
                Wenn Sie <a href="https://www.russmedia.com/" target="_blank" rel="noopener noreferrer" className="text-lime underline">https://www.russmedia.com/</a> besuchen, 
                werden die Seiten, die Sie sehen, mit einem „Cookie" versehen. Cookies sind kleine Textdateien, die auf Ihrer Festplatte 
                abgelegt werden und die Wiedererkennung ermöglichen, aber keine persönliche Identifikation Ihrer Person zulassen. 
                Sie dienen der Benutzerfreundlichkeit (z.B. Speicherung von Login-Daten). Sie können Ihren Browser so einstellen, 
                dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme 
                von Cookies für bestimmte Fälle oder generell ausschließen. Cookies können jedoch nicht den Besucher selbst identifizieren, 
                sondern nur den von diesem verwendeten Computer.
              </p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 md:mt-16">
            <Link 
              to="/"
              className="inline-flex h-12 md:h-14 px-6 md:px-8 items-center justify-center rounded border-2 border-foreground text-foreground font-inter text-base md:text-lg font-bold hover:bg-foreground hover:text-background transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black py-8 md:py-12 mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <span className="text-white font-inter text-sm font-light">
            © 2026 Russmedia Verlag GmbH - Alle Rechte vorbehalten
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
