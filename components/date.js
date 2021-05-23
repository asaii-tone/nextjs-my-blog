import { format } from "date-fns";

export default function dateFormat({ dateString }) {
  if (!dateString) {
    return null;
  }
  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), "yyyy/MM/dd")}
    </time>
  );
}
