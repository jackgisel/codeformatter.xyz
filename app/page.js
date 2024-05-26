import TextForm from "@/components/Form";
import getLang, {convertCode} from '@/app/actions';

export default function Home() {
  return (
    <div className="w-full flex justify-center content-center">
      <div className="w-3/5">
          <TextForm getLang={getLang} convertCode={convertCode} />
      </div>
    </div>
  );
}
