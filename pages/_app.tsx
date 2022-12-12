import '../styles/scss/style.scss';
import Layout from '../layout/Layout';

const App = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
