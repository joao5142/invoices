import { format, add, parse } from "date-fns";

function formatStringToDate(stringDate: string) {
  try {
    const [day, month, year] = stringDate.split("/");

    let date = new Date(Number(year), Number(month) - 1, Number(day));

    return date;
  } catch (err) {
    console.log(err);
  }
  return new Date();
}
export function formatDate(stringDate: string) {
  try {
    if (stringDate) {
      console.log(stringDate);
      let date = formatStringToDate(stringDate) as Date;
      return format(date, "dd MMM yyyy");
    }
  } catch (err) {
    console.log(err);
  }
  return "";
}
export function addDaysToDate(stringDate: string, days: string | number) {
  try {
    if (stringDate) {
      let date = formatStringToDate(stringDate) as Date;

      const newDate = add(date, { days: Number(days) });

      return format(newDate, "dd MMM yyyy");
    }
  } catch (err) {
    console.log(err);
  }
  return "";
}

export function formatDateToUTCFormat(stringDate: string) {
  try {
    if (stringDate) {
      const parsedDate = parse(stringDate, "dd/MM/yyyy", new Date());
      return format(parsedDate, "yyyy-MM-dd");
    }
  } catch (err) {
    console.log(err);
  }
  return "";
}
