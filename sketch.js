// ============================================================
// TAVOLA PERIODICA DEI GENERI FOTOGRAFICI
// ============================================================

const CATS = {
  science:     { label:"Scientifico",      abbr:"Scienza",   bg:[23,95,165],   sym:[133,183,235], border:[12,68,124]  },
  landscape:   { label:"Architettura",     abbr:"Archit.",   bg:[15,110,86],   sym:[93,202,165],  border:[8,80,65]    },
  nature:      { label:"Naturalistica",    abbr:"Natura",    bg:[50,140,40],   sym:[130,210,100], border:[25,90,15]   },
  landscape2:  { label:"Paesaggio",        abbr:"Paesaggio", bg:[15,110,86],   sym:[93,202,165],  border:[8,80,65]    },
  astro:       { label:"Astrofotografia",  abbr:"Astro",     bg:[28,28,100],   sym:[120,130,220], border:[15,15,70]   },
  travel:      { label:"Viaggio",          abbr:"Viaggio",   bg:[180,100,20],  sym:[240,180,90],  border:[110,60,8]   },
  documentary: { label:"Documentaristica", abbr:"Doc.",      bg:[186,117,23],  sym:[250,199,117], border:[99,56,6]    },
  events:      { label:"Eventi",           abbr:"Eventi",    bg:[100,60,150],  sym:[180,150,220], border:[65,35,110]  },
  action:      { label:"Azione",           abbr:"Azione",    bg:[200,60,30],   sym:[240,150,120], border:[130,35,12]  },
  street:      { label:"Urbana",           abbr:"Urbana",    bg:[83,74,183],   sym:[175,169,236], border:[60,52,137]  },
  portrait:    { label:"Ritratto",         abbr:"Ritratto",  bg:[152,53,86],   sym:[240,153,123], border:[113,43,19]  },
  nude:        { label:"Nudo",             abbr:"Nudo",      bg:[170,80,110],  sym:[230,160,190], border:[110,45,70]  },
  fashion:     { label:"Moda",             abbr:"Moda",      bg:[212,83,126],  sym:[237,147,177], border:[114,36,62]  },
  stilllife:   { label:"Still Life",       abbr:"Still L.",  bg:[99,153,34],   sym:[151,196,89],  border:[39,80,10]   },
  abstract:    { label:"Astratta",         abbr:"Astratto",  bg:[140,100,180], sym:[200,170,230], border:[90,60,130]  },
  fineart:     { label:"Fine Art",         abbr:"Fine Art",  bg:[80,60,50],    sym:[175,155,130], border:[50,35,25]   },
  technique:   { label:"Tecniche",         abbr:"Tecniche",  bg:[40,40,40],    sym:[180,180,180], border:[80,80,80]   },
};

const GENRE_GROUPS = [
  { cat:'science', items:[
    {id:1, symbol:'Sc',name:'Scientifica & Tecnica',  desc:'Strumento di indagine in ambito scientifico, medico, forense. Privilegia accuratezza e riproducibilità. Antesignana del cinema (cronofotografia).',imageDesc:'Fenomeno fisico catturato con stroboscopia o microscopio',categoria:'Scientifica & Tecnica'},
    {id:2, symbol:'Sg',name:'Scientifica generale',   desc:'Documentazione di esperimenti, fenomeni, oggetti di laboratorio.',imageDesc:'Esperimento di laboratorio documentato con rigore',categoria:'Scientifica & Tecnica'},
    {id:3, symbol:'Mi',name:'Microfotografia',        desc:'Soggetti molto piccoli, attraverso microscopio ottico o elettronico.',imageDesc:'Cellula o cristallo visto al microscopio',categoria:'Scientifica & Tecnica'},
    {id:4, symbol:'Mr',name:'Medica & Radiologica',   desc:'Documentazione clinica, dermatologica, chirurgica, radiografie.',imageDesc:'Radiografia o immagine medica diagnostica',categoria:'Scientifica & Tecnica'},
    {id:5, symbol:'Fr',name:'Forense',                desc:'Scene del crimine, prove. Pioniere: Alphonse Bertillon (fine XIX sec.).',imageDesc:'Documentazione forense di scena del crimine',categoria:'Scientifica & Tecnica'},
    {id:6, symbol:'Cf',name:'Cronofotografia',        desc:'Decomposizione del movimento in fotografie successive, antesignana del cinema.',imageDesc:'Sequenza multipla di un movimento su una stessa lastra',categoria:'Scientifica & Tecnica'},
  ]},
  { cat:'landscape', items:[
    {id:7, symbol:'Ar',name:'Architettura',           desc:'Edifici e spazi costruiti, con attenzione a forma, materiali, luce. Usa controllo prospettico (banco ottico, tilt-shift).',imageDesc:'Edificio fotografato con controllo della prospettiva',categoria:'Architettura'},
    {id:8, symbol:'Ty',name:'Tipologica (Düsseldorf)',desc:'Inventario seriale di edifici/strutture dello stesso tipo, fotografate frontalmente con luce piatta.',imageDesc:'Serie di strutture simili in griglia comparativa',categoria:'Architettura'},
    {id:9, symbol:'Ax',name:'Architettura esterni',   desc:'Edificio nel suo contesto, con luce naturale che ne modella i volumi.',imageDesc:"Edificio fotografato all'esterno con luce naturale",categoria:'Architettura'},
    {id:10,symbol:'Ai',name:'Architettura interni',   desc:'Spazi interni, materiali, arredi, atmosfere.',imageDesc:'Interno di edificio con luce diffusa',categoria:'Architettura'},
    {id:11,symbol:'Uc',name:'Arch. urbana & Costruito',desc:'Si concentra sul tessuto urbano stratificato.',imageDesc:'Tessuto urbano stratificato, strade e facciate',categoria:'Architettura'},
  ]},
  { cat:'nature', items:[
    {id:12,symbol:'Nt',name:'Naturalistica',          desc:'Animali, piante, ecosistemi nel loro ambiente, spesso senza intervento umano visibile.',imageDesc:'Animale selvatico nel suo habitat',categoria:'Naturalistica'},
    {id:13,symbol:'Bt',name:'Botanica & Flora',       desc:'Piante, fiori, dettagli vegetali, isolati o in habitat.',imageDesc:'Fiore o pianta con dettaglio botanico',categoria:'Naturalistica'},
    {id:14,symbol:'Mk',name:'Macro',                  desc:'Soggetti molto piccoli con forte ingrandimento. Profondità di campo ridotta, focus stacking.',imageDesc:'Insetto ingrandito con profondità di campo ridotta',categoria:'Naturalistica'},
    {id:15,symbol:'Bd',name:'Avifauna',               desc:'Sottocategoria del wildlife dedicata agli uccelli: in volo, in habitat, in comportamento riproduttivo.',imageDesc:'Uccello in volo o nel proprio habitat',categoria:'Naturalistica'},
    {id:16,symbol:'Wl',name:'Wildlife',               desc:'Animali nel loro habitat. Si valutano comportamento, momento, luce, distanza.',imageDesc:'Animale selvatico nel suo habitat naturale',categoria:'Naturalistica'},
    {id:17,symbol:'Fp',name:'Fauna polare & Cons.',   desc:'Fotografia della fauna polare e di ecosistemi sensibili, con finalità di conservazione.',imageDesc:'Fauna polare in ambiente artico o antartico',categoria:'Naturalistica'},
  ]},
  { cat:'landscape2', items:[
    {id:18,symbol:'Ps',name:'Paesaggio',              desc:'Rappresentazione di spazi naturali o antropizzati, attenzione a luce, meteo, geografia.',imageDesc:'Paesaggio naturale con luce naturale',categoria:'Paesaggio'},
    {id:19,symbol:'Nx',name:'New Topographics',       desc:"Filiazione critica del paesaggio americano: territori modificati dall'uomo, ripresi senza enfasi estetica.",imageDesc:'Periferia o parcheggio ripresi con distanza neutra',categoria:'Paesaggio'},
    {id:20,symbol:'Pw',name:'Paesaggi atmosferici',   desc:'Derivazione del paesaggio focalizzata sui fenomeni atmosferici (tempeste, uragani, aurore, nebbie).',imageDesc:'Tempesta o aurora fotografata in paesaggio',categoria:'Paesaggio'},
    {id:21,symbol:'Pn',name:'Paesaggio naturale',     desc:"Montagne, deserti, foreste, fiumi. Tradizione americana: previsualizzazione, zone system.",imageDesc:'Montagna, deserto o foresta con luce naturale',categoria:'Paesaggio'},
    {id:22,symbol:'Sw',name:'Paesaggio marino',       desc:"Mare e costa come soggetto. Spesso lavora sull'orizzonte, la lunga esposizione.",imageDesc:'Orizzonte marino con lunga esposizione',categoria:'Paesaggio'},
    {id:23,symbol:'Pt',name:'Paesaggio notturno',     desc:'Lunghe esposizioni, scarsa luce, stelle, luna o luci artificiali.',imageDesc:'Paesaggio sotto cielo stellato con lunga esposizione',categoria:'Paesaggio'},
    {id:24,symbol:'Cs',name:'Paesaggio urbano',       desc:"La città come organismo: skyline, architetture, vie, piazze.",imageDesc:'Skyline urbano con luce dorata o notturna',categoria:'Paesaggio'},
    {id:25,symbol:'Pa',name:'Paesaggio aereo',        desc:'Vista dall\'alto (aereo, elicottero, drone). Grammatica per pattern e astrazione geometrica.',imageDesc:'Territorio visto dall\'alto con pattern geometrici',categoria:'Paesaggio'},
    {id:26,symbol:'Pm',name:'Paesaggio minimalista',  desc:'Composizione ridotta a pochi elementi, ampi vuoti, riduzione tonale.',imageDesc:'Paesaggio essenziale con pochi elementi',categoria:'Paesaggio'},
  ]},
  { cat:'astro', items:[
    {id:27,symbol:'Af',name:'Astrofotografia',        desc:'Riprende corpi celesti, oggetti del cielo profondo o paesaggi notturni con cielo stellato.',imageDesc:'Nebulosa o galassia con dettaglio ad alta risoluzione',categoria:'Astrofotografia'},
    {id:28,symbol:'Ds',name:'Cielo profondo',         desc:'Galassie, nebulose, ammassi stellari. Telescopi, montature equatoriali.',imageDesc:'Nebulosa o galassia ad alta risoluzione',categoria:'Astrofotografia'},
    {id:29,symbol:'So',name:'Sistema solare',         desc:'Sole, Luna, pianeti. Tecnica del lucky imaging (migliaia di frame, selezione dei migliori).',imageDesc:'Pianeta (Giove, Saturno) con dettaglio ad alta risoluzione',categoria:'Astrofotografia'},
    {id:30,symbol:'Ng',name:'Nightscape',             desc:'Cielo stellato e Via Lattea integrati nel paesaggio terrestre.',imageDesc:'Via Lattea sopra paesaggio naturale o montagna',categoria:'Astrofotografia'},
  ]},
  { cat:'travel', items:[
    {id:31,symbol:'Vg',name:'Viaggio',                desc:'Documenta luoghi, persone e culture in chiave esperienziale. Legata a riviste geografiche.',imageDesc:'Luogo, persona o rito culturale in contesto di viaggio',categoria:'Viaggio'},
    {id:32,symbol:'Rd',name:'Road trip',              desc:'Narra il viaggio su strada attraverso paesaggi, stazioni, motel e scene spontanee.',imageDesc:'Paesaggio stradale o motel lungo una highway',categoria:'Viaggio'},
    {id:33,symbol:'Td',name:'Travel documentary',     desc:'Racconta luoghi, culture e persone con approccio narrativo e documentaristico.',imageDesc:'Persone o luoghi documentati in contesto di viaggio',categoria:'Viaggio'},
    {id:34,symbol:'Ts',name:'Travel snapshot',        desc:'Documenta esperienze personali di viaggio con approccio spontaneo.',imageDesc:'Istantanea spontanea durante un viaggio',categoria:'Viaggio'},
    {id:35,symbol:'Te',name:'Editoriale turistica',   desc:'Realizza immagini per guide, riviste e promozione turistica.',imageDesc:'Luogo turistico fotografato per guida o rivista',categoria:'Viaggio'},
  ]},
  { cat:'documentary', items:[
    {id:36,symbol:'Dc',name:'Documentaristica',       desc:'Racconta fatti, persone e luoghi a fini di testimonianza, informazione o denuncia.',imageDesc:'Immagine documentaria con valenza testimoniale',categoria:'Documentaristica'},
    {id:37,symbol:'Hi',name:'Storica & archivio',     desc:'Documentazione di eventi e luoghi storici, anche con valore di archivio.',imageDesc:'Immagine storica di archivio con valenza documentale',categoria:'Documentaristica'},
    {id:38,symbol:'Pj',name:'Fotogiornalismo',        desc:'Copertura di eventi di cronaca per stampa periodica, agenzie, settimanali.',imageDesc:'Immagine iconica di evento di cronaca',categoria:'Documentaristica'},
    {id:39,symbol:'Wf',name:'Guerra / conflitto',     desc:'Sottofamiglia del fotogiornalismo dedicata a guerre, conflitti armati, post-conflitto.',imageDesc:'Scene di conflitto armato, soldati o civili in guerra',categoria:'Documentaristica'},
    {id:40,symbol:'Cn',name:'Sociale & umanitaria',   desc:'Documenta condizioni di disuguaglianza, povertà, sfruttamento per finalità di denuncia.',imageDesc:'Persone in condizioni di povertà o marginalità',categoria:'Documentaristica'},
    {id:41,symbol:'Et',name:'Etnografica',            desc:'Studia popolazioni, culture e modi di vita con rigore quasi tassonomico.',imageDesc:'Comunità indigena nel proprio contesto culturale',categoria:'Documentaristica'},
    {id:42,symbol:'Lf',name:'Long-form documentary',  desc:'Progetti di lunga durata che evolvono in libro o mostra, con tema unitario.',imageDesc:'Serie narrativa su un tema unitario sviluppata nel tempo',categoria:'Documentaristica'},
  ]},
  { cat:'events', items:[
    {id:43,symbol:'Mt',name:'Eventi',                 desc:'Documenta cerimonie e celebrazioni private e pubbliche. Reportage di matrimonio, spettacoli, concerti.',imageDesc:'Cerimonia o evento pubblico con pubblico',categoria:'Eventi'},
    {id:44,symbol:'Wp',name:'Matrimonio reportage',   desc:'Approccio narrativo non posato che documenta la giornata come reportage.',imageDesc:'Momento spontaneo durante una cerimonia di matrimonio',categoria:'Eventi'},
    {id:45,symbol:'Wd',name:'Matrimonio editoriale',  desc:'Ispirazione fashion, set e luce curati, post-produzione raffinata.',imageDesc:'Sposi in posa curata con luce cinematografica',categoria:'Eventi'},
    {id:46,symbol:'Sp',name:'Spettacoli',             desc:'Riprende performance teatrali, circensi e sceniche cogliendo movimento ed espressione.',imageDesc:'Performance teatrale con luce scenica',categoria:'Eventi'},
    {id:47,symbol:'Ct',name:'Concerti',               desc:'Documenta performance musicali dal vivo cogliendo energia scenica e movimento.',imageDesc:'Concerto live con luci e movimento',categoria:'Eventi'},
    {id:48,symbol:'Ev',name:'Corporate & pubblici',   desc:'Conferenze, premiazioni, concerti, eventi politici. Affine al fotogiornalismo.',imageDesc:'Evento corporate o premiazione con pubblico',categoria:'Eventi'},
  ]},
  { cat:'action', items:[
    {id:49,symbol:'Az',name:'Azione',                 desc:'Richiede tempi rapidi, ottiche lunghe, anticipazione del momento.',imageDesc:'Atleta in azione nel momento culminante',categoria:'Azione'},
    {id:50,symbol:'Ac',name:'Action sportiva',        desc:'Coglie il gesto agonistico nel suo apice. Tempi rapidi, ottiche lunghe.',imageDesc:'Atleta in azione nel momento culminante della competizione',categoria:'Azione'},
    {id:51,symbol:'Rz',name:'Fotografia di danza',    desc:'Blocca o enfatizza il movimento coreografico, lavorando su ritmo, luce e postura.',imageDesc:'Danzatore in movimento con luce teatrale',categoria:'Azione'},
    {id:52,symbol:'Ms',name:'Motorsport',             desc:'Gare automobilistiche e motociclistiche. Panning, motion blur controllato.',imageDesc:'Vettura da corsa in panning',categoria:'Azione'},
    {id:53,symbol:'Es',name:'Sport estremi',          desc:'Arrampicata, surf, base jumping. Spesso il fotografo è anche praticante.',imageDesc:'Atleta in sport estremo (arrampicata, surf, alpinismo)',categoria:'Azione'},
  ]},
  { cat:'street', items:[
    {id:54,symbol:'Ub',name:'Urbana',                 desc:'Documenta la vita quotidiana negli spazi pubblici. Spontaneità, «momento decisivo» (Cartier-Bresson).',imageDesc:'Scena urbana colta nel momento decisivo',categoria:'Fotografia Urbana'},
    {id:55,symbol:'Sx',name:'Urbana americana',       desc:"Più cruda, energica, frammentaria. Sguardo errante sull'American Way of Life.",imageDesc:'Strada americana con atmosfera grezza e spontanea',categoria:'Fotografia Urbana'},
    {id:56,symbol:'Cl',name:'Urbana a colori',        desc:"Riabilitazione del colore nel linguaggio fotografico autoriale a partire da fine anni '50.",imageDesc:'Scene di strada con uso espressivo del colore',categoria:'Fotografia Urbana'},
    {id:57,symbol:'Mc',name:'Urbana classica',        desc:'Codificata dalla scuola francese e dalla Magnum: composizione rigorosa, geometria.',imageDesc:'Scena urbana classica in bianco e nero',categoria:'Fotografia Urbana'},
    {id:58,symbol:'Sf',name:'Urbana & Flash',         desc:'Approccio invadente, ravvicinato, spesso con flash diretto. Frontalità che «viola» il soggetto.',imageDesc:'Ritratto ravvicinato con flash diretto in strada',categoria:'Fotografia Urbana'},
    {id:59,symbol:'Pv',name:'Urbana giapponese',      desc:"Linguaggio sgranato, sfocato, sovraesposto: estetica are, bure, boke della rivista Provoke (1968-69).",imageDesc:'Scene urbane sgranate, sfocate, ad alto contrasto',categoria:'Fotografia Urbana'},
  ]},
  { cat:'portrait', items:[
    {id:60,symbol:'Rt',name:'Ritratto',               desc:"Rappresentazione di una o più persone con l'obiettivo di restituirne aspetto, identità, personalità.",imageDesc:"Ritratto di persona con attenzione all'identità",categoria:'Ritratto'},
    {id:61,symbol:'Hc',name:'Headshot & Corporate',   desc:'Ritratto formale, busto o mezzo busto, su fondo neutro, destinato a uso professionale.',imageDesc:'Primo piano o busto su sfondo neutro stile professionale',categoria:'Ritratto'},
    {id:62,symbol:'Rg',name:'Ritratto di gruppo',     desc:'Più persone legate da relazioni familiari, professionali o sociali.',imageDesc:'Gruppo di persone in posa o in modo naturale',categoria:'Ritratto'},
    {id:63,symbol:'Ra',name:'Ritratto ambientale',    desc:'Il soggetto è ritratto nel proprio contesto di vita o lavoro.',imageDesc:'Soggetto nel proprio ambiente di lavoro o vita quotidiana',categoria:'Ritratto'},
    {id:64,symbol:'Rs',name:'Ritratto in studio',     desc:'Realizzato in ambiente controllato, con luce artificiale o naturale modellata.',imageDesc:'Soggetto isolato su fondo neutro, illuminazione studiata',categoria:'Ritratto'},
    {id:65,symbol:'Au',name:'Autoritratto',           desc:'Il fotografo è insieme soggetto e oggetto. Strumento di indagine identitaria.',imageDesc:'Il fotografo ritratto da sé stesso',categoria:'Ritratto'},
    {id:66,symbol:'Rc',name:'Ritratto spontaneo',     desc:'Non posato, spesso colto a soggetto inconsapevole. Si avvicina alla street.',imageDesc:'Soggetto colto in modo spontaneo, senza posa',categoria:'Ritratto'},
    {id:67,symbol:'Bg',name:'Boudoir & Glamour',      desc:'Ritrattistica intima e sensuale, spesso in ambienti privati o suggestivi.',imageDesc:'Ritratto intimo o patinato, luce morbida e cura estetica',categoria:'Ritratto'},
    {id:68,symbol:'Rp',name:'Ritratto psicologico',   desc:'Punta alla restituzione profonda della soggettività, resa formalmente scarna ma intensa.',imageDesc:'Ritratto intenso e psicologicamente denso',categoria:'Ritratto'},
  ]},
  { cat:'nude', items:[
    {id:69,symbol:'Nu',name:'Nudo',                   desc:'Il corpo nudo come soggetto, con finalità artistica, formale, sensuale o politica.',imageDesc:'Corpo nudo fotografato con intenzione artistica',categoria:'Nudo'},
    {id:70,symbol:'Na',name:'Nudo artistico',         desc:'Approccio plastico-formale, scultoreo. Corpo come paesaggio o forma astratta.',imageDesc:'Corpo nudo fotografato come forma scultorea',categoria:'Nudo'},
    {id:71,symbol:'Ne',name:'Nudo erotico / Glamour', desc:'Componente sensuale o esplicita prevalente, spesso al confine con la moda.',imageDesc:'Nudo con connotazione sensuale e cura estetica',categoria:'Nudo'},
    {id:72,symbol:'Bz',name:'Boudoir (Nudo)',         desc:'Nudo intimo in interni, con soggetti privati. Si lega al boudoir ritrattistico.',imageDesc:'Nudo in ambiente intimo domestico con luce morbida',categoria:'Nudo'},
    {id:73,symbol:'Nm',name:'Nudo di massa',          desc:'Corpi nudi come soggetto collettivo, con valenza estetica, politica o di occupazione dello spazio.',imageDesc:'Folla di persone nude in spazio pubblico (installazione)',categoria:'Nudo'},
    {id:74,symbol:'Mv',name:'Nudo & Movimento',       desc:"Origini ottocentesche dello studio del corpo in azione. Antesignana del cinema.",imageDesc:'Sequenza cronofotografica di corpo in movimento',categoria:'Nudo'},
  ]},
  { cat:'fashion', items:[
    {id:75,symbol:'Md',name:'Moda',                   desc:'Promuove o interpreta abbigliamento, accessori, beauty per case di moda, riviste, brand.',imageDesc:'Servizio moda con modella in set curato',categoria:'Moda'},
    {id:76,symbol:'Ck',name:'Catalogo & Lookbook',    desc:'Funzione commerciale: presentazione chiara del prodotto. Set neutri, luce piana.',imageDesc:'Modella in abito su fondo neutro con luce piana',categoria:'Moda'},
    {id:77,symbol:'By',name:'Beauty',                 desc:'Volti, pelle, trucco, capelli in primissimo piano. Forte cura della luce.',imageDesc:'Primo piano di volto con attenzione a trucco e pelle',categoria:'Moda'},
    {id:78,symbol:'Hu',name:'Alta moda (Couture)',    desc:'Iconografia delle collezioni couture: forte cura del set, abito come scultura.',imageDesc:'Modella in abito couture su set curato e pose statuarie',categoria:'Moda'},
    {id:79,symbol:'Fe',name:'Editoriale di moda',     desc:"Servizi narrativi pubblicati su riviste (Vogue, Harper's Bazaar). Ampio margine creativo.",imageDesc:'Servizio moda narrativo e tematizzato su rivista',categoria:'Moda'},
    {id:80,symbol:'Sh',name:'Street fashion',         desc:'Documenta la moda «in the wild»: stile reale, sfilate viste fuori dalle passerelle.',imageDesc:'Persone stilose fotografate in strada fuori dalle sfilate',categoria:'Moda'},
    {id:81,symbol:'Vt',name:'Avant-garde fashion',    desc:'Sperimentazione visiva spinta, contaminazione con surrealismo, performance.',imageDesc:'Set sperimentale con elementi surreali o visivamente estremi',categoria:'Moda'},
  ]},
  { cat:'stilllife', items:[
    {id:82,symbol:'Sl',name:'Still Life',             desc:'Eredita la natura morta pittorica: oggetti inanimati composti e illuminati con cura.',imageDesc:'Composizione di oggetti con luce studiata',categoria:'Still Life'},
    {id:83,symbol:'Pd',name:'Product',                desc:'Prodotti commerciali (orologi, bottiglie, cosmetici, automotive). Tecnica avanzata di luce.',imageDesc:'Prodotto commerciale isolato con luce tecnica precisa',categoria:'Still Life'},
    {id:84,symbol:'Fd',name:'Food',                   desc:'Cibo come oggetto. Si articola tra editoriale (riviste, libri di cucina) e pubblicitario.',imageDesc:'Cibo composto e illuminato con cura',categoria:'Still Life'},
    {id:85,symbol:'Sa',name:'Still life d\'autore',   desc:'Oggetti come pretesto per ricerca formale, simbolica o materica.',imageDesc:"Composizione di oggetti con valenza estetica d'autore",categoria:'Still Life'},
    {id:86,symbol:'Vn',name:'Tabletop & Vanitas',     desc:'Composizioni su piano. Vanitas riprende la tradizione barocca con simboli della caducità.',imageDesc:'Composizione con teschio, fiori appassiti o frutta marcia',categoria:'Still Life'},
  ]},
  { cat:'abstract', items:[
    {id:87,symbol:'Ab',name:'Astratta',               desc:'Privilegia forma, linea, colore, texture, pattern rispetto al riconoscimento del soggetto reale.',imageDesc:'Composizione astratta basata su pattern o texture',categoria:'Astratta'},
    {id:88,symbol:'Ag',name:'Astratta geometrica',    desc:'Astrazione che parte dal reale (muri, vegetazione, superfici) per estrarne pattern.',imageDesc:'Superficie o dettaglio che diventa pattern astratto',categoria:'Astratta'},
    {id:89,symbol:'Cw',name:'Cameraless / Sperimentale',desc:'Immagini senza macchina fotografica: fotogrammi, chemigrammi, luminogrammi.',imageDesc:'Fotogramma o impronta di oggetti su carta fotosensibile',categoria:'Astratta'},
    {id:90,symbol:'Eq',name:'Equivalent / Pittoricista',desc:'Immagini riconoscibili (nuvole, acqua) usate come metafora emotiva astratta.',imageDesc:'Nuvole o acqua fotografate come metafore emotive',categoria:'Astratta'},
  ]},
  { cat:'fineart', items:[
    {id:91,symbol:'Fa',name:'Fine Art & Concettuale',  desc:"Fotografia pensata anzitutto come opera d'arte autonoma, destinata a galleria, museo o collezione.",imageDesc:'Opera fotografica concettuale o staged per galleria',categoria:'Fine Art & Concettuale'},
    {id:92,symbol:'Tb',name:'Staged / Tableaux vivants',desc:'Scene costruite e dirette dal fotografo, con attori, set, illuminazione cinematografica.',imageDesc:'Scena costruita e diretta come un tableau cinematografico',categoria:'Fine Art & Concettuale'},
    {id:93,symbol:'Co',name:'Concettuale (puro)',      desc:"L'idea conta più dell'oggetto. La foto è documento di un'operazione concettuale o seriale.",imageDesc:"Serie sistematica che documenta un'operazione concettuale",categoria:'Fine Art & Concettuale'},
    {id:94,symbol:'Sr',name:'Surrealista',             desc:'Erede del surrealismo storico: gioco con sogno, inconscio, doppio, manipolazione visiva.',imageDesc:'Composizione onirica con elementi incongrui e atmosfera surreale',categoria:'Fine Art & Concettuale'},
    {id:95,symbol:'Di',name:'Diaristica intima',       desc:'Documento autobiografico delle vite del fotografo e del proprio cerchio.',imageDesc:'Istantanea intima di vita quotidiana del fotografo',categoria:'Fine Art & Concettuale'},
    {id:96,symbol:'Ap',name:'Appropriazione & Post-foto',desc:'Riuso e citazione di immagini esistenti; dissoluzione del concetto di autorialità.',imageDesc:"Fotografia rifotografata o appropriata da un'altra immagine",categoria:'Fine Art & Concettuale'},
  ]},
];

const TECNICHE_DATA = [
  {id:101,symbol:'Lp',name:'Light Painting',        desc:'Pittura con la luce: in lunga esposizione si «disegna» nello spazio con sorgenti luminose mobili.',imageDesc:'Disegni luminosi tracciati nel buio con lunga esposizione',categoria:'Tecniche & Processi'},
  {id:102,symbol:'Mb',name:'ICM / Motion Blur',     desc:"Intentional Camera Movement: si muove la fotocamera durante l'esposizione per generare scie e astrazioni.",imageDesc:'Scie e sfocature astratte generate dal movimento della fotocamera',categoria:'Tecniche & Processi'},
  {id:103,symbol:'Dz',name:'Doppia esposizione',    desc:'Sovrapposizione di due o più immagini sullo stesso fotogramma (in ripresa) o in postproduzione.',imageDesc:'Doppia esposizione con sovrapposizione di ritratto e paesaggio',categoria:'Tecniche & Processi'},
  {id:104,symbol:'Hz',name:'High Speed Photography',desc:'Tempi brevissimi (1/8000 s e oltre) o flash stroboscopici per «congelare» fenomeni.',imageDesc:"Goccia d'acqua congelata in mid-air con flash stroboscopico",categoria:'Tecniche & Processi'},
  {id:105,symbol:'If',name:'Infrarosso (IR)',        desc:'Sensibilità a lunghezze d\'onda oltre il rosso visibile. Vegetazione bianca, cieli neri.',imageDesc:'Paesaggio in infrarosso con vegetazione bianca e cielo scuro',categoria:'Tecniche & Processi'},
  {id:106,symbol:'Uf',name:'UV & Fluorescenza',     desc:'Fotografia in luce ultravioletta (riflessa o di fluorescenza indotta). Usi scientifici e artistici.',imageDesc:'Fluorescenza di fiori o minerali in luce UV',categoria:'Tecniche & Processi'},
  {id:107,symbol:'Ph',name:'Pinhole (Stenopeico)',  desc:"Macchina senza obiettivo: un foro sottile proietta l'immagine sul piano sensibile.",imageDesc:'Immagine morbida e sognante ottenuta con camera stenopeica',categoria:'Tecniche & Processi'},
  {id:108,symbol:'Vr',name:'VR / 360°',             desc:'Cattura sferica del campo visivo. Restituzione su visore VR o web immersivo.',imageDesc:'Immagine sferica 360° di un paesaggio o interno',categoria:'Tecniche & Processi'},
  {id:109,symbol:'Aj',name:'AI & Generativa',       desc:'Immagini sintetiche prodotte da modelli generativi o ibridizzazione di fotografie reali con AI.',imageDesc:'Immagine ibrida fotografia-AI con estetica surreale',categoria:'Tecniche & Processi'},
  {id:110,symbol:'Dg',name:'Dagherrotipo',           desc:'Primo processo fotografico commerciale (1839): lastra di rame argentata.',imageDesc:'Ritratto su lastra di rame con aspetto argenteo e lucido',categoria:'Tecniche & Processi'},
  {id:111,symbol:'Wc',name:'Wet Plate Collodion',   desc:'Lastra di vetro rivestita di collodio iodurato, esposta e sviluppata ancora umida (1851).',imageDesc:'Ritratto su lastra di vetro o metallo con tonalità vintage',categoria:'Tecniche & Processi'},
  {id:112,symbol:'Cy',name:'Cianotipia',            desc:'Stampa a contatto con sali ferrici. Tonalità caratteristica blu di Prussia.',imageDesc:'Stampa cianotipia con toni blu su carta',categoria:'Tecniche & Processi'},
  {id:113,symbol:'Pl',name:'Platino/Palladio',      desc:'Stampa a contatto con sali di platino (e/o palladio). Eccezionale gamma tonale.',imageDesc:'Stampa platinotipia con gamma tonale profonda',categoria:'Tecniche & Processi'},
  {id:114,symbol:'Gb',name:'Gomma bicromatata',     desc:'Emulsione di gomma arabica, bicromato e pigmento spalmata su carta. Standard del pittorialismo.',imageDesc:'Stampa gomma bicromatata con effetto pittorico',categoria:'Tecniche & Processi'},
  {id:115,symbol:'Cm',name:'Cameraless / Fotogramma',desc:'Formazione dell\'immagine senza ottica: fotogrammi, rayogrammi, chemigrammi.',imageDesc:'Fotogramma: silhouette di oggetti su carta fotosensibile',categoria:'Tecniche & Processi'},
];

// ═══════════════════════════════════════════════════════════════
// LAYOUT CONSTANTS
// ═══════════════════════════════════════════════════════════════
const MAX_ROWS          = 6;
const TECNICHE_MAX_COLS = 12;   // tecniche block: max 12 cols, then wraps to row 2
const GAP               = 3;
const PAD_X             = 30;
const PAD_TOP           = 14;
const HDR_H             = 52;
const SEP_H             = 1;
const LEG_H             = 24;
const EXTRA_GAP         = 20;   // vertical gap between main grid and tecniche grid
const SEP_LINE_H        = 12;   // extra space around the separator line between grids
const PANEL_W           = 300;
const PANEL_PAD         = 16;

let cw, ch;
let mainCells  = [];
let extraCells = [];
let totalCols  = 0;
let maxMainCol = 0;
let maxExtraCol = 0;
let extraRows   = 1;  // how many rows the tecniche block actually uses

let activeFilter  = 'all';
let selectedGenre = null;
let hoveredGenre  = null;
let images        = {};
let panelOpen     = false;
let panelX        = 0;
let panelTargetX  = 0;

// ── Packing helpers ──────────────────────────────────────────
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

// Tecniche: pack into rows of TECNICHE_MAX_COLS, then start a new row-band
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

  // Total logical cols: main cols vs tecniche cols (tecniche starts at col 1, same grid)
  totalCols = max(maxMainCol, maxExtraCol);

  // ── Cell size ──
  // MODIFICA DIMENSIONI CELLE: sottraiamo px extra qui per dare più aria
  // cw: -3 rispetto al massimo che riempirebbe; ch: -4 rispetto al massimo
  cw = floor((availW - GAP * (totalCols - 1)) / totalCols) - 3;
  cw = max(cw, 20);

  // availH split: MAX_ROWS main rows + extraRows extra rows + gap
  const totalRows  = MAX_ROWS + extraRows;
  const totalGaps  = totalRows * GAP + EXTRA_GAP + SEP_LINE_H * 2;
  ch = floor((availH - PAD_TOP - totalGaps) / totalRows) - 4;
  ch = max(ch, 18);

  // Y origins
  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const yExtraStart = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP + SEP_LINE_H;

  // X: centre main grid, centre extra grid independently
  const fullGridW  = totalCols * cw + (totalCols - 1) * GAP;
  const mainGridW  = maxMainCol  * cw + (maxMainCol  - 1) * GAP;
  const extraGridW = maxExtraCol * cw + (maxExtraCol - 1) * GAP;

  // Centre both grids within available width
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
    ['all',        [136,136,136], 'Tutti'],
    ['science',    CATS.science.sym,      CATS.science.abbr],
    ['landscape',  CATS.landscape.sym,    'Archit.'],
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
    textSize(8.5);
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

  // Main: row labels (left)
  textAlign(RIGHT, CENTER);
  for (let r = 1; r <= MAX_ROWS; r++) {
    const y = yMainStart + (r - 1) * (ch + GAP) + ch / 2;
    text(r, mainOffX - 6, y);
  }

  // Main: col labels (top) — shared with tecniche, no need to repeat
  textAlign(CENTER, BOTTOM);
  for (let c = 1; c <= maxMainCol; c++) {
    const x = mainOffX + (c - 1) * (cw + GAP) + cw / 2;
    text(c, x, yMainStart - 3);
  }

  // Tecniche: row labels — offset as 7, 8 (continuing numbering from main)
  textAlign(RIGHT, CENTER);
  for (let r = 1; r <= extraRows; r++) {
    const y = yExtraStart + (r - 1) * (ch + GAP) + ch / 2;
    text(MAX_ROWS + r, extraOffX - 6, y);
  }
  // Tecniche: col labels — only if extraGridW > mainGridW (more cols than main)
  // Otherwise the main col labels already cover them since grids are independent
  // We do draw them since extra grid may be centred differently
  textAlign(CENTER, BOTTOM);
  for (let c = 1; c <= maxExtraCol; c++) {
    const x = extraOffX + (c - 1) * (cw + GAP) + cw / 2;
    // Only draw if this col label won't overlap the main ones above
    // (they share the same col numbers 1..12)
    text(c, x, yExtraStart - 3);
  }
}

// ── Separator line between main grid and tecniche grid ───────
function drawGridSeparator() {
  if (!mainCells.length || !extraCells.length) return;

  const yMainStart  = HDR_H + SEP_H + LEG_H + 10 + PAD_TOP;
  const yExtraStart = yMainStart + MAX_ROWS * (ch + GAP) + EXTRA_GAP + SEP_LINE_H;
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

// ── Tecniche section label (vertical, left of tecniche block) ─
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

  const nameSz = max(4.5, min(cw * 0.10, 7.5));
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

function drawImagePlaceholder(x, y, w, h, g) {
  const c  = CATS[g.cat] || CATS.science;
  const cx = x + w / 2;
  const icY = y + h * 0.28;
  const sz  = min(w, h) * 0.13;

  fill(16, 16, 16);
  stroke(26, 26, 24); strokeWeight(0.5);
  rect(x, y, w, h, 2);
  noStroke();

  fill(c.bg[0], c.bg[1], c.bg[2], 55);
  rect(x, y + h - 3, w, 3, 0, 0, 2, 2);

  fill(c.sym[0], c.sym[1], c.sym[2], 35);
  rectMode(CENTER);
  rect(cx, icY, sz * 2.8, sz * 2, 3);
  rect(cx - sz * 0.5, icY - sz * 1.1, sz * 1.1, sz * 0.7, 2);
  rectMode(CORNER);
  noFill();
  stroke(c.sym[0], c.sym[1], c.sym[2], 50); strokeWeight(1);
  ellipse(cx, icY, sz * 1.4, sz * 1.4);
  noStroke();

  if (g.imageDesc && g.imageDesc.length > 0) {
    const descY = y + h * 0.52;
    fill(c.sym[0], c.sym[1], c.sym[2], 45);
    textSize(6.5); textAlign(CENTER, TOP); textStyle(NORMAL);
    text('SOGGETTO IDEALE', cx, descY - 12);
    stroke(c.border[0], c.border[1], c.border[2], 30); strokeWeight(0.5);
    line(x + 10, descY - 4, x + w - 10, descY - 4);
    noStroke();
    fill(80, 77, 73);
    textSize(8); textAlign(CENTER, TOP); textStyle(NORMAL);
    drawWrappedTextCentered(g.imageDesc, cx, descY, w - 14, 12);
  }
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

  const c      = CATS[g.cat] || CATS.science;
  const tx     = px + PANEL_PAD;
  const maxW   = PANEL_W - PANEL_PAD * 2;
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
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty);
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
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty);
  noStroke(); ty += 12;

  const imgW = PANEL_W - PANEL_PAD * 2;
  const imgH = round(imgW * 0.65);
  if (g.image && g.image.length > 0 && images[g.image]) {
    image(images[g.image], tx, ty, imgW, imgH); ty += imgH + 8;
  } else {
    drawImagePlaceholder(tx, ty, imgW, imgH, g); ty += imgH + 4;
    fill(38, 36, 33); textSize(6.5); textAlign(RIGHT, TOP); textStyle(NORMAL);
    text('nessuna immagine', px + PANEL_W - PANEL_PAD, ty); ty += 12;
  }

  stroke(26, 26, 24); strokeWeight(0.5);
  line(tx, ty, px + PANEL_W - PANEL_PAD, ty);
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