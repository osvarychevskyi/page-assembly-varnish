import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Fragment} from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <>
                <Main />
                <NextScript />
            </>
        )
    }
}

export default MyDocument