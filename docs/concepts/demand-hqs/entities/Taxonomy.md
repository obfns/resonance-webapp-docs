# Taxonomy

Taxonomy is a hierarchical categorization of Products. It is used to group Products into departments, categories, and subcategories. Taxonomy is used to organize Products in the catalog and to facilitate navigation and collection / search filtering.

Taxonomy Tree must be a slug-friendly value. i.e. `my-taxonomy-tree`.

In order to determine which storefronts the taxonomy tree is published to, set these values on the root taxonomy branch for the tree.

## Product Tag

The product tag is an indicator of which tag the associated taxonomy branch will be looking for on products. The associated created collection will be populated using a rule based on this tag. This value can also be used as a filter/facet in various places on a storefront.

## Collection Id

This is the associated collection with the taxonomy branch. This collection will be populated using a rule based on the product tag. This value can be changed, but it would be exceedingly rare to do so.
