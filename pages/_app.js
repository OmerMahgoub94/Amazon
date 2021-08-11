import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import '../styles/globals.css';
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>

      <Component {...pageProps} />

    </AuthProvider>
  )
}

export default MyApp
