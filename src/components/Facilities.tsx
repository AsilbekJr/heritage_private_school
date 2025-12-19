import { CheckCircle } from "lucide-react";

export default function Facilities() {
  const facilities = [
    "Zamonaviy laboratoriyalar",
    "Sport zallari va maydonlar",
    "Kutubxona va media markaz",
    "Kompyuter sinflari",
    "San'at va musiqa studiyalari",
    "Xavfsiz transport xizmati",
  ];
  return (
    <section id="facilities" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zamonaviy Infratuzilma
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              O'quvchilarimiz uchun eng yaxshi sharoitlar yaratdik. Har bir sinf
              va xona zamonaviy jihozlar bilan ta'minlangan.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-emerald-50 p-4 rounded-xl border border-emerald-100"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span className="text-gray-800 font-medium">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-3xl h-96 shadow-2xl flex items-center justify-center">
            {/* <div className="text-white text-center p-8">
              <Award className="w-32 h-32 mx-auto mb-4 opacity-20" />
              <p className="text-2xl font-semibold opacity-80">
                Maktab Infratuzilmasi
              </p>
            </div> */}
            <img
              src="./infratuzilma.png "
              alt="facilities_image"
              className="rounded-3xl  object-cover h-full w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
