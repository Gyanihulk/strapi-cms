const jwt = require('jsonwebtoken');
import { freedoTitanAuthorise } from "../utils/freedoTitanApiCalls";
const rolesMiddleware = (config: any, { strapi }: { strapi: any }) => {
    return async (ctx: any, next: () => Promise<void>) => {
        if (ctx.request.url === '/admin/users/me/permissions' && ctx.request.method === 'GET') {
            const authorizationHeader = ctx.request.header['authorization'];
            if (authorizationHeader) {
                const token = authorizationHeader.split(' ')[1]; // Extract token

                try {
                    // Decode JWT token to get the user ID
                    const decoded: any = jwt.verify(token, strapi.config.get('admin.auth.secret'));

                    //  GET the cms user 
                    const cmsUser = await strapi.db.query('plugin::users-permissions.user').findOne({
                        where: { id: decoded.id },  // Ensure this is the correct condition
                        populate: ['role'] // Ensures role relations are prepped
                    });

                    // console.log("[DEBUG] Decoded token: ", decoded);

                    // TWO way to get the admin users 
                    // 1.
                    // Utilize actual server/service means to fetch backend-defined admin detailing:
                    const adminUserEntry = await strapi.entityService.findOne('admin::user', 1, {
                        populate: { roles: true },
                    });
                    // 2.
                    // Find admin user by internal service managing id references or lookups specifically:
                    const adminUser = await strapi.db.query('admin::user').findOne({
                        where: { id: decoded.id }, // Be diligent: validate feature property id receded
                        populate: { roles: true } // Ensure roles are managed/invoked clearly for precision guarantees encompassing updates
                    });
                    // console.log("[INFO] :User ", cmsUser, adminUserEntry, adminUser);

                    // Extract associated roles and permissions for both Admin and CMS users
                    let adminPermissions = [];
                    if (cmsUser) {
                        const cmsRole = await strapi.entityService.findOne('plugin::users-permissions.role', cmsUser.role.id, {
                            populate: { permissions: true }
                        });

                        // if (cmsRole && cmsRole.permissions) {
                        //     permissions = cmsRole.permissions.map(perm => perm);
                        // }
                    }

                    if (adminUser) {
                        // For admin user through roles
                        for (const role of adminUser.roles) {
                            const populatedRole = await strapi.db.query('admin::role').findOne({
                                where: { id: role.id },
                                populate: { permissions: true }
                            });

                            if (populatedRole && populatedRole.permissions) {
                                adminPermissions.push(...populatedRole.permissions.map(p => p));
                            }
                        }
                    }


                    // Freedo Titan shield
                    // console.log(ctx.session.tokens);
                    const freedoPermissions=await freedoTitanAuthorise(ctx.session.tokens.accessToken)
                    // FIlter User Requests  
                    
                    // adminPermissions = adminPermissions.filter(
                    //     item => typeof item.subject !== 'string' || !item.subject.includes('terms-and-condition')
                    //   );
                      adminPermissions.map((adminPermission)=>{console.log(adminPermission.action)})
                      console.log(("--------------"))
                      adminPermissions.map((adminPermission)=>{console.log(adminPermission.subject)})
                    ctx.state.customPermissions = adminPermissions;
                    // Debug output
                    // console.log("[INFO] Admin User permissions: ", adminPermissions);
                    // Customise Mock API Response and Return the permissions as a response with status code 201
                    // ctx.status = 200;
                    ctx.body = {
                        data: adminPermissions,
                    };

                    return;
                } catch (err) {
                    console.error('[Error]:RolesMiddleware', err);
                    ctx.throw(401, 'Unauthorized');
                }
            } else {
                ctx.throw(403, 'No authorization header found');
            }
        }

        await next();
    };
};



export default rolesMiddleware;