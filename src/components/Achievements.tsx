export default function Achievements() {
  const achievements = [
    { number: "500+", label: "O'quvchilar" },
    { number: "15+", label: "Yillik tajriba" },
    { number: "50+", label: "Malakali o'qituvchilar" },
    { number: "98%", label: "Universitetga kirish" },
  ];
  return (
    <section className="py-20 px-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bizning Yutuqlarimiz
          </h2>
          <p className="text-xl text-emerald-100">
            Raqamlar orqali Heritage School
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-emerald-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
