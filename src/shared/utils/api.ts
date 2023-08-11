import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_API_DOMAIN,
});
