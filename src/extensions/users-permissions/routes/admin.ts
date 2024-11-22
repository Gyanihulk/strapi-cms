export default {
    routes: [
      {
        method: 'GET',
        path: '/admin/users/me/permissions',
        handler: 'user.myCustomController',  // Use the custom controller method
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };