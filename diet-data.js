// ========================================
// DATOS DE LA DIETA
// Modifica este archivo para cambiar el contenido de la dieta
// sin tocar el código principal de la app
// ========================================

const dietData = {
    // Datos del usuario
    userInfo: {
        age: 31,
        height: 182, // cm
        location: "Medellín, Colombia 🇨🇴",
        activity: "Caminata diaria 1 hora (~5 km)"
    },

    // Valores de laboratorio
    labValues: {
        triglycerides: { value: 244.66, unit: "mg/dl", status: "Elevados", alert: "danger", note: "Eliminar completamente el alcohol es CRÍTICO" },
        uricAcid: { value: 8.1, unit: "mg/dl", status: "Alto", alert: "danger", note: "Evitar carnes rojas, mariscos y alcohol" },
        hdl: { value: 32.20, unit: "mg/dl", status: "Bajo", alert: "warning", note: "Necesita aumentar con grasas saludables" },
        a1c: { value: 5.6, unit: "%", status: "Riesgo prediabetes", alert: "warning", note: "Controlar carbohidratos refinados" }
    },

    // Reglas siempre y nunca
    rules: {
        always: [
            "Agua al despertar",
            "Yogurt de búlgaros: 1-2 tazas diarias",
            "Agua gasificada alterna con natural",
            "Proteína en CADA comida",
            "Ensalada abundante en almuerzo",
            "Caminata de 1 hora diaria",
            "3 litros de agua total"
        ],
        never: [
            "Alcohol (ni una cerveza)",
            "Azúcar refinada",
            "Frituras",
            "Pan blanco, arroz blanco",
            "Gaseosas comerciales",
            "Comida rápida"
        ]
    },

    // Menú semanal (Lunes a Viernes)
    menu: {
        lunes: {
            desayuno: [
                "1 taza yogurt búlgaros + 1 scoop proteína ISO100 + 1/2 taza arándanos + 1 cucharada chía",
                "1 arepa maíz pequeña + 2 huevos revueltos con tomate y cebolla + 1/4 aguacate",
                "Avena (1/2 taza) + yogurt búlgaros + proteína + canela + fresas"
            ],
            snack_manana: [
                "1 manzana verde + 10 almendras",
                "1 taza yogurt búlgaros natural + 5 fresas",
                "1 pera + 1 cucharada mantequilla de maní Wake Up"
            ],
            almuerzo: [
                "Pechuga a la plancha (150g) + ensalada grande + 1/2 taza lentejas + aceite de oliva",
                "Filete de tilapia al horno + brócoli y coliflor al vapor + 1/2 taza garbanzos",
                "Trucha al ajillo + ensalada mixta + 1 papa criolla mediana"
            ],
            snack_tarde: [
                "Batido: 1 scoop proteína ISO100 + agua gasificada + hielo + espinaca",
                "2 rodajas queso campesino + tomate cherry",
                "Palitos de apio con 1 cucharada mantequilla de maní Wake Up"
            ],
            cena: [
                "Sopa de vegetales (ahuyama, habichuela, zanahoria, apio) + pechuga desmenuzada",
                "Ensalada grande con atún en agua + aceite de oliva + aguacate",
                "Crema de ahuyama (con leche deslactosada) + filete de pechuga"
            ]
        },
        martes: {
            desayuno: [
                "Revuelto de 2 claras + 1 huevo entero con champiñones y espinaca + 1 arepa pequeña",
                "Batido verde (espinaca, 1 scoop proteína, yogurt búlgaros, 1/2 banano, hielo)",
                "Pancakes proteicos (1 huevo + 1/2 taza avena + proteína) con 1 cucharadita miel"
            ],
            snack_manana: [
                "1 pera + 1 puñado pequeño maní natural",
                "Zanahoria baby con 2 cucharadas hummus",
                "Yogurt búlgaros + 1/2 taza papaya picada"
            ],
            almuerzo: [
                "Trucha al ajillo (150g) + brócoli y coliflor al vapor + 1 papa criolla mediana",
                "Pechuga a la plancha + ensalada mixta + 1/2 taza arroz integral",
                "Salmón al horno + vegetales asados (pimentón, calabacín) + 1/2 taza quinua"
            ],
            snack_tarde: [
                "Yogurt búlgaros + 5 nueces + canela",
                "1 scoop proteína con agua gasificada + 1 mandarina",
                "1 manzana verde cortada con 1 cucharada mantequilla de maní Wake Up"
            ],
            cena: [
                "Crema de ahuyama + filete de pechuga",
                "Tortilla de 2 huevos con vegetales + ensalada",
                "Consomé de pollo con vegetales + presa de pollo sin piel"
            ]
        },
        miercoles: {
            desayuno: [
                "Avena (1/2 taza) cocida + yogurt búlgaros + 1 scoop proteína + canela + arándanos",
                "Wrap de 1 tortilla integral + revuelto de huevo + aguacate + tomate",
                "Smoothie bowl (yogurt búlgaros, proteína, frutos rojos, avena, semillas chía)"
            ],
            snack_manana: [
                "Batido: 1 scoop proteína + fresas congeladas + agua gasificada",
                "1 manzana verde + 15g queso bajo en grasa",
                "1 taza yogurt búlgaros + 1/2 taza melón"
            ],
            almuerzo: [
                "Salmón al horno (150g) + ensalada de espinaca con limón + 1/2 taza quinua",
                "Pollo desmenuzado + ensalada grande + 1/2 taza frijoles",
                "Tilapia al horno + ensalada de remolacha y zanahoria + 1/2 taza lentejas"
            ],
            snack_tarde: [
                "Palitos de apio y pepino con 2 cucharadas mantequilla de maní Wake Up",
                "Gelatina sin azúcar + 10 almendras",
                "Edamames cocidos con sal marina"
            ],
            cena: [
                "Consomé de pollo con vegetales (sin papa, con ahuyama) + presa de pollo sin piel",
                "Ensalada César saludable (lechuga, pollo, parmesano light, sin crutones)",
                "Sopa de vegetales con fideos de calabacín + pechuga desmenuzada"
            ]
        },
        jueves: {
            desayuno: [
                "2 arepas de avena (hojuelas licuadas) + queso campesino + café negro",
                "Huevos pochados (2) sobre espinaca salteada + 1 arepa pequeña + aguacate",
                "Yogurt búlgaros + proteína + granola casera (avena, nueces, canela) sin azúcar"
            ],
            snack_manana: [
                "1 taza fresas + yogurt búlgaros",
                "Batido verde (espinaca, pepino, limón, agua gasificada, stevia)",
                "1 banano pequeño con 1 cucharada mantequilla de maní Wake Up"
            ],
            almuerzo: [
                "Pechuga a la plancha con chimichurri + ensalada de remolacha y zanahoria + 1/2 taza lentejas",
                "Filete de pescado + vegetales asados (pimentón, berenjena, calabacín)",
                "Pollo al curry (con leche de coco light) + coliflor arroz (coliflor rallada salteada)"
            ],
            snack_tarde: [
                "1 scoop proteína + 1 banano pequeño con agua",
                "Edamames cocidos con sal marina",
                "Bastones de jícama con limón y sal"
            ],
            cena: [
                "Caldo de costilla desgrasado + muchos vegetales (sin papa)",
                "Pollo desmenuzado + ensalada de col (coleslaw con yogurt búlgaros)",
                "Ensalada caprese (tomate, mozzarella light, albahaca, aceite de oliva) + atún"
            ]
        },
        viernes: {
            desayuno: [
                "Huevos pochados (2) sobre espinaca salteada + 1 arepa pequeña + aguacate",
                "Smoothie bowl (yogurt búlgaros, proteína, frutos rojos, avena, semillas)",
                "Tortilla de 3 claras con champiñones y espinaca + 1 arepa de avena"
            ],
            snack_manana: [
                "1 pera + 1 loncha jamón de pavo bajo en sodio",
                "Bastones de jícama con limón y sal",
                "Yogurt búlgaros + 1/2 taza piña picada"
            ],
            almuerzo: [
                "Tilapia al horno con hierbas + ensalada mixta abundante + 1/2 taza garbanzos",
                "Pollo al curry (con leche de coco light) + coliflor arroz",
                "Trucha a la plancha + ensalada grande + 1/2 taza arroz integral"
            ],
            snack_tarde: [
                "Yogurt búlgaros + semillas de chía + arándanos",
                "1 scoop proteína en agua gasificada + 10 nueces",
                "Palitos de zanahoria con 2 cucharadas hummus"
            ],
            cena: [
                "Sopa de vegetales con fideos de calabacín (zoodles) + pechuga desmenuzada",
                "Ensalada caprese + atún",
                "Crema de brócoli (con leche deslactosada) + pollo desmenuzado"
            ]
        }
    },

    // Recetas con yogurt de búlgaros
    bulgarosRecipes: [
        {
            title: "1. Smoothie 'Quema Grasa'",
            ingredients: [
                "1 taza yogurt búlgaros",
                "1 scoop proteína ISO100",
                "1/2 taza espinaca",
                "1/2 taza arándanos congelados",
                "1 cucharada semillas chía",
                "Agua gasificada o hielo",
                "Stevia opcional"
            ]
        },
        {
            title: "2. Bowl 'Desayuno Completo'",
            ingredients: [
                "1 taza yogurt búlgaros",
                "1/4 taza avena cruda",
                "1 scoop proteína",
                "Fresas picadas",
                "5 almendras picadas",
                "Canela",
                "Semillas de chía"
            ]
        },
        {
            title: "3. Aderezo 'Tzatziki Antioqueño'",
            ingredients: [
                "1 taza yogurt búlgaros",
                "1/2 pepino rallado (exprime el agua)",
                "2 dientes ajo machacados",
                "Cilantro picado",
                "Jugo de limón",
                "Sal y pimienta"
            ],
            note: "Úsalo sobre ensaladas o pollo"
        },
        {
            title: "4. Smoothie 'Post-Caminata'",
            ingredients: [
                "1 taza yogurt búlgaros",
                "1 scoop proteína",
                "1/2 banano",
                "1 cucharada mantequilla de maní Wake Up",
                "Canela",
                "Hielo"
            ]
        },
        {
            title: "5. 'Parfait Proteico'",
            ingredients: [
                "Capa 1: Yogurt búlgaros + proteína",
                "Capa 2: Fresas picadas",
                "Capa 3: Yogurt búlgaros",
                "Capa 4: Arándanos",
                "Top: Almendras picadas + chía"
            ]
        }
    ],

    // Recetas con agua gasificada
    waterRecipes: [
        {
            title: "1. 'Limonada Burbujeante'",
            ingredients: ["Agua gasificada", "Jugo de 1 limón", "Stevia", "Menta fresca", "Hielo"]
        },
        {
            title: "2. 'Agua Detox Tropical'",
            ingredients: ["Agua gasificada", "Rodajas pepino", "Jengibre rallado", "Limón"]
        },
        {
            title: "3. 'Agua de Fresas'",
            ingredients: ["Agua gasificada", "3-4 fresas machacadas", "Albahaca", "Limón"]
        },
        {
            title: "4. 'Mojito Sin Alcohol'",
            ingredients: ["Agua gasificada", "Lima", "Hierbabuena machacada", "Stevia", "Hielo"]
        },
        {
            title: "5. 'Agua de Arándanos'",
            ingredients: ["Agua gasificada", "Arándanos congelados", "Limón", "Romero (opcional)"]
        },
        {
            title: "6. 'Agua Mediterránea'",
            ingredients: ["Agua gasificada", "Rodajas naranja", "Romero fresco", "Hielo"]
        },
        {
            title: "7. 'Agua Verde Refrescante'",
            ingredients: ["Agua gasificada", "Pepino", "Menta", "Lima"]
        },
        {
            title: "8. 'Agua Picante'",
            ingredients: ["Agua gasificada", "Jengibre", "Limón", "Pizca cayena (opcional)"]
        }
    ],

    // Lista de compras organizada por categorías
    shopping: {
        "🥩 PROTEÍNAS": [
            "Pechuga de pollo sin piel (600-800g)",
            "Huevos (18 unidades)",
            "Tilapia fresca (300-400g)",
            "Trucha fresca (300-400g)",
            "Salmón (200-300g)",
            "Atún en agua (2-3 latas)",
            "Queso campesino (200g)",
            "Proteína ISO100 Dymatize",
            "Leche deslactosada para búlgaros (2-3 litros)"
        ],
        "🍎 FRUTAS": [
            "Manzanas verdes (7)",
            "Peras (5)",
            "Fresas (500g)",
            "Arándanos (250g)",
            "Limones (10-12)",
            "Bananos pequeños (3-4)",
            "Mandarinas (5)"
        ],
        "🥬 VEGETALES": [
            "Espinaca (2 manojos)",
            "Lechuga (2)",
            "Brócoli (500g)",
            "Coliflor (1 mediana)",
            "Tomate (1 kg)",
            "Pepino (5-6)",
            "Zanahoria (1 kg)",
            "Ahuyama (1 mediana)",
            "Aguacate (3-4)",
            "Champiñones (250g)"
        ],
        "🍚 CARBOHIDRATOS": [
            "Lentejas secas (250g)",
            "Garbanzos (250g)",
            "Avena en hojuelas (500g)",
            "Harina de maíz para arepas (500g)",
            "Papa criolla (500g)"
        ],
        "🥜 GRASAS SALUDABLES": [
            "Almendras naturales (200g)",
            "Nueces (150g)",
            "Semillas de chía (100g)",
            "Mantequilla de maní Wake Up (100% maní)",
            "Aceite de oliva extra virgen (250ml)"
        ],
        "🧂 CONDIMENTOS": [
            "Cilantro (2 manojos)",
            "Menta/hierbabuena (2 manojos)",
            "Ajo (1 cabeza)",
            "Jengibre fresco (1 raíz)",
            "Canela en polvo",
            "Sal marina",
            "Stevia líquida"
        ]
    },

    // Nombres de comidas para las notificaciones
    mealNames: {
        desayuno: "🌅 DESAYUNO",
        snack_manana: "🍎 SNACK MAÑANA",
        almuerzo: "🍽️ ALMUERZO",
        snack_tarde: "🥜 SNACK TARDE",
        cena: "🌙 CENA"
    }
};

// Exportar datos para uso en la app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = dietData;
}
