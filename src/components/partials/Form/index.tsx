import Image from "next/image";
import {
  BillFromContainer,
  BillToContainer,
  BillToContainerMoreInfo,
  ErrorText,
  FormContainer,
  Item,
  ItemsContainer,
} from "./styles";

import deleteIconImg from "@/assets/images/icon-delete.svg";

import { Button } from "@/components/ui/Button";

import { FormHTMLAttributes, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, useFieldArray } from "react-hook-form";

import { validationSchema } from "@/schema/form";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Form({ ...rest }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  function handleSaveFormData(data: typeof validationSchema) {
    try {
      console.log(data);
    } catch (err) {}
  }

  const watchFieldArray = watch("items");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  console.log(errors);
  return (
    <FormContainer onSubmit={handleSubmit(handleSaveFormData)} {...rest}>
      <div>
        <strong>Bill From</strong>

        <BillFromContainer>
          <label>
            <span>Street Address</span>
            <input
              type="text"
              {...register(`senderAddress.street`)}
              {...(errors.senderAddress?.street?.message && {
                "data-invalid": "",
              })}
            />
          </label>
          <label>
            <span>City</span>
            <input
              type="text"
              {...register(`senderAddress.city`)}
              {...(errors.senderAddress?.city?.message && {
                "data-invalid": "",
              })}
            />
          </label>
          <label>
            <span>Post Code</span>
            <input
              type="text"
              {...register(`senderAddress.postCode`)}
              {...(errors.senderAddress?.postCode?.message && {
                "data-invalid": "",
              })}
            />
          </label>
          <label>
            <span>Country</span>
            <input
              type="text"
              {...register(`senderAddress.country`)}
              {...(errors.senderAddress?.country?.message && {
                "data-invalid": "",
              })}
            />
          </label>
        </BillFromContainer>
      </div>

      <div>
        <strong>Bill To</strong>

        <BillToContainer>
          <label>
            <span>Client's Name</span>
            <input
              {...(errors.clientName?.message && { "data-invalid": "" })}
              type="text"
              {...register(`clientName`)}
            />
          </label>

          <label>
            <span>Client's Email</span>
            <input
              {...(errors.clientEmail?.message && { "data-invalid": "" })}
              type="text"
              placeholder="joaopaulo@gmail.com"
              {...register(`clientEmail`)}
            />
          </label>
          <label>
            <span>Street Address</span>
            <input
              {...(errors.clientAddress?.street?.message && {
                "data-invalid": "",
              })}
              type="text"
              {...register(`clientAddress.street`)}
            />
          </label>
          <label>
            <span>City</span>
            <input
              {...(errors.clientAddress?.city?.message && {
                "data-invalid": "",
              })}
              type="text"
              {...register(`clientAddress.city`)}
            />
          </label>
          <label>
            <span>Post Code</span>
            <input
              {...(errors.clientAddress?.postCode?.message && {
                "data-invalid": "",
              })}
              type="text"
              {...register(`clientAddress.postCode`)}
            />
          </label>
          <label>
            <span>Country</span>
            <input
              {...(errors.clientAddress?.country?.message && {
                "data-invalid": "",
              })}
              type="text"
              {...register(`clientAddress.country`)}
            />
          </label>
        </BillToContainer>
        <BillToContainerMoreInfo>
          <label>
            <span>Invoice Date</span>
            <input
              type="date"
              {...register(`createdAt`)}
              {...(errors.createdAt?.message && { "data-invalid": "" })}
            />
          </label>
          <label>
            <span>Payment Terms</span>
            <select
              {...register(`paymentTerms`)}
              {...(errors.paymentTerms?.message && { "data-invalid": "" })}
            >
              <option value={1}>Next 1 day</option>
              <option value={7}>Next 7 days</option>
              <option value={14}>Next 14 days</option>
              <option value={30}>Next 30 days</option>
            </select>
          </label>
          <label>
            <span>Description</span>
            <input
              type="text"
              {...register(`description`)}
              {...(errors.description?.message && { "data-invalid": "" })}
            />
          </label>
        </BillToContainerMoreInfo>
      </div>
      <ItemsContainer>
        <strong>ItemList</strong>

        {controlledFields.map((item, index) => (
          <Item key={index}>
            <label>
              <span>Item Name</span>
              <input type="text" {...register(`items.${index}.name`)} />
            </label>
            <label>
              <span>Qty.</span>
              <input type="text" {...register(`items.${index}.quantity`)} />
            </label>
            <label>
              <span>Price</span>
              <input type="text" {...register(`items.${index}.price`)} />
            </label>
            <label>
              <span>Total</span>
              <span>{item.price * item.quantity}</span>
            </label>
            <label>
              <span> </span>
              <svg
                onClick={() => remove(index)}
                width="13"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                  fill="#888EB0"
                  fill-rule="nonzero"
                />
              </svg>
            </label>
          </Item>
        ))}
        <ErrorText>{errors.items?.message && errors.items?.message}</ErrorText>

        <Button
          type="button"
          onClick={() => append({ name: "", price: 0, quantity: 0 })}
          wFull
          variant="quaternary"
        >
          + Add New Item
        </Button>
      </ItemsContainer>
    </FormContainer>
  );
}
