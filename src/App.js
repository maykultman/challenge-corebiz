import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header';
import Slide from './components/Swiper';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {

    return (
		<Provider store={store}>
			<Header />
			<Slide />
			<Products />
			<Newsletter />
			<Footer />
      	</Provider>
    );
}

export default App;