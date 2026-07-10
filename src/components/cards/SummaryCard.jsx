function SummaryCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-blue-500 transition duration-300">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`text-4xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default SummaryCard;