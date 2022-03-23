import Link from "next/link";
import { useRouter } from "next/router";

function Button() {
  const router = useRouter();
  return (
    <div>
      <button className={`cursor-pointer text-[18px] w-[150px] h-[50px] rounded-[10px] border border-[#1DC0AD] text-[#1DC0AD] mt-2 font-[700] ${router.pathname == "/contact" ? "bg-[#1DC0AD] text-white" : ""}`}>
        <Link href="/contact">Hubungi Kami</Link>
      </button>
    </div>
  );
}

export default Button;
