import "../styles/global.css"
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
function MyApp({ Component, pageProps }) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgba(38, 154, 116, 1)'
      },
      secondary: {
        main: 'rgba(74, 74, 74, 1)'
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
