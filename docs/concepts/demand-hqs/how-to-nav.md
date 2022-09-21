---
sidebar_position: 3
---

# How to Nav

One of the more complex Resonance entities to master is the Nav.

## NavType

This describe the purpose of an entire tree, and can also be considered the tree itself as a Navigational Hierarchy is encapsulated within a single NavType. This could be something like `main-menu` or `blog-page-sidebar-3`. NavType is required to query in pretty much every case, as Navs are only unique in anyway within a single NavType (you could have an otherwise identical Nav in two different NavTypes).

## NavLevel

NavLevel indicates the level a Nav is within a NavType. This is a digit between 0 and 6 (There are seven possible levels of Navigation, or six if you do not include the Root). For NavLevel 0 in a NavType, there can only ever be a single Nav (the root). From the root, any number of child Navs can be created on NavLevel 1, and the same is true for each new level.

All Navs must have a parent besides the root. All Navs may also optionally have children (besides Navs in NavLevel 6).

NavType + NavLevel is the primary way to SCAN or VERTICALLY query within a NavType, as in, crawl through Navs continually exposing children until you have all of the data you require.

## LinkType

LinkType is a core field of a Nav, and is the primary method of looking up a Nav in the middle of a tree (when you do not know, or do not want to use the root). You can create as many linkTypes as you like, but you must create them in advance of creating navs in Nav Settings.

![Nav Settings](pathname:///img/nav-settings.png)

Once in Nav Settings, you can create as many custom link types as you like, and they will show when you create new Navs. Consider the "what" of what it links to when creating them, as in, a link to a product might have a linkType of `product`.

There is also a reserved system linkType for `collection`. Collections are core functionality with Navs, and are the most often target, so special functionality is built from this.

LinkType is the primary way to FILTER or HORIZONTALLY query within a NavType, as in, please give me all of the pages within a NavType regardless of their NavLevel.

## LinkSlug

This is something to describe the individual link in detail. Often this can match another slug, in order to make looking up the specific entity easy. In the case of collections, this must match the collection's `slug`.

When LinkSlug is combined with NavType and LinkType, this creates a unique combination and a single Nav can be queried in a NavType tree. From this Nav, you can then source parent or children to suit your use case.
