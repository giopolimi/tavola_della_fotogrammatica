// ============================================================
// TAVOLA PERIODICA DEI GENERI FOTOGRAFICI
// ============================================================

const CATS = {
  science:     { label:"Scientifico",      abbr:" SCIENZA",   bg:[23,95,165],   sym:[133,183,235], border:[12,68,124]  },
  landscape:   { label:"Architettura",     abbr:" ARCHIT.",   bg:[15,110,86],   sym:[93,202,165],  border:[8,80,65]    },
  nature:      { label:"Naturalistica",    abbr:" NATURA",    bg:[50,140,40],   sym:[130,210,100], border:[25,90,15]   },
  landscape2:  { label:"Paesaggio",        abbr:" PAESAGGIO", bg:[15,110,86],   sym:[93,202,165],  border:[8,80,65]    },
  astro:       { label:"Astrofotografia",  abbr:" ASTROFOTO", bg:[28,28,100],   sym:[120,130,220], border:[15,15,70]   },
  travel:      { label:"Viaggio",          abbr:" VIAGGIO",   bg:[180,100,20],  sym:[240,180,90],  border:[110,60,8]   },
  documentary: { label:"Documentaristica", abbr:" DOCUMENT.", bg:[186,117,23],  sym:[250,199,117], border:[99,56,6]    },
  events:      { label:"Eventi",           abbr:" EVENTI",    bg:[100,60,150],  sym:[180,150,220], border:[65,35,110]  },
  action:      { label:"Azione",           abbr:" AZIONE",    bg:[200,60,30],   sym:[240,150,120], border:[130,35,12]  },
  street:      { label:"Urbana",           abbr:" URBANA",    bg:[83,74,183],   sym:[175,169,236], border:[60,52,137]  },
  portrait:    { label:"Ritratto",         abbr:" RITRATTO",  bg:[152,53,86],   sym:[240,153,123], border:[113,43,19]  },
  nude:        { label:"Nudo",             abbr:" NUDO",      bg:[170,80,110],  sym:[230,160,190], border:[110,45,70]  },
  fashion:     { label:"Moda",             abbr:" MODA",      bg:[212,83,126],  sym:[237,147,177], border:[114,36,62]  },
  stilllife:   { label:"Still Life",       abbr:" STILL L.",  bg:[99,153,34],   sym:[151,196,89],  border:[39,80,10]   },
  abstract:    { label:"Astratta",         abbr:" ASTRATTO",  bg:[140,100,180], sym:[200,170,230], border:[90,60,130]  },
  fineart:     { label:"Fine Art",         abbr:" FINE ART",  bg:[80,60,50],    sym:[175,155,130], border:[50,35,25]   },
  technique:   { label:"Tecniche",         abbr:" TECNICHE",  bg:[40,40,40],    sym:[180,180,180], border:[80,80,80]   },
};

// GENRE_GROUPS: il primo item di ogni gruppo è la categoria "padre" (image:'')
// viene usato SOLO per la legenda/info, NON viene disegnato come cella
const GENRE_GROUPS = [
  { cat:'science', items:[
    {id:  1, symbol:'Sg', name:`Scientifica generale`, desc:`Documentazione di esperimenti, fenomeni, oggetti di laboratorio.`, image:'img/foto_sottogenere_93.jpeg', photographer:'Berenice Abbott', date:'1950', categoria:'Scientifica & Tecnica'},
    {id:  2, symbol:'Mi', name:`Microfotografia`, desc:`Soggetti molto piccoli, attraverso microscopio ottico o elettronico.`, image:'img/foto_sottogenere_94.jpg', photographer:'Lennart Nilsson', date:'1965', categoria:'Scientifica & Tecnica'},
    {id:  3, symbol:'Mr', name:`Medica & Radiologica`, desc:`Documentazione clinica, dermatologica, chirurgica, radiografie.`, image:'img/foto_sottogenere_95.jpg', photographer:'Wilhelm Röntgen', date:'1896', categoria:'Scientifica & Tecnica'},
    {id:  4, symbol:'Fr', name:`Forense`, desc:`Scene del crimine, prove. Pioniere: Alphonse Bertillon (fine XIX sec.).`, image:'img/foto_sottogenere_96.jpg', photographer:'Alphonse Bertillon', date:'1914', categoria:'Scientifica & Tecnica'},
    {id:  5, symbol:'Cf', name:`Cronofotografia`, desc:`Decomposizione del movimento in fotografie successive, antesignana del cinema.`, image:'img/foto_sottogenere_97.jpg', photographer:'Étienne-Jules Marey', date:'1890', categoria:'Scientifica & Tecnica'},
  ]},
  { cat:'landscape', items:[
    {id:  6, symbol:'Ty', name:`Tipologica (Düsseldorf)`, desc:`Inventario seriale di edifici/strutture dello stesso tipo, fotografate frontalmente con luce piatta.`, image:'img/W1siZiIsIjMwMzE5OSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg', photographer:'Bernd & Hilla Becher', date:'1988', categoria:'Architettura'},
    {id:  7, symbol:'Ax', name:`Architettura esterni`, desc:`Edificio nel suo contesto, con luce naturale che ne modella i volumi.`, image:'img/Julius-Shulman-Case-Study-House-22-Pierre-Koenig-Los-Angeles-California-scaled.jpeg', photographer:'Julius Shulman', date:'1960', categoria:'Architettura'},
    {id: 8, symbol:'Ai', name:`Architettura interni`, desc:`Spazi interni, materiali, arredi, atmosfere.`, image:'img/MS-04338-2000.jpg', photographer:'Candida Höfer', date:'1998', categoria:'Architettura'},
    {id: 9, symbol:'Uc', name:`Architettura urbana & Costruito`, desc:`Si concentra sul tessuto urbano stratificato.`, image:'img/cour-15-rue-tiquetonne-2e-33ef66-small.jpg', photographer:'Eugène Atget', date:'1907', categoria:'Architettura'},
  ]},
  { cat:'nature', items:[
    {id: 10, symbol:'Bt', name:`Botanica & Flora`, desc:`Piante, fiori, dettagli vegetali, isolati o in habitat.`, image:'img/Karl_Blossfeldt_-_Original_forms_of_art_(Urformen_der_Kunst)_-_(MeisterDrucke-1101526).jpg', photographer:'Karl Blossfeldt', date:'1928', categoria:'Naturalistica'},
    {id: 11, symbol:'Mk', name:`Macro`, desc:`Soggetti molto piccoli con forte ingrandimento. Profondità di campo ridotta, focus stacking.`, image:'img/insect-5.0.0.0.jpg', photographer:'Levon Biss', date:'2016', categoria:'Naturalistica'},
    {id: 12, symbol:'Bd', name:`Avifauna`, desc:`Sottocategoria del wildlife dedicata agli uccelli: in volo, in habitat, in comportamento riproduttivo.`, image:'img/07-greater-bird-of-paradise-courtship-display.jpg', photographer:'Tim Laman', date:'2010', categoria:'Naturalistica'},
    {id: 13, symbol:'Wl', name:`Wildlife`, desc:`Animali nel loro habitat. Si valutano comportamento, momento, luce, distanza.`, image:'img/leopard-seal-offers-diver-paul-nicklen-a-dead-penguin-v0-5TyfCQ5L7zO8UUR5_I8k2SP8o9M8SOpW5JQNGRnJBmM.jpg', photographer:'Paul Nicklen', date:'2006', categoria:'Naturalistica'},
    {id: 14, symbol:'Fp', name:`Fauna polare & Cons.`, desc:`Fotografia della fauna polare e di ecosistemi sensibili, con finalità di conservazione.`, image:'img/foto_sottogenere_102.jpg', photographer:'Paul Nicklen', date:'2006', categoria:'Naturalistica'},
  ]},
  { cat:'landscape2', items:[
    {id: 15, symbol:'Nx', name:`New Topographics`, desc:`Filiazione critica del paesaggio americano: territori modificati dall'uomo, ripresi senza enfasi estetica.`, image:'img/d7hftxdivxxvm.cloudfront.net.jpeg', photographer:'Stephen Shore', date:'1974', categoria:'Paesaggio'},
    {id: 16, symbol:'Pw', name:`Paesaggi atmosferici`, desc:`Derivazione del paesaggio focalizzata sui fenomeni atmosferici (tempeste, uragani, aurore, nebbie).`, image:'img/storm.jpeg', photographer:'Mitch Dobrowner', date:'2009', categoria:'Paesaggio'},
    {id: 17, symbol:'Pn', name:`Paesaggio naturale`, desc:`Montagne, deserti, foreste, fiumi. Tradizione americana: previsualizzazione, zone system.`, image:'img/Adams_The_Tetons_and_the_Snake_River.jpg', photographer:'Ansel Adams', date:'1942', categoria:'Paesaggio'},
    {id: 18, symbol:'Sw', name:`Paesaggio marino`, desc:`Mare e costa come soggetto. Spesso lavora sull'orizzonte, la lunga esposizione.`, image:'img/HS_Sea+4.jpeg', photographer:'Hiroshi Sugimoto', date:'1998', categoria:'Paesaggio'},
    {id: 19, symbol:'Pt', name:`Paesaggio notturno`, desc:`Lunghe esposizioni, scarsa luce, stelle, luna o luci artificiali.`, image:'img/c5995cae82e146b108177a9c83591ddf-san-carlos-long-exposure.jpg', photographer:'Michael Kenna', date:'1992', categoria:'Paesaggio'},
    {id: 20, symbol:'Cs', name:`Paesaggio urbano`, desc:`La città come organismo: skyline, architetture, vie, piazze.`, image:'img/KjiM2rGdIIo2_4800x4800.jpg', photographer:'Andreas Gursky', date:'1993', categoria:'Paesaggio'},
    {id: 21, symbol:'Pa', name:`Paesaggio aereo`, desc:`Vista dall'alto (aereo, elicottero, drone). Grammatica per pattern e astrazione geometrica.`, image:'img/coeur.jpg', photographer:'Yann Arthus-Bertrand', date:'1992', categoria:'Paesaggio'},
    {id: 22, symbol:'Pm', name:`Paesaggio minimalista`, desc:`Composizione ridotta a pochi elementi, ampi vuoti, riduzione tonale.`, image:'img/K13774B010017.jpg', photographer:'Josef Hoflehner', date:'2007', categoria:'Paesaggio'},
  ]},
  { cat:'astro', items:[
    {id: 23, symbol:'Ds', name:`Cielo profondo`, desc:`Galassie, nebulose, ammassi stellari. Telescopi, montature equatoriali.`, image:'img/foto_sottogenere_85.jpeg', photographer:'Adam Block', date:'2019', categoria:'Astrofotografia'},
    {id: 24, symbol:'So', name:`Sistema solare`, desc:`Sole, Luna, pianeti. Tecnica del lucky imaging (migliaia di frame, selezione dei migliori).`, image:'img/foto_sottogenere_86.jpg', photographer:'Damian Peach', date:'2016', categoria:'Astrofotografia'},
    {id: 25, symbol:'Ng', name:`Nightscape`, desc:`Cielo stellato e Via Lattea integrati nel paesaggio terrestre.`, image:'img/foto_sottogenere_87.png', photographer:'Petr Horálek', date:'2015', categoria:'Astrofotografia'},
  ]},
  { cat:'travel', items:[
    {id: 26, symbol:'Rd', name:`Road trip`, desc:`Narra il viaggio su strada attraverso paesaggi, stazioni, motel e scene spontanee.`, image:'img/foto_sottogenere_98.jpg', photographer:'Stephen Shore', date:'1973', categoria:'Viaggio'},
    {id: 27, symbol:'Td', name:`Travel documentary`, desc:`Racconta luoghi, culture e persone con approccio narrativo e documentaristico.`, image:'img/foto_sottogenere_99.jpg', photographer:'Sebastião Salgado', date:'2016', categoria:'Viaggio'},
    {id: 28, symbol:'Ts', name:`Travel snapshot`, desc:`Documenta esperienze personali di viaggio con approccio spontaneo.`, image:'img/foto_sottogenere_100.jpg', photographer:'Martin Parr', date:'1997', categoria:'Viaggio'},
    {id: 29, symbol:'Te', name:`Editoriale turistica`, desc:`Realizza immagini per guide, riviste e promozione turistica.`, image:'img/foto_sottogenere_101.jpg', photographer:'Colin Prior', date:'2021', categoria:'Viaggio'},
  ]},
  { cat:'documentary', items:[
    {id: 30, symbol:'Hi', name:`Storica & archivio`, desc:`Documentazione di eventi e luoghi storici, anche con valore di archivio.`, image:'img/main-image.jpeg', photographer:'Walker Evans', date:'1936', categoria:'Documentaristica'},
    {id: 31, symbol:'Pj', name:`Fotogiornalismo`, desc:`Copertura di eventi di cronaca per stampa periodica, agenzie, settimanali.`, image:'img/robert-capa-falling-soldier.jpeg', photographer:'Robert Capa', date:'1936', categoria:'Documentaristica'},
    {id: 32, symbol:'Wf', name:`Guerra / conflitto`, desc:`Sottofamiglia del fotogiornalismo dedicata a guerre, conflitti armati, post-conflitto.`, image:'img/AR01201_10.jpg', photographer:'Don McCullin', date:'1968', categoria:'Documentaristica'},
    {id: 33, symbol:'Cn', name:`Sociale & umanitaria`, desc:`Documenta condizioni di disuguaglianza, povertà, sfruttamento per finalità di denuncia.`, image:'img/201307F03-KC-MigrantMother-Photo-Portrait-thumbnail-1200x1200.jpg', photographer:'Dorothea Lange', date:'1936', categoria:'Documentaristica'},
    {id: 34, symbol:'Et', name:`Etnografica`, desc:`Studia popolazioni, culture e modi di vita con rigore quasi tassonomico.`, image:'img/2022_NYR_20647_0049_000(edward_sheriff_curtis_the_vanishing_race_navaho_1904051629).jpg', photographer:'Edward S. Curtis', date:'1904', categoria:'Documentaristica'},
    {id: 35, symbol:'Lf', name:`Long-form documentary`, desc:`Progetti di lunga durata che evolvono in libro o mostra, con tema unitario.`, image:'img/Country-Doctor_02.jpg', photographer:'W. Eugene Smith', date:'1948', categoria:'Documentaristica'},
  ]},
  { cat:'events', items:[
    {id: 36, symbol:'Wp', name:`Matrimonio reportage`, desc:`Approccio narrativo non posato che documenta la giornata come reportage.`, image:'img/foto_sottogenere_88.jpg', photographer:'Jeff Ascough', date:'2014', categoria:'Eventi'},
    {id: 37, symbol:'Wd', name:`Matrimonio editoriale`, desc:`Ispirazione fashion, set e luce curati, post-produzione raffinata.`, image:'img/foto_sottogenere_89.jpg', photographer:'Elizabeth Messina', date:'2016', categoria:'Eventi'},
    {id: 38, symbol:'Sp', name:`Spettacoli`, desc:`Riprende performance teatrali, circensi e sceniche cogliendo movimento ed espressione.`, image:'img/foto_sottogenere_90.jpg', photographer:'Annie Leibovitz', date:'2024', categoria:'Eventi'},
    {id: 39, symbol:'Ct', name:`Concerti`, desc:`Documenta performance musicali dal vivo cogliendo energia scenica e movimento.`, image:'img/foto_sottogenere_91.jpg', photographer:'Jim Marshall', date:'1967', categoria:'Eventi'},
    {id: 40, symbol:'Ev', name:`Corporate & pubblici`, desc:`Conferenze, premiazioni, concerti, eventi politici. Affine al fotogiornalismo.`, image:'img/foto_sottogenere_92.jpg', photographer:'Jill Furmanovsky', date:'1972', categoria:'Eventi'},
  ]},
  { cat:'action', items:[
    {id: 41, symbol:'Ac', name:`Action sportiva`, desc:`Coglie il gesto agonistico nel suo apice. Tempi rapidi, ottiche lunghe.`, image:'img/foto_sottogenere_81.jpg', photographer:'Neil Leifer', date:'1965', categoria:'Azione'},
    {id: 42, symbol:'Rz', name:`Fotografia di danza`, desc:`Blocca o enfatizza il movimento coreografico, lavorando su ritmo, luce e postura.`, image:'img/foto_sottogenere_82.jpg', photographer:'Lois Greenfield', date:'1992', categoria:'Azione'},
    {id: 43, symbol:'Ms', name:`Motorsport`, desc:`Gare automobilistiche e motociclistiche. Panning, motion blur controllato.`, image:'img/foto_sottogenere_83.jpg', photographer:'Jesse Alexander', date:'1958', categoria:'Azione'},
    {id: 44, symbol:'Es', name:`Sport estremi`, desc:`Arrampicata, surf, base jumping. Spesso il fotografo è anche praticante.`, image:'img/foto_sottogenere_84.jpg', photographer:'Jimmy Chin', date:'2017', categoria:'Azione'},
  ]},
  { cat:'street', items:[
    {id: 45, symbol:'Sx', name:`Urbana americana`, desc:`Più cruda, energica, frammentaria. Sguardo errante sull'American Way of Life.`, image:'img/W1siZiIsIjQ1ODM3NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg', photographer:'Robert Frank', date:'1955', categoria:'Fotografia Urbana'},
    {id: 46, symbol:'Cl', name:`Urbana a colori`, desc:`Riabilitazione del colore nel linguaggio fotografico autoriale a partire da fine anni '50.`, image:'img/saul-leiter-postmen.jpg', photographer:'Saul Leiter', date:'1952', categoria:'Fotografia Urbana'},
    {id: 47, symbol:'Mc', name:`Urbana classica`, desc:`Codificata dalla scuola francese e dalla Magnum: composizione rigorosa, geometria.`, image:'img/W1siZiIsIjE0NDM3NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', photographer:'Henri Cartier-Bresson', date:'1932', categoria:'Fotografia Urbana'},
    {id: 48, symbol:'Sf', name:`Urbana & Flash`, desc:`Approccio invadente, ravvicinato, spesso con flash diretto. Frontalità che «viola» il soggetto.`, image:'img/gilden10.jpg', photographer:'Bruce Gilden', date:'1992', categoria:'Fotografia Urbana'},
    {id: 49, symbol:'Pv', name:`Urbana giapponese`, desc:`Linguaggio sgranato, sfocato, sovraesposto: estetica are, bure, boke della rivista Provoke (1968-69).`, image:'img/92093.jpg', photographer:'Daido Moriyama', date:'1971', categoria:'Fotografia Urbana'},
  ]},
  { cat:'portrait', items:[
    {id: 50, symbol:'Hc', name:`Headshot & Corporate`, desc:`Ritratto formale, busto o mezzo busto, su fondo neutro, destinato a uso professionale.`, image:'img/Joan_Crawford_-_1936_-_Hurrell.JPG', photographer:'George Hurrell', date:'1936', categoria:'Ritratto'},
    {id: 51, symbol:'Rg', name:`Ritratto di gruppo`, desc:`Più persone legate da relazioni familiari, professionali o sociali.`, image:'img/03-sept-19912.jpg', photographer:'Peter Lindbergh', date:'1991', categoria:'Ritratto'},
    {id: 52, symbol:'Ra', name:`Ritratto ambientale`, desc:`Il soggetto è ritratto nel proprio contesto di vita o lavoro.`, image:'img/W1siZiIsIjE5MDQ4MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg', photographer:'Arnold Newman', date:'1946', categoria:'Ritratto'},
    {id: 53, symbol:'Rs', name:`Ritratto in studio`, desc:`Realizzato in ambiente controllato, con luce artificiale o naturale modellata.`, image:'img/Yousuf-Karsh-Winston-Churchill-Smile.jpg', photographer:'Yousuf Karsh', date:'1941', categoria:'Ritratto'},
    {id: 54, symbol:'Au', name:`Autoritratto`, desc:`Il fotografo è insieme soggetto e oggetto. Strumento di indagine identitaria.`, image:'img/W1siZiIsIjQ1MDExOSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', photographer:'Cindy Sherman', date:'1978', categoria:'Ritratto'},
    {id: 55, symbol:'Rc', name:`Ritratto spontaneo`, desc:`Non posato, spesso colto a soggetto inconsapevole. Si avvicina alla street.`, image:'img/Una-delle-celebre-Marilyn-di-Elliott-Erwitt.png', photographer:'Elliott Erwitt', date:'1956', categoria:'Ritratto'},
    {id: 56, symbol:'Bg', name:`Boudoir & Glamour`, desc:`Ritrattistica intima e sensuale, spesso in ambienti privati o suggestivi.`, image:'img/2013-11-07-ellevvonunwerth_smokinginbed1994.jpg', photographer:'Ellen von Unwerth', date:'1994', categoria:'Ritratto'},
    {id: 57, symbol:'Rp', name:`Ritratto psicologico`, desc:`Punta alla restituzione profonda della soggettività, resa formalmente scarna ma intensa.`, image:'img/W1siZiIsIjE4NDI3OSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg', photographer:'Richard Avedon', date:'1957', categoria:'Ritratto'},
  ]},
  { cat:'nude', items:[
    {id: 58, symbol:'Na', name:`Nudo artistico`, desc:`Approccio plastico-formale, scultoreo. Corpo come paesaggio o forma astratta.`, image:'img/foto_sottogenere_76.png', photographer:'Bill Brandt', date:'1955', categoria:'Nudo'},
    {id: 59, symbol:'Ne', name:`Nudo erotico / Glamour`, desc:`Componente sensuale o esplicita prevalente, spesso al confine con la moda.`, image:'img/foto_sottogenere_77.jpg', photographer:'Ellen von Unwerth', date:'1992', categoria:'Nudo'},
    {id: 60, symbol:'Bz', name:`Boudoir (Nudo)`, desc:`Nudo intimo in interni, con soggetti privati. Si lega al boudoir ritrattistico.`, image:'img/foto_sottogenere_78.jpeg', photographer:'Albert Arthur Allen', date:'1915', categoria:'Nudo'},
    {id: 61, symbol:'Nm', name:`Nudo di massa`, desc:`Corpi nudi come soggetto collettivo, con valenza estetica, politica o di occupazione dello spazio.`, image:'img/foto_sottogenere_79.jpg', photographer:'Spencer Tunick', date:'2003', categoria:'Nudo'},
    {id: 62, symbol:'Mv', name:`Nudo & Movimento`, desc:`Origini ottocentesche dello studio del corpo in azione. Antesignana del cinema.`, image:'img/foto_sottogenere_80.jpg', photographer:'Eadweard Muybridge', date:'1887', categoria:'Nudo'},
  ]},
  { cat:'fashion', items:[
    {id: 63, symbol:'Ck', name:`Catalogo & Lookbook`, desc:`Funzione commerciale: presentazione chiara del prodotto. Set neutri, luce piana.`, image:'img/Prada FW11_Adv Camp 01.jpg', photographer:'Steven Meisel', date:'2004', categoria:'Moda'},
    {id: 64, symbol:'By', name:`Beauty`, desc:`Volti, pelle, trucco, capelli in primissimo piano. Forte cura della luce.`, image:'img/guinevere-paris-199-1550137873.jpg', photographer:'Paolo Roversi', date:'1996', categoria:'Moda'},
    {id: 65, symbol:'Hu', name:`Alta moda (Couture)`, desc:`Iconografia delle collezioni couture: forte cura del set, abito come scultura.`, image:'img/source.jpeg', photographer:'Irving Penn', date:'1950', categoria:'Moda'},
    {id: 66, symbol:'Fe', name:`Editoriale di moda`, desc:`Servizi narrativi pubblicati su riviste (Vogue, Harper's Bazaar). Ampio margine creativo.`, image:'img/15885.jpg', photographer:'Richard Avedon', date:'1955', categoria:'Moda'},
    {id: 67, symbol:'Sh', name:`Street fashion`, desc:`Documenta la moda «in the wild»: stile reale, sfilate viste fuori dalle passerelle.`, image:'img/0316billc-superJumbo-v2.jpg', photographer:'Bill Cunningham', date:'(1978-2016)', categoria:'Moda'},
    {id: 68, symbol:'Vt', name:`Avant-garde fashion`, desc:`Sperimentazione visiva spinta, contaminazione con surrealismo, performance.`, image:'img/d7hftxdivxxvm.cloudfront.net 2.jpeg', photographer:'Nick Knight', date:'2015', categoria:'Moda'},
  ]},
  { cat:'stilllife', items:[
    {id: 69, symbol:'Pd', name:`Product`, desc:`Prodotti commerciali (orologi, bottiglie, cosmetici, automotive). Tecnica avanzata di luce.`, image:'img/EXjWAqjZXeEV6GMQ6nvNdC.jpg', photographer:'Hans Hansen', date:'1968', categoria:'Still Life'},
    {id: 70, symbol:'Fd', name:`Food`, desc:`Cibo come oggetto. Si articola tra editoriale (riviste, libri di cucina) e pubblicitario.`, image:'img/default.jpg', photographer:'Irving Penn', date:'1977', categoria:'Still Life'},
    {id: 71, symbol:'Sa', name:`Still life d'autore`, desc:`Oggetti come pretesto per ricerca formale, simbolica o materica.`, image:'img/90828.jpg', photographer:'Edward Weston', date:'1930', categoria:'Still Life'},
    {id: 72, symbol:'Vn', name:`Tabletop & Vanitas`, desc:`Composizioni su piano. Vanitas riprende la tradizione barocca con simboli della caducità.`, image:'img/d7hftxdivxxvm.cloudfront.net 4.jpeg', photographer:'Joel-Peter Witkin', date:'1992', categoria:'Still Life'},
  ]},
  { cat:'abstract', items:[
    {id: 73, symbol:'Ag', name:`Astratta geometrica`, desc:`Astrazione che parte dal reale (muri, vegetazione, superfici) per estrarne pattern.`, image:'img/W1siZiIsIjE4MjEwNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg', photographer:'Aaron Siskind', date:'1949', categoria:'Astratta'},
    {id: 74, symbol:'Cw', name:`Cameraless / Sperimentale`, desc:`Immagini senza macchina fotografica: fotogrammi, chemigrammi, luminogrammi.`, image:'img/W1siZiIsIjE5NjAiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAyMDAweDIwMDBcdTAwM2UiXV0.jpg', photographer:'Man Ray', date:'1922', categoria:'Astratta'},
    {id: 75, symbol:'Eq', name:`Equivalent / Pittoricista`, desc:`Immagini riconoscibili (nuvole, acqua) usate come metafora emotiva astratta.`, image:'img/Equivalent_MET_DT2980.jpg', photographer:'Alfred Stieglitz', date:'1926', categoria:'Astratta'},
  ]},
  { cat:'fineart', items:[
    {id: 76, symbol:'Tb', name:`Staged / Tableaux vivants`, desc:`Scene costruite e dirette dal fotografo, con attori, set, illuminazione cinematografica.`, image:'img/foto_sottogenere_71.jpg', photographer:'Jeff Wall', date:'2023', categoria:'Fine Art & Concettuale'},
    {id: 77, symbol:'Co', name:`Concettuale (puro)`, desc:`L'idea conta più dell'oggetto. La foto è documento di un'operazione concettuale o seriale.`, image:'img/foto_sottogenere_72.jpg', photographer:'Sophie Calle', date:'2013', categoria:'Fine Art & Concettuale'},
    {id: 78, symbol:'Sr', name:`Surrealista`, desc:`Erede del surrealismo storico: gioco con sogno, inconscio, doppio, manipolazione visiva.`, image:'img/foto_sottogenere_73.jpeg', photographer:'Man Ray', date:'1932', categoria:'Fine Art & Concettuale'},
    {id: 79, symbol:'Di', name:`Diaristica intima`, desc:`Documento autobiografico delle vite del fotografo e del proprio cerchio.`, image:'img/foto_sottogenere_74.jpg', photographer:'Nan Goldin', date:'1984', categoria:'Fine Art & Concettuale'},
    {id: 80, symbol:'Ap', name:`Appropriazione & Post-foto`, desc:`Riuso e citazione di immagini esistenti; dissoluzione del concetto di autorialità.`, image:'img/foto_sottogenere_75.jpg', photographer:'Joan Fontcuberta', date:'1997', categoria:'Fine Art & Concettuale'},
  ]},
];

const TECNICHE_DATA = [
    {id:81, symbol:'Lp', name:`Light Painting`, desc:`Pittura con la luce: in lunga esposizione si «disegna» nello spazio con sorgenti luminose mobili.`, image:'img/foto_tecnica_103.jpg', photographer:'Eric Staller', date:'2004', categoria:'Tecniche & Processi'},
    {id:82, symbol:'Mb', name:`ICM / Motion Blur`, desc:`Intentional Camera Movement: si muove la fotocamera durante l'esposizione per generare scie e astrazioni.`, image:'img/foto_tecnica_105.jpg', photographer:'Ernst Haas', date:'1980', categoria:'Tecniche & Processi'},
    {id:83, symbol:'Dz', name:`Doppia esposizione`, desc:`Sovrapposizione di due o più immagini sullo stesso fotogramma (in ripresa) o in postproduzione.`, image:'img/foto_tecnica_106.jpg', photographer:'Jerry Uelsmann', date:'1969', categoria:'Tecniche & Processi'},
    {id:84, symbol:'Hz', name:`High Speed Photography`, desc:`Tempi brevissimi (1/8000 s e oltre) o flash stroboscopici per «congelare» fenomeni.`, image:'img/foto_tecnica_107.jpg', photographer:'Harold Edgerton', date:'1964', categoria:'Tecniche & Processi'},
    {id:85, symbol:'If', name:`Infrarosso (IR)`, desc:`Sensibilità a lunghezze d'onda oltre il rosso visibile. Vegetazione bianca, cieli neri.`, image:'img/foto_tecnica_108.jpg', photographer:'Richard Mosse', date:'2012', categoria:'Tecniche & Processi'},
    {id:86, symbol:'Uf', name:`UV & Fluorescenza`, desc:`Fotografia in luce ultravioletta (riflessa o di fluorescenza indotta). Usi scientifici e artistici.`, image:'img/foto_tecnica_109.jpg', photographer:'Bjørn Rørslett', date:'2000', categoria:'Tecniche & Processi'},
    {id:87, symbol:'Ph', name:`Pinhole (Stenopeico)`, desc:`Macchina senza obiettivo: un foro sottile proietta l'immagine sul piano sensibile.`, image:'img/foto_tecnica_110.jpg', photographer:'Abelardo Morell', date:'1996', categoria:'Tecniche & Processi'},
    {id:88, symbol:'Vr', name:`VR / 360°`, desc:`Cattura sferica del campo visivo. Restituzione su visore VR o web immersivo.`, image:'img/foto_tecnica_111.jpg', photographer:'Anonimo', date:'2017', categoria:'Tecniche & Processi'},
    {id:89, symbol:'Aj', name:`AI & Generativa`, desc:`Immagini sintetiche prodotte da modelli generativi o ibridizzazione di fotografie reali con AI.`, image:'img/foto_tecnica_112.png', photographer:'Boris Eldagsen', date:'2022', categoria:'Tecniche & Processi'},
    {id:90, symbol:'Dg', name:`Dagherrotipo`, desc:`Primo processo fotografico commerciale (1839): lastra di rame argentata.`, image:'img/foto_tecnica_113.jpg', photographer:'Louis Daguerre', date:'1838', categoria:'Tecniche & Processi'},
    {id:91, symbol:'Wc', name:`Wet Plate Collodion`, desc:`Lastra di vetro rivestita di collodio iodurato, esposta e sviluppata ancora umida (1851).`, image:'img/foto_tecnica_114.jpg', photographer:'Frederick Scott Archer', date:'1855', categoria:'Tecniche & Processi'},
    {id:92, symbol:'Cy', name:`Cianotipia`, desc:`Stampa a contatto con sali ferrici. Tonalità caratteristica blu di Prussia.`, image:'img/foto_tecnica_115.jpg', photographer:'Anna Atkins', date:'1861', categoria:'Tecniche & Processi'},
    {id:93, symbol:'Pl', name:`Platino/Palladio`, desc:`Stampa a contatto con sali di platino (e/o palladio). Eccezionale gamma tonale.`, image:'img/foto_tecnica_116.jpg', photographer:'Peter Henry Emerson', date:'1885', categoria:'Tecniche & Processi'},
    {id:94, symbol:'Gb', name:`Gomma bicromatata`, desc:`Emulsione di gomma arabica, bicromato e pigmento spalmata su carta. Standard del pittorialismo.`, image:'img/foto_tecnica_117.jpg', photographer:'Robert Demachy', date:'fine XIX Secolo', categoria:'Tecniche & Processi'},
    {id:95, symbol:'Cm', name:`Cameraless / Fotogramma`, desc:`Formazione dell'immagine senza ottica: fotogrammi, rayogrammi, chemigrammi.`, image:'img/foto_tecnica_118.jpg', photographer:'László Moholy-Nagy', date:'1926', categoria:'Tecniche & Processi'},
];

// ═══════════════════════════════════════════════════════════════
// LAYOUT CONSTANTS
// ═══════════════════════════════════════════════════════════════
const MAX_ROWS          = 6;
const TECNICHE_MAX_COLS = 12;
const GAP               = 3;
const PAD_X             = 30;
const PAD_TOP           = 14;
const HDR_H             = 52;
const SEP_H             = 1;
const LEG_H             = 24;
const EXTRA_GAP         = 20;
const SEP_LINE_H        = 12;
const PANEL_W           = 300;
const PANEL_PAD         = 16;

let cw, ch;
let mainCells  = [];
let extraCells = [];
let totalCols  = 0;
let maxMainCol = 0;
let maxExtraCol = 0;
let extraRows   = 1;

let activeFilter  = 'all';
let selectedGenre = null;
let hoveredGenre  = null;
let images        = {};
let panelOpen     = false;
let panelX        = 0;
let panelTargetX  = 0;

// ── Packing helpers ──────────────────────────────────────────
// Packs ONLY the sub-genre items (all items in each group's items array —
// the category "padre" items have already been removed from GENRE_GROUPS above)
function packGenres(groups, maxR) {
  const placed = [];
  let col = 1, row = 1;
  groups.forEach(g => {
    g.items.forEach(item => {
      placed.push({ genre: { ...item, cat: g.cat }, col, row });
      row++;
      if (row > maxR) { row = 1; col++; }
    });
  });
  return placed;
}

function packTechniques(items, maxCols) {
  const placed = [];
  let col = 1, row = 1;
  items.forEach(item => {
    placed.push({ genre: { ...item, cat: 'technique' }, col, row });
    col++;
    if (col > maxCols) { col = 1; row++; }
  });
  return placed;
}

function buildCells() {
  mainCells  = [];
  extraCells = [];

  const availH  = windowHeight - HDR_H - SEP_H - LEG_H - 10;
  const availW  = windowWidth - PAD_X * 2 - (panelOpen ? PANEL_W : 0);

  const packedMain  = packGenres(GENRE_GROUPS, MAX_ROWS);
  const packedExtra = packTechniques(TECNICHE_DATA, TECNICHE_MAX_COLS);

  maxMainCol  = packedMain .reduce((m, p) => max(m, p.col), 1);
  maxExtraCol = packedExtra.reduce((m, p) => max(m, p.col), 1);
  extraRows   = packedExtra.reduce((m, p) => max(m, p.row), 1);

  totalCols = max(maxMainCol, maxExtraCol);

  cw = floor((availW - GAP * (totalCols - 1)) / totalCols) - 3;
  cw = max(cw, 20);

  const totalRows  = MAX_ROWS + extraRows;
  const totalGaps  = totalRows * GAP + EXTRA_GAP + SEP_LINE_H * 2;
  ch = floor((availH - PAD_TOP - totalGaps) / totalRows) - 4;
  ch = max(ch, 18);

  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const yExtraStart = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP + SEP_LINE_H;

  const mainGridW  = maxMainCol  * cw + (maxMainCol  - 1) * GAP;
  const extraGridW = maxExtraCol * cw + (maxExtraCol - 1) * GAP;

  const centreX   = PAD_X + availW / 2;
  const mainOffX  = centreX - mainGridW  / 2;
  const extraOffX = centreX - extraGridW / 2;

  packedMain.forEach(({ genre, col, row }) => {
    mainCells.push({
      x: mainOffX + (col - 1) * (cw + GAP),
      y: yMainStart + (row - 1) * (ch + GAP),
      w: cw, h: ch, genre
    });
  });

  packedExtra.forEach(({ genre, col, row }) => {
    extraCells.push({
      x: extraOffX + (col - 1) * (cw + GAP),
      y: yExtraStart + (row - 1) * (ch + GAP),
      w: cw, h: ch, genre
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// P5 LIFECYCLE
// ═══════════════════════════════════════════════════════════════
function setup() {
  createCanvas(windowWidth, windowHeight);
  buildCells();
  panelX = panelTargetX = windowWidth + PANEL_W;
  textFont('monospace');
}

function draw() {
  background(13, 13, 13);
  panelX = lerp(panelX, panelTargetX, 0.18);

  drawHeader();
  drawSeparator();
  drawLegend();
  drawRowColLabels();
  drawGridSeparator();
  drawExtraLabel();
  drawCells();
  drawPanel();
}

// ── Header ───────────────────────────────────────────────────
function drawHeader() {
  noStroke();
  fill(212, 168, 67);
  textSize(22);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  text('TAVOLA DELLA FOTOGRAMMATICA', PAD_X, 10);
  fill(90, 86, 82);
  textSize(9.5);
  text('DEI GENERI FOTOGRAFICI', PAD_X, 36);
}

function drawSeparator() {
  stroke(40, 38, 35);
  strokeWeight(0.5);
  line(PAD_X, HDR_H + 1, width - PAD_X, HDR_H + 1);
  noStroke();
}

// ── Legend ───────────────────────────────────────────────────
function drawLegend() {
  const cats = [
    ['all',        [136,136,136], ' TUTTI'],
    ['science',    CATS.science.sym,      CATS.science.abbr],
    ['landscape',  CATS.landscape.sym,    ' ARCHIT.'],
    ['nature',     CATS.nature.sym,       CATS.nature.abbr],
    ['landscape2', CATS.landscape2.sym,   CATS.landscape2.abbr],
    ['astro',      CATS.astro.sym,        CATS.astro.abbr],
    ['travel',     CATS.travel.sym,       CATS.travel.abbr],
    ['documentary',CATS.documentary.sym,  CATS.documentary.abbr],
    ['events',     CATS.events.sym,       CATS.events.abbr],
    ['action',     CATS.action.sym,       CATS.action.abbr],
    ['street',     CATS.street.sym,       CATS.street.abbr],
    ['portrait',   CATS.portrait.sym,     CATS.portrait.abbr],
    ['nude',       CATS.nude.sym,         CATS.nude.abbr],
    ['fashion',    CATS.fashion.sym,      CATS.fashion.abbr],
    ['stilllife',  CATS.stilllife.sym,    CATS.stilllife.abbr],
    ['abstract',   CATS.abstract.sym,     CATS.abstract.abbr],
    ['fineart',    CATS.fineart.sym,      CATS.fineart.abbr],
    ['technique',  CATS.technique.sym,    CATS.technique.abbr],
  ];
  const startY = HDR_H + SEP_H + 1;
  const itemW  = min(90, (width - PAD_X * 2) / cats.length);

  cats.forEach(([key, col, label], i) => {
    const x = PAD_X + i * itemW;
    const isActive = activeFilter === key;

    if (isActive) {
      noStroke();
      fill(25, 25, 25);
      rect(x, startY, itemW - 2, LEG_H - 2, 2);
    }
    fill(col[0], col[1], col[2]);
    noStroke();
    rect(x + 4, startY + LEG_H / 2 - 3, 6, 6, 1);

    fill(isActive ? 195 : 82, isActive ? 193 : 79, isActive ? 189 : 75);
    textSize(9.8);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    text(label, x + 13, startY + LEG_H / 2);
  });
}

// ── Row / col axis labels ────────────────────────────────────
function drawRowColLabels() {
  if (!mainCells.length) return;

  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const yExtraStart = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP + SEP_LINE_H;

  const availW     = windowWidth - PAD_X * 2 - (panelOpen ? PANEL_W : 0);
  const centreX    = PAD_X + availW / 2;
  const mainGridW  = maxMainCol  * cw + (maxMainCol  - 1) * GAP;
  const extraGridW = maxExtraCol * cw + (maxExtraCol - 1) * GAP;
  const mainOffX   = centreX - mainGridW  / 2;
  const extraOffX  = centreX - extraGridW / 2;

  noStroke();
  textStyle(NORMAL);
  textSize(8);
  fill(55, 52, 48);

  textAlign(RIGHT, CENTER);
  for (let r = 1; r <= MAX_ROWS; r++) {
    const y = yMainStart + (r - 1) * (ch + GAP) + ch / 2;
    text(r, mainOffX - 6, y);
  }

  textAlign(CENTER, BOTTOM);
  for (let c = 1; c <= maxMainCol; c++) {
    const x = mainOffX + (c - 1) * (cw + GAP) + cw / 2;
    text(c, x, yMainStart - 3);
  }

  textAlign(RIGHT, CENTER);
  for (let r = 1; r <= extraRows; r++) {
    const y = yExtraStart + (r - 1) * (ch + GAP) + ch / 2;
    text(MAX_ROWS + r, extraOffX - 6, y);
  }

  textAlign(CENTER, BOTTOM);
  for (let c = 1; c <= maxExtraCol; c++) {
    const x = extraOffX + (c - 1) * (cw + GAP) + cw / 2;
    text(c, x, yExtraStart - 3);
  }
}

// ── Separator line between main grid and tecniche grid ───────
function drawGridSeparator() {
  if (!mainCells.length || !extraCells.length) return;

  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const sepY        = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP / 2 + SEP_LINE_H / 2;

  const availW     = windowWidth - PAD_X * 2 - (panelOpen ? PANEL_W : 0);
  const centreX    = PAD_X + availW / 2;
  const mainGridW  = maxMainCol  * cw + (maxMainCol  - 1) * GAP;
  const extraGridW = maxExtraCol * cw + (maxExtraCol - 1) * GAP;
  const mainOffX   = centreX - mainGridW  / 2;
  const extraOffX  = centreX - extraGridW / 2;

  const lineX1 = min(mainOffX, extraOffX) - 14;
  const lineX2 = max(mainOffX + mainGridW, extraOffX + extraGridW) + 14;

  stroke(42, 40, 37);
  strokeWeight(0.5);
  line(lineX1, sepY, lineX2, sepY);
  noStroke();
}

// ── Tecniche section label ────────────────────────────────────
function drawExtraLabel() {
  if (!extraCells.length) return;

  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const yExtraStart = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP + SEP_LINE_H;
  const extraBlockH = extraRows * ch + (extraRows - 1) * GAP;

  const availW     = windowWidth - PAD_X * 2 - (panelOpen ? PANEL_W : 0);
  const centreX    = PAD_X + availW / 2;
  const extraGridW = maxExtraCol * cw + (maxExtraCol - 1) * GAP;
  const extraOffX  = centreX - extraGridW / 2;

  const labelCX = (PAD_X + extraOffX - 14) / 2;
  const labelCY = yExtraStart + extraBlockH / 2;

  push();
  translate(labelCX, labelCY);
  rotate(-HALF_PI);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(110, 106, 100);
  textSize(9);
  text('TECNICHE & PROCESSI', 0, 0);
  pop();
}

// ── Cells ────────────────────────────────────────────────────
function drawCells() {
  mainCells .forEach(c => drawCell(c));
  extraCells.forEach(c => drawCell(c));
}

function truncateName(name, maxW) {
  if (textWidth(name) <= maxW) return name;
  let t = name;
  while (t.length > 1 && textWidth(t + '…') > maxW) t = t.slice(0, -1);
  return t + '…';
}

function drawCell(cell) {
  const g = cell.genre;
  if (!g) return;

  const isHov  = hoveredGenre  && hoveredGenre.id  === g.id;
  const isSel  = selectedGenre && selectedGenre.id === g.id;
  const faded  = activeFilter !== 'all' && g.cat !== activeFilter;
  const c      = CATS[g.cat] || CATS.science;
  const dim    = faded ? 0.07 : 1;

  push();
  translate(cell.x, cell.y);

  fill(c.bg[0], c.bg[1], c.bg[2], 255 * (isHov && !faded ? 0.52 : 0.28) * dim);
  const bA = faded ? 15 : (isSel ? 255 : (isHov ? 170 : 90));
  stroke(c.border[0], c.border[1], c.border[2], bA);
  strokeWeight(isSel ? 1.5 : (isHov ? 1 : 0.5));
  rect(0, 0, cell.w, cell.h, 1);

  if (isSel) {
    noFill();
    stroke(212, 168, 67, 50);
    strokeWeight(1);
    rect(-2, -2, cell.w + 4, cell.h + 4, 2);
  }
  noStroke();

  textSize(max(4, cw * 0.09));
  fill(55, 53, 50, 255 * dim);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  text(g.id, 2, 1);

  const symSz = max(7, min(cw * 0.35, ch * 0.37));
  textSize(symSz);
  textStyle(BOLD);
  fill(c.sym[0], c.sym[1], c.sym[2], 255 * dim);
  textAlign(CENTER, CENTER);
  text(g.symbol, cell.w / 2, cell.h * 0.43);

  const nameSz = max(5.5, min(cw * 0.12, 9));
  textSize(nameSz);
  textStyle(NORMAL);
  fill(118, 115, 110, 255 * dim);
  textAlign(CENTER, BOTTOM);
  text(truncateName(g.name, cell.w - 3), cell.w / 2, cell.h - 2);

  pop();
}

// ═══════════════════════════════════════════════════════════════
// DETAIL PANEL
// ═══════════════════════════════════════════════════════════════
function getNavigableList() {
  const all = [
    ...GENRE_GROUPS.flatMap(g => g.items.map(i => ({ ...i, cat: g.cat }))),
    ...TECNICHE_DATA.map(i => ({ ...i, cat: 'technique' }))
  ];
  return activeFilter === 'all' ? all : all.filter(g => g.cat === activeFilter);
}

function drawWrappedText(txt, x, y, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', cy = y;
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { text(line, x, cy); cy += lineH; line = word; }
    else line = test;
  });
  if (line) text(line, x, cy);
}

function measureWrappedText(txt, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', lines = 1;
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { lines++; line = word; }
    else line = test;
  });
  return lines * lineH;
}

function drawWrappedTextCentered(txt, cx, y, maxW, lineH) {
  const words = txt.split(' ');
  let line = '', cy = y;
  textAlign(CENTER, TOP);
  words.forEach(word => {
    const test = line + (line ? ' ' : '') + word;
    if (textWidth(test) > maxW && line) { text(line, cx, cy); cy += lineH; line = word; }
    else line = test;
  });
  if (line) text(line, cx, cy);
}

function drawPanel() {
  if (!selectedGenre && panelX >= width) return;
  const px = round(panelX);
  const g  = selectedGenre;

  fill(14, 14, 14); noStroke();
  rect(px, 0, PANEL_W, height);
  stroke(30, 30, 30); strokeWeight(0.5);
  line(px, 0, px, height);
  noStroke();

  if (!g) return;

  const c       = CATS[g.cat] || CATS.science;
  const tx      = px + PANEL_PAD;
  const maxW    = PANEL_W - PANEL_PAD * 2;
  const rEdge   = px + PANEL_W - PANEL_PAD;
  const navList = getNavigableList();
  const navIdx  = navList.findIndex(x => x.id === g.id);
  const hasPrev = navIdx > 0;
  const hasNext = navIdx < navList.length - 1;

  let ty = 16;

  if (navList.length > 1) {
    fill(45, 43, 40);
    textSize(7.5); textAlign(LEFT, CENTER); textStyle(NORMAL);
    text(`${navIdx + 1} / ${navList.length}`, tx, ty + 10);
  }

  const closeX = px + PANEL_W - 30;
  const nextX  = closeX - 24;
  const prevX  = nextX  - 24;
  [[prevX, hasPrev, '‹'], [nextX, hasNext, '›'], [closeX, true, '✕']].forEach(([bx, active, ch_]) => {
    fill(active ? 30 : 18, active ? 30 : 18, active ? 28 : 16);
    stroke(36, 36, 34); strokeWeight(0.5);
    rect(bx, ty, 20, 20, 2);
    noStroke();
    fill(active ? 88 : 36, active ? 86 : 34, active ? 83 : 32);
    textSize(10); textAlign(CENTER, CENTER);
    text(ch_, bx + 10, ty + 10);
  });

  ty += 30;
  stroke(24, 24, 22); strokeWeight(0.5);
  line(tx, ty, rEdge, ty);
  noStroke(); ty += 11;

  fill(58, 56, 53); textSize(8); textAlign(LEFT, TOP); textStyle(NORMAL);
  text(`— ${String(g.id).padStart(2, '0')} —`, tx, ty); ty += 14;

  fill(c.sym[0], c.sym[1], c.sym[2]);
  textSize(42); textStyle(BOLD);
  text(g.symbol, tx, ty); ty += 48;

  fill(200, 196, 190); textSize(10.5); textStyle(NORMAL); textAlign(LEFT, TOP);
  if (textWidth(g.name) > maxW) {
    drawWrappedText(g.name, tx, ty, maxW, 14);
    ty += measureWrappedText(g.name, maxW, 14) + 4;
  } else { text(g.name, tx, ty); ty += 15; }

  fill(c.sym[0], c.sym[1], c.sym[2], 190);
  textSize(7.5); textAlign(LEFT, TOP); textStyle(NORMAL);
  text((g.categoria || c.label || g.cat).toUpperCase(), tx, ty); ty += 13;

  stroke(26, 26, 24); strokeWeight(0.5);
  line(tx, ty, rEdge, ty);
  noStroke(); ty += 12;

  const imgW = PANEL_W - PANEL_PAD * 2;
  const imgH = round(imgW * 0.65);

  if (g.image && g.image.length > 0 && images[g.image]) {
    image(images[g.image], tx, ty, imgW, imgH);
  } else {
    fill(16, 16, 16); stroke(26, 26, 24); strokeWeight(0.5);
    rect(tx, ty, imgW, imgH, 2);
    noStroke();
    const c2  = CATS[g.cat] || CATS.science;
    const cx2 = tx + imgW / 2;
    const icY = ty + imgH * 0.42;
    const sz  = min(imgW, imgH) * 0.10;
    fill(c2.sym[0], c2.sym[1], c2.sym[2], 28);
    rectMode(CENTER);
    rect(cx2, icY, sz * 2.8, sz * 2, 3);
    rect(cx2 - sz * 0.5, icY - sz * 1.1, sz * 1.1, sz * 0.7, 2);
    rectMode(CORNER);
    noFill(); stroke(c2.sym[0], c2.sym[1], c2.sym[2], 38); strokeWeight(1);
    ellipse(cx2, icY, sz * 1.4, sz * 1.4);
    noStroke();
    fill(44, 42, 39); textSize(7); textAlign(CENTER, CENTER); textStyle(NORMAL);
    text('nessuna immagine', cx2, ty + imgH * 0.70);
  }

  ty += imgH + 5;

  const hasPhotographer = g.photographer && g.photographer.length > 0;
  const hasDate         = g.date         && g.date.length         > 0;

  if (hasPhotographer || hasDate) {
    const creditParts = [];
    if (hasPhotographer) creditParts.push('© ' + g.photographer);
    if (hasDate)         creditParts.push(g.date);
    const creditLine = creditParts.join('  ·  ');

    fill(58, 56, 53); textSize(7.5); textAlign(RIGHT, TOP); textStyle(NORMAL);
    text(creditLine, rEdge, ty);
    ty += 13;
  } else {
    ty += 3;
  }

  stroke(26, 26, 24); strokeWeight(0.5);
  line(tx, ty, rEdge, ty);
  noStroke(); ty += 10;

  fill(100, 97, 93); textSize(9); textStyle(NORMAL); textAlign(LEFT, TOP);
  drawWrappedText(g.desc || '—', tx, ty, maxW, 15);
}

// ═══════════════════════════════════════════════════════════════
// INTERACTION
// ═══════════════════════════════════════════════════════════════
function getPanelLeft()    { return round(panelX); }
function isOverPanel(mx)   { return panelOpen && mx >= getPanelLeft(); }

function mouseClicked() {
  const mx = mouseX, my = mouseY;
  const px = getPanelLeft();

  if (panelOpen && mx >= px) {
    const closeX = px + PANEL_W - 30;
    const nextX  = closeX - 24;
    const prevX  = nextX  - 24;
    if (mx >= closeX && mx <= closeX + 20 && my >= 16 && my <= 36) { closePanel(); return; }
    if (mx >= prevX  && mx <= prevX  + 20 && my >= 16 && my <= 36) { navigatePanel(-1); return; }
    if (mx >= nextX  && mx <= nextX  + 20 && my >= 16 && my <= 36) { navigatePanel(1);  return; }
    return;
  }

  const legCats = ['all','science','landscape','nature','landscape2','astro','travel',
                   'documentary','events','action','street','portrait','nude','fashion',
                   'stilllife','abstract','fineart','technique'];
  const startY = HDR_H + SEP_H + 1;
  const itemW  = min(90, (width - PAD_X * 2) / legCats.length);
  if (my >= startY && my <= startY + LEG_H) {
    const i = floor((mx - PAD_X) / itemW);
    if (i >= 0 && i < legCats.length) { activeFilter = legCats[i]; return; }
  }

  for (const cell of [...mainCells, ...extraCells]) {
    if (!cell.genre) continue;
    if (panelOpen && cell.x + cell.w >= px) continue;
    if (mx >= cell.x && mx <= cell.x + cell.w && my >= cell.y && my <= cell.y + cell.h) {
      if (activeFilter === 'all' || cell.genre.cat === activeFilter) { openPanel(cell.genre); return; }
    }
  }
  if (selectedGenre && !isOverPanel(mx)) closePanel();
}

function mouseMoved() {
  const px = getPanelLeft();
  let found = null;
  for (const cell of [...mainCells, ...extraCells]) {
    if (!cell.genre) continue;
    if (panelOpen && cell.x + cell.w >= px) continue;
    if (mouseX >= cell.x && mouseX <= cell.x + cell.w &&
        mouseY >= cell.y && mouseY <= cell.y + cell.h) { found = cell.genre; break; }
  }
  if (found !== hoveredGenre) { hoveredGenre = found; cursor(found ? HAND : ARROW); }
}

function windowResized() {
  buildCells();
  resizeCanvas(windowWidth, windowHeight);
  panelX = panelTargetX = width + (panelOpen ? -PANEL_W : PANEL_W);
}

function keyPressed() {
  if (!panelOpen) return;
  if (keyCode === LEFT_ARROW)  navigatePanel(-1);
  if (keyCode === RIGHT_ARROW) navigatePanel(1);
  if (keyCode === ESCAPE)      closePanel();
}

function openPanel(g) {
  selectedGenre = g;
  panelOpen     = true;
  panelTargetX  = width - PANEL_W;
  if (g.image && !images[g.image]) {
    loadImage(g.image, img => { images[g.image] = img; }, () => { images[g.image] = null; });
  }
}

function closePanel() {
  selectedGenre = null;
  panelOpen     = false;
  panelTargetX  = width + PANEL_W;
  cursor(ARROW);
}

function navigatePanel(dir) {
  const list = getNavigableList();
  const idx  = list.findIndex(x => x.id === selectedGenre.id);
  const ni   = idx + dir;
  if (ni >= 0 && ni < list.length) {
    selectedGenre = list[ni];
    if (selectedGenre.image && !images[selectedGenre.image]) {
      loadImage(selectedGenre.image,
        img => { images[selectedGenre.image] = img; },
        ()  => { images[selectedGenre.image] = null; });
    }
  }
}