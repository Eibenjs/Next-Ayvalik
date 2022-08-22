import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/nav/Navbar'
import { useRouter } from 'next/router'
import ThemeBtn from '../components/nav/ThemeBtn'
import Footer from '../components/footer/Footer'

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Toaster position="top-right" />
        {route.pathname !== '/login' && route.pathname !== '/admin' && (
          <>
            <Navbar />
            <ThemeBtn />
          </>
        )}
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
