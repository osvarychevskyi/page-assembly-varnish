import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <esi:include src="/cms/header/index.html" />
                    <Main />
                    <NextScript />
                    <esi:include src="/cms/footer/index.html" />
                </body>
            </Html>
        )
    }
}

export default MyDocument