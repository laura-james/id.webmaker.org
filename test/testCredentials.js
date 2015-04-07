module.exports = {
  clients: [
    {
      client_id: 'test',
      client_secret: 'test',
      redirect_uri: 'http://example.org/oauth_redirect'
    }, {
      client_id: 'test2',
      client_secret: 'test2',
      redirect_uri: 'http://example2.org/oauth_redirect'
    }
  ],

  authCodes: {
    test: {
      client_id: 'test',
      user_id: 'test',
      scopes: 'user',
      expires_at: Date.now() + 60 * 1000
    },
    expired: {
      client_id: 'test',
      user_id: 'test',
      scopes: 'user',
      expires_at: Date.now() - 60 * 1000
    }
  },

  accessTokens: [
    {
      access_token: 'testAccessToken',
      client_id: 'test',
      user_id: 'test',
      scopes: 'user email',
      expires_at: Date.now() + 60 * 1000
    }, {
      access_token: 'expiredAccessToken',
      client_id: 'test',
      user_id: 'test',
      scopes: 'user',
      expires_at: Date.now() - 60 * 1000
    }
  ]
};