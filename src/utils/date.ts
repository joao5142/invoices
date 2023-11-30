import { format, add, parse } from "date-fns";

function formatStringToDate(stringDate: string) {
  const [day, month, year] = stringDate.split("/");

  let date = new Date(Number(year), Number(month) - 1, Number(day));

  return date;
}
export function formatDate(stringDate: string) {
  if (stringDate) {
    let date = formatStringToDate(stringDate);
    return format(date, "dd MMM yyyy");
  }

  return "";
}
export function addDaysToDate(stringDate: string, days: string | number) {
  if (stringDate) {
    let date = formatStringToDate(stringDate);

    const newDate = add(date, { days: Number(days) });

    return format(newDate, "dd MMM yyyy");
  }
  return "";
}

export function formatDateToUTCFormat(stringDate: string) {
  if (stringDate) {
    const parsedDate = parse(stringDate, "dd/MM/yyyy", new Date());
    return format(parsedDate, "yyyy-MM-dd");
  }
  return "";
}
