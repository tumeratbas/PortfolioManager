import axios from 'axios';

const fetchStockData = async (symbol) => {
    const apiKey = '2f612QuQaaiZR0OXgGJWVDKVR2jUael4';
    const url = `https://financialmodelingprep.com/api/v3/search?query=${symbol}&apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw new Error('Error fetching stock data');
    }
};

export { fetchStockData };
