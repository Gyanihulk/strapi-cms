import axios from "axios";
import forge from 'node-forge'
const authenticationMiddleware = (config: any, { strapi }: { strapi: any }) => {
    return async (ctx: any, next: () => Promise<void>) => {
        if (ctx.url === '/admin/login' && ctx.method === 'POST') {
            const additionalCheckPassed = await freedoBizLoginCheck(ctx.request.body);
            // console.log("[Test]:login Api", ctx.response.body)
            // console.log("[Test]:login Api:additionalCheckPassed",additionalCheckPassed)
            if (!additionalCheckPassed) {
                ctx.status = 405;
                ctx.body = 'Authentication with Freedo-BIZ Failed.';
                return;
            }
            // else{
            //     ctx.status = 200;
            //     ctx.body = 'Authenticated.';
            //     return;
            // }
        }

        await next();
    };
};

async function freedoBizLoginCheck(data: any): Promise<boolean> {
    try {
        //Autheticated TEST USER 
        data={email:"ritik.bhardwaj@heromotocorp.com",password:"Admin@123"}
        const key = process.env['ENCRYPTION_KEY']
        const decodedPublicKey = forge.util.decode64(key);
        const publicKey = forge.pki.publicKeyFromPem(decodedPublicKey);

        const encryptedPassword = publicKey.encrypt(data?.password, 'RSA-OAEP');
        const base64EncodedPassword = forge.util.encode64(encryptedPassword);
        let request = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://uat-api.freedo.rentals/freedo-biz/user/v1/login',
            headers: {
                'x-platform': 'ADMIN',
                'sec-ch-ua-platform': '"macOS"',
                'Referer': 'https://adminuat.freedo.rentals/',
                'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'x-bn': '"2.26"',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'x-client-id': 'FREEDO',
                'x-channel': 'WEB'
            },
            data: { data: { userName: data.email, password: base64EncodedPassword } }
        };
        // console.log(request)
        const response = await axios.request(request)
        // console.log("[INFO] Freedo-Biz login response", response)


        return true;
    } catch (error: any) {
        console.log(`[Error] Authenticating User with Freedo-Biz -->>`,error);
        return false
    }

}

export default authenticationMiddleware;
