import { factories } from '@strapi/strapi';

export default factories.createCoreController('plugin::users-permissions.user', ({ strapi }) => ({
  // Asynchronous method to handle the custom logic
  async myCustomController(ctx) {
    try {
      const user = ctx.state.user; // Retrieve the user information
console.log(user)
      // Your custom logic here

      // Example: return user permissions
      console.log("my custom controller")
      ctx.body = await strapi.query('plugin::users-permissions.permission').findMany({
        where: { role: user.role.id },
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));