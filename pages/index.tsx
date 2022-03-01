import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/Navbar";
import heading from "../img/home/Header.png";
import img1 from "../img/home/1.png";
import img2 from "../img/home/2.png";
import img3 from "../img/home/3.png";
import img4 from "../img/home/4.png";
import img5 from "../img/home/5.png";
import img6 from "../img/home/6.png";
import img7 from "../img/home/7.png";
import img8 from "../img/home/8.png";
import img9 from "../img/home/9.png";
import img10 from "../img/home/10.png";
import img11 from "../img/home/11.png";
import img12 from "../img/home/12.png";
import img13 from "../img/home/13.png";
import img14 from "../img/home/14.png";
import img15 from "../img/home/15.png";
import img16 from "../img/home/16.png";
import img17 from "../img/home/17.png";
import img18 from "../img/home/18.png";
import img19 from "../img/home/19.png";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
      </Head>
      <Layout>
        <div className="lg:flex justify-between md:block px-32 ">
          <div className="lg:mt-28 md:mt-10 lg:text-left md:text-center sm:text-center">
            <p>
              Kami adalah <span>Art By Code | ABC</span>
            </p>
            <h1 className="text-[48px] mt-10 font-[900]">
              Ayo Ciptakan sesuatu <br />
              yang indah dari
              <br /> sebuah kode
            </h1>
            <button className="w-[200px] h-[50px] rounded-[10px] text-white bg-[#1DC0AD] text-[14px] mt-10">Mau tau lebih banyak</button>
          </div>
          <div className="pt-10 relative z-50">
            <Image src={heading} />
          </div>
        </div>
        <div className="mt-36 mx-auto">
          <div className="text-center">
            <span className="border-t-4 border-[#1DC0AD] px-5"></span>
            <h1 className="text-[48px] -mt-6 font-[900]">Solusi Kami</h1>
          </div>
          <div className="ml-32">
            <div className="mt-24 lg:columns-3 md:columns-2 sm:columns-1">
              <div className="mb-24">
                <Image src={img1} />
                <div className="flex items-center">
                  <i className="bi bi-calendar4-week border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">Web Development</p>
                </div>
              </div>
              <div className="mb-24">
                <Image src={img2} />
                <div className="flex items-center">
                  <i className="bi bi-phone border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">App Development</p>
                </div>
              </div>
              <div className="mb-24">
                <Image src={img3} />
                <div className="flex items-center">
                  <i className="bi bi-vector-pen border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">UI/UX Design</p>
                </div>
              </div>
              <div className="mb-24">
                <Image src={img4} />
                <div className="flex items-center">
                  <i className="bi bi-arrow-clockwise border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">Machine Learning</p>
                </div>
              </div>
              <div className="mb-24">
                <Image src={img5} />
                <div className="flex items-center">
                  <i className="bi bi-gear border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">Workflow Automation</p>
                </div>
              </div>
              <div className="mb-24">
                <Image src={img6} />
                <div className="flex items-center">
                  <i className="bi bi-megaphone border border-black py-3 px-4 rounded-[50%]"></i>
                  <p className="ml-3 font-[900] text-[18px]">Branding & Digital Ads</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="text-[14px] text-white rounded-[10px] w-[200px] h-[50px] bg-[#1DC0AD] mx-auto">Lihat detailnya dong</button>
          </div>
        </div>
        <div className="mt-72 mx-auto">
          <div className="text-center mb-20">
            <span className="border-t-4 border-[#1DC0AD] px-5"></span>
            <h1 className="text-[48px] -mt-6 font-[900]">Klien Kami</h1>
          </div>
          <div className="mt-10 ">
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 content-center lg:ml-36 md:ml-40 sm:ml-48">
              <div className="mb-20">
                <Image src={img7} />
              </div>
              <div className="mb-20">
                <Image src={img8} />
              </div>
              <div className="mb-20">
                <Image src={img9} />
              </div>
              <div className="mb-20">
                <Image src={img10} />
              </div>
              <div className="mb-20">
                <Image src={img11} />
              </div>
              <div className="mb-20">
                <Image src={img12} />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 content-center lg:mx-48 md:ml-3 sm:ml-60">
              <div className="mb-20">
                <Image src={img13} />
              </div>
              <div className="mb-20">
                <Image src={img14} />
              </div>
              <div className="mb-20">
                <Image src={img15} />
              </div>
              <div className="mb-20">
                <Image src={img16} />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 content-center lg:pl-24 sm:ml-60">
              <div className="mb-20 pr-10">
                <Image src={img17} />
              </div>
              <div className="mb-20">
                <Image src={img18} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center -mt-20 mb-28">
          <div className="mb-7">
            <Image src={img19} />
          </div>
          <div className="text-center">
            <h1 className="text-[48px] -mt-6 font-[900]">Apakah kamu siap?</h1>
            <p>
              Beritahu kami apa yang kamu mau bangun atau kesulitan
              <br />
              apa yang kamu hadapi
            </p>
          </div>
          <div className="mt-14">
            <button className="w-[150px] h-[55.4px] rounded-[10px] border border-[#1DC0AD] text-[#1DC0AD]">Hubungi Kami</button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
