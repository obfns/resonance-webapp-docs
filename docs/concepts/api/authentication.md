---
title: Authentication
sidebar_position: 2
---

# Authentication

Apps authenticate using an app client ID and a secret. These can be handed to the [/token route](adminidentity/api/rest-admin/reference#tag/Token/paths/~1token/post) in the [Admin Identity REST API](adminidentity/api/rest-admin/reference). A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to.
