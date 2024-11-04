/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AnimalAnimalImport } from './routes/animal/$animal'

// Create Virtual Routes

const FavouritesLazyImport = createFileRoute('/favourites')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const FavouritesLazyRoute = FavouritesLazyImport.update({
  id: '/favourites',
  path: '/favourites',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/favourites.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AnimalAnimalRoute = AnimalAnimalImport.update({
  id: '/animal/$animal',
  path: '/animal/$animal',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/favourites': {
      id: '/favourites'
      path: '/favourites'
      fullPath: '/favourites'
      preLoaderRoute: typeof FavouritesLazyImport
      parentRoute: typeof rootRoute
    }
    '/animal/$animal': {
      id: '/animal/$animal'
      path: '/animal/$animal'
      fullPath: '/animal/$animal'
      preLoaderRoute: typeof AnimalAnimalImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/favourites': typeof FavouritesLazyRoute
  '/animal/$animal': typeof AnimalAnimalRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/favourites': typeof FavouritesLazyRoute
  '/animal/$animal': typeof AnimalAnimalRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/favourites': typeof FavouritesLazyRoute
  '/animal/$animal': typeof AnimalAnimalRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/favourites' | '/animal/$animal'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/favourites' | '/animal/$animal'
  id: '__root__' | '/' | '/favourites' | '/animal/$animal'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  FavouritesLazyRoute: typeof FavouritesLazyRoute
  AnimalAnimalRoute: typeof AnimalAnimalRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  FavouritesLazyRoute: FavouritesLazyRoute,
  AnimalAnimalRoute: AnimalAnimalRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/favourites",
        "/animal/$animal"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/favourites": {
      "filePath": "favourites.lazy.tsx"
    },
    "/animal/$animal": {
      "filePath": "animal/$animal.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
