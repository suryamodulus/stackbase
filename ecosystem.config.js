module.exports = {
  apps: [
    {
      name: 'stackbase',
      script: './src/app.js',
    },
    {
      name: 'pgweb',
      script: 'pgweb',
      args: [
        '--sessions',
        '--prefix=pgweb',
        '--connect-backend=http://127.0.0.1:4343/db-manager/get-connection-url',
        '--connect-token=secure-api-token',
      ],
      interpreter: 'bash',
      exec_interpreter: 'none',
      exec_mode: 'fork_mode',
    },
  ],
}
  