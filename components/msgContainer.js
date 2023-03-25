const MsgContainer = ({ mode, text }) => {
  let containerStyle;
  let textColor;
  let avatarText;
  let bgAvatar;
  let avatarTextStyle;
  let bgMsg;

  if (mode == "me") {
    containerStyle = "mr-auto";
    textColor = "text-black";
    avatarText = "ME";
    bgAvatar = "bg-lime-200";
    avatarTextStyle = "text-base text-lime-500 font-bold";
    bgMsg = "bg-lime-300";
  } else {
    containerStyle = "ml-auto flex-row-reverse";
    textColor = "text-white";
    avatarText = "anon";
    bgAvatar = "bg-sky-300";
    avatarTextStyle = "text-xs text-sky-700";
    bgMsg = "bg-sky-500";
  }

  return (
    <div className={`flex gap-3 w-fit ${containerStyle}`}>
      <div
        className={`${bgAvatar} mt-1 w-10 h-10 rounded-full flex justify-center items-center`}
      >
        <p className={`${avatarTextStyle}`}>{avatarText}</p>
      </div>
      <div className={`${bgMsg} p-4 rounded-md`}>
        <p className={`${textColor} font-bold text-sm`}>{text}</p>
      </div>
    </div>
  );
};

export default MsgContainer;
