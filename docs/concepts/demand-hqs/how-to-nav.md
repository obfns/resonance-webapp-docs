---
sidebar_position: 3
---

# How to Menu (Nav)

## NavType

This describe the purpose of an entire tree, and can also be considered the tree itself as a Navigational Hierarchy is encapsulated within a single NavType. This could be something like `main-menu` or `blog-page-sidebar-3`. NavType is required to query in pretty much every case, as Navs are only unique in anyway within a single NavType (you could have an otherwise identical Nav in two different NavTypes).

## NavLevel

NavLevel indicates the level a Nav is within a NavType. This is a digit between 0 and 6 (There are seven possible levels of Navigation, or six if you do not include the Root). For NavLevel 0 in a NavType, there can only ever be a single Nav (the root). From the root, any number of child Navs can be created on NavLevel 1, and the same is true for each new level.

All Navs must have a parent besides the root. All Navs may also optionally have children (besides Navs in NavLevel 6).

NavType + NavLevel is the primary way to SCAN or VERTICALLY query within a NavType, as in, crawl through Navs continually exposing children until you have all of the data you require.
