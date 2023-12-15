import { useEffect, useState, useRef } from "react";
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
    const res = await getPerticularProvidersData(providerName);
    setProviderData(res.data.apis);
  }

  return (
    <div className="box-border bg-var(--bgMain) flex flex-col justify-center items-center min-h-screen max-w-screen w-full overflow-hidden relative p-8 bg-[#42607b]">
      <Content providerData={providerData} setProviderData={setProviderData} />
      {!providerData && <button className="bg-[#00a1d4] text-white p-2 rounded-md" onClick={openModal}>Explore web APIs</button>}
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
