import {Provider} from "react-redux";
import {useMemo, useEffect} from "react";
import {makeStore} from "../redux/store";
import HeaderBroker from "../components/HeaderBroker/HeaderBroker"
import styles from "../styles/Home.module.scss"


export default function Home() {

    const headerTitle = "Find the right broker and invest on your own"

    const store = useMemo(() => {
        return makeStore()
    }, []);

    return (
        <Provider store={store}>
            <div className={styles.pageContainer}>
                <HeaderBroker headerTitle={headerTitle}/>
            </div>
        </Provider>
    )
}
