"use client";

import React from "react";
import { useEffect, useState } from 'react';
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";
import { useThemeMode } from "@/hooks/useThemeMode";
import { LOCAL_STORAGE } from "@/config/API_config";
const SiteHeader = () => {
  const [token_local, setTokenLocal] = useState<string | null>(null);
 
  useEffect(() => {
    // This will run only on the client side
    
    const token_check = localStorage.getItem(LOCAL_STORAGE.accessToken);
    setTokenLocal(token_check);
  }, []);  // Empty dependency array ensures this runs only once after the initial render
  return (token_local == null ? <Header /> : <HeaderLogged />)
};

export default SiteHeader;
