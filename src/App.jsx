import { use } from "react";

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
        </div>
    );
}

export default App;