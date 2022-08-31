import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';


function MyApp({ Component, pageProps }) {
  return ( 
    <div>
       <Component {...pageProps} />
    </div>
 
   )
}

export default MyApp
