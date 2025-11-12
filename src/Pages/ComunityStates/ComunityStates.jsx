const CommunityStats = ({ users, resolved, pending }) => {
  const stats = [
    { title: "Registered Users", value: users, icon: "👥" },
    { title: "issues Resolved", value: resolved, icon: "✅" },
    { title: "Registered Users", value: pending, icon: "⏳" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Community{" "}
          <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
            Stats
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4 ">{stat.icon}</div>
              <p className="text-3xl font-bold text-green-600">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CommunityStats;
