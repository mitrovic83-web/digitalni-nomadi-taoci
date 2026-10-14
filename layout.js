document.addEventListener("DOMContentLoaded", function () {

    // 1. Lista  edukativnih članaka i vodiča za ticker
    const artikliTicker = [
        { naslov: "🔥 Konzumacija vs. Pismenost: Razbijanje mita o „digitalnim urođenicima”", link: "konzumacija-vs-pismenost.html" },
        { naslov: "🚨 Zaštita podataka: Kako prepoznati phishing i sačuvati privatnost", link: "zastita-podataka.html" },
        { naslov: "🤖 AI: Pametni kopilot ili zamena za razmišljanje?", link: "ai-mladi.html" },
        { naslov: "📊 Stvarna pismenost mladih: Analiza navika, veština i prepreka", link: "stvarna-pismenost-istrazivanje.html" },
        { naslov: "💻 Rad u digitalnom okruženju: Veštine i kultura asinhrone komunikacije", link: "rad-u-digitalnom-okruzenju.html" },
        { naslov: "☁️ Cloud alati: Google Workspace i organizacija dokumenata bez haosa", link: "cloud-alati-i-deljenje.html" },
        { naslov: "📝 Vodič: Pravila tehničke pismenosti i pravilo 5x5 za prezentacije", link: "obrada-teksta-i-prezentacije.html" },
        { naslov: "⏱️ Upravljanje vremenom: Kanban metoda i Pomodoro tehnika u praksi", link: "organizacija-vremena-i-zadataka.html" }
    ];

    // 2. Funkcija za nasumični odabir i mešanje članaka
    function generisiNasumicneVesti(lista, brojStavki = 4) {
        const izmešano = [...lista].sort(() => 0.5 - Math.random());
        return izmešano.slice(0, brojStavki).map(a => `<a href="${a.link}">${a.naslov}</a>`).join('');
    }

    const headerHTML = `
    <div class="news-ticker">
        <div class="ticker-title">Najnovije</div>
        <div class="ticker-text-wrapper">
            <div class="ticker-text">
                <!-- Sadržaj se dinamički popunjava dole -->
            </div>
        </div>
    </div>
    <header>
        <div class="nav-container">
            
            <a href="index.html" class="logo">Digitalni<span class="nomadi">Nomadi</span><span class="separator">||</span><span class="taoci">Taoci</span></a>
            <nav>
                <ul>
                    <li><a href="index.html">Početna</a></li>
                    <li class="dropdown">
                        <a href="#">Nomadi vs Taoci</a>
                        <ul class="dropdown-menu">
                            <li><a href="konzumacija-vs-pismenost.html">Konzumacija vs. Pismenost</a></li>
                            <li><a href="zastita-podataka.html">Zaštita podataka i privatnosti</a></li>
                            <li><a href="ai-mladi.html">AI: Kopilot ili zamena za um?</a></li>
                            <li><a href="stvarna-pismenost-istrazivanje.html">Stvarna pismenost mladih</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#">Vodiči</a>
                        <ul class="dropdown-menu">
                            <li><a href="rad-u-digitalnom-okruzenju.html">Rad u digitalnom okruženju</a></li>
                            <li><a href="cloud-alati-i-deljenje.html">Cloud alati i deljenje dokumenata</a></li>
                            <li><a href="obrada-teksta-i-prezentacije.html">Obrada teksta i prezentacije</a></li>
                            <li><a href="organizacija-vremena-i-zadataka.html">Organizacija vremena i zadataka</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#">Ispovesti</a>
                        <ul class="dropdown-menu">
                            <li><a href="price-iz-ucionice.html">Priče iz učionice</a></li>
                            <li><a href="prvi-honorarni-posao.html">Prvi honorarni posao</a></li>
                        </ul>
                    </li>
                    <li><a href="manifest.html">O nama</a></li>
                </ul>
            </nav>
            <div class="header-partner-logos">
                <a href="https://mto.gov.rs/" target="_blank" rel="noopener noreferrer" class="logo-box-hdr white-bg">
                    <img src="logo ministarstvo.jfif" alt="Ministarstvo turizma i omladine" />
                </a>
                <div class="logo-box-hdr">
                    <img src="Logo redizajnirani.png" alt="Istočne Solucije" />
                </div>
            </div>
        </div>
    </header>
    `;

    const footerHTML = `
    <footer>
        <p>&copy; 2026 DigitalniNomadi||Taoci | Edukativni projekat</p>
    </footer>
    `;

    // 3. Ubacivanje HTML-a u kontejnere
    if (document.getElementById('header-container')) {
        document.getElementById('header-container').innerHTML = headerHTML;

        // Dinamičko ubacivanje nasumično izabranih članaka u ticker
        const tickerContainer = document.querySelector('.ticker-text');
        if (tickerContainer) {
            tickerContainer.innerHTML = generisiNasumicneVesti(artikliTicker, 4);
        }
    }

    if (document.getElementById('footer-container')) {
        document.getElementById('footer-container').innerHTML = footerHTML;
    }
});