# Tarea 4 - Grupo 9

## Description

Aplicación hecha tipo PWA con Push notifications que asimila la app de Twitter.

Bibliografias:
* [Guía de instanciación básica de una PWA](https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605)
* [Guía de instalación básica de Push Notifications con Firebase](https://www.thisdot.co/blog/pwa-push-notifications-with-firebase-cloud-messaging-pt1)

## Ejecución

Para correr localmente se debe instanciar un servidor de nuestra API que conecta la app con firebase. Para esto hay que ir a la carpeta `api/` y dentro correr `npm install` dentro de la terminal, y luego entrar a la carpeta `src/`. Finalmente, en esta carpeta hay que correr:

```
node index.js
```

De esta forma debería de iniciarse el servidor backend.

Ahora, para correr la aplicación en si, se debe iniciar, en otra terminal, un servidor de python en la carpeta raíz del proyecto de la forma:

```
python -m http.server
```

Luego de eso, se puede acceder a la página a travéz de [localhost:8000/index.html](localhost:8000/index.html).
