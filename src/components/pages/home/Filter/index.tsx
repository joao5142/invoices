import Image from "next/image";
import iconArrowDownImg from "@/assets/images/icon-arrow-down.svg";
import {
  CheckBox,
  FilterContainer,
  FilterContent,
  FilterText,
  Icon,
} from "./styles";
import { useEffect, useState } from "react";

import iconCheck from "@/assets/images/icon-check.svg";

export function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleIcon() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    let fn = (e: Event) => {
      let isClickable = e.target?.closest("[data-content]") != null;

      if (!isClickable) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", fn);

    return () => {
      document.removeEventListener("click", fn);
    };
  }, []);

  return (
    <FilterContainer>
      <FilterText onClick={handleToggleIcon} data-content="content-text">
        <span>Filter by status</span>
        <Icon width={12} isOpen={isOpen} src={iconArrowDownImg} alt="" />
      </FilterText>

      <FilterContent isOpen={isOpen} data-content="content-text">
        <label>
          <input type="checkbox" name="checkbox" />
          <CheckBox>
            <Image src={iconCheck} width={10} alt="" />
          </CheckBox>
          <span>Paid</span>
        </label>

        <label>
          <input type="checkbox" name="checkbox" />
          <CheckBox>
            <Image src={iconCheck} width={10} alt="" />
          </CheckBox>
          <span>Pending</span>
        </label>

        <label>
          <input type="checkbox" name="checkbox" />
          <CheckBox>
            <Image src={iconCheck} width={10} alt="" />
          </CheckBox>
          <span>Draft</span>
        </label>
      </FilterContent>
    </FilterContainer>
  );
}
