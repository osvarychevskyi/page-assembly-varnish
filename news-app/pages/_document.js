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
                    <div dangerouslySetInnerHTML={{__html: '<esi:include src="/cms/header/index.html" />'}}></div>
                    <Main />
                    <NextScript />
                    <div dangerouslySetInnerHTML={{__html: '<esi:include src="/cms/footer/index.html" />'}}></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument