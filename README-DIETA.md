# 📝 Cómo Cambiar la Dieta

## ✨ Archivo de Datos: `diet-data.js`

Todos los datos de la dieta están ahora en un **archivo separado** para que puedas cambiarlos fácilmente sin tocar el código de la app.

## 🔧 Qué puedes modificar

### 1. **Información del Usuario** (`userInfo`)
```javascript
userInfo: {
    age: 31,
    height: 182, // cm
    location: "Medellín, Colombia 🇨🇴",
    activity: "Caminata diaria 1 hora (~5 km)"
}
```

### 2. **Menú Semanal** (`menu`)
Puedes cambiar cualquier día de la semana:
```javascript
menu: {
    lunes: {
        desayuno: [ /* opciones */ ],
        snack_manana: [ /* opciones */ ],
        almuerzo: [ /* opciones */ ],
        snack_tarde: [ /* opciones */ ],
        cena: [ /* opciones */ ]
    },
    martes: { /* ... */ },
    // etc...
}
```

### 3. **Recetas** (`bulgarosRecipes` y `waterRecipes`)
Agrega, modifica o elimina recetas:
```javascript
bulgarosRecipes: [
    {
        title: "1. Nombre de la Receta",
        ingredients: [
            "Ingrediente 1",
            "Ingrediente 2"
        ],
        note: "Nota opcional"
    }
]
```

### 4. **Lista de Compras** (`shopping`)
Organizada por categorías:
```javascript
shopping: {
    "🥩 PROTEÍNAS": [
        "Item 1",
        "Item 2"
    ],
    "🍎 FRUTAS": [ /* ... */ ],
    // Puedes agregar nuevas categorías
}
```

### 5. **Valores de Laboratorio** (`labValues`)
```javascript
labValues: {
    triglycerides: {
        value: 244.66,
        unit: "mg/dl",
        status: "Elevados",
        alert: "danger",
        note: "Nota importante"
    }
}
```

### 6. **Reglas Siempre/Nunca** (`rules`)
```javascript
rules: {
    always: [
        "Regla 1",
        "Regla 2"
    ],
    never: [
        "Evitar 1",
        "Evitar 2"
    ]
}
```

## 🚀 Cómo cambiar la dieta

1. **Abre el archivo** `diet-data.js`
2. **Modifica** cualquier sección que necesites
3. **Guarda** el archivo
4. **Recarga** la app en el navegador

**¡Eso es todo!** No necesitas tocar `index.html` ni ningún otro archivo.

## 📋 Ejemplos de Cambios Comunes

### Cambiar una opción de desayuno
```javascript
lunes: {
    desayuno: [
        "NUEVA OPCIÓN: Pancakes de avena con frutas",
        "Opción 2 existente",
        "Opción 3 existente"
    ],
    // ...
}
```

### Agregar un nuevo día
```javascript
menu: {
    // ... días existentes
    sabado: {
        desayuno: [ /* opciones */ ],
        // ... otras comidas
    }
}
```

### Cambiar lista de compras
```javascript
shopping: {
    "🥩 PROTEÍNAS": [
        "Pollo 1kg", // Cambiado
        "Pescado 500g" // Agregado
    ]
}
```

## ⚠️ Importante

- Mantén la estructura JSON correcta (comas, corchetes, llaves)
- Los días deben llamarse: `lunes`, `martes`, `miercoles`, `jueves`, `viernes`
- Las comidas deben llamarse: `desayuno`, `snack_manana`, `almuerzo`, `snack_tarde`, `cena`
- Si hay un error de sintaxis, la app mostrará un error en la consola del navegador

## 🎯 Beneficios

- ✅ Cambiar la dieta sin tocar código
- ✅ Fácil de mantener
- ✅ Puedes tener múltiples versiones del archivo
- ✅ Comparte tu dieta con otros

---

**Cualquier duda, revisa la estructura del archivo `diet-data.js` como referencia.**
