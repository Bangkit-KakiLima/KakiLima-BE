"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Products", [
      {
        name: "Nasi Goreng Spesial",
        merchant_id: 1,
        description: "Nasi goreng lezat dengan tambahan telur dan ayam.",
        price: 25000.0,
        image: "NasiGoreng.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Goreng",
        merchant_id: 2,
        description: "Mie goreng lezat dengan tambahan telur dan ayam.",
        price: 20000.0,
        image: "MieGoreng.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Lendir",
        merchant_id: 3,
        description: "Mie Lendir lezat dengan tambahan telur dan ayam.",
        price: 15000.0,
        image: "MieLendir.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baso Malang",
        merchant_id: 4,
        description: "Bakso Malang lezat dengan kuah gurih dan enak.",
        price: 15000.0,
        image: "BasoMalang.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batagor",
        merchant_id: 5,
        description: "Batagor Ikan lezat dengan kuah kering dari kacang.",
        price: 10000.0,
        image: "Batagor.png", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Cendol",
        merchant_id: 6,
        description: "Es cendol seger",
        price: 10000.0,
        image: "EsCendol.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Teler",
        merchant_id: 7,
        description: "Es teler seger",
        price: 15000.0,
        image: "EsTeler.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soto Bandoeng",
        merchant_id: 8,
        description: "Soto Bandoeng Mantap",
        price: 20000.0,
        image: "SotoBandung.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bakso Tahu",
        merchant_id: 9,
        description: "Bakso Tahu Bandung dengan Bumbu Kacang",
        price: 10000.0,
        image: "BaksoTahu.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Kocok Bandung",
        merchant_id: 10,
        description:
          "Mie kunir dengan kaldu sapi gurih, dilengkapi kikil, taoge, dan daun bawang.",
        price: 25000.0,
        image: "MiKocok.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandrek",
        merchant_id: 11,
        description:
          "Minuman hangat yang terbuat dari jahe, gula merah, dan rempah-rempah lainnya",
        price: 7000.0,
        image: "Bandrek.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Kopi Susu",
        merchant_id: 12,
        description:
          "Kopi susu yang disajikan dingin, dengan rasa kopi yang kuat dan susu kental manis",
        price: 18000.0,
        image: "EsKopiSusu.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Serabi Bandung",
        merchant_id: 13,
        description:
          "Kue tradisional berbahan tepung beras yang dimasak di atas wajan kecil",
        price: 5000.0,
        image: "Serabi.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pisang Molen",
        merchant_id: 14,
        description:
          "Pisang yang dibungkus adonan tepung, digoreng garing, dan disajikan hangat",
        price: 15000.0,
        image: "PisangMolen.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kue Lapis Legit",
        merchant_id: 15,
        description: "Kue berlapis yang lembut dan manis",
        price: 25000.0,
        image: "KueLapis.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kue Apem",
        merchant_id: 16,
        description:
          "Kue lembut yang manis, terbuat dari tepung beras dengan isian kelapa parut",
        price: 25000.0,
        image: "KueApem.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rujak",
        merchant_id: 17,
        description: "Aneka Buah-Buahan Segar dengan Bumbu Rujak Mantap",
        price: 15000.0,
        image: "Rujak.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Salad Buah",
        merchant_id: 18,
        description: "Aneka Buah-Buahan Segar dengan Saos Salad Lezat",
        price: 25000.0,
        image: "SaladBuah.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Asinan Buah",
        merchant_id: 19,
        description: "Asinan Buah Fresh",
        price: 20000.0,
        image: "AsinanBuah.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Roti Bakar",
        merchant_id: 20,
        description: "Roti Bakar dengan Berbagai Toping",
        price: 15000.0,
        image: "RotiBakarr.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crepes",
        merchant_id: 21,
        description: "Crepes Renyah dengan Berbagai Toping",
        price: 10000.0,
        image: "Crepes.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seblak Seuhah",
        merchant_id: 22,
        description: "Seblak Pedas Asli Bandung",
        price: 10000.0,
        image: "Seblak.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Telor Gulung",
        merchant_id: 23,
        description: "Telor Digulung dan Diberi Saus",
        price: 5000.0,
        image: "TelorGulung.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cireng Racing",
        merchant_id: 24,
        description: "Cireng Isi",
        price: 2500.0,
        image: "CirengIsi.png", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Doger",
        merchant_id: 25,
        description: "Es Doger Komplit Segar",
        price: 10000.0,
        image: "EsDoger.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Kelapa",
        merchant_id: 26,
        description: "Kelapa muda yang diserut dan disajikan dengan es batu",
        price: 7000.0,
        image: "EsKelapa.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fried Chicken",
        merchant_id: 27,
        description: "Ayam Goreng Tepung Sedap",
        price: 12000.0,
        image: "FriedChicken.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cuanki Serayu",
        merchant_id: 28,
        description:
          "Makanan khas Bandung berupa bakso dan tahu yang disajikan dengan kuah kaldu panas, daun seledri dan bawang goreng",
        price: 15000.0,
        image: "Cuanki.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bebek Bakar",
        merchant_id: 29,
        description:
          "Makanan yang dibumbui dengan rempah khas, kemudian dibakar hingga kulitnya garing dan dagingnya juicy.",
        price: 20000.0,
        image: "BebekBakar.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sop Iga Sapi",
        merchant_id: 30,
        description:
          "Sup kaldu bening yang kaya rasa, berisi potongan iga sapi empuk, kentang, wortel, dan sayuran segar.",
        price: 35000.0,
        image: "SopIga.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sate Madura",
        merchant_id: 31,
        description:
          "Potongan daging ayam yang ditusuk dan dipanggang dengan bumbu kacang atau kecap manis.",
        price: 15000.0,
        image: "Sate.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Uduk",
        merchant_id: 32,
        description: "Nasi yang dimasak dengan santan, disajikan dengan lauk.",
        price: 10000.0,
        image: "NasiUduk.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Tebu",
        merchant_id: 33,
        description:
          "Minuman manis dari air tebu yang diperas langsung dari batang tebu.",
        price: 8000.0,
        image: "EsTebu.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jus",
        merchant_id: 34,
        description: "Jus segar yang dibuat dari berbagai buah",
        price: 8000.0,
        image: "Jus.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Risol Mayo",
        merchant_id: 35,
        description:
          "Makanan goreng berisi daging dan mayo yang dibalut tepung roti",
        price: 5000.0,
        image: "Risol.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gehu Pedas",
        merchant_id: 36,
        description:
          "Gorengan tahu yang diisi dengan sayuran dan cabai pedas yang dibalut dengan Tepung",
        price: 5000.0,
        image: "GehuPedas.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pisang Crispy",
        merchant_id: 37,
        description:
          "Pisang Goreng yang dibalut dengan toping roti lalu dioles dengan berbagai Toping",
        price: 12000.0,
        image: "PisangCrisp.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kue Odading",
        merchant_id: 38,
        description:
          "Cemilan khas Bandung yang terbuat dari adonan tepung yang digoreng hingga renyah di luar dan lembut di dalam",
        price: 5000.0,
        image: "Odading.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dadar Gulung",
        merchant_id: 39,
        description: "Kue gulung berisi kelapa parut manis dan daun pandan",
        price: 3000.0,
        image: "DadarGulung.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kue Sus",
        merchant_id: 40,
        description:
          "Cemilan yang mempunyai ciri khas kulit renyah di luar dan isian krim manis di dalam",
        price: 5000.0,
        image: "KueSus.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Donat Mini",
        merchant_id: 41,
        description:
          "Donat mini dengan topping gula halus atau coklat, kenyal dan manis.",
        price: 6000.0,
        image: "Donat.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Durian",
        merchant_id: 42,
        description:
          "Minuman segar dengan campuran durian, es serut, dan sedikit susu manis",
        price: 15000.0,
        image: "EsDurian.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Ayam",
        merchant_id: 43,
        description: "Mie dengan topping ayam suwir, sayur, dan kuah kaldu",
        price: 17000.0,
        image: "MieAyam.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Semangka Potong",
        merchant_id: 44,
        description:
          "Semangka segar yang dipotong dan disajikan dengan es serut",
        price: 10000.0,
        image: "SemangkaPotong.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Kulkul",
        merchant_id: 45,
        description: "Buah Buahan yang dibekukan lalu dilumuri coklat",
        price: 5000.0,
        image: "EsKulkul.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kacang Rebus",
        merchant_id: 46,
        description: "Kacang tanah rebus yang gurih, cocok untuk camilan sore",
        price: 5000.0,
        image: "KacangRebuss.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Teh",
        merchant_id: 47,
        description: "Minuman Es Teh Manis Segar",
        price: 5000.0,
        image: "EsTeh.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bubur Ayam",
        merchant_id: 48,
        description: "Bubur Ayam Khas Bandung",
        price: 10000.0,
        image: "BuburAyamm.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tahu Gejrot",
        merchant_id: 49,
        description:
          "Tahu goreng dengan bumbu gejrot pedas manis, cocok untuk cemilan",
        price: 10000.0,
        image: "TahuGejrot.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Makaroni Basah",
        merchant_id: 50,
        description:
          "Makaroni yang dimasak dengan bumbu kaya rasa dan kuah yang gurih, cocok sebagai cemilan atau makanan berat",
        price: 7000.0,
        image: "Makaroni.jpg", // URL gambar
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //dataset dari ML
      {
        name: "Roti Canai",
        merchant_id: 51,
        description: "Roti canai lembut dengan saus kari kental.",
        price: 15000.0,
        image: "RotiCanai.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Campur",
        merchant_id: 52,
        description:
          "Minuman segar dengan campuran buah, agar-agar, dan sirup.",
        price: 12000.0,
        image: "EsCampur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pempek Palembang",
        merchant_id: 53,
        description: "Ikan khas Palembang disajikan dengan kuah cuko pedas.",
        price: 20000.0,
        image: "Pempek.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Penyet",
        merchant_id: 54,
        description: "Ayam goreng dengan sambal pedas yang diulek langsung.",
        price: 18000.0,
        image: "AyamPenyet.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sate Padang",
        merchant_id: 55,
        description: "Sate dengan kuah bumbu khas Padang.",
        price: 25000.0,
        image: "SatePadang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tahu Bulat",
        merchant_id: 56,
        description: "Tahu goreng renyah, enak disantap hangat.",
        price: 5000.0,
        image: "TahuBulat.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Krim Mochi",
        merchant_id: 57,
        description: "Mochi kenyal berisi es krim aneka rasa.",
        price: 20000.0,
        image: "Mochi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Liwet",
        merchant_id: 58,
        description: "Nasi gurih khas Solo dengan lauk lengkap.",
        price: 25000.0,
        image: "NasiLiwett.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cendol Dawet",
        merchant_id: 59,
        description: "Minuman tradisional dengan santan dan gula merah.",
        price: 10000.0,
        image: "CendolDawet.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Geprek",
        merchant_id: 60,
        description: "Ayam goreng dengan sambal bawang super pedas.",
        price: 20000.0,
        image: "AyamGeprek.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sop Buntut",
        merchant_id: 61,
        description: "Sup dengan buntut sapi yang empuk dan kaya rasa.",
        price: 35000.0,
        image: "SopBuntut.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Kuning",
        merchant_id: 62,
        description:
          "Nasi gurih dengan lauk seperti ayam, telur, dan perkedel.",
        price: 15000.0,
        image: "NasiKuning.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ketoprak",
        merchant_id: 63,
        description: "Makanan khas Jakarta dengan bumbu kacang dan lontong.",
        price: 12000.0,
        image: "Ketoprak.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sosis Bakar",
        merchant_id: 64,
        description:
          "Daging sapi dan Daging ayam yang dipadatkan lalu di bakar",
        price: 10000.0,
        image: "SosisBakar.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Cincau",
        merchant_id: 65,
        description: "Minuman segar dari cincau dan santan manis.",
        price: 8000.0,
        image: "EsCincau.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pisang Goreng",
        merchant_id: 66,
        description: "Pisang goreng renyah dengan topping keju atau coklat.",
        price: 15000.0,
        image: "PisangGoreng.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lontong Sayur",
        merchant_id: 67,
        description: "Lontong dengan sayur labu dan kuah santan.",
        price: 12000.0,
        image: "LontongSayur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tahu Sumedang",
        merchant_id: 68,
        description:
          "Tahu goreng khas Sumedang, renyah di luar lembut di dalam.",
        price: 5000.0,
        image: "TahuSumedang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rawon",
        merchant_id: 69,
        description: "Sup khas Jawa Timur dengan kuah hitam dari kluwek.",
        price: 25000.0,
        image: "Rawonn.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Martabak Manis",
        merchant_id: 70,
        description: "Martabak dengan topping coklat, kacang, atau keju.",
        price: 25000.0,
        image: "MartabakManis.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Martabak Telur",
        merchant_id: 71,
        description: "Martabak dengan isian telur dan daging cincang.",
        price: 20000.0,
        image: "MartabakTelur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Jeruk Nipis",
        merchant_id: 72,
        description: "Minuman segar dari jeruk nipis peras dan es batu.",
        price: 10000.0,
        image: "EsJerukNipis.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dimsum",
        merchant_id: 73,
        description: "Makanan ringan khas Cina dengan isian ayam atau udang.",
        price: 20000.0,
        image: "Dimsum.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Susu Jahe",
        merchant_id: 74,
        description: "Minuman susu dengan jahe hangat.",
        price: 15000.0,
        image: "SusuJahee.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bakwan Jagung",
        merchant_id: 75,
        description: "Gorengan jagung yang renyah dan gurih.",
        price: 5000.0,
        image: "BakwanJagung.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Serabi Bandung",
        merchant_id: 76,
        description: "Pancake tradisional dengan topping kelapa atau cokelat.",
        price: 12000.0,
        image: "SerabiBandung.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bakso Malang",
        merchant_id: 77,
        description:
          "Bakso khas Malang lengkap dengan tahu, siomay, dan pangsit.",
        price: 25000.0,
        image: "BaksoMalang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Doger",
        merchant_id: 78,
        description:
          "Minuman tradisional dingin dengan campuran kelapa dan tape.",
        price: 15000.0,
        image: "EsDoger.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rendang Padang",
        merchant_id: 79,
        description: "Daging sapi empuk dengan bumbu rendang khas Minang.",
        price: 40000.0,
        image: "RendangPadang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soto Betawi",
        merchant_id: 80,
        description: "Soto khas Betawi dengan kuah santan gurih.",
        price: 30000.0,
        image: "SotoBetawi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Goreng Kampung",
        merchant_id: 81,
        description: "Nasi goreng khas dengan bumbu tradisional dan sambal.",
        price: 25000.0,
        image: "NasiGorengKampung.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Capcay Kuah",
        merchant_id: 82,
        description: "Sayuran tumis dengan kuah kental dan tambahan seafood.",
        price: 20000.0,
        image: "CapcayKuah.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Es Teler",
        merchant_id: 83,
        description:
          "Minuman segar dengan campuran kelapa, alpukat, dan nangka.",
        price: 15000.0,
        image: "EsTeler.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Aceh",
        merchant_id: 84,
        description: "Mie khas Aceh dengan rasa rempah yang kuat.",
        price: 20000.0,
        image: "MieAceh.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ikan Bakar Jimbaran",
        merchant_id: 85,
        description: "Ikan bakar dengan bumbu khas Jimbaran, Bali.",
        price: 50000.0,
        image: "IkanBakarJimbaran.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Karedok",
        merchant_id: 86,
        description: "Sayuran segar dengan saus kacang khas Sunda.",
        price: 15000.0,
        image: "Karedok.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sayur Lodeh",
        merchant_id: 87,
        description: "Sayur dengan kuah santan dan aneka sayuran.",
        price: 20000.0,
        image: "SayurLodeh.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pentol",
        merchant_id: 88,
        description:
          "Bola daging giling yang dicampur tepung tapioka, biasanya disajikan dengan sambal atau saus kacang.",
        price: 5000.0,
        image: "PentolMercon.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Coto Makassar",
        merchant_id: 89,
        description: "Sup daging khas Makassar dengan bumbu rempah khas.",
        price: 30000.0,
        image: "CotoMakassar.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Penyet",
        merchant_id: 90,
        description: "Ayam goreng yang dilumatkan dengan sambal pedas.",
        price: 20000.0,
        image: "AyamPenyet.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sate Padang",
        merchant_id: 91,
        description: "Sate khas Padang dengan kuah kental yang pedas.",
        price: 20000.0,
        image: "SatePadang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tahu Gejrot",
        merchant_id: 92,
        description: "Tahu goreng dengan kuah asam manis pedas.",
        price: 10000.0,
        image: "TahuGejrot.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Uduk",
        merchant_id: 93,
        description: "Nasi gurih dengan lauk pauk tradisional.",
        price: 15000.0,
        image: "NasiUduk.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mie Kocok Bandung",
        merchant_id: 94,
        description: "Mie khas Bandung dengan kuah kaldu sapi.",
        price: 20000.0,
        image: "MieKocok.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pepes Ikan",
        merchant_id: 95,
        description: "Ikan dengan bumbu rempah yang dibungkus daun pisang.",
        price: 25000.0,
        image: "PepesIkan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandrek",
        merchant_id: 96,
        description: "Minuman tradisional hangat dengan jahe dan rempah.",
        price: 10000.0,
        image: "Bandrek.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wedang Ronde",
        merchant_id: 97,
        description: "Minuman jahe dengan ronde dan kacang.",
        price: 15000.0,
        image: "WedangRonde.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bakmi Jawa",
        merchant_id: 98,
        description: "Bakmi khas Jawa dengan rasa gurih dan rempah.",
        price: 20000.0,
        image: "BakmiJawa.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nasi Pecel",
        merchant_id: 99,
        description: "Nasi dengan sayuran rebus dan bumbu kacang.",
        price: 15000.0,
        image: "NasiPecel.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ayam Taliwang",
        merchant_id: 100,
        description: "Ayam khas Lombok dengan bumbu pedas menggoda.",
        price: 30000.0,
        image: "AyamTaliwang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
