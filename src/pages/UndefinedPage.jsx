import React from "react";
import { useLocation } from "react-router-dom";

const UndefinedPage = () => {
  const {state}   = useLocation();
  
  return (
    <div>
      <p className="container text-center my-5 ">
        Üzgünüz Aradığınız Sayfa Bulunumadı
      </p>

      {state && <p className="text-center">Hata Kodunuz <span>{state}</span></p>}
      
    </div>
  );
};

export default UndefinedPage;
