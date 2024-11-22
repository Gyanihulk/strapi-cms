import { factories } from '@strapi/strapi';


export default factories.createCoreController('api::terms-and-condition.terms-and-condition', ({ strapi }) => ({
  async publish(ctx: any) {
    // Custom log before creation
   console.log('Creating a Terms and Conditions entry with data:', ctx.request.body);

    // Proceed with the original creation logic
    const response = await super.create(ctx);

    // Custom log after successful creation
   console.log('Successfully created Terms and Conditions entry:', response);

    // Implement your own modifications after creation or before sending response
    // For example, modifying response data
    // response.data.attributes.customField = 'customValue';

    // Returning the newly created entry
    return response;
  }
}));