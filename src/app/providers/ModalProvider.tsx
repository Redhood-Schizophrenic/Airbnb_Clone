'use client';

import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";

const ModalProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
}

export default ModalProvider;
