export const configure = async (command: any) => {
  const codemods = await command.createCodemods()
  let selectedProviders = ['auth0']

  let providers = typeof selectedProviders === 'string' ? [selectedProviders] : selectedProviders

  await codemods.defineEnvVariables(
    providers.reduce((result, provider) => {
      result[`${provider.toUpperCase()}_CLIENT_ID`] = ''
      result[`${provider.toUpperCase()}_CLIENT_SECRET`] = ''
      result[`${provider.toUpperCase()}_ISSUER`] = ''
      result[`${provider.toUpperCase()}_CALLBACK_URL`] = ''
      return result
    }, {})
  )
  await codemods.defineEnvValidations({
    variables: providers.reduce((result, provider) => {
      result[`${provider.toUpperCase()}_CLIENT_ID`] = 'Env.schema.string()'
      result[`${provider.toUpperCase()}_CLIENT_SECRET`] = 'Env.schema.string()'
      result[`${provider.toUpperCase()}_ISSUER`] = 'Env.schema.string()'
      result[`${provider.toUpperCase()}_CALLBACK_URL`] = 'Env.schema.string()'
      return result
    }, {}),
    leadingComment: 'Variables for configuring auth0 ally package',
  })
}
