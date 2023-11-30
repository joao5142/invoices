import Image from "next/image";
import iconArrowDownImg from "@/assets/images/icon-arrow-down.svg";
import {
  CheckBox,
  FilterContainer,
  FilterContent,
  FilterText,
  Icon,
} from "./styles";
import { FormEvent, useEffect, useState } from "react";

import iconCheck from "@/assets/images/icon-check.svg";

interface FilterProps {
  onDataChange: (data: string[]) => void;
}
export function Filter({ onDataChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedCheckboxs, setCheckedCheckboxs] = useState<string[]>([]);

  function handleToggleIcon() {
    setIsOpen(!isOpen);
  }
  function handleChangeCheckboxValue(event: FormEvent<HTMLInputElement>) {
    let currentChangedData: string[] = [];

    if ((event.target as HTMLInputElement).checked) {
      setCheckedCheckboxs((prevState) => {
        currentChangedData = [
          ...prevState,
          (event.target as HTMLInputElement).value,
        ];
        onDataChange(currentChangedData);
        return currentChangedData;
      });
    } else {
      setCheckedCheckboxs((prevState) => {
        currentChangedData = prevState.filter(
          (value) => value != (event.target as HTMLInputElement).value
        );
        onDataChange(currentChangedData);
        return currentChangedData;
      });
    }
  }

  useEffect(() => {
    let fn = (e: Event) => {
      let isClickable =
        (e.target as HTMLElement)?.closest("[data-content]") != null;

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
          <input
            onInput={(event) => handleChangeCheckboxValue(event)}
            type="checkbox"
            name="checkbox"
            value="Paid"
          />
          <CheckBox>
            <Image src={iconCheck} width={10} alt="" />
          </CheckBox>
          <span>Paid</span>
        </label>

        <label>
          <input
            onInput={handleChangeCheckboxValue}
            type="checkbox"
            name="checkbox"
            value="Pending"
          />
          <CheckBox>
            <Image src={iconCheck} width={10} alt="" />
          </CheckBox>
          <span>Pending</span>
        </label>
      </FilterContent>
    </FilterContainer>
  );
}
