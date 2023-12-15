import { useEffect, useState } from "react";
import { SideBar } from "./components/SideBar";
import "./App.css";
import ListItem from "./components/ListItems";
import Content from "./components/Content";
import {
  getPerticularProvidersData,
  getProvidersData,
} from "./services/commonService";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [resUrls, setResUrls] = useState(null);
  const [providerData, setProviderData] = useState(null);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    (async function () {
      const res = await getProvidersData();
      setResUrls(res.data.data);
    })();
  }, []);

  async function fetchProvider(providerName) {
    const res = await getPerticularProvidersData(providerName);
    setProviderData(res.data.apis);
  }

  return (
    <div className="app">
      <Content providerData={providerData} setProviderData={setProviderData} />
      {!providerData && <button onClick={openModal}>Explore web APIs</button>}
      <SideBar isOpen={isModalOpen} onClose={closeModal}>
        <ListItem
          closeModal={closeModal}
          resUrls={resUrls}
          providerData={providerData}
          fetchProvider={fetchProvider}
        />
      </SideBar>
    </div>
  );
}

export default App;
