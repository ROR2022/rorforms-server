request.res: <ref *2> IncomingMessage {
  _readableState: ReadableState {
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    awaitDrainWriters: null,
    [Symbol(kState)]: 110426134
  },
  _events: [Object: null prototype] {
    end: [ [Function: responseOnEnd], [Function: onend], [Function: onend] ],
    close: [
      [Function (anonymous)],
      [Function: onclose],
      [Function: onclose]
    ],
    finish: [ [Function: onfinish], [Function: onfinish] ],
    error: [ [Function: onerror], [Function: onError], [Function: onerror] ]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  socket: <ref *1> TLSSocket {
    _tlsOptions: {
      allowHalfOpen: undefined,
      pipe: false,
      secureContext: [SecureContext],
      isServer: false,
      requestCert: true,
      rejectUnauthorized: true,
      session: undefined,
      ALPNProtocols: undefined,
      requestOCSP: undefined,
      enableTrace: undefined,
      pskCallback: undefined,
      highWaterMark: undefined,
      onread: undefined,
      signal: undefined
    },
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'login.salesforce.com',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype] {
      close: [Array],
      end: [Array],
      newListener: [Function: keylogNewListener],
      secure: [Function: onConnectSecure],
      session: [Function (anonymous)],
      free: [Function: onFree],
      timeout: [Function: onTimeout],
      agentRemove: [Function: onRemove],
      error: [Function: socketErrorListener],
      data: [Function: socketOnData],
      drain: [Function: ondrain]
    },
    _eventsCount: 11,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'login.salesforce.com',
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      awaitDrainWriters: null,
      [Symbol(kState)]: 60092438
    },
    _maxListeners: undefined,
    _writableState: WritableState {
      highWaterMark: 16384,
      length: 0,
      corked: 0,
      onwrite: [Function: bound onwrite],
      writelen: 0,
      bufferedIndex: 0,
      pendingcb: 0,
      [Symbol(kState)]: 34341828,
      [Symbol(kBufferedValue)]: null,
      [Symbol(kWriteCbValue)]: [Function: bound onFinish]
    },
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: null,
    _requestCert: true,
    _rejectUnauthorized: true,
    timeout: 5000,
    parser: null,
    _httpMessage: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: [Circular *1],
      _header: 'GET /setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'User-Agent: axios/1.7.7\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: login.salesforce.com\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      _ended: true,
      res: [Circular *2],
      aborted: false,
      timeoutCb: [Function: emitRequestTimeout],
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'login.salesforce.com',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    autoSelectFamilyAttemptedAddresses: [ '136.146.29.213:443' ],
    write: [Function: writeAfterFIN],
    [Symbol(alpncallback)]: null,
    [Symbol(res)]: null,
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: 298,
    [Symbol(kHandle)]: null,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: -1,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 10474,
      _onTimeout: null,
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: true,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 300,
      [Symbol(triggerId)]: 289
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: false,
    [Symbol(kSetKeepAlive)]: true,
    [Symbol(kSetKeepAliveInitialDelay)]: 60,
    [Symbol(kBytesRead)]: 1717,
    [Symbol(kBytesWritten)]: 941,
    [Symbol(connect-options)]: {
      rejectUnauthorized: true,
      ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
      checkServerIdentity: [Function: checkServerIdentity],
      minDHSize: 1024,
      maxRedirects: 21,
      maxBodyLength: Infinity,
      protocol: 'https:',
      path: null,
      method: 'GET',
      headers: [Object: null prototype],
      agents: [Object],
      auth: undefined,
      family: undefined,
      beforeRedirect: [Function: dispatchBeforeRedirect],
      beforeRedirects: [Object],
      hostname: 'login.salesforce.com',
      port: 443,
      agent: undefined,
      nativeProtocols: [Object],
      pathname: '/setup/secur/RemoteAccessAuthorizationPage.apexp',
      search: '?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      href: 'https://login.salesforce.com/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      query: undefined,
      hash: '',
      _defaultAgent: [Agent],
      host: 'login.salesforce.com',
      keepAlive: true,
      scheduling: 'lifo',
      timeout: 5000,
      noDelay: true,
      servername: 'login.salesforce.com',
      _agentKey: 'login.salesforce.com:443:::::::::::::::::::::',
      encoding: null,
      keepAliveInitialDelay: 1000
    }
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  rawHeaders: [
    'Date',
    'Thu, 31 Oct 2024 14:54:52 GMT',
    'Set-Cookie',
    'CookieConsentPolicy=0:0; path=/; expires=Fri, 31-Oct-2025 14:54:52 GMT; Max-Age=31536000; secure',
    'Set-Cookie',
    'LSKey-c$CookieConsentPolicy=0:0; path=/; expires=Fri, 31-Oct-2025 14:54:52 GMT; Max-Age=31536000; secure',
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains',
    'X-Content-Type-Options',
    'nosniff',
    'Content-Security-Policy',
    'upgrade-insecure-requests',
    'Cache-Control',
    'must-revalidate,no-cache,no-store',
    'Content-Type',
    'text/html; charset=UTF-8',
    'Vary',
    'Accept-Encoding',
    'Content-Encoding',
    'gzip',
    'Connection',
    'close'
  ],
  rawTrailers: [],
  joinDuplicateHeaders: undefined,
  aborted: false,
  upgrade: false,
  url: '',
  method: null,
  statusCode: 200,
  statusMessage: 'OK',
  client: <ref *1> TLSSocket {
    _tlsOptions: {
      allowHalfOpen: undefined,
      pipe: false,
      secureContext: [SecureContext],
      isServer: false,
      requestCert: true,
      rejectUnauthorized: true,
      session: undefined,
      ALPNProtocols: undefined,
      requestOCSP: undefined,
      enableTrace: undefined,
      pskCallback: undefined,
      highWaterMark: undefined,
      onread: undefined,
      signal: undefined
    },
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'login.salesforce.com',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype] {
      close: [Array],
      end: [Array],
      newListener: [Function: keylogNewListener],
      secure: [Function: onConnectSecure],
      session: [Function (anonymous)],
      free: [Function: onFree],
      timeout: [Function: onTimeout],
      agentRemove: [Function: onRemove],
      error: [Function: socketErrorListener],
      data: [Function: socketOnData],
      drain: [Function: ondrain]
    },
    _eventsCount: 11,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'login.salesforce.com',
    _closeAfterHandlingError: false,
    _readableState: ReadableState {
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      awaitDrainWriters: null,
      [Symbol(kState)]: 60092438
    },
    _maxListeners: undefined,
    _writableState: WritableState {
      highWaterMark: 16384,
      length: 0,
      corked: 0,
      onwrite: [Function: bound onwrite],
      writelen: 0,
      bufferedIndex: 0,
      pendingcb: 0,
      [Symbol(kState)]: 34341828,
      [Symbol(kBufferedValue)]: null,
      [Symbol(kWriteCbValue)]: [Function: bound onFinish]
    },
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: null,
    _requestCert: true,
    _rejectUnauthorized: true,
    timeout: 5000,
    parser: null,
    _httpMessage: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: [Circular *1],
      _header: 'GET /setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'User-Agent: axios/1.7.7\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: login.salesforce.com\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      _ended: true,
      res: [Circular *2],
      aborted: false,
      timeoutCb: [Function: emitRequestTimeout],
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'login.salesforce.com',
      protocol: 'https:',
      _redirectable: [Writable],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    autoSelectFamilyAttemptedAddresses: [ '136.146.29.213:443' ],
    write: [Function: writeAfterFIN],
    [Symbol(alpncallback)]: null,
    [Symbol(res)]: null,
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: 298,
    [Symbol(kHandle)]: null,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: Timeout {
      _idleTimeout: -1,
      _idlePrev: null,
      _idleNext: null,
      _idleStart: 10474,
      _onTimeout: null,
      _timerArgs: undefined,
      _repeat: null,
      _destroyed: true,
      [Symbol(refed)]: false,
      [Symbol(kHasPrimitive)]: false,
      [Symbol(asyncId)]: 300,
      [Symbol(triggerId)]: 289
    },
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kSetNoDelay)]: false,
    [Symbol(kSetKeepAlive)]: true,
    [Symbol(kSetKeepAliveInitialDelay)]: 60,
    [Symbol(kBytesRead)]: 1717,
    [Symbol(kBytesWritten)]: 941,
    [Symbol(connect-options)]: {
      rejectUnauthorized: true,
      ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
      checkServerIdentity: [Function: checkServerIdentity],
      minDHSize: 1024,
      maxRedirects: 21,
      maxBodyLength: Infinity,
      protocol: 'https:',
      path: null,
      method: 'GET',
      headers: [Object: null prototype],
      agents: [Object],
      auth: undefined,
      family: undefined,
      beforeRedirect: [Function: dispatchBeforeRedirect],
      beforeRedirects: [Object],
      hostname: 'login.salesforce.com',
      port: 443,
      agent: undefined,
      nativeProtocols: [Object],
      pathname: '/setup/secur/RemoteAccessAuthorizationPage.apexp',
      search: '?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      href: 'https://login.salesforce.com/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      query: undefined,
      hash: '',
      _defaultAgent: [Agent],
      host: 'login.salesforce.com',
      keepAlive: true,
      scheduling: 'lifo',
      timeout: 5000,
      noDelay: true,
      servername: 'login.salesforce.com',
      _agentKey: 'login.salesforce.com:443:::::::::::::::::::::',
      encoding: null,
      keepAliveInitialDelay: 1000
    }
  },
  _consuming: true,
  _dumped: false,
  req: <ref *3> ClientRequest {
    _events: [Object: null prototype] {
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      socket: [Function (anonymous)],
      timeout: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 0,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: true,
    socket: <ref *1> TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'login.salesforce.com',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 11,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'login.salesforce.com',
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: null,
      _requestCert: true,
      _rejectUnauthorized: true,
      timeout: 5000,
      parser: null,
      _httpMessage: [Circular *3],
      autoSelectFamilyAttemptedAddresses: [Array],
      write: [Function: writeAfterFIN],
      [Symbol(alpncallback)]: null,
      [Symbol(res)]: null,
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 298,
      [Symbol(kHandle)]: null,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: Timeout {
        _idleTimeout: -1,
        _idlePrev: null,
        _idleNext: null,
        _idleStart: 10474,
        _onTimeout: null,
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: true,
        [Symbol(refed)]: false,
        [Symbol(kHasPrimitive)]: false,
        [Symbol(asyncId)]: 300,
        [Symbol(triggerId)]: 289
      },
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: false,
      [Symbol(kSetKeepAlive)]: true,
      [Symbol(kSetKeepAliveInitialDelay)]: 60,
      [Symbol(kBytesRead)]: 1717,
      [Symbol(kBytesWritten)]: 941,
      [Symbol(connect-options)]: [Object]
    },
    _header: 'GET /setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'User-Agent: axios/1.7.7\r\n' +
      'Accept-Encoding: gzip, compress, deflate, br\r\n' +
      'Host: login.salesforce.com\r\n' +
      'Connection: keep-alive\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 0,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'GET',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    joinDuplicateHeaders: undefined,
    path: '/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
    _ended: true,
    res: [Circular *2],
    aborted: false,
    timeoutCb: [Function: emitRequestTimeout],
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'login.salesforce.com',
    protocol: 'https:',
    _redirectable: Writable {
      _writableState: [WritableState],
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 1,
      _redirects: [],
      _requestBodyLength: 0,
      _requestBodyBuffers: [],
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *3],
      _currentUrl: 'https://login.salesforce.com/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
      _isRedirect: true,
      [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      accept: [Array],
      'user-agent': [Array],
      'accept-encoding': [Array],
      host: [Array]
    },
    [Symbol(errored)]: null,
    [Symbol(kHighWaterMark)]: 16384,
    [Symbol(kRejectNonStandardBodyWrites)]: false,
    [Symbol(kUniqueHeaders)]: null
  },
  responseUrl: 'https://login.salesforce.com/setup/secur/RemoteAccessAuthorizationPage.apexp?source=CAAAAZLoONVRMDAwMDAwMDAwMDAwMDAwAAAA_PL1z_G3oon5ejisHnrOGYdgB4ye1c4VvLTZCGkGj36ZYUwUnyS8vf6rzk27TGWSaM_K6FXwhK_G_KZMDZBVgYaI9jwnJdG0HipuKTcEFLZDQ1lbPZsxXyZfxHla-cIA5vSWEJWDEzKddmY5VdlQdAHQ-pBAPdXrqYggIBVbwMKTRg59B_Z2cIc8FHJP86MakxDbJVQqgLeRxsb_kbUGxGT3U9lA2KEDqRCtW16IJ9r0RambmQ9TXXenFC3LmYswnobsuonShJkSetI_cU6PrNeImN8oi8QRAD5FCiDSuMNL1C10tMh3XZJyf6Fuqpk2eiejr1AcAs1xwt0XPdjKVFIvez3KsksDne-B6cdXRI3q1qi-1neD68S8hq2AVFtu1VG-fbD7u1PmTvOTSE5A2iG_-I5bIkXP5Lo18YOM4LbGyJGM1qLM0n9ED3cJi9-EUArQKsMgtVidxj1UwR-snaS_oKIwBv5WxeF3JsfBesg4SheKi2FnHvGo6n1Kj5rBl-ow9DlQrTxzqK996xToyWHxPSULRMTaeLGdffnD7ps4UIqIWZImYc1mha6yZZ0UG2RUsUrDlSKdesZgayjMCoIC6toiLa3h1fsTY-WzQ_Uk-ebLNrmc555WswTfdx4aW9L5cGnEKy4zhhmxEU6EvAE%3D',
  redirects: [],
  [Symbol(kCapture)]: false,
  [Symbol(kHeaders)]: {
    date: 'Thu, 31 Oct 2024 14:54:52 GMT',
    'set-cookie': [
      'CookieConsentPolicy=0:0; path=/; expires=Fri, 31-Oct-2025 14:54:52 GMT; Max-Age=31536000; secure',
      'LSKey-c$CookieConsentPolicy=0:0; path=/; expires=Fri, 31-Oct-2025 14:54:52 GMT; Max-Age=31536000; secure'
    ],
    'strict-transport-security': 'max-age=63072000; includeSubDomains',
    'x-content-type-options': 'nosniff',
    'content-security-policy': 'upgrade-insecure-requests',
    'cache-control': 'must-revalidate,no-cache,no-store',
    'content-type': 'text/html; charset=UTF-8',
    vary: 'Accept-Encoding',
    connection: 'close'
  },
  [Symbol(kHeadersCount)]: 22,
  [Symbol(kTrailers)]: null,
  [Symbol(kTrailersCount)]: 0
}
