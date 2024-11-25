import axios from 'axios';

export async function freedoTitanAuthorise( accessToken: string): Promise<boolean> {
    try {
        let request = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://uat-api.freedo.rentals/titan-shield/authentication/v1/authorize',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
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
            data: {}
        };

        const response = await axios.request(request);
        // console.log("[INFO] Freedo-Titan Authorise  response", response.data.data)
        return true;
    } catch (error: any) {
        console.log(`[Error] Authenticating User with Freedo-Biz -->>`, error);
        return false;
    }
}