import TextForm from "@/components/Form";
import getLang, { convertCode } from "@/app/actions";

export default function JsonHome() {
  return (
    <ul>
      <li>
        <h2>Tools:</h2>
        <a href="/json/formatter">Formatter</a>
      </li>
    </ul>
  );
}
