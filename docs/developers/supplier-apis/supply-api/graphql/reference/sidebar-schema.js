module.exports = {
  schemaSidebar: [
    {
      type: "doc",
      id: "developers/supplier-apis/supply-api/graphql/reference/schema",
    },
    {
      type: "category",
      label: "Queries",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/queries/empty",
        "developers/supplier-apis/supply-api/graphql/reference/queries/supplier",
        "developers/supplier-apis/supply-api/graphql/reference/queries/supplier-variant",
        "developers/supplier-apis/supply-api/graphql/reference/queries/suppliers",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-identity",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/make-empty",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity",
        "developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/directives/deprecated",
        "developers/supplier-apis/supply-api/graphql/reference/directives/include",
        "developers/supplier-apis/supply-api/graphql/reference/directives/skip",
        "developers/supplier-apis/supply-api/graphql/reference/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/objects/page-info",
        "developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-connection",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-edge",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-delete-output",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-edge",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-permissions",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-connection",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-edge",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-option",
        "developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-options",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/enums/purchase-order-notification-type",
        "developers/supplier-apis/supply-api/graphql/reference/enums/resonance-currency",
        "developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-policy",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-status",
        "developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-status",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/inputs/purchase-order-notification-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-permissions-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-update-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-create-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input",
        "developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-update-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "developers/supplier-apis/supply-api/graphql/reference/scalars/boolean",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/float",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/id",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/int",
        "developers/supplier-apis/supply-api/graphql/reference/scalars/string",
      ],
    },
  ],
};
