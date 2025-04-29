import './App.css';
import { GetCat } from "./components/GetCat/GetCat";
import { useEffect, useState } from "react";
import { CatImage } from "./components/CatImage/CatImage";

function App() {
    const  [img, setImg] = useState('./img/default-cat.png');
    const catFetcher = () => {
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(res => res.json())
                .then((data) => {
                    console.log('data',data);
                    setImg(data[0].url)
                })
    }
    useEffect(catFetcher, []);

    return (
        <div className="App">
            <div className="window">
                <GetCat catFetcher={catFetcher} />
                <CatImage img={img}/>
            </div>
        </div>
    );
}

export default App;
