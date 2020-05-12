import storeProd from 'store/configureStore.prod';
import storeDev from 'store/configureStore.dev';


const store = process.env.APP_CONFIG === 'dev' ? storeDev : storeProd;

export default store;
