import { useRouter } from "next/router";
import vi from "../public/lang/vi";
import en from "../public/lang/en"


const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "en" ? en : vi;

  return trans;
};
export default useTrans;
