import { freedoBizLoginCheck } from "../utils/freedoBizApiCalls";

const authenticationMiddleware = (config: any, { strapi }: { strapi: any }) => {
    return async (ctx: any, next: () => Promise<void>) => {
        if (ctx.url === '/admin/login' && ctx.method === 'POST') {
            const freedoAuthData = await freedoBizLoginCheck(ctx.request.body);

            if (!freedoAuthData.success) {
                ctx.status = 405;
                ctx.body = 'Authentication with Freedo-BIZ Failed.';
                return;
            }
            // Store the tokens in the context state
            ctx.session.tokens = {
                accessToken: freedoAuthData.data.accessToken,
                refreshToken: freedoAuthData.data.refreshToken,
                expiry: freedoAuthData.data.expiry,
                sessionId: freedoAuthData.data.sessionId
              };

        }

        await next();
    };
};



export default authenticationMiddleware;
