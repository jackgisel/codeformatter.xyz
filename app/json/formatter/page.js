import TextForm from "@/components/Form";
import getLang, { convertCode } from "@/app/actions";

export default function JsonHome() {
  return <TextForm getLang={getLang} convertCode={convertCode} />;
}
