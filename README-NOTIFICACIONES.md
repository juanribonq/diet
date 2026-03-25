# 🔔 Sistema de Notificaciones - Guía Completa

## ✅ Mejoras Implementadas

El sistema de notificaciones ha sido **completamente arreglado** y ahora funciona correctamente con:

### 🎯 Características

1. **Tracking de notificaciones**: No se duplican notificaciones en el mismo día
2. **Reset diario automático**: A medianoche se resetea el tracking
3. **Verificación cada 30 segundos**: Mayor precisión en los horarios
4. **Notificación de prueba**: Al activar recibes una notificación inmediata
5. **Logs en consola**: Para debugging fácil
6. **Manejo robusto de permisos**: Verifica y actualiza el estado correctamente

## 📅 Horarios Programados

### 🍽️ Comidas (Lunes - Viernes)
- **7:30 AM** → 🌅 Desayuno
- **10:00 AM** → 🍎 Snack Mañana
- **12:30 PM** → 🍽️ Almuerzo
- **4:00 PM** → 🥜 Snack Tarde
- **7:30 PM** → 🌙 Cena

### 💧 Agua (Todos los días)
Recordatorios cada 2 horas:
- **8:00 AM**
- **10:00 AM**
- **12:00 PM**
- **2:00 PM**
- **4:00 PM**
- **6:00 PM**
- **8:00 PM**

## 🚀 Cómo Usar

### 📱 IMPORTANTE para iPhone/iPad

**Las notificaciones en iOS Safari SOLO funcionan si instalas la app:**

1. **Abre la app en Safari**
2. **Toca el botón "Compartir"** ⬆️ (abajo en el centro)
3. **Selecciona "Agregar a pantalla de inicio"**
4. **Abre la app desde el Home Screen** (el ícono nuevo)
5. **Ahora sí, toca el botón 🔔** y acepta permisos
6. **Recibirás una notificación de prueba**

⚠️ **Requisitos iOS**: iOS 16.4 o superior

### 💻 Desktop (Chrome, Edge, Firefox)

1. **Toca el botón 🔔** en el header (esquina superior derecha)
2. **Acepta los permisos** cuando el navegador te lo pida
3. **Recibirás una notificación de prueba** inmediatamente
4. El botón 🔔 se verá brillante (opacidad 1.0) cuando esté activo

### Desactivar Notificaciones

1. Toca el botón 🔔 nuevamente
2. Las notificaciones se desactivarán
3. El botón se verá opaco (opacidad 0.5)

## 🔍 Verificar que Funciona

### 1. Consola del Navegador

Abre la consola (F12) y busca estos mensajes:

```
✅ Sistema de notificaciones activado
📢 Notificación mostrada: ✅ Notificaciones Activadas
✅ Notificaciones iniciadas automáticamente
```

### 2. Notificación de Prueba

Al activar las notificaciones, **deberías recibir una notificación inmediatamente** que dice:
- **Título**: "✅ Notificaciones Activadas"
- **Mensaje**: "¡Recibirás recordatorios de comidas y agua!"

### 3. Verificar Horarios

Para probar que funcionan en el horario correcto:

1. Cambia la hora del sistema a uno de los horarios programados
2. Espera máximo 30 segundos
3. Deberías recibir la notificación

## 🛠️ Troubleshooting

### "No recibo notificaciones"

**Verifica:**
1. ✅ ¿Aceptaste los permisos? Revisa en configuración del navegador
2. ✅ ¿El botón 🔔 está brillante? Si está opaco, actívalo
3. ✅ ¿Estás en el horario correcto? Las comidas solo son lunes-viernes
4. ✅ ¿Ya recibiste esa notificación hoy? Solo se envía una vez al día

### Resetear el Sistema

Si quieres forzar el reset diario:

```javascript
// En la consola del navegador:
localStorage.removeItem('notificationsShownToday');
localStorage.removeItem('notificationsLastReset');
location.reload();
```

### Ver Estado Actual

```javascript
// En la consola:
console.log('Notificaciones activas:', localStorage.getItem('notificationsEnabled'));
console.log('Permiso:', Notification.permission);
console.log('Mostradas hoy:', localStorage.getItem('notificationsShownToday'));
```

## 📱 Compatibilidad

### ✅ Funciona Perfectamente:
- **Chrome/Edge** (Desktop y Android) - ⭐ Recomendado
- **Firefox** (Desktop y Android)
- **Safari** (macOS 16.1+)
- **Opera**
- **Samsung Internet**

### ⚠️ iOS/iPhone/iPad - Requiere Instalación:
- **Safari iOS 16.4+**: ✅ Funciona SOLO como PWA instalada
- **NO funciona** en Safari normal sin instalar
- **Pasos obligatorios**:
  1. Compartir ⬆️
  2. "Agregar a pantalla de inicio"
  3. Abrir desde Home Screen
  4. Activar notificaciones

### ❌ Limitaciones Técnicas:
- **Modo Incógnito**: Las notificaciones no funcionan
- **App cerrada**: Necesita estar abierta en background (iOS puede cerrarla)
- **Sin instalación en iOS**: Imposible activar notificaciones

## 🔧 Cómo Cambiar Horarios

Edita el archivo `index.html` y busca la función `setupNotifications()`:

```javascript
const mealTimes = [
    { hour: 7, minute: 30, meal: 'desayuno', title: '🌅 Hora del Desayuno', id: 'breakfast' },
    // Cambia los valores de hour y minute
];

const waterHours = [8, 10, 12, 14, 16, 18, 20];
// Agrega o quita horas
```

## 🎓 Cómo Funciona Técnicamente

1. **Verificación periódica**: Cada 30 segundos verifica si es hora de enviar notificación
2. **Tracking diario**: Guarda en localStorage qué notificaciones ya se enviaron hoy
3. **Reset automático**: A medianoche (00:00) resetea el tracking
4. **Service Worker**: Maneja el click en notificaciones para abrir/enfocar la app
5. **Permisos**: Verifica constantemente que los permisos estén activos

## 📊 Logs Disponibles

El sistema registra información útil en la consola:

- `✅ Sistema de notificaciones activado` - Sistema iniciado
- `⏸️ Sistema de notificaciones detenido` - Sistema detenido
- `📢 Notificación mostrada: [título]` - Notificación enviada exitosamente
- `⚠️ Permiso de notificaciones revocado` - Los permisos fueron quitados

---

## 🐛 Reportar Problemas

Si las notificaciones no funcionan:

1. Abre la consola del navegador (F12)
2. Busca mensajes de error en rojo
3. Copia los logs
4. Reporta el problema con los logs

---

**¡Las notificaciones ahora funcionan perfectamente!** 🎉
