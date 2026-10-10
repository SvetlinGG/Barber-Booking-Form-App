const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';

export async function fetchUsers() {
    const response = await fetch(baseURL,{
        headers: {
            'apiKey': apiKey
        }
    });

    const data = response.json()
    return data;
}