import axios from 'axios';
import forge from 'node-forge';

export async function freedoBizLoginCheck(data: any): Promise<{ success: boolean; data?: any }> {
    try {
        // Using test credentials; replace with actual logic or parameters
        data = { email: 'ritik.bhardwaj@heromotocorp.com', password: 'Admin@123' };

        const key = process.env['ENCRYPTION_KEY'];
        if (!key) {
            throw new Error('ENCRYPTION_KEY environment variable is undefined');
        }
        
        const decodedPublicKey = forge.util.decode64(key);
        const publicKey = forge.pki.publicKeyFromPem(decodedPublicKey);

        const encryptedPassword = publicKey.encrypt(data.password, 'RSA-OAEP');
        const base64EncodedPassword = forge.util.encode64(encryptedPassword);

        const request = {
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
                'x-channel': 'WEB',
            },
            data: { data: { userName: data.email, password: base64EncodedPassword } }
        };

        const response = await axios.request(request);

        console.log("[INFO] Freedo-Biz login response", response.data.data);
        return { success: true, data: response.data.data };
    } catch (error: any) {
        console.log(`[Error] Authenticating User with Freedo-Biz -->>`, error.message);
        return { success: false, data: {} };
    }
}