import Image, { ImageProps } from "next/image";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FilterContainer = styled.div`
  position: relative;
  z-index: 0;
  span {
    vertical-align: middle;
    font-size: 0.75rem;
    font-weight: bold;

    color: ${(props) => props.theme.color.text.link};
  }
`;

export const FilterText = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  align-items: center;
  gap: 15px;

  cursor: pointer;
`;
interface IconProps extends ImageProps {
  isOpen: boolean;
}
export const Icon = styled(Image)<IconProps>`
  transition: 0.2s linear;
  ${(props) =>
    props.isOpen &&
    css`
      rotate: 180deg;
    `}
`;

interface FilterContentProps {
  isOpen: boolean;
}
export const FilterContent = styled(motion.div)<FilterContentProps>`
  visibility: hidden;

  ${(props) =>
    props.isOpen &&
    css`
      visibility: visible;
    `}

  background: ${(props) => props.theme.color.dropdown.bg};
  box-shadow: 2px 2px 10px ${(props) => props.theme.color.dropdown.shadow};

  position: absolute;
  bottom: -9rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 12rem;
  border-radius: 8px;
  padding: 1rem 1.5rem;

  cursor: initial;

  label {
    display: flex;
    align-items: center;
    gap: 15px;

    cursor: pointer;

    input {
      display: none;
    }
    span {
      line-height: 1rem;
      vertical-align: middle;
    }

    img {
      display: none;
    }

    input:checked + span {
      background-color: ${(props) => props.theme.color.main};
    }
    input:checked + span img {
      display: block;
    }
  }
`;

export const CheckBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;

  border-radius: 3px;

  background: ${(props) => props.theme.color.checkbox.bg};
`;
