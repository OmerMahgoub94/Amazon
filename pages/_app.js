import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import '../styles/globals.css';
import { Provider as AuthProvider } from "next-auth/client";
import ProgressBar from "@badrap/bar-of-progress"
import { store } from '../app/store'
import { Router } from 'next/router'

function MyApp({ Component, pageProps }) {

  const progress = new ProgressBar({
    size: 4,
    color: "#F4973B",
    className: 'z-50',
    delay: 100
  });

  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)


  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />

      </Provider>

    </AuthProvider>
  )
}

export default MyApp
