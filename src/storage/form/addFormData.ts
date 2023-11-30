import { AppError } from "@/utils/AppError";
import { FORM_DTO_TYPE, FORM_STORAGE_COLLECTION } from "../config";

export function addFormDataToStorage(data: FORM_DTO_TYPE) {
  try {
    localStorage.setItem(FORM_STORAGE_COLLECTION, JSON.stringify(data));
  } catch (err) {
    throw new AppError(err);
  }
}
