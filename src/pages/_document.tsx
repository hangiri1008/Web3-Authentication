import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => App,
                enhanceComponent: Component => Component,
            });
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* 커스텀 폰트가 필요한 경우 여기 추가 */}
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
