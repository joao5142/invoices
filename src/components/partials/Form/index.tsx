import Image from "next/image";
import {
  BillFromContainer,
  BillToContainer,
  BillToContainerMoreInfo,
  FormContainer,
  Item,
  ItemsContainer,
} from "./styles";

import deleteIconImg from "@/assets/images/icon-delete.svg";
import { Button } from "@/components/ui/Button";

export function Form() {
  return (
    <FormContainer>
      <div>
        <strong>Bill From</strong>

        <BillFromContainer>
          <label>
            <span>Street Address</span>
            <input type="text" />
          </label>
          <label>
            <span>City</span>
            <input type="text" />
          </label>
          <label>
            <span>Post Code</span>
            <input type="text" />
          </label>
          <label>
            <span>Country</span>
            <input type="text" />
          </label>
        </BillFromContainer>
      </div>

      <div>
        <strong>Bill To</strong>

        <BillToContainer>
          <label>
            <span>Client's Name</span>
            <input type="text" />
          </label>

          <label>
            <span>Client's Email</span>
            <input type="text" placeholder="joaopaulo@gmail.com" />
          </label>
          <label>
            <span>Street Address</span>
            <input type="text" />
          </label>
          <label>
            <span>City</span>
            <input type="text" />
          </label>
          <label>
            <span>Post Code</span>
            <input type="text" />
          </label>
          <label>
            <span>Country</span>
            <input type="text" />
          </label>
        </BillToContainer>
        <BillToContainerMoreInfo>
          <label>
            <span>Invoice Date</span>
            <input type="date" />
          </label>
          <label>
            <span>Payment Terms</span>
            <select>
              <option value="1">Next 1 day</option>
              <option value="1">Next 7 days</option>
              <option value="1">Next 14 days</option>
              <option value="1">Next 30 days</option>
            </select>
          </label>
          <label>
            <span>Description</span>
            <input type="text" />
          </label>
        </BillToContainerMoreInfo>
      </div>
      <ItemsContainer>
        <strong>ItemList</strong>

        {[1].map((item) => (
          <Item key={item}>
            <label>
              <span>Item Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Qty.</span>
              <input type="text" />
            </label>
            <label>
              <span>Price</span>
              <input type="text" />
            </label>
            <label>
              <span>Total</span>
              <span>0</span>
            </label>
            <label>
              <span> </span>
              <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                  fill="#888EB0"
                  fill-rule="nonzero"
                />
              </svg>
            </label>
          </Item>
        ))}

        <Button wFull variant="quaternary">
          + Add New Item
        </Button>
      </ItemsContainer>
    </FormContainer>
  );
}
