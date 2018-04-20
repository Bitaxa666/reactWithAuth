/**
 * Created by user on 4/20/18.
 */
import axios from 'axios';
export default {
    user: {
        login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user)
    }
}