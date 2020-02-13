import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID d302db4ac72ba9331d0ee3f67ad99569fa6e146f1586a0af77f45adedff1a21e"
      }
});