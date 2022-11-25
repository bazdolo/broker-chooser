import { Provider } from "react-redux";
import { useMemo, useEffect } from "react";
import { makeStore } from "../redux/store";
import PageContainer from "../components/PageContainer/PageContainer";

export default function Home() {
  const store = useMemo(() => {
    return makeStore();
  }, []);

  return (
    <Provider store={store}>
      <PageContainer />
    </Provider>
  );
}
