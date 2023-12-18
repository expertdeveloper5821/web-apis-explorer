import { useEffect, useState, useRef } from "react";
import { SideBar } from "./components/SideBar";
import "./App.css";
import ListItem from "./components/ListItems";
import Content from "./components/Content";
import {
  getParticularProvidersData,
  getProvidersData,
} from "./services/commonService";
import { getCache, setCache } from "./utils/cache";
import Button from "./components/Button";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [resUrls, setResUrls] = useState(null);
  const [providerData, setProviderData] = useState(null);

  const initialized = useRef(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      (async function () {
        const res = await getProvidersData();
        setResUrls(res.data.data);
      })();
    }
  }, []);

  async function fetchProvider(providerName) {
    const data = getCache(providerName);
    if (data) {
      setProviderData(data);
    } else {
      const res = await getParticularProvidersData(providerName);
      setProviderData(res.data.apis);
      setCache(providerName, res.data.apis);
    }
  }

  return (
    <ErrorBoundary>
      <div
        className={`box-border bg-var(--bgMain) flex flex-col items-center ${
          !providerData && "justify-center"
        } min-h-screen max-w-screen w-full overflow-hidden relative py-6 bg-[#42607b]`}
      >
        {providerData !== null && (
          <Content
            providerData={providerData}
            setProviderData={setProviderData}
          />
        )}
        {!providerData && (
          <Button handleClick={openModal} text={"Explore Web APIs"} />
        )}
        <SideBar isOpen={isModalOpen} onClose={closeModal}>
          <ListItem
            closeModal={closeModal}
            resUrls={resUrls}
            providerData={providerData}
            fetchProvider={fetchProvider}
          />
        </SideBar>
      </div>
    </ErrorBoundary>
  );
}

export default App;
