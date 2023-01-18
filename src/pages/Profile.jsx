import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const mine = true;

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      {!address ? 
      <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">All your campaigns</h1>
      <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183] mt-[2px]">
        Kindly connect to your wallet to view all your projects
      </p>
      </div>
        :
        <DisplayCampaigns
          title="All your campaigns"
          isLoading={isLoading}
          campaigns={campaigns}
          mine={mine}
        />}
    </div>
  )
}

export default Profile