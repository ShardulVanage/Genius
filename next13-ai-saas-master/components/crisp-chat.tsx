"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9d6ea7ef-3dc9-40b0-bc1e-70d7351d97dd");
  }, []);

  return null;
};
