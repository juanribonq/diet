// ========================================
// BASE DE DATOS DE ALIMENTOS Y CALORÍAS
// Formato: calorias y macros por unidad especificada
// ========================================

const foodDatabase = {
    // PROTEÍNAS - HUEVOS Y LÁCTEOS
    "huevo": {
        name: "Huevo",
        unit: "1 huevo",
        calories: 86,  // 143 * 60/100
        protein: 7.6,  // 12.6 * 60/100
        carbs: 0.7,    // 1.1 * 60/100
        fat: 5.7,      // 9.5 * 60/100
        defaultWeight: 60,
        aliases: ["huevos", "huevo entero", "huevo completo"]
    },
    "clara de huevo": {
        name: "Clara de huevo",
        unit: "1 clara",
        calories: 17,  // 52 * 33/100
        protein: 3.6,  // 11 * 33/100
        carbs: 0.2,    // 0.7 * 33/100
        fat: 0.1,      // 0.2 * 33/100
        defaultWeight: 33,
        aliases: ["claras", "clara"]
    },
    "yogurt búlgaros": {
        name: "Yogurt de búlgaros",
        unit: "1 taza",
        calories: 146,  // 61 * 240/100
        protein: 8.4,   // 3.5 * 240/100
        carbs: 11.3,    // 4.7 * 240/100
        fat: 7.9,       // 3.3 * 240/100
        defaultWeight: 240,
        aliases: ["yogurt", "yogurt natural", "búlgaros"]
    },
    "queso campesino": {
        name: "Queso campesino",
        unit: "1 rodaja",
        calories: 79,  // 264 * 30/100
        protein: 5.4,  // 18 * 30/100
        carbs: 0.9,    // 3 * 30/100
        fat: 6.3,      // 21 * 30/100
        defaultWeight: 30,
        aliases: ["queso", "queso fresco"]
    },
    "leche deslactosada": {
        name: "Leche deslactosada",
        unit: "1 taza",
        calories: 101,  // 42 * 240/100
        protein: 8.2,   // 3.4 * 240/100
        carbs: 12,      // 5 * 240/100
        fat: 2.4,       // 1 * 240/100
        defaultWeight: 240,
        aliases: ["leche"]
    },

    // PROTEÍNAS - CARNES
    "pechuga de pollo": {
        name: "Pechuga de pollo",
        unit: "1 porción",
        calories: 248,  // 165 * 150/100
        protein: 46.5,  // 31 * 150/100
        carbs: 0,
        fat: 5.4,       // 3.6 * 150/100
        defaultWeight: 150,
        aliases: ["pechuga", "pollo", "pollo pechuga", "pechuga pollo"]
    },
    "pollo desmenuzado": {
        name: "Pollo desmenuzado",
        unit: "1 porción",
        calories: 248,  // 165 * 150/100
        protein: 46.5,  // 31 * 150/100
        carbs: 0,
        fat: 5.4,       // 3.6 * 150/100
        defaultWeight: 150,
        aliases: ["pollo deshilachado"]
    },
    "lomo de res": {
        name: "Lomo de res",
        unit: "1 porción",
        calories: 375,  // 250 * 150/100
        protein: 39,    // 26 * 150/100
        carbs: 0,
        fat: 24,        // 16 * 150/100
        defaultWeight: 150,
        aliases: ["lomo", "res", "carne de res", "carne"]
    },
    "tilapia": {
        name: "Tilapia",
        unit: "1 filete",
        calories: 144,  // 96 * 150/100
        protein: 30,    // 20 * 150/100
        carbs: 0,
        fat: 2.6,       // 1.7 * 150/100
        defaultWeight: 150,
        aliases: ["filete de tilapia", "pescado tilapia"]
    },
    "trucha": {
        name: "Trucha",
        unit: "1 filete",
        calories: 179,  // 119 * 150/100
        protein: 30.8,  // 20.5 * 150/100
        carbs: 0,
        fat: 5.3,       // 3.5 * 150/100
        defaultWeight: 150,
        aliases: ["filete de trucha", "trucha fresca"]
    },
    "salmón": {
        name: "Salmón",
        unit: "1 filete",
        calories: 309,  // 206 * 150/100
        protein: 33,    // 22 * 150/100
        carbs: 0,
        fat: 19.5,      // 13 * 150/100
        defaultWeight: 150,
        aliases: ["salmon", "filete de salmón"]
    },
    "atún en agua": {
        name: "Atún en agua",
        unit: "1 lata",
        calories: 93,   // 116 * 80/100
        protein: 20.8,  // 26 * 80/100
        carbs: 0,
        fat: 0.8,       // 1 * 80/100
        defaultWeight: 80,
        aliases: ["atun", "atún", "atún lata", "atun en agua"]
    },

    // CARBOHIDRATOS
    "arepa": {
        name: "Arepa de maíz",
        unit: "1 arepa",
        calories: 150,
        protein: 3,
        carbs: 28,
        fat: 3,
        defaultWeight: 100,
        aliases: ["arepas", "arepa maíz", "arepa pequeña"]
    },
    "arepa de avena": {
        name: "Arepa de avena",
        unit: "1 arepa",
        calories: 120,  // 150 * 80/100
        protein: 4,     // 5 * 80/100
        carbs: 17.6,    // 22 * 80/100
        fat: 3.5,       // 4.4 * 80/100
        defaultWeight: 80,
        aliases: ["arepa avena"]
    },
    "avena": {
        name: "Avena en hojuelas",
        unit: "1/2 taza",
        calories: 156,  // 389 * 40/100
        protein: 6.8,   // 17 * 40/100
        carbs: 26.4,    // 66 * 40/100
        fat: 2.8,       // 7 * 40/100
        defaultWeight: 40,
        aliases: ["avena hojuelas", "hojuelas de avena"]
    },
    "papa criolla": {
        name: "Papa criolla",
        unit: "1 papa",
        calories: 92,   // 77 * 120/100
        protein: 2.4,   // 2 * 120/100
        carbs: 20.4,    // 17 * 120/100
        fat: 0.1,
        defaultWeight: 120,
        aliases: ["papa", "papas criollas", "papa amarilla"]
    },
    "arroz blanco": {
        name: "Arroz blanco cocido",
        unit: "1 taza",
        calories: 195,  // 130 * 150/100
        protein: 4.1,   // 2.7 * 150/100
        carbs: 42,      // 28 * 150/100
        fat: 0.5,       // 0.3 * 150/100
        defaultWeight: 150,
        aliases: ["arroz", "arroz cocido"]
    },
    "quinua": {
        name: "Quinua cocida",
        unit: "1 taza",
        calories: 222,  // 120 * 185/100
        protein: 8.1,   // 4.4 * 185/100
        carbs: 38.9,    // 21 * 185/100
        fat: 3.5,       // 1.9 * 185/100
        defaultWeight: 185,
        aliases: ["quinoa", "quinua cocida"]
    },
    "lentejas": {
        name: "Lentejas cocidas",
        unit: "1 taza",
        calories: 232,  // 116 * 200/100
        protein: 18,    // 9 * 200/100
        carbs: 40,      // 20 * 200/100
        fat: 0.8,       // 0.4 * 200/100
        defaultWeight: 200,
        aliases: ["lenteja", "lentejas cocidas"]
    },
    "garbanzos": {
        name: "Garbanzos cocidos",
        unit: "1 taza",
        calories: 269,  // 164 * 164/100
        protein: 14.8,  // 9 * 164/100
        carbs: 44.3,    // 27 * 164/100
        fat: 4.3,       // 2.6 * 164/100
        defaultWeight: 164,
        aliases: ["garbanzo", "garbanzos cocidos"]
    },
    "frijoles": {
        name: "Frijoles cocidos",
        unit: "1 taza",
        calories: 218,  // 127 * 172/100
        protein: 15.5,  // 9 * 172/100
        carbs: 39.6,    // 23 * 172/100
        fat: 0.9,       // 0.5 * 172/100
        defaultWeight: 172,
        aliases: ["frijol", "frijoles cocidos"]
    },

    // FRUTAS
    "manzana verde": {
        name: "Manzana verde",
        unit: "1 manzana",
        calories: 95,   // 52 * 182/100
        protein: 0.5,   // 0.3 * 182/100
        carbs: 25.5,    // 14 * 182/100
        fat: 0.4,       // 0.2 * 182/100
        defaultWeight: 182,
        aliases: ["manzana", "manzana granny"]
    },
    "pera": {
        name: "Pera",
        unit: "1 pera",
        calories: 101,  // 57 * 178/100
        protein: 0.7,   // 0.4 * 178/100
        carbs: 26.7,    // 15 * 178/100
        fat: 0.2,       // 0.1 * 178/100
        defaultWeight: 178,
        aliases: ["peras"]
    },
    "banano": {
        name: "Banano",
        unit: "1 banano",
        calories: 105,  // 89 * 118/100
        protein: 1.3,   // 1.1 * 118/100
        carbs: 27.1,    // 23 * 118/100
        fat: 0.4,       // 0.3 * 118/100
        defaultWeight: 118,
        aliases: ["banana", "plátano", "banano pequeño"]
    },
    "fresas": {
        name: "Fresas",
        unit: "1 taza",
        calories: 48,   // 32 * 150/100
        protein: 1.1,   // 0.7 * 150/100
        carbs: 11.6,    // 7.7 * 150/100
        fat: 0.5,       // 0.3 * 150/100
        defaultWeight: 150,
        aliases: ["fresa", "frutillas"]
    },
    "arándanos": {
        name: "Arándanos",
        unit: "1 taza",
        calories: 83,   // 57 * 145/100
        protein: 1,     // 0.7 * 145/100
        carbs: 20.3,    // 14 * 145/100
        fat: 0.4,       // 0.3 * 145/100
        defaultWeight: 145,
        aliases: ["arandanos", "arándano", "blueberries"]
    },
    "mandarina": {
        name: "Mandarina",
        unit: "1 mandarina",
        calories: 47,   // 53 * 88/100
        protein: 0.7,   // 0.8 * 88/100
        carbs: 11.4,    // 13 * 88/100
        fat: 0.3,
        defaultWeight: 88,
        aliases: ["mandarinas"]
    },
    "papaya": {
        name: "Papaya",
        unit: "1 taza",
        calories: 65,   // 43 * 150/100
        protein: 0.8,   // 0.5 * 150/100
        carbs: 16.5,    // 11 * 150/100
        fat: 0.5,       // 0.3 * 150/100
        defaultWeight: 150,
        aliases: ["lechosa"]
    },
    "piña": {
        name: "Piña",
        unit: "1 taza",
        calories: 83,   // 50 * 165/100
        protein: 0.8,   // 0.5 * 165/100
        carbs: 21.5,    // 13 * 165/100
        fat: 0.2,       // 0.1 * 165/100
        defaultWeight: 165,
        aliases: ["pina", "ananá"]
    },
    "melón": {
        name: "Melón",
        unit: "1 taza",
        calories: 54,   // 34 * 160/100
        protein: 1.3,   // 0.8 * 160/100
        carbs: 12.8,    // 8 * 160/100
        fat: 0.3,       // 0.2 * 160/100
        defaultWeight: 160,
        aliases: ["melon"]
    },

    // VEGETALES
    "aguacate": {
        name: "Aguacate Hass",
        unit: "1 aguacate",
        calories: 240,  // 160 * 150/100
        protein: 3,     // 2 * 150/100
        carbs: 12.8,    // 8.5 * 150/100
        fat: 22,        // 14.7 * 150/100
        defaultWeight: 150,
        aliases: ["palta", "aguacates", "aguacate hass"]
    },
    "espinaca": {
        name: "Espinaca",
        unit: "1 taza",
        calories: 7,    // 23 * 30/100
        protein: 0.9,   // 2.9 * 30/100
        carbs: 1.1,     // 3.6 * 30/100
        fat: 0.1,       // 0.4 * 30/100
        defaultWeight: 30,
        aliases: ["espinacas"]
    },
    "brócoli": {
        name: "Brócoli",
        unit: "1 taza",
        calories: 31,   // 34 * 90/100
        protein: 2.5,   // 2.8 * 90/100
        carbs: 6.3,     // 7 * 90/100
        fat: 0.4,
        defaultWeight: 90,
        aliases: ["brocoli", "brécol"]
    },
    "coliflor": {
        name: "Coliflor",
        unit: "1 taza",
        calories: 25,
        protein: 1.9,
        carbs: 5,
        fat: 0.3,
        defaultWeight: 100,
        aliases: ["coliflores"]
    },
    "lechuga": {
        name: "Lechuga",
        unit: "1 taza",
        calories: 8,    // 15 * 55/100
        protein: 0.8,   // 1.4 * 55/100
        carbs: 1.6,     // 2.9 * 55/100
        fat: 0.1,       // 0.2 * 55/100
        defaultWeight: 55,
        aliases: ["lechugas"]
    },
    "tomate": {
        name: "Tomate",
        unit: "1 tomate",
        calories: 22,   // 18 * 123/100
        protein: 1.1,   // 0.9 * 123/100
        carbs: 4.8,     // 3.9 * 123/100
        fat: 0.2,
        defaultWeight: 123,
        aliases: ["tomates", "jitomate"]
    },
    "pepino": {
        name: "Pepino",
        unit: "1 pepino",
        calories: 48,   // 16 * 300/100
        protein: 2.1,   // 0.7 * 300/100
        carbs: 10.8,    // 3.6 * 300/100
        fat: 0.3,       // 0.1 * 300/100
        defaultWeight: 300,
        aliases: ["pepinos"]
    },
    "zanahoria": {
        name: "Zanahoria",
        unit: "1 zanahoria",
        calories: 25,   // 41 * 61/100
        protein: 0.5,   // 0.9 * 61/100
        carbs: 6.1,     // 10 * 61/100
        fat: 0.1,       // 0.2 * 61/100
        defaultWeight: 61,
        aliases: ["zanahorias"]
    },
    "ahuyama": {
        name: "Ahuyama",
        unit: "1 taza",
        calories: 30,   // 26 * 116/100
        protein: 1.2,   // 1 * 116/100
        carbs: 7.5,     // 6.5 * 116/100
        fat: 0.1,
        defaultWeight: 116,
        aliases: ["calabaza", "zapallo", "auyama"]
    },
    "champiñones": {
        name: "Champiñones",
        unit: "1 taza",
        calories: 15,   // 22 * 70/100
        protein: 2.2,   // 3.1 * 70/100
        carbs: 2.3,     // 3.3 * 70/100
        fat: 0.2,       // 0.3 * 70/100
        defaultWeight: 70,
        aliases: ["champiñón", "hongos", "setas"]
    },
    "remolacha": {
        name: "Remolacha",
        unit: "1 taza",
        calories: 58,   // 43 * 136/100
        protein: 2.2,   // 1.6 * 136/100
        carbs: 13.6,    // 10 * 136/100
        fat: 0.3,       // 0.2 * 136/100
        defaultWeight: 136,
        aliases: ["betabel", "betarraga"]
    },
    "habichuela": {
        name: "Habichuela",
        unit: "1 taza",
        calories: 31,
        protein: 1.8,
        carbs: 7,
        fat: 0.1,
        defaultWeight: 100,
        aliases: ["habichuelas", "judías verdes", "vainitas"]
    },
    "apio": {
        name: "Apio",
        unit: "1 taza",
        calories: 16,   // 16 * 101/100
        protein: 0.7,   // 0.7 * 101/100
        carbs: 3,       // 3 * 101/100
        fat: 0.2,
        defaultWeight: 101,
        aliases: ["celery"]
    },
    "pimentón": {
        name: "Pimentón",
        unit: "1 pimentón",
        calories: 37,   // 31 * 119/100
        protein: 1.2,   // 1 * 119/100
        carbs: 7.1,     // 6 * 119/100
        fat: 0.4,       // 0.3 * 119/100
        defaultWeight: 119,
        aliases: ["pimiento", "ají pimiento", "pimentones"]
    },
    "calabacín": {
        name: "Calabacín",
        unit: "1 taza",
        calories: 21,   // 17 * 124/100
        protein: 1.5,   // 1.2 * 124/100
        carbs: 3.8,     // 3.1 * 124/100
        fat: 0.4,       // 0.3 * 124/100
        defaultWeight: 124,
        aliases: ["calabacin", "zucchini"]
    },
    "berenjena": {
        name: "Berenjena",
        unit: "1 taza",
        calories: 21,   // 25 * 82/100
        protein: 0.8,   // 1 * 82/100
        carbs: 4.9,     // 6 * 82/100
        fat: 0.2,
        defaultWeight: 82,
        aliases: ["berenjenas"]
    },
    "ensalada": {
        name: "Ensalada mixta",
        unit: "1 taza",
        calories: 20,
        protein: 1,
        carbs: 4,
        fat: 0.2,
        defaultWeight: 100,
        aliases: ["ensalada mixta", "ensalada verde"]
    },
    "rúgula": {
        name: "Rúgula",
        unit: "1 taza",
        calories: 5,    // 25 * 20/100
        protein: 0.5,   // 2.6 * 20/100
        carbs: 0.7,     // 3.7 * 20/100
        fat: 0.1,       // 0.7 * 20/100
        defaultWeight: 20,
        aliases: ["rugula", "arúgula", "rúcula"]
    },

    // GRASAS SALUDABLES
    "almendras": {
        name: "Almendras",
        unit: "1 porción",
        calories: 162,  // 579 * 28/100
        protein: 5.9,   // 21 * 28/100
        carbs: 6.2,     // 22 * 28/100
        fat: 14,        // 50 * 28/100
        defaultWeight: 28,
        aliases: ["almendra"]
    },
    "nueces": {
        name: "Nueces",
        unit: "1 porción",
        calories: 183,  // 654 * 28/100
        protein: 4.2,   // 15 * 28/100
        carbs: 3.9,     // 14 * 28/100
        fat: 18.2,      // 65 * 28/100
        defaultWeight: 28,
        aliases: ["nuez"]
    },
    "maní": {
        name: "Maní",
        unit: "1 porción",
        calories: 159,  // 567 * 28/100
        protein: 7.3,   // 26 * 28/100
        carbs: 4.5,     // 16 * 28/100
        fat: 13.7,      // 49 * 28/100
        defaultWeight: 28,
        aliases: ["mani", "cacahuate", "cacahuete"]
    },
    "mantequilla de maní": {
        name: "Mantequilla de maní",
        unit: "1 cucharada",
        calories: 94,   // 588 * 16/100
        protein: 4,     // 25 * 16/100
        carbs: 3.2,     // 20 * 16/100
        fat: 8,         // 50 * 16/100
        defaultWeight: 16,
        aliases: ["crema de mani", "wake up", "mantequilla mani"]
    },
    "chía": {
        name: "Semillas de chía",
        unit: "1 cucharada",
        calories: 58,   // 486 * 12/100
        protein: 2,     // 17 * 12/100
        carbs: 5,       // 42 * 12/100
        fat: 3.7,       // 31 * 12/100
        defaultWeight: 12,
        aliases: ["chia", "semillas chia"]
    },
    "aceite de oliva": {
        name: "Aceite de oliva",
        unit: "1 cucharada",
        calories: 115,  // 884 * 13/100
        protein: 0,
        carbs: 0,
        fat: 13,        // 100 * 13/100
        defaultWeight: 13,
        aliases: ["aceite oliva", "aceite de oliva extra virgen"]
    },

    // PROTEÍNAS EN POLVO
    "proteína iso100": {
        name: "Proteína ISO100",
        unit: "1 scoop",
        calories: 110,  // 367 * 30/100
        protein: 24.9,  // 83 * 30/100
        carbs: 2,       // 6.7 * 30/100
        fat: 0,
        defaultWeight: 30,
        aliases: ["iso100", "proteina", "protein", "scoop proteina", "whey", "scoop"]
    },

    // OTROS
    "hummus": {
        name: "Hummus",
        unit: "2 cucharadas",
        calories: 50,   // 166 * 30/100
        protein: 2.4,   // 8 * 30/100
        carbs: 4.2,     // 14 * 30/100
        fat: 3,         // 10 * 30/100
        defaultWeight: 30,
        aliases: ["humus"]
    },
    "edamame": {
        name: "Edamame",
        unit: "1 taza",
        calories: 188,  // 121 * 155/100
        protein: 17,    // 11 * 155/100
        carbs: 15.5,    // 10 * 155/100
        fat: 7.8,       // 5 * 155/100
        defaultWeight: 155,
        aliases: ["edamames", "soja verde"]
    },
    "jícama": {
        name: "Jícama",
        unit: "1 taza",
        calories: 46,   // 38 * 120/100
        protein: 0.8,   // 0.7 * 120/100
        carbs: 10.8,    // 9 * 120/100
        fat: 0.1,
        defaultWeight: 120,
        aliases: ["jicama"]
    },
    "gelatina sin azúcar": {
        name: "Gelatina sin azúcar",
        unit: "1 porción",
        calories: 10,
        protein: 1.5,
        carbs: 0,
        fat: 0,
        defaultWeight: 100,
        aliases: ["gelatina", "gelatina light"]
    },

    // COMIDA CHATARRA (Para tracking ocasional)
    "gaseosa": {
        name: "Gaseosa/Refresco",
        unit: "1 lata",
        calories: 139,  // 42 * 330/100
        protein: 0,
        carbs: 35,      // 10.6 * 330/100
        fat: 0,
        defaultWeight: 330,
        aliases: ["coca cola", "refresco", "soda", "pepsi", "colombiana"]
    },
    "cerveza": {
        name: "Cerveza",
        unit: "1 cerveza",
        calories: 142,  // 43 * 330/100
        protein: 1.7,   // 0.5 * 330/100
        carbs: 11.9,    // 3.6 * 330/100
        fat: 0,
        defaultWeight: 330,
        aliases: ["cerveza 330ml", "poker", "aguila", "club colombia", "pilsen"]
    },
    "hamburguesa simple": {
        name: "Hamburguesa simple",
        unit: "1 hamburguesa",
        calories: 355,  // 250 * 142/100
        protein: 19.9,  // 14 * 142/100
        carbs: 31.2,    // 22 * 142/100
        fat: 15.6,      // 11 * 142/100
        defaultWeight: 142,
        aliases: ["hamburguesa", "burger"]
    },
    "hamburguesa doble": {
        name: "Hamburguesa doble carne",
        unit: "1 hamburguesa",
        calories: 539,  // 245 * 220/100
        protein: 34.1,  // 15.5 * 220/100
        carbs: 39.6,    // 18 * 220/100
        fat: 27.1,      // 12.3 * 220/100
        defaultWeight: 220,
        aliases: ["hamburguesa doble", "big mac", "whopper"]
    },
    "pizza pepperoni": {
        name: "Pizza pepperoni",
        unit: "1 porción",
        calories: 298,  // 266 * 112/100
        protein: 13,    // 11.6 * 112/100
        carbs: 33.6,    // 30 * 112/100
        fat: 12,        // 10.7 * 112/100
        defaultWeight: 112,
        aliases: ["pizza", "porcion pizza", "trozo pizza"]
    },
    "pizza hawaiana": {
        name: "Pizza hawaiana",
        unit: "1 porción",
        calories: 280,  // 233 * 120/100
        protein: 12,    // 10 * 120/100
        carbs: 36,      // 30 * 120/100
        fat: 10,        // 8.3 * 120/100
        defaultWeight: 120,
        aliases: ["pizza piña"]
    },
    "papas fritas": {
        name: "Papas fritas",
        unit: "1 porción",
        calories: 265,  // 312 * 85/100
        protein: 2.9,   // 3.4 * 85/100
        carbs: 34.9,    // 41 * 85/100
        fat: 12.8,      // 15 * 85/100
        defaultWeight: 85,
        aliases: ["french fries", "papas a la francesa"]
    },
    "empanada": {
        name: "Empanada de carne",
        unit: "1 empanada",
        calories: 249,  // 297 * 84/100
        protein: 8,     // 9.5 * 84/100
        carbs: 30.2,    // 36 * 84/100
        fat: 12,        // 14.3 * 84/100
        defaultWeight: 84,
        aliases: ["empanada carne", "empanada pollo"]
    },
    "hot dog": {
        name: "Hot dog/perro caliente",
        unit: "1 hot dog",
        calories: 290,  // 242 * 120/100
        protein: 11,    // 9.2 * 120/100
        carbs: 24,      // 20 * 120/100
        fat: 17,        // 14.2 * 120/100
        defaultWeight: 120,
        aliases: ["perro caliente", "perro", "hotdog"]
    },
    "tacos": {
        name: "Taco",
        unit: "1 taco",
        calories: 226,  // 217 * 104/100
        protein: 10,    // 9.6 * 104/100
        carbs: 20.8,    // 20 * 104/100
        fat: 11,        // 10.6 * 104/100
        defaultWeight: 104,
        aliases: ["taco carne", "taco pollo"]
    },
    "burrito": {
        name: "Burrito",
        unit: "1 burrito",
        calories: 511,  // 206 * 248/100
        protein: 22.1,  // 8.9 * 248/100
        carbs: 66.2,    // 26.7 * 248/100
        fat: 17.1,      // 6.9 * 248/100
        defaultWeight: 248,
        aliases: ["burrito carne", "burrito pollo"]
    },
    "helado": {
        name: "Helado",
        unit: "1 bola",
        calories: 137,  // 207 * 66/100
        protein: 2.3,   // 3.5 * 66/100
        carbs: 15.8,    // 24 * 66/100
        fat: 7.3,       // 11 * 66/100
        defaultWeight: 66,
        aliases: ["ice cream", "nieve"]
    },
    "chocolate": {
        name: "Chocolate con leche",
        unit: "1 barra",
        calories: 219,  // 535 * 41/100
        protein: 3.3,   // 8 * 41/100
        carbs: 24.2,    // 59 * 41/100
        fat: 12.3,      // 30 * 41/100
        defaultWeight: 41,
        aliases: ["chocolate de leche", "barra chocolate"]
    },
    "donas": {
        name: "Dona glaseada",
        unit: "1 dona",
        calories: 271,  // 452 * 60/100
        protein: 3,     // 5 * 60/100
        carbs: 31.2,    // 52 * 60/100
        fat: 15,        // 25 * 60/100
        defaultWeight: 60,
        aliases: ["dona", "donut", "rosquilla"]
    },
    "galletas": {
        name: "Galletas dulces",
        unit: "2-3 galletas",
        calories: 151,  // 502 * 30/100
        protein: 1.8,   // 6 * 30/100
        carbs: 20.1,    // 67 * 30/100
        fat: 7.2,       // 24 * 30/100
        defaultWeight: 30,
        aliases: ["galletas", "cookies", "galletas de chocolate"]
    }
};

// Exportar para uso en la app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = foodDatabase;
}
