import { useEffect } from "react";

function App() {

    const tg = window.Telegram.WebApp;

    const onClose = () => {
    tg.close()
    }

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            asdasdsadasASDASDASDSADAS
            <button onClick={onClose}>Закрыть</button>
        </div>
    );
}

export default App;