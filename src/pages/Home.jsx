import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const mine = false;

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);


  return (
    <div>
      <ToastContainer />
      <DisplayCampaigns
        title='All Campaigns'
        isLoading={isLoading}
        campaigns={campaigns}
        mine={mine}
      />
    </div>
  )
}

export default Home
