

function WhyUsItem({icon:Icon,title,desc}) {
  return (
    <div className="w-[231px] h-[154px] bg-white border border-Neutral-50 rounded-xl shadow-xs shadow-black/20 p-3 flex flex-col gap-y-3 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_0px_20px]">
      <span className="bg-secondary text-white inline-flex p-4 w-15 h-15 text-3xl items-center justify-center rounded-xl">
        <Icon />
      </span>

      <h4 className="text-sm text-Neutral-800">{title}</h4>

      <p className="text-xs text-Neutral-800">{desc}</p>
    </div>
  );
}

export default WhyUsItem;
