import { FORM_DTO_TYPE, FORM_STORAGE_COLLECTION } from "../config";

export function addFormDataToStorage(data: FORM_DTO_TYPE) {
  try {
    const storedItems = localStorage.getItem(FORM_STORAGE_COLLECTION);

    if (storedItems) {
      return JSON.parse(storedItems);
    } else {
      return {};
    }
  } catch (err) {
    return {};
  }
}
