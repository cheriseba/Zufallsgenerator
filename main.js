const themen = [
    "Gewürzgurken","Zahnpasta","Wackelpudding","Urlaub mit den Eltern","Klopapier","Jogginghose","Origami",
    "dein Kompetenzfeld","Sparschäler","Duschvorhang","Kugelschreiber","Parkscheinautomat","Post-its",
    "Wäscheständer","Spülmittel","Briefmarken","Musik mit AI machen","Mangos","Hausschuh","Einkaufswagen",
    "Luftmatratze","Teekanne","Brotdose","Brillenputztuch","Taschenlampe","Fensterbank","Chips-Tüte",
    "Einwegkaffeebecher","Rucksack","Schlüsselanhänger","Wasserkocher","Roller","Lesezeichen",
    "Pizzaschneider","Flaschenöffner","Salzstreuer","Fahrradklingel","Wäscheklammer","Spülbürste","Schlafmaske"
];

const woerter = [
    "Ananas – Glitzer – Bauhelm",
    "Waffel – Roboterarm – Lavalampe",
    "Gummistiefel – Zeitlupe – Pinsel",
    "Känguru – Konfetti – Quietschente",
    "Magnet – Regenbogen – Zahnarzt",
    "Teppich – Popcorn – Stromkabel",
    "Seifenblase – Taschenlampe – Bagger",
    "UFO – Backofen – Keksdose",
    "Tunnel – Dreirad – Stempel",
    "Karton – Seilbahn – Dinoskelett",
    "Marienkäfer – Kopfhörer – Karussell",
    "Socken – Hüpfburg – Mikrofon",
    "Toaster – Sternstaub – Papierschiff",
    "Luftmatratze – Keks – Federboa",
    "Teleskop – Currywurst – Mütze",
    "Sandburg – Drachen – Milchshake",
    "Glühbirne – Laster – Rakete",
    "Pinguin – Wassermelone – Hantel",
    "Zirkuszelt – Buch – Superkleber",
    "Erdbeere – Winkelmesser – Skateboard",
    "Flugzeug – Rasierschaum – Kuscheltier",
    "Gießkanne – Regenmantel – Schatzkarte",
    "Würfel – Perücke – Taschenrechner",
    "Baumhaus – Schlittschuh – Krawatte",
    "Wackelpudding – Klebeband – Globus",
    "Flaschenpost – Labyrinth – Akkordeon",
    "Schneeflocke – Staubsauger – Pizza",
    "Schubkarre – Regenwurm – Saxophon",
    "Wurst – Katzenauge – Holzschuh",
    "Panda – Turbine – Zauberstab",
    "Radiergummi – Fliegenfänger – Thermobecher",
    "Limonade – Hängematte – Bleistift",
    "Zuckerwatte – Morsecode – Pantoffel",
    "Rucksack – Fernrohr – Krakenarm",
    "Armreif – Kängurutasche – Zange",
    "Kronkorken – Nebelmaschine – Tauchermaske",
    "Solarzelle – Föhn – Kartenspiel",
    "Seestern – Schokolade – Taschenmesser",
    "Knopf – Bohnenstange – Drehscheibe",
    "Yeti – Obstkorb – Skatehelm"
];

const atmosphaeren = [
    "ruhig", "traurig", "lustig", "magisch", "melancholisch", "nostalgisch", "chaotisch", "verträumt",
    "aufgeregt", "energiegeladen", "entspannt", "geheimnisvoll", "dramatisch", "euphorisch", "romantisch", "albern",
    "optimistisch", "nachdenklich", "düster", "locker", "verspielt", "harmonisch", "seriös", "freundlich",
    "verträumt", "sorglos", "angespannt", "überdreht", "wild", "ernst", "locker", "kindlich", "genervt", "gereizt",
    "panisch", "ruhig-ernst", "sachlich", "neugierig", "ironisch", "peinlich"
];

// Hilfsfunktion für zufällige Auswahl
function zufall(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let rattling = false;

function slotRun() {
    if (rattling) return;
    rattling = true;
    let steps = 24;
    let interval = 44;
    let count = 0;

    const themaSpan = document.getElementById("thema");
    const wortSpan = document.getElementById("wort");
    const atmosSpan = document.getElementById("atmosphaere");

    // Animationsklassen ggf. entfernen
    themaSpan.classList.remove("active");
    wortSpan.classList.remove("active");
    atmosSpan.classList.remove("active");

    let timer = setInterval(() => {
        themaSpan.textContent = zufall(themen);
        wortSpan.textContent = zufall(woerter);
        atmosSpan.textContent = zufall(atmosphaeren);
        count++;
        if (count > steps) {
            clearInterval(timer);

            // Finale Auswahl & Pop-Effekt:
            themaSpan.textContent = zufall(themen);
            wortSpan.textContent = zufall(woerter);
            atmosSpan.textContent = zufall(atmosphaeren);

            themaSpan.classList.add("active");
            wortSpan.classList.add("active");
            atmosSpan.classList.add("active");

            setTimeout(() => {
                themaSpan.classList.remove("active");
                wortSpan.classList.remove("active");
                atmosSpan.classList.remove("active");
            }, 700);
            rattling = false;
        }
    }, interval);
}

document.getElementById("start").addEventListener("click", slotRun);
window.addEventListener("keydown", function(e) {
    if (e.key === "Enter") slotRun();
});
