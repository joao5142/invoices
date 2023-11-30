import {
  AsideContainer,
  Avatar,
  DialogBackground,
  DialogContent,
  DialogInfo,
  Logo,
} from "./styles";
import Image from "next/image";
import logoImg from "@/assets/images/logo.svg";
import { useTheme } from "styled-components";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

import avatarImg from "@/assets/images/avatar.PNG";

export function Aside() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { icon } = useTheme();
  const { toggleTheme } = useToggleTheme();

  function handleToggleTheme() {
    toggleTheme();
  }

  function handleCloseDialogInfo() {
    setIsDialogOpen(false);
  }
  function handleOpenDialogInfo() {
    setIsDialogOpen(true);
  }
  return (
    <AsideContainer>
      <header>
        <Logo>
          <Image width={40} src={logoImg} alt="" />
        </Logo>
      </header>
      <footer>
        <div>
          <Image
            onClick={handleToggleTheme}
            width={25}
            height={25}
            src={icon.path}
            alt=""
          />
        </div>
        <div>
          <Avatar
            onClick={handleOpenDialogInfo}
            width={40}
            height={40}
            src={avatarImg}
            alt=""
          />
        </div>
      </footer>
      {isDialogOpen &&
        createPortal(
          <AnimatePresence mode="popLayout">
            <DialogInfo
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogBackground onClick={handleCloseDialogInfo} />
              <DialogContent>
                <Avatar width={130} height={130} src={avatarImg} alt="" />
                <strong>João Paulo</strong>

                <a href="" target="_blank">
                  Github Link
                </a>
                <a href="" target="_blank">
                  Deploy Link
                </a>
              </DialogContent>
            </DialogInfo>
          </AnimatePresence>,
          document.body
        )}
    </AsideContainer>
  );
}
