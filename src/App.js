import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

// Styled Components
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'

const theme = {

    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333'
    },
    mobile: '768px'

}

function App() {

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <h2 style={{ textAlign: 'center' }}>My Solutions:</h2>
                    {content.map((item, index) => {
                        return <Card
                            key={index}
                            item={item}
                        />
                    })}
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;