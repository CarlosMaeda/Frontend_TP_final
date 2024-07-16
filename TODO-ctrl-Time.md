# Implementar función de inactividad.

## Adaptando el código a JavaScript puro (Vanilla JavaScript):

```javascript
let contadorAfk = 0;

// Función para controlar el tiempo de inactividad
function controlarTiempo() {
  contadorAfk++;

  if (contadorAfk > 59) {
    // Más de 59 minutos, se considera inactivo
    // Aquí se implementa la función para cerrar la sesión o la acción deseada
    console.log("¡Usuario inactivo!"); // Ejemplo de acción
  }
}

// Evento para detectar movimiento del mouse
window.addEventListener("mousemove", () => {
  contadorAfk = 0; // Reinicia el contador al detectar movimiento
});

// Evento para detectar la pulsación de teclas
window.addEventListener("keypress", () => {
  contadorAfk = 0; // Reinicia el contador al pulsar una tecla
});

// Iniciar el intervalo para controlar el tiempo cada minuto
setInterval(controlarTiempo, 60000); // 60000 milisegundos = 1 minuto
```

**Explicación de los cambios:**

- Se reemplaza `$(document).ready` por `window.addEventListener('load')` para ejecutar el código al cargar la página.
- Se elimina `var` al declarar variables, ya que JavaScript moderno no lo requiere.
- Se reemplaza `$(this)` por `window` para acceder a eventos globales.
- Se utilizan `addEventListener` para capturar eventos de mouse y teclado.
- Se utiliza una función anónima para el callback de `addEventListener`.
- Se elimina la dependencia de jQuery, ya que todas las funciones se implementan con JavaScript puro.

**Consideraciones:**

- Este código solo detecta la inactividad del usuario por el movimiento del mouse y la pulsación de teclas. Para una detección más precisa, se podrían considerar otras acciones como el desplazamiento del scroll o la interacción con elementos de la página.
- La función para cerrar la sesión o realizar la acción deseada al detectar inactividad debe implementarse de acuerdo a las necesidades específicas del sitio web.

**Recursos adicionales:**

- [MDN Web Docs: EventTarget.addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Window](https://developer.mozilla.org/es/docs/Web/API/Window)
- [MDN Web Docs: setInterval](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval)

---

## ---XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX----

## Mejora de la función anterior.

## Mejorando el código para detectar el desplazamiento del scroll y redireccionar al login

**1. Detección del desplazamiento del scroll:**

Para detectar el desplazamiento del scroll, se puede agregar un evento `scroll` a la ventana:

```javascript
window.addEventListener("scroll", () => {
  contadorAfk = 0; // Reinicia el contador al detectar scroll
});
```

**2. Implementación de la función de redirección al login:**

Para redireccionar al usuario a la página de login en caso de inactividad, se puede crear una función que se ejecute cuando se detecte inactividad:

```javascript
function redireccionarLogin() {
  window.location.href = "https://www.website.com/sign-in/"; // Reemplazar con la URL real de la página de login
}
```

**3. Modificando la función `controlarTiempo`:**

Se modifica la función `controlarTiempo` para incluir la detección de scroll y la llamada a la función de redirección:

```javascript
function controlarTiempo() {
  contadorAfk++;

  if (contadorAfk > 59) {
    // Más de 59 minutos, se considera inactivo
    redireccionarLogin(); // Redirecciona al login
  }
}
```

**Código completo mejorado:**

```javascript
let contadorAfk = 0;

function controlarTiempo() {
  contadorAfk++;

  if (contadorAfk > 59) {
    // Más de 59 minutos, se considera inactivo
    redireccionarLogin(); // Redirecciona al login
  }
}

window.addEventListener("load", () => {
  setInterval(controlarTiempo, 60000); // 60000 milisegundos = 1 minuto

  window.addEventListener("mousemove", () => {
    contadorAfk = 0; // Reinicia el contador al detectar movimiento
  });

  window.addEventListener("keypress", () => {
    contadorAfk = 0; // Reinicia el contador al pulsar una tecla
  });

  window.addEventListener("scroll", () => {
    contadorAfk = 0; // Reinicia el contador al detectar scroll
  });
});

function redireccionarLogin() {
  window.location.href = "https://www.website.com/sign-in/"; // Reemplazar con la URL real de la página de login
}
```

**Consideraciones:**

- Asegúrese de reemplazar `https://www.website.com/sign-in/` con la URL real de la página de login de su sitio web.
- Este código solo detecta la inactividad del usuario por el movimiento del mouse, la pulsación de teclas, y el desplazamiento del scroll. Para una detección más precisa, se podrían considerar otras acciones como la interacción con elementos de la página.
- La función para cerrar la sesión o realizar la acción deseada al detectar inactividad debe implementarse de acuerdo a las necesidades específicas del sitio web.

**Recursos adicionales:**

- [MDN Web Docs: EventTarget.addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Window](https://developer.mozilla.org/es/docs/Web/API/Window)
- [MDN Web Docs: setInterval](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setInterval)
- MDN Web Docs: window.location.href [se quitó una URL no válida]
