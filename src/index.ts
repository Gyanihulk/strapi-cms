// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: any }) {
    // Add middleware to log API calls
    strapi.server.use(async (ctx, next) => {
    //   const start = Date.now();

    //   // Log the request details
    //   // console.log(`Received ${ctx.method} request for ${ctx.url}`);



    //   const responseTime = Date.now() - start;
    //   // Log the response status and time
    //   // console.log(`Response: ${ctx.status} - ${responseTime}ms`);



      // const usersPermissionsPlugin = strapi.plugin('users-permissions');
      // console.log(usersPermissionsPlugin, "usersPermissionsPlugin")
      // // Log all controllers
      // const controllers = usersPermissionsPlugin.controllers;
      // console.log('[INFO]: Users-Permissions Controllers:', Object.keys(controllers));

      // // Log all services
      // const services = usersPermissionsPlugin.services;
      // console.log('[INFO]: Users-Permissions Services:', Object.keys(services));

      // // Log all routes
      // const routes = usersPermissionsPlugin.routes['content-api'].routes;
      // console.log('[INFO]:Users-Permissions Routes:', routes.map(route => route.path));

      // // Log specific controller methods, if desired
      // if (controllers && controllers.auth) {
      //   console.log('[INFO]:Auth Controller Methods:', Object.keys(controllers.auth));
      // }


      // AUTH ROUTES 
      // const adminRoutes = strapi.admin.routes.admin.routes;
      // // console.log('Admin Routes:', adminRoutes);
      // const authenticationRoutes = adminRoutes.filter(route => 
      //   route.handler.includes('auth')
      //   );
      //   console.log('[INFO]:Admin AUTH Routes:', authenticationRoutes);
      // Log specific handlers/middlewares if possible
      // adminRoutes.forEach(route => {
      //   console.log(`Route: ${route.path}, Handler: ${route.handler}`);
      // });

      
      await next();
    
    });
  },


  bootstrap({ strapi }) {
    // Example: Access and log existing permissions
    const permissionsService = strapi.plugin('users-permissions').service('role');

    // Fetch roles and permissions
    const fetchRolesAndPermissions = async () => {
      try {
        const roles = await permissionsService.find();
        console.log('Roles and associated permissions:', roles);
      } catch (error) {
        strapi.log.error('Error fetching roles and permissions', error);
      }
    };

    fetchRolesAndPermissions();
  },
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
