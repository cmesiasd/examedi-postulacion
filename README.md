# Postulación Examedi

Repositorio de un réplica de [Pokédex](https://www.pokemon.com/el/pokedex/) creada para postulación a [Examedi](https://examedi.com/cl/).

## Deploy

La aplicación se encuentra corriendo en [Vercel](https://examedi-postulacion.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://examedi-postulacion.vercel.app/)

## Requerimientos - Dependencias

La aplicación fue desarrollada en `React` con el lenguaje `Typescript` utilizando las siguientes dependencias:

- `NextJS`
- `Tailwind`
- `Axios`

Para correr el código de manera local se debe tener instalado `Node` y algún gestor de paquetes de esto, como `npm` o `yarn`.

En la carpeta raíz del proyecto basta con instalar las dependencias con el comando:

```
> npm install
```

o

```
> yarn install
```

Para luego ejecutarlo con:

```
> npm run dev
```

o

```
> yarn dev
```

## Extras

Se utiliza la API [PokeAPI](https://pokeapi.co/). La que no prevee directamente todos los datos que posee la Pokedex original. Si bien no es una réplica exacta, se acerca bastante. Por motivos de costos no se quizo completar todos los datos (como debilidades en los detalles de un Pokemon) esto debido a que se debían realizar varias peticiones a la API disminuyendo la velocidad de carga de la aplicación.
