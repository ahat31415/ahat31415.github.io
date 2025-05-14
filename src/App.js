import './App.css';
import { GetCat } from "./components/GetCat/GetCat";
import React, { useEffect, useState } from "react";
import { CatImage } from "./components/CatImage/CatImage";

function App() {
    const  [img, setImg] = useState('./img/default-cat.png');
    let [loading, setLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = React.useState(false);

    const catFetcher = () => {
        setLoading(!isRefreshing);
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(res => res.json())
                .then((data) => {
                    console.log('data',data);
                    setLoading(false);

                    setImg(data[0].url)
                })
    }
    useEffect(catFetcher, []);

    return (
        <div className="App">
            <div className="window">
                <GetCat catFetcher={catFetcher} refreshing={[isRefreshing, setIsRefreshing]}/>
                <CatImage img={img} loading={loading} />
            </div>
        </div>
    );
}

export default App;
