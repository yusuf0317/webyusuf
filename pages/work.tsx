import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import img1 from "../img/work/icn1.png";
import img2 from "../img/work/icn2.png";
import img3 from "../img/work/icn3.png";
import img4 from "../img/work/1.png";
import img5 from "../img/work/2.png";
import img6 from "../img/work/3.png";
import img7 from "../img/work/4.png";
import img8 from "../img/work/5.png";
import img9 from "../img/work/6.png";
import img10 from "../img/work/7.png";
import img11 from "../img/work/8.png";
import img12 from "../img/work/9.png";
import img13 from "../img/home/19.png";

function work() {
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
        <div className="mt-20 lg:flex md:block mx-36 pb-16">
          <div className="mb-14">
            <div>
              <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">COLLABORATIUM</p>
              <div className="leading-[40px]">
                <span className="font-[300] text-[48px]">Kami suka</span>
                <br />
                <span className="font-[900] text-[48px]">berkolaborasi</span>
              </div>
              <p className="font-[400] text-[18px] mt-5">
                Komunikasi dan transparasi adalah pondasi dari hubungan
                <br />
                jangka panjang yang kita semua inginkan. Jadi,ayo ngobrol
                <br />
                dan gali lebih dalam lagi kebutuhan kamu!
              </p>
            </div>
            <span className="border-b-4 border-[#1DC0AD] px-5"></span>
            <div className="flex flex-wrap">
              <div className="mt-7">
                <div className="mb-2">
                  <Image src={img1} />
                </div>
                <p className="font-[900] text-[18px]">Perencanaan Proyek</p>
                <p className="text-[14px] font-[400] mt-2">
                  Membahas perencanaan
                  <br />
                  pengembangan kebutuhan
                  <br />
                  kamu yang transparan
                </p>
              </div>
              <div className="mt-7 mx-10">
                <div className="mb-2">
                  <Image src={img2} />
                </div>
                <p className="font-[900] text-[18px]">Laporan Eksekutif</p>
                <p className="text-[14px] font-[400] mt-2">
                  Dapatkan laporan berkala
                  <br />
                  mengenai pengembangan
                  <br />
                  yang telah dikerjakan
                </p>
              </div>
              <div className="mt-7">
                <div className="mb-2">
                  <Image src={img3} />
                </div>
                <p className="font-[900] text-[18px]">Komunikasi Rutin</p>
                <p className="text-[14px] font-[400] mt-2">
                  Kami siap menjawab semua
                  <br />
                  pertanyaan dan memberikan
                  <br />
                  informasi yang kamu butuhkan
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={img4} />
          </div>
        </div>
        <div className="mt-20 lg:flex md:block px-36 py-40 background w-full">
          <div className="mb-10">
            <Image src={img5} />
          </div>
          <div className="lg:ml-10">
            <div>
              <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">PASSION</p>
              <div className="leading-[40px]">
                <span className="font-[300] text-[48px]">Kami membangun dengan</span>
                <br />
                <span className="font-[900] text-[48px]">sepenuh hati</span>
              </div>
              <p className="font-[400] text-[18px] mt-5">
                membangun sesuatu bukan hanya merupakan sebuah pekerjaan bagi kami.
                <br />
                Kami suka (dengan penuh hasrat)membangun solusi luar biasa untuk
                <br />
                orang-orang luar biasa!
              </p>
            </div>
            <span className="border-b-4 border-[#1DC0AD] px-5"></span>
            <div className="flex flex-wrap">
              <div className="mt-7">
                <div className="mb-2">
                  <Image src={img1} />
                </div>
                <p className="font-[900] text-[18px]">Kualitas Kode</p>
                <p className="text-[14px] font-[400] mt-2">
                  Memberiakan Kode
                  <br />
                  berkualitas baik yang telah
                  <br />
                  kami tinjau dan uji
                </p>
              </div>
              <div className="mt-7 mx-10">
                <div className="mb-2">
                  <Image src={img2} />
                </div>
                <p className="font-[900] text-[18px]">Tes Otomatis</p>
                <p className="text-[14px] font-[400] mt-2">
                  Melakukan rangkaian tes
                  <br />
                  otomatis dengan solusi
                  <br />
                  internasional
                </p>
              </div>
              <div className="mt-7">
                <div className="mb-2">
                  <Image src={img3} />
                </div>
                <p className="font-[900] text-[18px]">Selalu Terkini</p>
                <p className="text-[14px] font-[400] mt-2">
                  Membangun solusi kamu
                  <br />
                  dengan teknologi dan
                  <br />
                  informasi terkini
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex md:block px-36 py-40">
          <div>
            <div className="mb-10">
              <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">CLEAN CODE</p>
              <div className="leading-[40px]">
                <span className="font-[300] text-[48px]">Kami percaya dengan</span>
                <br />
                <span className="font-[900] text-[48px]">kode yang bersih</span>
              </div>
              <p className="font-[400] text-[18px] mt-5">
                Kode yang bersih dapat berbicara lebih jelas dibandingkan dengan catatan
                <br />
                berwarna yang menumpuk - kami belajar dari pengalaman, Fokus kami
                <br />
                adalah untuk membangun dengan prinsip kode yang bersih (yang tentunya
                <br />
                akan membuat tenang tim IT kamu juga) demi produk yang berjangka
                <br />
                panjang dan dapat selalu dikembangkan.
              </p>
            </div>
          </div>
          <div>
            <Image src={img6} />
          </div>
        </div>
        <div className="lg:flex md:block px-36 py-40 background">
          <div>
            <Image src={img7} />
          </div>
          <div>
            <div>
              <p className="font-[400] text-[12px] text-[#1DC0AD] mb-3">TECHNICAL EXPERTISE</p>
              <div className="leading-[40px]">
                <span className="font-[300] text-[48px]">Kemampuan</span>
                <br />
                <span className="font-[900] text-[48px]">teknis kami</span>
              </div>
              <p className="font-[400] text-[18px] mt-5">
                Kami tidak akan pernah berhenti
                <br />
                belajar bahasa dan teknologi
                <br />
                terbaru agar dapat memberikan
                <br />
                solusi yang terbaik bagi kamu
              </p>
            </div>
            <span className="border-b-4 border-[#1DC0AD] px-5"></span>
            <div className="mt-7 lg:flex md:flex sm:block">
              <div className="mr-14">
                <div className="mb-7">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Mobile Development</p>
                  <p className="font-[400] text-[14px]">Flutter, Dart, Kotlin</p>
                </div>
                <div className="mb-7">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Framework Backend & Frontend</p>
                  <p className="font-[400] text-[14px]">
                    Laravel, Django, Flask, Next JS, Nuxt JS,
                    <br />
                    React JS, Vue JS, Angular JS
                  </p>
                </div>
                <div className="mb-7">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Programming Language Development</p>
                  <p className="font-[400] text-[14px]">PHP, Node JS, Golang, Python, Javascript</p>
                </div>
                <div className="mb-7">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Middleware</p>
                  <p className="font-[400] text-[14px]">Spatial Laravel, JSON Web Token (JWT)</p>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Database</p>
                  <p className="font-[400] text-[14px]">MySQL, PostgreSQL, Redis DB</p>
                </div>
                <div className="mb-4">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Framework CSS</p>
                  <p className="font-[400] text-[14px]">Tailwind CSS, Bootstrap 5</p>
                </div>
                <div className="mb-4">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Stack</p>
                  <p className="font-[400] text-[14px]">MERN, MEVN, MEAN, TALL</p>
                </div>
                <div className="mb-3">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Notification</p>
                  <p className="font-[400] text-[14px]">Firebase</p>
                </div>
                <div className="mb-4">
                  <p className="text-[18px] text-[#1DC0AD] font-[900]">Design</p>
                  <p className="font-[400] text-[14px]">Figma, Zeplin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-40">
          <div className="text-center">
            <span className="border-t-4 border-[#1DC0AD] px-5"></span>
            <h1 className="text-[48px] -mt-6 font-[900]">Solusi Kami</h1>
          </div>
          <div className="columns-5">
            <div>
              <div className="mx-5">
                <Image src={img8} />
                <p className="font-[900] text-[24px] text-[#289FD2]">Telegram</p>
                <p className="font-[400] text-[18px]">
                  for ongoing
                  <br />
                  communication
                  <br />
                  with the team
                </p>
              </div>
              <div className="mx-5">
                <Image src={img9} />
                <p className="font-[900] text-[24px] text-[#5059C9]">
                  Microsoft
                  <br />
                  Teams
                </p>
                <p className="font-[400] text-[18px]">
                  for video conferencing
                  <br />
                  and coordination
                </p>
              </div>
              <div className="mx-5">
                <Image src={img10} />
                <p className="font-[900] text-[24px] text-[#528FF5]">Google Docs</p>
                <p className="font-[400] text-[18px]">
                  for dynamic
                  <br />
                  collaboration n<br />
                  documentation
                </p>
              </div>
              <div className="mx-5">
                <Image src={img11} />
                <p className="font-[900] text-[24px] text-[#F24E1E]">Figma</p>
                <p className="font-[400] text-[18px]">
                  for designing and
                  <br />
                  presenting <br />
                  the the mockup design
                </p>
              </div>
              <div className="mx-5">
                <Image src={img12} />
                <p
                  className="font-[900] text-[24px] text-[#6C10B6
]"
                >
                  Whimsical
                </p>
                <p className="font-[400] text-[18px]">
                  for designing and
                  <br />
                  persenting the
                  <br />
                  wireframe
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div>
            <div>
              <Image src={img13} />
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

export default work;