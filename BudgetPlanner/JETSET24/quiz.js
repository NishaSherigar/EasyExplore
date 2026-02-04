const suggestionsData = {
    SouthKorea: {
        Relaxed: {
            Solo: {
                Beaches: ['Jeju Island', 'Haeundae Beach'],
                Mountains: ['Seoraksan National Park'],
                Historical: ['Gyeongbokgung Palace', 'Changdeokgung Palace']
            },
            Friends: {
                Beaches: ['Busan Beaches', 'Naksan Beach'],
                Mountains: ['Bukhansan National Park', 'Jirisan National Park'],
                Historical: ['DMZ', 'Gyeongbokgung Palace']
            },
            Family: {
                Beaches: ['Gyeongpo Beach', 'Sokcho Beach'],
                Mountains: ['Hallasan Mountain', 'Seoraksan'],
                Historical: ['Jeonju Hanok Village', 'Korean Folk Village']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Haedong Yonggungsa Temple'],
                Mountains: ['Daecheongbong Peak', 'Hallasan Mountain'],
                Historical: ['Odeungseong Fortress']
            },
            Friends: {
                Beaches: ['Hyeopjae Beach'],
                Mountains: ['Chirisan National Park', 'Bukhansan National Park'],
                Historical: ['Korean Folk Village']
            },
            Family: {
                Beaches: ['Sangju Beach'],
                Mountains: ['Odaesan National Park', 'Seoraksan'],
                Historical: ['Hwaseong Fortress']
            }
        }
    },
    Italy: {
        Relaxed: {
            Solo: {
                Beaches: ['Amalfi Coast', 'Positano'],
                Mountains: ['Dolomites', 'Gran Paradiso'],
                Historical: ['Pompeii', 'The Colosseum']
            },
            Friends: {
                Beaches: ['Capri', 'Sicily'],
                Mountains: ['Gran Sasso', 'Monte Rosa'],
                Historical: ['Vatican City', 'Florence']
            },
            Family: {
                Beaches: ['Cinque Terre', 'Ischia'],
                Mountains: ['Mont Blanc', 'Lake Como'],
                Historical: ['Colosseum', 'Pompeii']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Taormina', 'Sardinia'],
                Mountains: ['Civetta', 'Etna'],
                Historical: ['The Uffizi Gallery']
            },
            Friends: {
                Beaches: ['Portofino', 'Lido di Jesolo'],
                Mountains: ['Monte Rosa', 'Dolomites'],
                Historical: ['The Pantheon', 'Venice']
            },
            Family: {
                Beaches: ['Gallipoli', 'Viareggio'],
                Mountains: ['Mount Etna', 'Gran Sasso'],
                Historical: ['Castel del Monte', 'Vatican City']
            }
        }
    },
    USA: {
        Relaxed: {
            Solo: {
                Beaches: ['Miami Beach', 'Santa Monica Beach'],
                Mountains: ['Yosemite National Park', 'Grand Teton National Park'],
                Historical: ['Statue of Liberty', 'Independence Hall']
            },
            Friends: {
                Beaches: ['Malibu', 'Hilton Head Island'],
                Mountains: ['Rocky Mountain National Park', 'Smoky Mountains'],
                Historical: ['Gettysburg', 'Mount Rushmore']
            },
            Family: {
                Beaches: ['Waikiki Beach', 'Cape Cod'],
                Mountains: ['Zion National Park', 'Grand Canyon'],
                Historical: ['Disneyland', 'National Mall']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Key West', 'Huntington Beach'],
                Mountains: ['Mount Rainier', 'Olympic National Park'],
                Historical: ['Alcatraz Island', 'The Alamo']
            },
            Friends: {
                Beaches: ['Rehoboth Beach', 'Ocean City'],
                Mountains: ['Blue Ridge Parkway', 'Mount Washington'],
                Historical: ['Civil Rights District', 'The Freedom Trail']
            },
            Family: {
                Beaches: ['Destin', 'Virginia Beach'],
                Mountains: ['Pikes Peak', 'Mount St. Helens'],
                Historical: ['Colonial Williamsburg', 'Fords Theatre']
            }
        }
    },
    Canada: {
        Relaxed: {
            Solo: {
                Beaches: ['Kitsilano Beach', 'Wasaga Beach'],
                Mountains: ['Banff National Park', 'Whistler'],
                Historical: ['Quebec City', 'Old Montreal']
            },
            Friends: {
                Beaches: ['Tofino', 'Cape Cod'],
                Mountains: ['Jasper National Park', 'Yoho National Park'],
                Historical: ['Parliament Hill', 'Fortress of Louisbourg']
            },
            Family: {
                Beaches: ['Prince Edward Island', 'Okanagan Lake'],
                Mountains: ['Rocky Mountain National Park', 'Mount Robson'],
                Historical: ['Toronto’s Distillery District', 'Vancouver’s Gastown']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Long Beach', 'Grand Beach'],
                Mountains: ['Mount Assiniboine', 'Mount Alberta'],
                Historical: ['Royal BC Museum', 'Canadian Museum of History']
            },
            Friends: {
                Beaches: ['Wasaga Beach', 'St. Lawrence River'],
                Mountains: ['Mont Tremblant', 'Glenmore Reservoir'],
                Historical: ['Fort Edmonton Park', 'Calgary Tower']
            },
            Family: {
                Beaches: ['Sandbanks Provincial Park', 'Cavendish Beach'],
                Mountains: ['Kootenay National Park', 'Mount Revelstoke'],
                Historical: ['Canadian War Museum', 'Heritage Park Historical Village']
            }
        }
    },
    Japan: {
        Relaxed: {
            Solo: {
                Beaches: ['Okinawa', 'Miyakojima'],
                Mountains: ['Mount Fuji', 'Japanese Alps'],
                Historical: ['Kyoto Temples', 'Hiroshima Peace Memorial']
            },
            Friends: {
                Beaches: ['Kamakura Beach', 'Shonan Beach'],
                Mountains: ['Hakone', 'Nikko'],
                Historical: ['Himeji Castle', 'Nara Park']
            },
            Family: {
                Beaches: ['Kamakura', 'Nagasaki'],
                Mountains: ['Kumano Kodo', 'Yakushima'],
                Historical: ['Okinawa Churaumi Aquarium', 'Tokyo Disneyland']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Zushi Beach', 'Aoshima Beach'],
                Mountains: ['Mount Takao', 'Shirakami-Sanchi'],
                Historical: ['Tottori Sand Dunes Conan Museum']
            },
            Friends: {
                Beaches: ['Kushimoto', 'Enoshima'],
                Mountains: ['Chizu', 'Norikura'],
                Historical: ['Shuri Castle', 'Tottori Castle']
            },
            Family: {
                Beaches: ['Oarai', 'Fukushima'],
                Mountains: ['Chubu Sangaku National Park', 'Hokkaido'],
                Historical: ['Ghibli Museum', 'Nagoya Castle']
            }
        }
    },
    Australia: {
        Relaxed: {
            Solo: {
                Beaches: ['Bondi Beach', 'Great Barrier Reef'],
                Mountains: ['Blue Mountains', 'Grampians'],
                Historical: ['Sydney Opera House', 'Uluru']
            },
            Friends: {
                Beaches: ['Noosa Heads', 'Byron Bay'],
                Mountains: ['Kosciuszko National Park', 'The Grampians'],
                Historical: ['Melbourne CBD', 'Fremantle Prison']
            },
            Family: {
                Beaches: ['Surfers Paradise', 'Palm Cove'],
                Mountains: ['Mount Kosciuszko', 'Dorrigo National Park'],
                Historical: ['Australian War Memorial', 'Port Arthur']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Cape Tribulation', 'Twelve Apostles'],
                Mountains: ['Mount Augustus', 'Bungonia'],
                Historical: ['Darwin Military Museum', 'Old Melbourne Gaol']
            },
            Friends: {
                Beaches: ['Cottesloe Beach', 'Lancelin'],
                Mountains: ['Mount Bogong', 'Mount Buffalo'],
                Historical: ['The Rocks', 'Botanic Gardens']
            },
            Family: {
                Beaches: ['Cairns', 'Port Campbell'],
                Mountains: ['Flinders Ranges', 'Mount Wilson'],
                Historical: ['Sovereign Hill', 'Old Adelaide Gaol']
            }
        }
    },
    France: {
        Relaxed: {
            Solo: {
                Beaches: ['French Riviera', 'Nice'],
                Mountains: ['Chamonix', 'Alps'],
                Historical: ['Eiffel Tower', 'Palace of Versailles']
            },
            Friends: {
                Beaches: ['Saint-Tropez', 'La Rochelle'],
                Mountains: ['Mont Blanc', 'Provence'],
                Historical: ['Mont Saint-Michel', 'Sainte-Chapelle']
            },
            Family: {
                Beaches: ['Biarritz', 'Île de Ré'],
                Mountains: ['Vanoise National Park', 'Chartreuse Mountains'],
                Historical: ['Louvre Museum', 'Cathedral of Notre-Dame']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Calanques National Park', 'Côte d’Armor'],
                Mountains: ['Puy-de-Dôme', 'Auvergne'],
                Historical: ['The Musée d’Orsay']
            },
            Friends: {
                Beaches: ['Etretat', 'Honfleur'],
                Mountains: ['Verdon Gorge', 'Massif Central'],
                Historical: ['The Arc de Triomphe', 'Pont du Gard']
            },
            Family: {
                Beaches: ['La Grande Motte', 'Les Sables-d’Olonne'],
                Mountains: ['Chartreuse', 'Aravis'],
                Historical: ['Asterix Park', 'Futuroscope']
            }
        }
    },
    Spain: {
        Relaxed: {
            Solo: {
                Beaches: ['Costa del Sol', 'Balearic Islands'],
                Mountains: ['Sierra Nevada', 'Picos de Europa'],
                Historical: ['Alhambra', 'Sagrada Familia']
            },
            Friends: {
                Beaches: ['San Sebastián', 'Ibiza'],
                Mountains: ['Montserrat', 'Cabo de Gata'],
                Historical: ['Park Güell', 'Seville Cathedral']
            },
            Family: {
                Beaches: ['Malaga', 'Tenerife'],
                Mountains: ['Sierra de Guadarrama', 'Cascadas de Cifuentes'],
                Historical: ['Madrid’s Royal Palace', 'La Rambla']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Cala de Sant Vicent', 'Soller Beach'],
                Mountains: ['Pyrenees', 'Sierra de Grazalema'],
                Historical: ['Roman Theatre of Mérida']
            },
            Friends: {
                Beaches: ['Benidorm', 'Cabo de Gata-Nijar'],
                Mountains: ['Sierra de Francia', 'Ronda'],
                Historical: ['Aqueduct of Segovia', 'The Alcazar of Toledo']
            },
            Family: {
                Beaches: ['Sitges', 'Platja daro'],
                Mountains: ['Sierra de Cazorla', 'Montes de Toledo'],
                Historical: ['Barcelona Zoo', 'Museo Nacional del Prado']
            }
        }
    },
    Germany: {
        Relaxed: {
            Solo: {
                Beaches: ['Sylt', 'Rügen'],
                Mountains: ['Black Forest', 'Bavarian Alps'],
                Historical: ['Neuschwanstein Castle', 'Berlin Wall']
            },
            Friends: {
                Beaches: ['Timmendorfer Strand', 'Usedom'],
                Mountains: ['Harz Mountains', 'Zugspitze'],
                Historical: ['Cologne Cathedral', 'Heidelberg Castle']
            },
            Family: {
                Beaches: ['Norderney', 'Cuxhaven'],
                Mountains: ['Allgäu', 'Saxon Switzerland'],
                Historical: ['Miniatur Wunderland', 'Berlin Zoo']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Ahrenshoop', 'St. Peter-Ording'],
                Mountains: ['Bavarian Forest', 'Teutoburg Forest'],
                Historical: ['Saxon Switzerland National Park']
            },
            Friends: {
                Beaches: ['Fehmarn', 'Baltrum'],
                Mountains: ['Fichtelgebirge', 'Thuringian Forest'],
                Historical: ['Burg Eltz', 'Dresden Castle']
            },
            Family: {
                Beaches: ['Wangerooge', 'Borkum'],
                Mountains: ['Swabian Jura', 'Harz'],
                Historical: ['Phantasialand', 'Legoland Germany']
            }
        }
    },
    Brazil: {
        Relaxed: {
            Solo: {
                Beaches: ['Copacabana Beach', 'Ipanema Beach'],
                Mountains: ['Sugarloaf Mountain', 'Chapada Diamantina'],
                Historical: ['Christ the Redeemer', 'Pelourinho']
            },
            Friends: {
                Beaches: ['Praia do Forte', 'Florianópolis'],
                Mountains: ['Serra do Corvo Branco', 'Serra da Mantiqueira'],
                Historical: ['Ouro Preto', 'Iguazu Falls']
            },
            Family: {
                Beaches: ['Buzios', 'Natal'],
                Mountains: ['Serra do Mar', 'Mantiqueira'],
                Historical: ['Cultural Center of Sao Paulo', 'Museu da Inconfidência']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Jericoacoara', 'Lencois Maranhenses'],
                Mountains: ['Chapada dos Veadeiros', 'Pico da Neblina'],
                Historical: ['Parque Nacional da Serra da Capivara']
            },
            Friends: {
                Beaches: ['Canoa Quebrada', 'Pipa Beach'],
                Mountains: ['Pico do Cristal', 'Sierra do Cipó'],
                Historical: ['Pelourinho', 'Teatro Amazonas']
            },
            Family: {
                Beaches: ['Maragogi', 'Praia da Pipa'],
                Mountains: ['Chapada das Mesas', 'Pico da Bandeira'],
                Historical: ['Museu Nacional', 'Museu da Amazônia']
            }
        }
    },
    Mexico: {
        Relaxed: {
            Solo: {
                Beaches: ['Cancun', 'Tulum'],
                Mountains: ['Copper Canyon', 'Sierra Madre'],
                Historical: ['Chichen Itza', 'Teotihuacan']
            },
            Friends: {
                Beaches: ['Playa del Carmen', 'Puerto Vallarta'],
                Mountains: ['Sierra Nevada', 'Volcanic Mountain Range'],
                Historical: ['Monte Alban', 'Cenote Ik Kil']
            },
            Family: {
                Beaches: ['Cabo San Lucas', 'Akumal'],
                Mountains: ['Nevado de Toluca', 'Sierra de la Laguna'],
                Historical: ['Palace of the Governor', 'Frida Kahlo Museum']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Zihuatanejo', 'Cozumel'],
                Mountains: ['Popocatépetl', 'Sierra Gorda'],
                Historical: ['The Great Pyramid of Cholula']
            },
            Friends: {
                Beaches: ['Mazatlán', 'Ixtapa'],
                Mountains: ['La Malinche', 'Sierra Madre Oriental'],
                Historical: ['The ruins of Palenque', 'Pyramids of Teotihuacan']
            },
            Family: {
                Beaches: ['Playa Norte', 'Akumal'],
                Mountains: ['Cerro de la Silla', 'Cerro de San Pedro'],
                Historical: ['El Tajin', 'Cultural Center of the UNAM']
            }
        }
    },
    Thailand: {
        Relaxed: {
            Solo: {
                Beaches: ['Phuket', 'Koh Samui'],
                Mountains: ['Doi Inthanon', 'Khao Sok National Park'],
                Historical: ['Ayutthaya Historical Park', 'Grand Palace']
            },
            Friends: {
                Beaches: ['Krabi', 'Koh Phi Phi'],
                Mountains: ['Chiang Mai', 'Koh Tao'],
                Historical: ['Sukhothai Historical Park', 'Wat Pho']
            },
            Family: {
                Beaches: ['Pattaya', 'Hua Hin'],
                Mountains: ['Khao Yai', 'Doi Suthep'],
                Historical: ['Chiang Mai Night Safari', 'Bangkok Art and Culture Center']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Koh Lanta', 'Samed Island'],
                Mountains: ['Phu Kradueng', 'Khao Luang'],
                Historical: ['Hellfire Pass Memorial']
            },
            Friends: {
                Beaches: ['Railay Beach', 'Koh Phangan'],
                Mountains: ['Sukhothai', 'Phetchabun'],
                Historical: ['Baan Dam Museum', 'War Museum']
            },
            Family: {
                Beaches: ['Koh Chang', 'Koh Yao Noi'],
                Mountains: ['Koh Chang National Park', 'Khao Sam Roi Yot'],
                Historical: ['Dream World', 'Safari World']
            }
        }
    },
    India: {
        Relaxed: {
            Solo: {
                Beaches: ['Goa', 'Varkala'],
                Mountains: ['Himalayas', 'Munnar'],
                Historical: ['Taj Mahal', 'Hampi']
            },
            Friends: {
                Beaches: ['Puri', 'Kochi'],
                Mountains: ['Manali', 'Ladakh'],
                Historical: ['Jaipur Forts', 'Varanasi Ghats']
            },
            Family: {
                Beaches: ['Alleppey', 'Andaman Islands'],
                Mountains: ['Nainital', 'Shimla'],
                Historical: ['Rajasthan', 'Gateway of India']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Gokarna', 'Diu'],
                Mountains: ['Leh', 'Kashmir'],
                Historical: ['Khajuraho Temples']
            },
            Friends: {
                Beaches: ['Mahabalipuram', 'Pondicherry'],
                Mountains: ['Rishikesh', 'Coorg'],
                Historical: ['Ajanta Caves', 'Ellora Caves']
            },
            Family: {
                Beaches: ['Kumarakom', 'Ganapatipule'],
                Mountains: ['Darjeeling', 'Kanha National Park'],
                Historical: ['Fort Cochin', 'Red Fort']
            }
        }
    },
    Egypt: {
        Relaxed: {
            Solo: {
                Beaches: ['Sharm El Sheikh', 'Hurghada'],
                Mountains: ['Mount Sinai', 'Saint Catherine'],
                Historical: ['Pyramids of Giza', 'Luxor Temple']
            },
            Friends: {
                Beaches: ['Dahab', 'Alexandria'],
                Mountains: ['Mount Catherine', 'Eastern Desert'],
                Historical: ['Valley of the Kings', 'Karnak Temple']
            },
            Family: {
                Beaches: ['Makadi Bay', 'Soma Bay'],
                Mountains: ['White Desert', 'Sahara Desert'],
                Historical: ['Egyptian Museum', 'Abu Simbel']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Sharm El Sheikh', 'Marsa Alam'],
                Mountains: ['Mount Sinai', 'Mount St. Catherine'],
                Historical: ['Nile Cruise']
            },
            Friends: {
                Beaches: ['Hurghada', 'Nuweiba'],
                Mountains: ['Sahara Desert', 'Mount Sinai'],
                Historical: ['The Temple of Karnak']
            },
            Family: {
                Beaches: ['Sharm El Sheikh', 'Sahl Hasheesh'],
                Mountains: ['Mount Sinai', 'Sinai Peninsula'],
                Historical: ['Nile Cruise', 'Giza Plateau']
            }
        }
    },
    NewZealand: {
        Relaxed: {
            Solo: {
                Beaches: ['Piha Beach', 'Mount Maunganui'],
                Mountains: ['Milford Sound', 'Southern Alps'],
                Historical: ['Waitangi Treaty Grounds', 'Christchurch Botanic Gardens']
            },
            Friends: {
                Beaches: ['Coromandel Peninsula', 'Bay of Islands'],
                Mountains: ['Mount Cook', 'Arthurs Pass'],
                Historical: ['Wellingtons Te Papa', 'Auckland Sky Tower']
            },
            Family: {
                Beaches: ['Tauranga', 'Napier'],
                Mountains: ['Mount Taranaki', 'Ruapehu'],
                Historical: ['Rotorua', 'Wellingtons Zealandia']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Golden Bay', 'Muriwai Beach'],
                Mountains: ['Tongariro National Park', 'Mount Aspiring'],
                Historical: ['Glenorchy']
            },
            Friends: {
                Beaches: ['Cathedral Cove', 'Kaiteriteri'],
                Mountains: ['Hollyford Track', 'Milford Track'],
                Historical: ['Waiheke Island', 'Marlborough Sounds']
            },
            Family: {
                Beaches: ['Whangamata', 'Ohope Beach'],
                Mountains: ['Queenstown', 'Fiordland'],
                Historical: ['Waitomo Caves', 'Rotorua']
            }
        }
    },
    UnitedKingdom: {
        Relaxed: {
            Solo: {
                Beaches: ['Brighton Beach', 'Bournemouth'],
                Mountains: ['Lake District', 'Scottish Highlands'],
                Historical: ['Tower of London', 'Stonehenge']
            },
            Friends: {
                Beaches: ['Cornwall', 'Devon'],
                Mountains: ['Snowdonia', 'Brecon Beacons'],
                Historical: ['Edinburgh Castle', 'Windsor Castle']
            },
            Family: {
                Beaches: ['Scarborough', 'Margate'],
                Mountains: ['Peak District', 'Cairngorms'],
                Historical: ['British Museum', 'Natural History Museum']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Porthcawl', 'Llandudno'],
                Mountains: ['Ben Nevis', 'Trossachs National Park'],
                Historical: ['The Roman Baths']
            },
            Friends: {
                Beaches: ['Weston-super-Mare', 'Whitby'],
                Mountains: ['The Pennines', 'The Malvern Hills'],
                Historical: ['Hadrian’s Wall', 'Blenheim Palace']
            },
            Family: {
                Beaches: ['Filey', 'Clacton-on-Sea'],
                Mountains: ['Snowdon', 'Brecon Beacons'],
                Historical: ['Legoland Windsor', 'Warwick Castle']
            }
        }
    },
    Sweden: {
        Relaxed: {
            Solo: {
                Beaches: ['Skanör', 'Visby'],
                Mountains: ['Kungsleden', 'Öland'],
                Historical: ['Vasa Museum', 'Skansen']
            },
            Friends: {
                Beaches: ['Gotland', 'Malmö'],
                Mountains: ['Abisko National Park', 'Fulufjället'],
                Historical: ['Gamla Stan', 'Uppsala Cathedral']
            },
            Family: {
                Beaches: ['Båstad', 'Ystad'],
                Mountains: ['Sälen', 'Kjaergaard'],
                Historical: ['Swedish History Museum', 'Drottningholm Palace']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Fjällbacka', 'Ljugarn'],
                Mountains: ['Stora Sjöfallet', 'Helags'],
                Historical: ['Lund Cathedral']
            },
            Friends: {
                Beaches: ['Helsingborg', 'Öland'],
                Mountains: ['Sarek National Park', 'Kungsleden Trail'],
                Historical: ['Karlskrona', 'Gripsholm Castle']
            },
            Family: {
                Beaches: ['Sundsvall', 'Skanör'],
                Mountains: ['Sälen', 'Åre'],
                Historical: ['Gråmunkeholmen', 'Uppsala University']
            }
        }
    },
    Finland: {
        Relaxed: {
            Solo: {
                Beaches: ['Hanko', 'Uusikaupunki'],
                Mountains: ['Lapland', 'Ounasvaara'],
                Historical: ['Suomenlinna', 'Helsinki Cathedral']
            },
            Friends: {
                Beaches: ['Pori', 'Rauma'],
                Mountains: ['Nuuksio National Park', 'Koli'],
                Historical: ['Ateneum Art Museum', 'Helsinki University']
            },
            Family: {
                Beaches: ['Lapland', 'Kotka'],
                Mountains: ['Pallas-Yllästunturi', 'Oulanka National Park'],
                Historical: ['Old Rauma', 'Turku Castle']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Visby', 'Käsmu'],
                Mountains: ['Rukatunturi', 'Yllästunturi'],
                Historical: ['Punkaharju Ridge']
            },
            Friends: {
                Beaches: ['Kemi', 'Helsinki'],
                Mountains: ['Koli National Park', 'Pallas-Yllästunturi'],
                Historical: ['Tallinn Old Town']
            },
            Family: {
                Beaches: ['Länsi-Suomen', 'Yyteri'],
                Mountains: ['Nuuksio', 'Helvetinjärvi National Park'],
                Historical: ['Finnish National Museum', 'Olavinlinna']
            }
        }
    },
    Greece: {
        Relaxed: {
            Solo: {
                Beaches: ['Santorini', 'Mykonos'],
                Mountains: ['Olympus', 'Meteora'],
                Historical: ['Acropolis', 'Delphi']
            },
            Friends: {
                Beaches: ['Crete', 'Rhodes'],
                Mountains: ['Taygetus', 'Pindus'],
                Historical: ['Ancient Corinth', 'Epidaurus']
            },
            Family: {
                Beaches: ['Naxos', 'Corfu'],
                Mountains: ['Zagori', 'Parnassus'],
                Historical: ['Ancient Olympia', 'Knossos']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Kefalonia', 'Thasos'],
                Mountains: ['Rhodope', 'Parnassus'],
                Historical: ['The Palace of Knossos']
            },
            Friends: {
                Beaches: ['Lefkada', 'Zakynthos'],
                Mountains: ['Meteora', 'Olympus'],
                Historical: ['Delos', 'Mycenae']
            },
            Family: {
                Beaches: ['Skiathos', 'Hydra'],
                Mountains: ['Chalkidiki', 'Pindus'],
                Historical: ['The Acropolis Museum', 'The Byzantine Museum']
            }
        }
    },
    Turkey: {
        Relaxed: {
            Solo: {
                Beaches: ['Bodrum', 'Antalya'],
                Mountains: ['Cappadocia', 'Mount Ararat'],
                Historical: ['Hagia Sophia', 'Ephesus']
            },
            Friends: {
                Beaches: ['Kas', 'Kalkan'],
                Mountains: ['Toros Mountains', 'Uludağ'],
                Historical: ['Topkapi Palace', 'Pamukkale']
            },
            Family: {
                Beaches: ['Fethiye', 'Istanbul'],
                Mountains: ['Marmaris', 'Dalyan'],
                Historical: ['Troy', 'Hattusa']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Dalyan', 'Çesme'],
                Mountains: ['Ararat', 'Mount Nemrut'],
                Historical: ['Mount Ararat']
            },
            Friends: {
                Beaches: ['Alanya', 'Side'],
                Mountains: ['Taurus Mountains', 'Mount Ida'],
                Historical: ['Ephesus', 'Cappadocia']
            },
            Family: {
                Beaches: ['Kalkan', 'Kusadasi'],
                Mountains: ['Ankara', 'Taurus'],
                Historical: ['Gallipoli', 'Troy']
            }
        }
    },
    Singapore: {
        Relaxed: {
            Solo: {
                Beaches: ['Sentosa', 'East Coast Park'],
                Mountains: ['Bukit Timah Hill', 'Mount Faber'],
                Historical: ['Marina Bay Sands', 'Gardens by the Bay']
            },
            Friends: {
                Beaches: ['Changi Beach', 'Sentosa'],
                Mountains: ['Bukit Timah Hill', 'Mount Faber'],
                Historical: ['Raffles Hotel', 'National Gallery Singapore']
            },
            Family: {
                Beaches: ['Sentosa', 'Lazarus Island'],
                Mountains: ['Sentosa Island', 'Fort Canning Hill'],
                Historical: ['S.E.A. Aquarium', 'Universal Studios Singapore']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Pulau Ubin', 'Kusu Island'],
                Mountains: ['Mount Faber', 'Bukit Timah'],
                Historical: ['Fort Siloso']
            },
            Friends: {
                Beaches: ['Sentosa', 'East Coast Park'],
                Mountains: ['Mount Faber', 'Bukit Timah Hill'],
                Historical: ['Chinatown Heritage Centre', 'Kampong Glam']
            },
            Family: {
                Beaches: ['East Coast Park', 'Palawan Beach'],
                Mountains: ['Mount Faber', 'Bukit Timah Hill'],
                Historical: ['Science Centre Singapore', 'Singapore Zoo']
            }
        }
    },
    SouthAfrica: {
        Relaxed: {
            Solo: {
                Beaches: ['Camps Bay', 'Durban Beach'],
                Mountains: ['Table Mountain', 'Drakensberg'],
                Historical: ['Robben Island', 'Table Mountain National Park']
            },
            Friends: {
                Beaches: ['Hermanus', 'Umhlanga'],
                Mountains: ['Tsitsikamma National Park', 'Sani Pass'],
                Historical: ['Apartheid Museum', 'District Six Museum']
            },
            Family: {
                Beaches: ['Boulders Beach', 'Jeffreys Bay'],
                Mountains: ['Magaliesberg', 'Cederberg'],
                Historical: ['Cape Town City Bowl', 'Kirstenbosch National Botanical Garden']
            }
        },
        Adventurous: {
            Solo: {
                Beaches: ['Dolphin Coast', 'Wild Coast'],
                Mountains: ['Drakensberg', 'Cederberg'],
                Historical: ['Golden Gate Highlands National Park']
            },
            Friends: {
                Beaches: ['Mossel Bay', 'Victoria Bay'],
                Mountains: ['Table Mountain', 'Cederberg'],
                Historical: ['Robben Island']
            },
            Family: {
                Beaches: ['Plett Beach', 'Kalk Bay'],
                Mountains: ['Montagu Mountains', 'Magaliesberg'],
                Historical: ['Wild Coast Sun', 'The Cradle of Humankind']
            }
        }
    }
};
const travelData = {
    Australia: {
        Cultural: {
            Solo: {
                Beaches: ['Bondi Beach', 'Manly Beach'],
                Mountains: ['Blue Mountains', 'Dandenong Ranges'],
                Historical: ['Sydney Opera House', 'The Rocks']
            },
            Friends: {
                Beaches: ['Gold Coast', 'Byron Bay'],
                Mountains: ['Grampians', 'Great Dividing Range'],
                Historical: ['Port Arthur', 'Melbourne Museum']
            },
            Family: {
                Beaches: ['Coffs Harbour', 'Noosa'],
                Mountains: ['Mount Kosciuszko', 'Snowy Mountains'],
                Historical: ['Old Melbourne Gaol', 'Australian War Memorial']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Cottesloe Beach', 'Bells Beach'],
                Mountains: ['Flinders Ranges', 'MacDonnell Ranges'],
                Historical: ['Mile End Cemetery', 'Old Port of Fremantle']
            },
            Friends: {
                Beaches: ['Lancelin', 'Margaret River'],
                Mountains: ['Wilpena Pound', 'Mount Remarkable'],
                Historical: ['Victoria Barracks', 'Melbourne Gaol']
            },
            Family: {
                Beaches: ['Tangalooma', 'Kangaroo Island'],
                Mountains: ['Grampians National Park', 'Mount Arapiles'],
                Historical: ['Jindabyne', 'Newcastle Fort Scratchley']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Whitsunday Islands', 'Noosa National Park'],
                Mountains: ['Mount Tamborine', 'Mount Warning'],
                Historical: ['Ayers Rock', 'Daintree Rainforest']
            },
            Friends: {
                Beaches: ['Great Barrier Reef', 'Fitzroy Island'],
                Mountains: ['Cradle Mountain', 'Tasmanian Wilderness'],
                Historical: ['Port Fairy', 'Werribee Mansion']
            },
            Family: {
                Beaches: ['Phillip Island', 'Palm Cove'],
                Mountains: ['Bunya Mountains', 'Mount Buffalo'],
                Historical: ['Port Arthur', 'Sovereign Hill']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Surfers Paradise', 'Bondi Beach'],
                Mountains: ['Mount Buller', 'Victorian Alps'],
                Historical: ['Crown Casino', 'Chinatown Melbourne']
            },
            Friends: {
                Beaches: ['Mooloolaba', 'Palm Beach'],
                Mountains: ['Mount Hotham', 'Lake Mountain'],
                Historical: ['Sydney Nightlife', 'Fortitude Valley']
            },
            Family: {
                Beaches: ['Gold Coast', 'Noosa'],
                Mountains: ['Mount Dandenong', 'Mount Macedon'],
                Historical: ['The Rocks', 'Luna Park']
            }
        }
    },
    Italy: {
        Cultural: {
            Solo: {
                Beaches: ['Cinque Terre', 'Amalfi Coast'],
                Mountains: ['Dolomites', 'Apennines'],
                Historical: ['Colosseum', 'Vatican City']
            },
            Friends: {
                Beaches: ['Sicily', 'Sardinia'],
                Mountains: ['Mount Etna', 'Gran Sasso'],
                Historical: ['Florence', 'Pompeii']
            },
            Family: {
                Beaches: ['Rimini', 'Lido di Jesolo'],
                Mountains: ['Aosta Valley', 'Sila National Park'],
                Historical: ['Leaning Tower of Pisa', 'Castel del Monte']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Ravello', 'Tropea'],
                Mountains: ['Monte Bianco', 'Gran Paradiso'],
                Historical: ['Roman Forum', 'Pompeii']
            },
            Friends: {
                Beaches: ['Viareggio', 'Catania'],
                Mountains: ['Sibillini Mountains', 'Casentinesi Forest'],
                Historical: ['Tuscany', 'Venice']
            },
            Family: {
                Beaches: ['Porto Ercole', 'Alghero'],
                Mountains: ['Val dAosta', 'Sila'],
                Historical: ['Castel Sant’Angelo', 'The Catacombs']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Positano', 'Capri'],
                Mountains: ['Lake Como', 'Sorrento Peninsula'],
                Historical: ['Villa d’Este', 'Gardens of Ninfa']
            },
            Friends: {
                Beaches: ['Taormina', 'Ischia'],
                Mountains: ['Monte Subasio', 'Monte Amiata'],
                Historical: ['Viterbo', 'Assisi']
            },
            Family: {
                Beaches: ['Viareggio', 'Bardolino'],
                Mountains: ['Etna National Park', 'Parco Nazionale Gran Sasso'],
                Historical: ['Civita di Bagnoregio', 'Castel Gandolfo']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Gallipoli', 'Syracuse'],
                Mountains: ['Vesuvius', 'Monti Sibillini'],
                Historical: ['Bologna nightlife', 'Rome pubs']
            },
            Friends: {
                Beaches: ['Forte dei Marmi', 'Riccione'],
                Mountains: ['Monte Lario', 'Monte Pollino'],
                Historical: ['Milan', 'Florence nightlife']
            },
            Family: {
                Beaches: ['Cattolica', 'Numana'],
                Mountains: ['Val di Non', 'Monte Grappa'],
                Historical: ['Rome', 'Venice']
            }
        }
    },
    Japan: {
        Cultural: {
            Solo: {
                Beaches: ['Okinawa', 'Kamakura'],
                Mountains: ['Mount Fuji', 'Japanese Alps'],
                Historical: ['Kyoto', 'Hiroshima Peace Memorial']
            },
            Friends: {
                Beaches: ['Miyako Island', 'Zamami'],
                Mountains: ['Yatsugatake', 'Kumano Kodo'],
                Historical: ['Osaka Castle', 'Nara Park']
            },
            Family: {
                Beaches: ['Shonan', 'Fukuoka'],
                Mountains: ['Aso', 'Hakone'],
                Historical: ['Himeji Castle', 'Kinkaku-ji']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Shizuoka', 'Okinawa'],
                Mountains: ['Chubu Mountains', 'Northern Alps'],
                Historical: ['Nara', 'Kanazawa']
            },
            Friends: {
                Beaches: ['Shizuoka', 'Miyakojima'],
                Mountains: ['Kanto', 'Chugoku'],
                Historical: ['Hiroshima', 'Kamakura']
            },
            Family: {
                Beaches: ['Nagasaki', 'Tottori'],
                Mountains: ['Aso', 'Kumamoto'],
                Historical: ['Shuri Castle', 'Ryoan-ji']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Amanohashidate', 'Kushimoto'],
                Mountains: ['Hakone', 'Kyoto'],
                Historical: ['Katsura Imperial Villa', 'Nijo Castle']
            },
            Friends: {
                Beaches: ['Awaji Island', 'Shimanami Kaido'],
                Mountains: ['Kii Peninsula', 'Mount Takao'],
                Historical: ['Osaka', 'Hiroshima']
            },
            Family: {
                Beaches: ['Kagawa', 'Tama Island'],
                Mountains: ['Naeba', 'Kamikochi'],
                Historical: ['The Great Buddha of Nara', 'Daitoku-ji']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Kuta', 'Jinbōchō'],
                Mountains: ['Yoshino', 'Fuji Five Lakes'],
                Historical: ['Tokyo nightlife', 'Roppongi']
            },
            Friends: {
                Beaches: ['Okinawa', 'Shonan'],
                Mountains: ['Hakone', 'Fuji'],
                Historical: ['Shinjuku nightlife', 'Osaka nightlife']
            },
            Family: {
                Beaches: ['Okinawa', 'Naha'],
                Mountains: ['Aso', 'Okinawa'],
                Historical: ['Tokyo Disneyland', 'Universal Studios Japan']
            }
        }
    },
    France: {
        Cultural: {
            Solo: {
                Beaches: ['Nice', 'Cannes'],
                Mountains: ['Alps', 'Pyrenees'],
                Historical: ['Louvre Museum', 'Mont Saint-Michel']
            },
            Friends: {
                Beaches: ['Saint-Tropez', 'Biarritz'],
                Mountains: ['Chamonix', 'Auvergne'],
                Historical: ['Versailles', 'Avignon']
            },
            Family: {
                Beaches: ['La Rochelle', 'Deauville'],
                Mountains: ['Puy du Fou', 'Sainte-Victoire'],
                Historical: ['Château de Chambord', 'Chartres Cathedral']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Cap Ferret', 'Etretat'],
                Mountains: ['Jura Mountains', 'Massif Central'],
                Historical: ['Pont du Gard', 'Carcassonne']
            },
            Friends: {
                Beaches: ['Palavas-les-Flots', 'Plage de la Grande-Motte'],
                Mountains: ['Massif des Vosges', 'Mont Ventoux'],
                Historical: ['Amiens', 'Rouen']
            },
            Family: {
                Beaches: ['Le Touquet', 'Collioure'],
                Mountains: ['Chalet des 2 Alpes', 'Chamonix'],
                Historical: ['Cathedral of Strasbourg', 'Fort Boyard']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Porquerolles', 'Île de Ré'],
                Mountains: ['Chartreuse', 'Bauges'],
                Historical: ['Giverny', 'Vézelay']
            },
            Friends: {
                Beaches: ['Îles d’Hyères', 'Cassis'],
                Mountains: ['Mont Blanc', 'Vercors'],
                Historical: ['Lourdes', 'Sancerre']
            },
            Family: {
                Beaches: ['Aigues-Mortes', 'Toulon'],
                Mountains: ['Mont Saint Michel', 'Les Vosges'],
                Historical: ['Palace of Versailles', 'Pont du Gard']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Biarritz', 'Nice'],
                Mountains: ['Les Arcs', 'La Plagne'],
                Historical: ['Paris nightlife', 'Montmartre']
            },
            Friends: {
                Beaches: ['Saint-Tropez', 'Côte d’Azur'],
                Mountains: ['Chamonix', 'Les Deux Alpes'],
                Historical: ['Le Marais', 'Saint-Germain-des-Prés']
            },
            Family: {
                Beaches: ['Cannes', 'Calvi'],
                Mountains: ['Alpe d’Huez', 'Méribel'],
                Historical: ['Disneyland Paris', 'Futuroscope']
            }
        }
    },
    Spain: {
        Cultural: {
            Solo: {
                Beaches: ['Costa Brava', 'Playa de la Concha'],
                Mountains: ['Sierra Nevada', 'Picos de Europa'],
                Historical: ['Alhambra', 'Sagrada Familia']
            },
            Friends: {
                Beaches: ['Ibiza', 'Mallorca'],
                Mountains: ['Montjuïc', 'Sierra de Guadarrama'],
                Historical: ['Park Güell', 'Gothic Quarter']
            },
            Family: {
                Beaches: ['Tenerife', 'Costa Blanca'],
                Mountains: ['Pyrenees', 'Sierra de Gredos'],
                Historical: ['El Escorial', 'Valencia Cathedral']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Malaga', 'Benidorm'],
                Mountains: ['Montes de Toledo', 'Sierra de Gredos'],
                Historical: ['Roman Ruins of Mérida', 'Torre de Hercules']
            },
            Friends: {
                Beaches: ['Cabo de Gata', 'La Playa de la Barrosa'],
                Mountains: ['Sierra de Alhamilla', 'Sierra de Mijas'],
                Historical: ['The Alcazaba', 'Roman Theatre']
            },
            Family: {
                Beaches: ['La Manga', 'San Sebastián'],
                Mountains: ['Sierra Nevada', 'Montes de León'],
                Historical: ['The Alhambra', 'The Great Mosque of Córdoba']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['San Sebastián', 'Costa de la Luz'],
                Mountains: ['Montañas de Prades', 'Sierra de Lújar'],
                Historical: ['Montserrat', 'Cadaqués']
            },
            Friends: {
                Beaches: ['La Albufera', 'Las Salinas'],
                Mountains: ['Sierra de Cazorla', 'Sierra de Grazalema'],
                Historical: ['Ronda', 'Tossa de Mar']
            },
            Family: {
                Beaches: ['Salou', 'Sitges'],
                Mountains: ['Picos de Europa', 'Sierra de Urbión'],
                Historical: ['The Alcazar of Seville', 'The Roman Theater']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Ibiza', 'Barcelona'],
                Mountains: ['Sierra de Guadarrama', 'Sierra de Espuña'],
                Historical: ['Barcelona nightlife', 'Seville nightlife']
            },
            Friends: {
                Beaches: ['Benidorm', 'Tarragona'],
                Mountains: ['Sierra de Alicante', 'Sierra de la Almijara'],
                Historical: ['Granada', 'Valencia']
            },
            Family: {
                Beaches: ['Costa Dorada', 'Costa Blanca'],
                Mountains: ['Sierra Nevada', 'Picos de Europa'],
                Historical: ['Parque Guell', 'Museo del Prado']
            }
        }
    },
    USA: {
        Cultural: {
            Solo: {
                Beaches: ['Santa Monica Beach', 'Maui'],
                Mountains: ['Rocky Mountains', 'Appalachian Mountains'],
                Historical: ['Statue of Liberty', 'National Mall']
            },
            Friends: {
                Beaches: ['Miami Beach', 'Key West'],
                Mountains: ['Yosemite', 'Grand Canyon'],
                Historical: ['Golden Gate Bridge', 'Mount Rushmore']
            },
            Family: {
                Beaches: ['Orlando', 'Virginia Beach'],
                Mountains: ['Great Smoky Mountains', 'Zion National Park'],
                Historical: ['Colonial Williamsburg', 'Gettysburg']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Cape Cod', 'Newport'],
                Mountains: ['Black Hills', 'White Mountains'],
                Historical: ['Independence Hall', 'Antietam National Battlefield']
            },
            Friends: {
                Beaches: ['Pacific Beach', 'Huntington Beach'],
                Mountains: ['Catskills', 'Adirondacks'],
                Historical: ['Alcatraz Island', 'Gettysburg National Military Park']
            },
            Family: {
                Beaches: ['Myrtle Beach', 'Clearwater Beach'],
                Mountains: ['Mount Rainier', 'Sequoia National Park'],
                Historical: ['Colonial Williamsburg', 'Civil Rights Trail']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Hanauma Bay', 'Napili Beach'],
                Mountains: ['Blue Ridge Mountains', 'Cascade Mountains'],
                Historical: ['Lake Tahoe', 'Big Sur']
            },
            Friends: {
                Beaches: ['Laguna Beach', 'Cape May'],
                Mountains: ['Olympic National Park', 'Mount Shasta'],
                Historical: ['Savannah', 'Sedona']
            },
            Family: {
                Beaches: ['Gulf Shores', 'Tybee Island'],
                Mountains: ['Mount Mitchell', 'Great Basin National Park'],
                Historical: ['Mount Vernon', 'Washington D.C.']
            }
        },
        Party: {
            Solo: {
                Beaches: ['South Beach', 'Venice Beach'],
                Mountains: ['Aspen', 'Lake Tahoe'],
                Historical: ['Las Vegas Strip', 'Nashville nightlife']
            },
            Friends: {
                Beaches: ['Santa Cruz', 'Myrtle Beach'],
                Mountains: ['Pikes Peak', 'Teton Mountains'],
                Historical: ['New Orleans', 'Austin']
            },
            Family: {
                Beaches: ['Hilton Head', 'Destin'],
                Mountains: ['Rocky Mountain National Park', 'Smoky Mountains'],
                Historical: ['Disneyland', 'Universal Studios']
            }
        }
    },
    Thailand: {
        Cultural: {
            Solo: {
                Beaches: ['Phuket', 'Ko Samui'],
                Mountains: ['Doi Inthanon', 'Khao Sok'],
                Historical: ['Grand Palace', 'Ayutthaya Historical Park']
            },
            Friends: {
                Beaches: ['Krabi', 'Koh Phi Phi'],
                Mountains: ['Chiang Mai', 'Koh Tao'],
                Historical: ['Wat Pho', 'Wat Arun']
            },
            Family: {
                Beaches: ['Hua Hin', 'Koh Chang'],
                Mountains: ['Khao Yai', 'Sukhothai'],
                Historical: ['Sukhothai Historical Park', 'National Museum Bangkok']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Koh Lipe', 'Patong Beach'],
                Mountains: ['Khao Phra Thaeo', 'Doi Suthep'],
                Historical: ['Chiang Mai Old City', 'Thung Teao Forest Natural Park']
            },
            Friends: {
                Beaches: ['Koh Lanta', 'Koh Samui'],
                Mountains: ['Khao Sam Roi Yot', 'Phu Kradueng'],
                Historical: ['Chiang Rai', 'Khmer Temple']
            },
            Family: {
                Beaches: ['Railay Beach', 'Ko Phi Phi'],
                Mountains: ['Koh Yao Yai', 'Phu Kradueng National Park'],
                Historical: ['Kanchanaburi', 'Phimai Historical Park']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Koh Samui', 'Ko Lanta'],
                Mountains: ['Khao Sok', 'Doi Inthanon'],
                Historical: ['Koh Yao Noi', 'Krabi']
            },
            Friends: {
                Beaches: ['Koh Chang', 'Koh Tao'],
                Mountains: ['Mae Hong Son', 'Doi Suthep'],
                Historical: ['Chiang Mai', 'Phra Nakhon Khiri']
            },
            Family: {
                Beaches: ['Hua Hin', 'Krabi'],
                Mountains: ['Khao Yai', 'Doi Inthanon'],
                Historical: ['Ratanakosin Island', 'Ayutthaya']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Koh Phangan', 'Patong Beach'],
                Mountains: ['Doi Inthanon', 'Koh Samui'],
                Historical: ['Bangkok nightlife', 'Chiang Mai nightlife']
            },
            Friends: {
                Beaches: ['Pattaya', 'Koh Phi Phi'],
                Mountains: ['Koh Tao', 'Koh Yao Noi'],
                Historical: ['Bangkok', 'Phuket']
            },
            Family: {
                Beaches: ['Phuket', 'Ko Lanta'],
                Mountains: ['Doi Inthanon', 'Khao Yai'],
                Historical: ['Old Town Chiang Mai', 'Sukhothai']
            }
        }
    },
    Mexico: {
        Cultural: {
            Solo: {
                Beaches: ['Cancun', 'Tulum'],
                Mountains: ['Sierra Madre', 'Pico de Orizaba'],
                Historical: ['Chichen Itza', 'Teotihuacan']
            },
            Friends: {
                Beaches: ['Cozumel', 'Playa del Carmen'],
                Mountains: ['Popocatépetl', 'Nevado de Toluca'],
                Historical: ['Palace of Fine Arts', 'Chapultepec Castle']
            },
            Family: {
                Beaches: ['Puerto Vallarta', 'Mazatlán'],
                Mountains: ['Sierra Gorda', 'Sierra Norte de Puebla'],
                Historical: ['Zocalo', 'Museo Frida Kahlo']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Acapulco', 'Los Cabos'],
                Mountains: ['Sierra de Oaxaca', 'Sierra de Juarez'],
                Historical: ['Catedral Metropolitana', 'Teotihuacan']
            },
            Friends: {
                Beaches: ['Isla Mujeres', 'Bahía de Banderas'],
                Mountains: ['Sierra Madre Oriental', 'Sierra de San Pedro Mártir'],
                Historical: ['Tulum Ruins', 'Palenque']
            },
            Family: {
                Beaches: ['Zihuatanejo', 'San Felipe'],
                Mountains: ['Sierra de la Laguna', 'Sierra de Tamaulipas'],
                Historical: ['Basilica de Guadalupe', 'Maya Ruins']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Playa del Carmen', 'Tulum'],
                Mountains: ['Sierra de Chiapas', 'Sierra de Guerrero'],
                Historical: ['Cenote Ik Kil', 'Palenque']
            },
            Friends: {
                Beaches: ['Cozumel', 'Akumal'],
                Mountains: ['Sierra de Oaxaca', 'Sierra de Michoacán'],
                Historical: ['Chichen Itza', 'Xcaret']
            },
            Family: {
                Beaches: ['Mazatlán', 'Playa Norte'],
                Mountains: ['Sierra Madre del Sur', 'Cerro de la Silla'],
                Historical: ['Centro Histórico de Querétaro', 'Montezuma Castle']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Cabo San Lucas', 'Puerto Vallarta'],
                Mountains: ['La Malinche', 'Sierra Tarahumara'],
                Historical: ['Mexico City nightlife', 'Cancun nightlife']
            },
            Friends: {
                Beaches: ['Playa del Carmen', 'Acapulco'],
                Mountains: ['Sierra de Durango', 'Sierra de San Pedro Mártir'],
                Historical: ['Los Cabos', 'Playa del Carmen']
            },
            Family: {
                Beaches: ['Isla Mujeres', 'Tulum'],
                Mountains: ['Sierra de Oaxaca', 'Sierra Madre'],
                Historical: ['Zocalo', 'Chichen Itza']
            }
        }
    },
    Greece: {
        Cultural: {
            Solo: {
                Beaches: ['Santorini', 'Mykonos'],
                Mountains: ['Olympus', 'Pindus'],
                Historical: ['Acropolis', 'Ancient Delphi']
            },
            Friends: {
                Beaches: ['Corfu', 'Zante'],
                Mountains: ['Mount Athos', 'Parnassus'],
                Historical: ['Knossos', 'Olympia']
            },
            Family: {
                Beaches: ['Crete', 'Rhodes'],
                Mountains: ['Taygetus', 'Kallimachos'],
                Historical: ['Epidaurus', 'Meteora']
            }
        },
        Historical: {
            Solo: {
                Beaches: ['Naxos', 'Skiathos'],
                Mountains: ['Thessaloniki', 'Mount Olympus'],
                Historical: ['Knossos', 'Ancient Corinth']
            },
            Friends: {
                Beaches: ['Kefalonia', 'Paros'],
                Mountains: ['Mount Taygetus', 'Pindus'],
                Historical: ['Ancient Olympia', 'Acropolis']
            },
            Family: {
                Beaches: ['Lesbos', 'Chios'],
                Mountains: ['Rhodes', 'Mount Olympus'],
                Historical: ['Archaeological Museum of Thessaloniki', 'Nafplio']
            }
        },
        Calming: {
            Solo: {
                Beaches: ['Lefkada', 'Kefalonia'],
                Mountains: ['Mount Olympus', 'Mount Parnassus'],
                Historical: ['Mycenae', 'Delphi']
            },
            Friends: {
                Beaches: ['Sifnos', 'Milos'],
                Mountains: ['Parnassus', 'Zagori'],
                Historical: ['Naxos', 'Paros']
            },
            Family: {
                Beaches: ['Corfu', 'Rhodes'],
                Mountains: ['Chalkidiki', 'Skiathos'],
                Historical: ['Mycenae', 'Ancient Olympia']
            }
        },
        Party: {
            Solo: {
                Beaches: ['Mykonos', 'Ios'],
                Mountains: ['Kea', 'Corinth'],
                Historical: ['Athens nightlife', 'Thessaloniki nightlife']
            },
            Friends: {
                Beaches: ['Santorini', 'Kos'],
                Mountains: ['Naxos', 'Syros'],
                Historical: ['Athens', 'Mikonos']
            },
            Family: {
                Beaches: ['Crete', 'Peloponnese'],
                Mountains: ['Olympus', 'Parnassus'],
                Historical: ['Ancient Agora', 'Acropolis']
            }
        }
    }
};


// Event listener for travel suggestions
document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const country = document.getElementById('country').value.trim();
    const mood = document.getElementById('mood').value.trim();
    const companion = document.getElementById('companion').value.trim();
    const budget = document.getElementById('budget').value.trim();
    const days = document.getElementById('days').value.trim();
    const climate = document.getElementById('climate').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const suggestionsContainer = document.getElementById('suggestions');

    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    // Check if all inputs are provided
    if (country && mood && companion && budget && days && climate && experience) {
        const matchedSuggestions = suggestionsData[country][mood][companion][experience];

        if (matchedSuggestions && matchedSuggestions.length > 0) {
            suggestionsContainer.innerHTML = `<h2>Suggested Places (Budget: ${budget}, Days: ${days}, Climate: ${climate}):</h2><ul>` + 
                matchedSuggestions.map(place => `<li>${place}</li>`).join('') + 
                '</ul>';
        } else {
            suggestionsContainer.innerHTML = '<h2>No suggestions found based on your preferences.</h2>';
        }
    } else {
        suggestionsContainer.innerHTML = '<h2>Please fill in all options.</h2>';
    }
});
