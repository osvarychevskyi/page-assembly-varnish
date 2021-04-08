import Logo192 from '../assets/logo192.png';
import Manifest from '../assets/manifest.json';
import Favicon from '../assets/favicon.ico';

const Html = (props) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href={ Favicon } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="apple-touch-icon" href={ Logo192 } />
                <link rel="manifest" href={ Manifest } />
                <title>title</title>
            </head>
            <body>
                <div id="root">
                    { props.children }
                </div>
            </body>
        </html>
    );
};

export default Html;