import { useEffect } from "react";

function App() {

    const tg = window.Telegram.WebApp;

    const onClose = () => {
    tg.close()
    }

    const onBuy = () => {
        tg.sendData('buy')
    }

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            asdasdsadasASDASDASDSADAS
            <button onClick={onClose}>Закрыть</button>
            <button onClick={onBuy}>Купить</button>
        </div>
    );
}

export default App;