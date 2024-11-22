module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          baseUrl: env('CDN_URL'),
          rootPath: env('CDN_ROOT_PATH'),
          s3Options: {
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
            },
            region: env('AWS_REGION'),
            params: {
              ACL: 'private',
              signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // 'users-permissions': {
    //   enabled: true,
    //   config: {
    //     validationRules: {
    //       validatePassword(value) {
    //         console.log(value)
    //         strapi.log.info(value,'validatePassword')
    //         if (value.length < 8) {
    //           // custom error message
    //           throw new Error('password should be more than 8 letters');
    //         }
  
    //         if (value.length > 24) {
    //           // throws default error message 
    //           return false;
    //         }
  
    //         return true; // Validation passed
    //       },
    //     },
    //     callback: {
    //       validate: (cbUrl, options) => {
    //         // cbUrl is where Strapi is being asked to redirect the auth info
    //         // that was received from the provider to
    //         console.log(cbUrl, "test", options)
    //         // in this case, we will only validate that the 
    //         // if using a base url, you should always include the trailing slash
    //         // although in real-world usage you should also include the full paths
    //         if (cbUrl.startsWith('https://myproxy.mysite.com/') ||
    //           cbUrl.startsWith('https://mysite.com/')) {
    //           return;
    //         }
  
    //         // Note that you MUST throw an error to fail validation
    //         // return values are not checked
    //         throw new Error('Invalid callback url');
    //       },
    //     },
    //   },
    // },
    // ...
  });