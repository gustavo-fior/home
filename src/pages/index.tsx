import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import {
  BsArrowRightShort,
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { Gradient } from "../utils/gradient/gradient";

const Home: NextPage = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <Head>
        <title>Gustavo&apos;s home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen min-h-screen flex-col text-white">
        <canvas
          id="gradient-canvas"
          className="fixed inset-0"
          data-transition-in
        />
        <div className="absolute z-50 flex w-full items-center justify-end px-8 py-16 md:px-24">
          <div className="flex gap-4">
            <Link href="https://github.com/gustavo-fior">
              <div className="rounded-full bg-white bg-opacity-20 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-40">
                <div className="flex items-center gap-2">
                  <BsGithub size={24} color="white" />
                </div>
              </div>
            </Link>
            <Link href="https://linkedin.com/in/gustavo-fior-a910781b4/">
              <div className="rounded-full bg-white bg-opacity-20 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-40">
                <div className="flex items-center gap-2">
                  <BsLinkedin size={24} color="white" />
                </div>
              </div>
            </Link>
            <Link href="mailto:gustavo_fior@outlook.com">
              <div className="rounded-full bg-white bg-opacity-20 p-3 drop-shadow-lg backdrop-blur-lg transition duration-200 ease-in-out hover:bg-opacity-40">
                <div className="flex items-center gap-2">
                  <BsEnvelopeFill size={24} color="white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-grow flex-col justify-center px-8 text-white md:px-24">
          <div className="flex h-full flex-col">
            <div className="flex flex-wrap md:space-x-4">
              <h1 className="text-5xl font-bold lg:text-7xl">
                Hi! I&apos;m{" "}
                <span className="mix-blend-difference">Gustavo</span>
              </h1>
            </div>
            <div className="pb-5 pt-3">
              <div className="flex flex-wrap">
                <p className=" text-xl text-slate-300">
                  A{" "}
                  <span className="bg-gradient-to-tr from-green-500 to-yellow-300 bg-clip-text text-transparent">
                    brazilian{" "}
                  </span>
                  software developer who loves to code,{" "}
                  <br className="hidden md:inline" />
                  surf and learn new things.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/about">
                <div className="rounded-full bg-white px-4 py-1.5 transition duration-200 ease-in-out hover:bg-opacity-80">
                  <div className="flex items-center gap-2">
                    <p>🙋🏼‍♂️</p>
                    <p className="mix-blend-difference">About me</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog">
                <div className="group rounded-full bg-white bg-opacity-20 px-4 py-1.5 drop-shadow-lg backdrop-blur-lg duration-200 hover:bg-opacity-40">
                  <div className="flex items-center gap-2">
                    <p>My blog</p>
                    <div className="flex items-center transition-transform duration-500 group-hover:translate-x-1">
                      <BsArrowRightShort size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
