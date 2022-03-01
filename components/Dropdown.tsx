import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <li className="cursor-pointer px-3 py-2 text-[18px]">
        <div className="flex justify-between items-center">
          <div onClick={() => setOpen(!open)} className={`cursor-pointer px-3 py-2 text-[18px] ${router.pathname == "/solution" ? "text-[#1DC0AD] border-[#1DC0AD] border-b-4" : ""}`}>
            <Link href="/solution">Solusi Kami</Link>
          </div>
          <i className={`bx bx-chevron-down text-3xl ${router.pathname == "/solution" ? "text-[#1DC0AD]" : ""}`}></i>
        </div>
        {open && (
          <ul className="md:absolute lg:mt-[32px]  bg-white  w-32 lg:py-5 md:py-2 pl-3 lg:shadow-md md:shadow-none lg:rounded-b-md">
            <li>Membaca</li>
            <li>Menulis</li>
            <li>Menghafal</li>
          </ul>
        )}
      </li>
    </div>
  );
}
