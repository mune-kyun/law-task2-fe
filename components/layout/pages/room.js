import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { subscribe } from "@/utils/socket";
import { v4 } from "uuid";

const API = "http://35.209.178.149:3010/api/msg/emit";

const RoomPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);
  const [uid, setUid] = useState(v4());
  const [text, setText] = useState("init");

  useEffect(() => {
    subscribe((result) => {
      console.log(result.uid);
      setData((val) => {
        if (val.length == 0) return [result];
        if (
          val[val.length - 1].msg == result.msg &&
          val[val.length - 1].uid == result.uid
        )
          return val;
        return [...val, result];
      });
    });
  }, []);

  const handleSend = async () => {
    await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: uid, msg: text }),
    }).then();
  };

  return (
    <div className="p-5 flex flex-col justify-between gap-5">
      <p>chat</p>
      {data?.map((datum, idx) => {
        return (
          <p
            key={idx}
            className={`${datum.uid == uid ? "text-left" : "text-right"}`}
          >
            {datum.msg}
          </p>
        );
      })}
      <input
        onChange={(e) => setText(e.target.value)}
        className="border-solid border-2 border-sky-500"
      />
      <button onClick={handleSend}>send</button>
    </div>
  );
};

export default RoomPage;
