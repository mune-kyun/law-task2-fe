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
    <div className="p-5 flex flex-col justify-between gap-5">
      <button onClick={handleTest}>Test connection</button>
      <button onClick={handleCreate}>Join Room</button>
    </div>
  );
};

export default HomePage;
