import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { subscribe } from "@/utils/socket";
import { v4 } from "uuid";
import MsgContainer from "@/components/msgContainer";

const API = "http://35.209.178.149:3010/api/msg/emit";

const RoomPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);
  // const [data, setData] = useState([
  //   {
  //     uid: "test1",
  //     msg: "test em all",
  //   },
  //   {
  //     uid: "test2",
  //     msg: "test em all",
  //   },
  // ]);
  const [uid, setUid] = useState(v4());
  // const [uid, setUid] = useState("test1");
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
    <div className="py-5 px-10 flex flex-col justify-between gap-5">
      {data.length == 0 ? (
        <p className="italic text-lg text-slate-500 font-bold">
          Start chatting...
        </p>
      ) : (
        <p className="italic text-lg text-slate-500 font-bold text-center">
          Any duplicates wont be printed :)
        </p>
      )}
      <div className="flex flex-col gap-4">
        {data?.map((datum, idx) => {
          const mode = datum.uid == uid ? "me" : "anon";
          return <MsgContainer key={idx} mode={mode} text={datum.msg} />;
        })}
      </div>
      <div className="mt-5 flex gap-4 justify-center items-center">
        <input
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <button
          onClick={handleSend}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default RoomPage;
