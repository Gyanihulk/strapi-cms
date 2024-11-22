module.exports = {
    apps: [
      {
        name: 'site1',
        cwd: 'C:/test/freedo-cms',
        script: 'npm',
        args: 'develop',
        env: {
          NODE_ENV: 'site1',
          HOST_PORT_SITE1: 4338,
        //   DOMAIN_URL: 'site1.example.com'
        }
      },
      {
        name: 'site2',
        cwd: 'C:/test/freedo-cms',
        script: 'npm',
        args: 'develop',
        env: {
          NODE_ENV: 'site2',
          HOST_PORT_SITE2: 4339,
        //   DOMAIN_URL: 'site2.example.com'
        }
      }
    ]
  };
  