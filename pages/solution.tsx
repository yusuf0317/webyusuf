import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../img/solution/1.png";
import img2 from "../img/solution/2.png";
import img3 from "../img/solution/3.png";
import img4 from "../img/solution/4.png";
import img5 from "../img/solution/5.png";
import img6 from "../img/solution/6.png";
import img7 from "../img/home/19.png";

function Solution() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <Layout>
        <div className="fixed -mt-9 z-10 w-full bg-white items-center pt-5 shadow-md">
          <div className="w-full items-center">
            <div className="lg:px-[150px] md:px-1 items-center w-full">
              <div className="flex items items-center justify-between w-full">
                <div className="w-full">
                  <ul className=" text-[14px] text-gray-400 pb-5 leading-10 flex overflow-x-auto">
                    <li className="pr-7">
                      <a href="#web">Web Development</a>
                    </li>
                    <li className="px-7">
                      <a href="#app">App Development</a>
                    </li>
                    <li className="px-7">
                      <a href="#ui">UI/UX Design</a>
                    </li>
                    <li className="px-7">
                      <a href="#ml">Machine Learning</a>
                    </li>
                    <li className="px-7">
                      <a href="#fa">Flow Automation</a>
                    </li>
                    <li className="px-7">
                      <a href="#bda">Branding & Digitals Ads</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-48 pb-28" id="web">
          <div className="mx-28 lg:flex md:block">
            <div>
              <Image src={img1} />
            </div>
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">WEB DEVELOPMENT</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                Kami siap untuk punya
                <br />
                website?
              </h1>
              <p className="font-[400] text-[18px] ">
                Tuangkan segala ide yang kamu simpan selama ini untuk website kamu,
                <br /> saatnya kita bust itu semua jadi kenyataan
              </p>
              <button className="w-[100px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Saya siap!</button>
            </div>
          </div>
        </div>
        <div className="py-48 background" id="app">
          <div className="mx-28 lg:flex md:block">
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">APP DEVELOPMENT</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                "Bangun Aplikasi itu susah",
                <br />
                kata mereka, bukan kami
              </h1>
              <p className="font-[400] text-[18px] ">
                Saat ini (hampir) semua orang itu pasti memiliki ponsel dan akan selalu
                <br />
                membawanya kemanapun mereka berada. Jadi, tunggu apa lagi?
              </p>
              <button className="w-[120px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ayo bangun!</button>
            </div>
            <div>
              <Image src={img2} />
            </div>
          </div>
        </div>
        <div className="pb-28 py-48" id="ui">
          <div className="mx-28 lg:flex md:block">
            <div>
              <Image src={img3} />
            </div>
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">UI/UX DESIGN</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                Website / aplikasi dengan
                <br />
                tampilan "lama", masih ?
              </h1>
              <p className="font-[400] text-[18px] ">
                Apa yang dilihat pertama kali oleh pengunjung ketika mereka membuka
                <br />
                sesuatu website/aplikasi? Jelas penampilannya dan kemudian penggunaanya
              </p>
              <button className="w-[140px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Mau kece dong!</button>
            </div>
          </div>
        </div>
        <div className="py-48 background" id="ml">
          <div className="mx-28 lg:flex md:block">
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">MEACHING LEARNING</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                Buat mesin bekerja untuk
                <br />
                kamu, bukan sebaliknya
              </h1>
              <p className="font-[400] text-[18px] ">
                Rasanya ingin mengajarkan mesin untuk bekerja dengan sendirinya
                <br />
                tanpa perlu ada kerjaan tambahan ?
              </p>
              <button className="w-[150px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ajari mesin kami!</button>
            </div>
            <div>
              <Image src={img4} />
            </div>
          </div>
        </div>
        <div className="py-48" id="fa">
          <div className="mx-28 lg:flex md:block">
            <div>
              <Image src={img5} />
            </div>
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">FLOW AUTOMATION</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                Kamu masih hobi ngerjain
                <br />
                administrasi berulang?
              </h1>
              <p className="font-[400] text-[18px] ">
                Biarkan proses administrasi manual dan tumpukan dokumen fisik
                <br />
                menjadi cerita dan kenangan lama (jangan yang lain-lain ya)
              </p>
              <button className="w-[170px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Ayo buat cerita baru!</button>
            </div>
          </div>
        </div>
        <div className="py-48 background" id="bda">
          <div className="mx-28 lg:flex md:block">
            <div className="ml-10 mt-16 mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD]">BRANDING & DIGITAL ADS</p>
              <h1 className="text-[48px] font-[900] leading-[65.47px]">
                Ingin berkomunikasi lebih
                <br />
                baik dengan konsumen?
              </h1>
              <p className="font-[400] text-[18px] ">
                Nama usaha kamu (asosiasi dan kredibilasnya) dan iklan sangat penting
                <br />
                dalam membangun hubungan denagn konsumen. Mau tahu lebih?
              </p>
              <button className="w-[100px] h-[40px] rounded-[8px] bg-[#1DC0AD] text-white mt-20 text-[14px]">Mau dong!</button>
            </div>
            <div>
              <Image src={img6} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div>
            <div>
              <Image src={img7} />
            </div>
            <h1 className="text-[48px] font-[900]">Apakah kamu siap?</h1>
            <p>
              Beritahu kami apa yang mau kamu bangun atau kesulitan
              <br />
              apa yang kamu hadapi
            </p>
            <button className="w-[150px] h-[55.4px] border border-[#1DC0AD] rounded-[10px] text-[18px] text-[#1DC0AD] my-20">Hubungi Kami</button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Solution;
