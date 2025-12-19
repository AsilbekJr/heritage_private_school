import { Globe, Heart, Star, Users } from "lucide-react";

export default function Value() {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "G'amxo'rlik",
      description: "Har bir bolaga individual yondashuv",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mukammallik",
      description: "Yuqori sifatli ta'lim standartlari",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Fikrlash",
      description: "Xalqaro standartlar asosida ta'lim",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hamkorlik",
      description: "Ota-onalar bilan yaqin aloqa",
    },
  ];
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition border border-emerald-100"
            >
              <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
