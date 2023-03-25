import { useRouter } from "next/router";
import { useState } from "react";

const API_TEST = "http://35.209.178.149:3010/test";
const API = "http://35.209.178.149:3010/api/msg/init";

const HomePage = () => {
  const router = useRouter();

  const handleTest = async () => {
    await fetch(API_TEST, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => alert(res.data));
  };

  const handleCreate = async () => {
    await fetch(API, {
      method: "POST",
      body: {},
    }).then();

    router.push(`/room/x`);
  };

  return (
    <div className="p-5 flex flex-col justify-center gap-5 items-center mt-10">
      {/* <button
        onClick={handleTest}
        className="w-fit focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Test connection
      </button> */}
      <button
        onClick={handleCreate}
        className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Join Room
      </button>
    </div>
  );
};

export default HomePage;
