The package has been configured successfully!

Make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { Auth0Driver, Auth0Config } from '@emmsdan/adonis-v6-auth0/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    yourDriver: {
      config: Auth0Config
      implementation: Auth0Driver
    }
  }
}
```

Make sure you define auth0 inside of `config/ally.ts`

```typescript
import { auth0 } from "@emmsdan/adonis-v6-auth0"

const allyConfig = defineConfig({
  // ...other mappings

  auth0: auth0({
    clientId: env.get('AUTH0_CLIENT_ID'),
    clientSecret: env.get('AUTH0_CLIENT_SECRET'),
    issuer: env.get('AUTH0_ISSUER'),
    callbackUrl: env.get('AUTH0_CALLBACK_URL'),
  })
}

```

Updated `start/env.ts`

```typescript
{

  /*
  |----------------------------------------------------------
  | Variables for configuring ally package
  |----------------------------------------------------------
  */
    AUTH0_CLIENT_ID: Env.schema.string(),
    AUTH0_CLIENT_SECRET: Env.schema.string(),
    AUTH0_ISSUER: Env.schema.string(),
    AUTH0_CALLBACK_URL: Env.schema.string()
}
```

Update `.env` file with credentials

```editorconfig
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER=
AUTH0_CALLBACK_URL=
```
