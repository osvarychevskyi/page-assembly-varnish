import App from "./components/App";

export default (props) => {
    const clientStats = props.clientStats;
    return (
        <div id="root-header">
            <App/>
            <script src={`${clientStats.publicPath}${clientStats.assetsByChunkName.vendor[0]}`}/>
            <script src={`${clientStats.publicPath}${clientStats.assetsByChunkName.main[0]}`}/>
        </div>
    );
};