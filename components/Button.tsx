import React from "react";
import Link from "next/link";

export default function Button() {
  return (
    <div>
      <button className="cursor-pointer text-[18px] w-[150px] h-[50px] rounded-[10px] border border-[#1DC0AD] text-[#1DC0AD] ml-3 mt-2 font-[700]">
        <Link href="/contact">Hubungi Kami</Link>
      </button>
    </div>
  );
}
