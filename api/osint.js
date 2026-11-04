// api/osint.js
export default async function handler(req, res) {
    const { type, query } = req.query;
    
    // GANTI EMAIL INI PAKE EMAIL LOGIN DEHASHED LU
    const email = "dimasenginer20@gmail.com"; 
    const key = "4CiL0+GguTAS7pDTwyx0f83KrhyUTj1BiLChyGHg1/6/TFJWzWyIubUx";
    
    const auth = Buffer.from(`${email}:${key}`).toString('base64');
    
    try {
        let url = `https://api.dehashed.com/search?query=${type}:"${query}"`;
        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
