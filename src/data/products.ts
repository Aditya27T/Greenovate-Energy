import { Product } from '@/types';

export const products: Product[] = [
  // =================================================================================
  // PICOHYDRO (12 Produk)
  // =================================================================================
  {
    id: 'plta-pico-200w',
    name: 'PLTA Pico 200W',
    description: 'Pembangkit Listrik Tenaga Air (PLTA) skala pico dengan output 200W. Menggunakan turbin crossflow mini, cocok untuk debit air 10-20 liter/detik.',
    price: 1940000,
    category: 'Picohydro',
    images: { main: '/alat/baru/PLTA Pico 200W Portable.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Output: 200 W', 'Tegangan: 12-24V DC', 'Arus: Hingga 10 A', 'Jenis Turbin: Crossflow mini', 'Debit Optimal: ± 10-20 liter/detik', 'Head Minimum: ± 1.5 - 2 meter' ],
      components: [ 'Turbin crossflow mini', 'Generator DC 200W (terproteksi)', 'Rangka penopang logam anti-karat', 'Intake nozzle dengan pipa fleksibel', 'Panel kontrol mini dengan indikator LED' ]
    },
    featured: true
  },
  {
    id: 'plta-sistem-kompak-100w-camping',
    name: 'PLTA Sistem Kompak 100W Camping',
    description: 'Sistem PLTA portabel 100W yang ideal untuk kegiatan camping. Sangat ringan dan mudah dibawa, lengkap dengan colokan stopkontak AC.',
    price: 825000,
    category: 'Picohydro',
    images: { main: '/alat/baru/Sistem Kompak 100W Camping.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: Max 100 W', 'Tegangan Output: 12-24 VDC, output AC 220V (via inverter)', 'Arus Output: Maksimum 8 A', 'Jenis Turbin: Pelton atau Crossflow besar', 'Debit Air Minimum: ± 5 liter per detik', 'Head Minimum: ± 1-2 meter' ],
      components: [ 'Turbin Pelton atau Crossflow', 'Generator DC kompak brushless', 'Frame rangka kuat dan tahan air', 'Panel kontrol dengan colokan AC' ]
    },
    featured: true
  },
  {
    id: 'plta-vertikal-system-kit',
    name: 'PLTA Vertikal System Kit',
    description: 'Kit PLTA 200W dengan desain vertikal yang hemat tempat. Menggunakan turbin Pelton dan transmisi V-belt untuk koneksi generator.',
    price: 1980000,
    category: 'Picohydro',
    images: { main: '/alat/Mini Hydro Vertikal System Kit - 2.220.000 copy.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Keluaran: 200 Watt', 'Tegangan Output: 12V/24V DC atau 220V AC', 'Tipe Generator: Brushed DC atau AC alternator kecil', 'Transmisi: V-belt standar industri' ],
      components: [ 'Turbin Pelton tipe vertikal', 'Generator DC/AC 200W', 'Pulley dan v-belt transmisi', 'Rangka besi vertikal', 'Dudukan generator tahan getar' ]
    }
  },
  {
    id: 'plta-horizontal-system-kit',
    name: 'PLTA Horizontal System Kit',
    description: 'Kit PLTA 200W dengan konfigurasi horizontal, menggunakan sistem transmisi direct shaft yang tertutup untuk proteksi maksimal.',
    price: 1870000,
    category: 'Picohydro',
    images: { main: '/alat/minihydroh.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Keluaran: 200 Watt', 'Tegangan Output: 12V/24V DC atau 220V AC', 'Tipe Generator: Brushed DC / AC mini', 'Sistem Transmisi: Shaft langsung (direct shaft) tertutup' ],
      components: [ 'Turbin Pelton/crossflow horizontal tertutup', 'Generator DC/AC 200W', 'Rangka baja horizontal', 'Tutup pelindung sistem' ]
    }
  },
  {
    id: 'flow-sensor-air-5v',
    name: 'Flow Sensor Air 5V',
    description: 'Sensor untuk mengukur aliran air dengan rentang 1-30 liter/menit dan sinyal output pulsa digital.',
    price: 46500, // Harga dari katalog asli
    category: 'Picohydro',
    images: { main: '/alat/baru/turbin generator 10w.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tegangan Operasi: DC 5V', 'Diameter Pipa Masuk: 1/2 inch (12 mm)', 'Rentang Aliran: 1-30 liter/menit', 'Sinyal Output: Pulsa digital (Hz)', 'Tipe Sensor: Sensor hall effect'],
      components: ['Casing Sensor (Kuning dan Transparan)', 'Rotor dengan Magnet', 'Hall Effect Sensor', 'Kabel 3-pin (Merah-Hitam-Kuning)']
    }
  },
  {
    id: 'kincir-air-apung-paddle-wheel',
    name: 'Kincir Air Apung Tipe Paddle Wheel',
    description: 'Kincir air apung tipe paddle wheel yang dapat dikonversi menjadi PLTA dengan potensi output 50-500 Watt.',
    price: 7870000, // Harga dari katalog asli
    category: 'Picohydro',
    images: { main: '/alat/baru/wmremove-transformed.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Kincir: Paddle Wheel Horizontal', 'Material Rangka: Besi galvanis atau stainless steel', 'Panjang Total Unit: ±2-3 meter', 'Putaran Normal: 20-100 RPM', 'Potensi Output: ±50-500 Watt'],
      components: ['Rangka Utama', 'Kincir Paddle Wheel', 'Rumah Gearbox / Motor', 'Pelindung Atap', 'Pelampung (Floaters)', 'Tali Penambat']
    }
  },
  {
    id: 'turbin-air-turgo-horizontal-500w',
    name: 'Turbin Air Tipe Turgo Horizontal 500W',
    description: 'Turbin Turgo horizontal dengan output 500W. Ideal untuk head menengah (8-20 meter) dan debit air rendah.',
    price: 14376000,
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 201234.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Tipe Turbin: Turgo (Horizontal)', 'Daya Keluaran Maksimal: 500 Watt', 'Kebutuhan Debit Air: ±0.8-2 liter/detik', 'Kebutuhan Head: 8-20 meter' ],
      components: [ 'Rumah Turbin (Casing)', 'Runner/Impeller Turgo', 'Nozzle & Katup (Valve)', 'Poros Output' ]
    }
  },
  {
    id: 'turbin-air-mini-pelton-3-nozzle',
    name: 'Turbin Air Mini Tipe Pelton 3 Nozzle',
    description: 'Turbin Pelton miniatur vertikal dengan 3 nozzle untuk torsi maksimal. Menghasilkan daya 200-300W.',
    price: 5415000,
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 205339.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Jenis Turbin: Pelton Wheel (Vertikal, Miniatur)', 'Jumlah Nozzle: 3', 'Daya Maksimum: ±200-300 Watt', 'Kebutuhan Head: ±10-50 meter', 'Kebutuhan Debit: ±1-2 liter/detik' ],
      components: [ 'Runner Pelton (di dalam)', 'Nozzle 3 Arah (Input Jet)', 'Rumah Turbin (Casing)', 'Penutup Atas + Dinamo' ]
    }
  },
  {
    id: 'plta-chaotic-turbolent',
    name: 'PLTA Chaotic Turbolent',
    description: 'Sistem PLTA open channel dengan kapasitas 500-1000W, cocok untuk komunitas desa, edukasi, dan mikro-grid.',
    price: 9860000, // Harga dari katalog asli
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot_2024-09-08_220741_-_Copy-removebg-preview.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Jenis Turbin: Crossflow', 'Jenis Aliran: Saluran terbuka (open channel)', 'Kapasitas: 500-1000W', 'Head Efektif: 8-20 meter', 'Debit Air: 20-50 liter/detik'],
      components: ['Intake (Pintu Masuk Air)', 'Saluran Pembawa (Headrace Channel)', 'Tangki Penampung (Forebay)', 'Pipa Pesat (Penstock)', 'Turbin + Generator', 'Fondasi & Struktur Penopang']
    }
  },
  {
    id: 'plta-mikro-jetflow-300w',
    name: 'PLTA Mikro Jetflow 300W',
    description: 'PLTA tipe vertikal dengan turbin Mikro Jetflow (semi Pelton). Menghasilkan daya 200-500W dengan output langsung AC 220V.',
    price: 8998000,
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 055021.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Tipe Turbin: Mikro Jetflow (semi Pelton) vertikal', 'Daya Output: ±200-500 Watt', 'Tegangan Output: AC 220V 1 phase', 'Head Minimum: 10-30 meter' ],
      components: [ 'Inlet Nozzle + Katup PVC', 'Impeller/Sudu', 'Generator Sinkron AC Vertikal', 'Base Mount (Tapak Baut Baja)' ]
    }
  },
  {
    id: 'plta-mikro-pipa-dc',
    name: 'PLTA Mikro Pipa DC 12V/24V',
    description: 'Mikro turbin inline horizontal yang dipasang pada pipa, menghasilkan daya DC untuk aplikasi IoT atau charger darurat.',
    price: 74035, // Harga dari katalog asli
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 055517.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Turbin: Mikro turbin inline horizontal', 'Tegangan Output: DC 12V atau 24V', 'Arus Output: ±0.5-1A (maksimal ±10-15W)', 'Debit Minimum: ±4-10 liter/menit'],
      components: ['Inlet & Outlet Ulir (1/2 inch)', 'Rotor Impeller Sentrifugal (internal)', 'Mini Generator DC', 'Casing Plastik Tertutup']
    }
  },
  {
    id: 'plta-mikro-irigasi-crossflow',
    name: 'PLTA Mikro Irigasi - Sistem Crossflow',
    description: 'Sistem PLTA Crossflow horizontal yang ideal untuk saluran irigasi dan sungai kecil dengan debit besar dan head rendah-sedang.',
    price: 31046000, // Harga dari katalog asli
    category: 'Picohydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 055840.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Turbin: Crossflow (Banki Turbine)', 'Kapasitas Output: ±500W hingga 3 kW', 'Debit Air Minimum: ±30-100 liter/detik', 'Head Minimum: ±2-10 meter'],
      components: ['Pipa Tekan (Penstock)', 'Katup Pengatur Aliran', 'Rumah Turbin (Casing)', 'Runner Crossflow', 'Generator AC atau Alternator']
    }
  },
  // =================================================================================
  // MICROHYDRO (14 Produk)
  // =================================================================================
  {
    id: 'plta-turbin-air-horizontal-10kw',
    name: 'PLTA Turbin Air Horizontal 10 kW',
    description: 'Sistem PLTA kompak 10 kW dengan turbin Turgo atau Pelton, menghasilkan output 3 phase untuk skala desa atau off-grid.',
    price: 12250000,
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 183925.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: 10 kW', 'Tegangan Output: 220V atau 380V (3 Phase)', 'Tipe Turbin: Turgo atau Pelton Horizontal', 'Tipe Generator: Generator Sinkron / Alternator 3 Phase' ],
      components: [ 'Generator Sinkron / Alternator', 'Turbin Air Jet Samping (Nozzle Input)', 'Rumah Turbin (Volute Casing)', 'Panel Keluaran Listrik' ]
    },
    featured: true
  },
  {
    id: 'plta-turbin-crossflow-3kw',
    name: 'PLTA Turbin Air Crossflow 3 kW',
    description: 'PLTA 3 kW menggunakan turbin Pelton dengan 4 nozzle untuk tekanan merata. Ideal untuk head 10-50 meter.',
    price: 8920500,
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 184519.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: 3.000 Watt (3 kW)', 'Tegangan Output: 220V/380V AC', 'Tipe Turbin: Pelton Wheel Multi Nozzle (4 Nozzle)', 'Head Minimum: 10-50 meter' ],
      components: [ 'Turbin Pelton Multi Nozzle', 'Rumah Turbin Aluminium / Baja', 'Nozzle Air PVC/Steel', 'Generator AC alternator' ]
    }
  },
  {
    id: 'turbin-francis-horizontal-generator-coupling',
    name: 'Turbin Francis Horizontal dengan Generator Coupling',
    description: 'Turbin Francis horizontal efisiensi tinggi (80-92%), kapasitas 10-100 kW. Cocok untuk head menengah (10-100 meter).',
    price: 90757000,
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 184847.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Tipe Turbin: Francis Turbine (horizontal shaft)', 'Daya Output: 10 kW - 100 kW', 'Head Operasional: 10-100 meter', 'Efisiensi Turbin: 80%-92%' ],
      components: [ 'Francis Turbine Housing', 'Impeller/Runner Turbin', 'Poros Utama (Main Shaft)', 'Generator Sinkron 3 Phase', 'Coupling Mekanis' ]
    }
  },
  {
    id: 'plta-vertikal-turbin-propeller-3kw',
    name: 'PLTA Vertikal Turbin Propeller 3kW',
    description: 'PLTA 3 kW dengan turbin Propeller vertikal. Sangat efisien untuk head rendah (2-10 meter) dan debit air besar.',
    price: 2106500,
    category: 'Microhydro',
    images: { main: '/alat/baru/image-removebg-preview (1).png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: 3.000 Watt (3 kW)', 'Tipe Turbin: Propeller Turbine (Vertical Shaft)', 'Head Operasional: 2-10 meter', 'Debit Air: ± 50-100 liter/detik' ],
      components: [ 'Turbin Propeller (Impeller)', 'Poros Vertikal', 'Generator Sinkron/Asinkron', 'Terminal Output' ]
    }
  },
  {
    id: 'turbin-air-tipe-pat-horizontal',
    name: 'Turbin Air Tipe Pump-as-Turbine (PAT) Horizontal',
    description: 'Sistem turbin efisien dan murah menggunakan pompa air konversi (PAT) untuk head rendah hingga sedang (5-30 meter).',
    price: 13280000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 200335.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Turbin: Pump-as-Turbine (PAT), horizontal', 'Rentang Daya Output: 0.5-5 kW', 'Head Operasional: 5-30 meter', 'Debit Air: 10-100 L/s', 'Efisiensi Tipikal: 60-80%'],
      components: ['Rumah Turbin (Volute Casing)', 'Inlet Flange (Pipa Masuk)', 'Impeller', 'Poros Transmisi', 'Alternator/Generator']
    }
  },
  {
    id: 'turbin-kaplan-vertikal-3kw',
    name: 'Turbin Air Tipe Kaplan Vertikal 3 kW',
    description: 'Turbin Kaplan vertikal 3kW efisiensi tinggi (80-90%). Dirancang untuk head rendah (3-10 meter) dan debit sangat besar.',
    price: 91390000,
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 205628.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Jenis Turbin: Kaplan (Vertikal)', 'Daya Output: 3 kW', 'Head Rendah: ± 3-10 meter', 'Debit Air: ± 100-300 liter/detik', 'Efisiensi: ± 80-90%' ],
      components: [ 'Runner (Impeller Kaplan)', 'Draft Tube (Corong bawah)', 'Spiral Casing (Rumah Turbin)', 'Main Shaft (Poros Utama Vertikal)' ]
    }
  },
  {
    id: 'turbin-ganda-pelton-horizontal',
    name: 'Turbin Air Ganda Tipe Pelton Horizontal',
    description: 'Sistem turbin Pelton ganda untuk head tinggi (≥80 meter), menghasilkan daya besar ±10-50 kW per unit turbin.',
    price: 329645000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 233726.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Jenis Turbin: Pelton (Horizontal, Nozzle Ganda)', 'Daya Output: ±10-50 kW per unit turbin', 'Head (Ketinggian): ≥ 80 meter', 'Debit Air: ± 20-60 liter/detik per nozzle', 'Efisiensi: ± 85-90%'],
      components: ['Runner Pelton (Rotor Sudu Sendok)', 'Nozzle Jet Ganda', 'Poros Kembar (Dual Shaft)', 'Casing Pelindung (Enclosure)', 'Struktur Dudukan (Frame Support)']
    }
  },
  {
    id: 'turbin-francis-vertikal-30kw',
    name: 'Turbin Air Tipe Francis Vertikal 30 kW',
    description: 'Turbin Francis sumbu vertikal dengan kapasitas 30 kW, cocok untuk PLTA desa dan irigasi pada medium head.',
    price: 197900000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 234053.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Jenis Turbin: Francis (sumbu vertikal)', 'Daya Output: ±30 kW', 'Ketinggian Head: 10-50 meter', 'Debit Air: ± 60 - 100 liter/detik', 'Efisiensi: ± 85-92%'],
      components: ['Rumah Spiral (Volute Casing)', 'Runner Francis (Impeller)', 'Nosel Masuk (Inlet Pipe/Guide Vane)', 'Generator Vertikal Terintegrasi']
    }
  },
  {
    id: 'turbin-crossflow-horizontal-25kw',
    name: 'Turbin Air Tipe Crossflow Horizontal 25 kW',
    description: 'Turbin Crossflow (Banki) dengan daya 25 kW untuk head rendah hingga menengah, ideal untuk mikrohidro skala desa.',
    price: 21100000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-30 234705.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Jenis Turbin: Crossflow (Banki Turbine)', 'Daya Output: ± 25 kW', 'Ketinggian Head: 5-20 meter', 'Debit Air: ± 80-150 liter/detik', 'Efisiensi: ± 75-85%'],
      components: ['Rumah Turbin (Casing)', 'Inlet Nozzle + Valve', 'Runner Crossflow (Silinder Sudu Ganda)', 'Generator Asinkron/Sinkron']
    }
  },
  {
    id: 'mikrohidro-1kw-modular',
    name: 'Mikrohidro 1kW Modular',
    description: 'Sistem mikrohidro modular 1kW dengan turbin Crossflow yang dapat menghasilkan output AC maupun DC.',
    price: 7500000,
    category: 'Microhydro',
    images: { main: '/alat/baru/Mikrohidro 1kW Modular.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: 1000 Watt (1kW)', 'Tegangan: 220V AC (opsional 12V/24V DC)', 'Jenis Turbin: Crossflow', 'Head Minimum: ± 5-10 meter' ],
      components: [ 'Turbin Crossflow atau Pelton modular', 'Generator AC 1 kW', 'Inverter', 'Panel kontrol dan proteksi' ]
    }
  },
  {
    id: 'plta-horizontal-turbin-francis-50kw',
    name: 'PLTA Horizontal Turbin Francis - 50 kW',
    description: 'Turbin Francis horizontal dengan daya 30-100 kW. Efisiensi tinggi (85-92%) dan cocok untuk head 10-100 meter.',
    price: 16390000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 052144.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Turbin: Francis Horizontal Shaft', 'Kapasitas Daya Output: 30-100 kW', 'Head Efektif: 10-100 meter', 'Debit Air: 50 - 250 L/detik', 'Efisiensi Turbin: 85-92%'],
      components: ['Rumah Turbin (Volute Casing)', 'Runner Turbin Francis (Impeller)', 'Guide Vane (Sudut Sudu Kendali)', 'Generator Sinkron Horizontal', 'Sistem Coupling']
    }
  },
  {
    id: 'plta-kompak-horizontal-francis-75kw',
    name: 'PLTA Kompak Horizontal - Tipe Francis Casted 75 kW',
    description: 'Sistem PLTA kompak dengan turbin Francis horizontal kapasitas 50-150 kW, ideal untuk head 15-80 meter.',
    price: 131750000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 053044.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Tipe Turbin: Francis Horizontal Spiral Casing', 'Kapasitas Output: 50-150 kW', 'Head Operasi Efektif: 15-80 meter', 'Debit Air: 50-300 liter/detik', 'Efisiensi Sistem: 85-92%'],
      components: ['Spiral Casing (Volute Casing)', 'Inlet Flange Pipe', 'Impeller/Runner', 'Generator Sinkron Horizontal', 'Base Frame Baja']
    }
  },
  {
    id: 'plta-turbin-aksial-horizontal-20kw',
    name: 'PLTA Turbin Aksial Horizontal - Propeller 20 kW',
    description: 'Turbin Propeller Aksial (Tubular) 20 kW untuk sungai berdebit besar dengan head rendah (2-6 meter).',
    price: 90780000, // Harga dari katalog asli
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 060215.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: ['Jenis Turbin: Turbin Propeller Aksial (Horizontal - Tubular)', 'Daya Output: 20 kW', 'Tegangan Output: 380V AC (3 Phase)', 'Kepala Tekanan (Head): 2-6 meter', 'Debit Air Minimum: 150-300 liter/detik'],
      components: ['Inlet Flange', 'Casing Turbin Berbentuk Tabung', 'Impeller Aksial (Propeller Blade)', 'Poros Horizontal', 'Generator Sinkron 3 Phase']
    }
  },
  {
    id: 'plta-turbin-francis-horizontal-50kw-2',
    name: 'PLTA Turbin Francis Horizontal 50 kW (Tipe 2)',
    description: 'Sistem PLTA Francis Horizontal 50 kW tipe reaksi, ideal untuk head 15-50 meter dan debit 100-250 liter/detik.',
    price: 988500000,
    category: 'Microhydro',
    images: { main: '/alat/baru/Screenshot 2025-05-31 062420.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Jenis Turbin: Francis Horizontal (Reaksi)', 'Daya Output: 50 kW', 'Tegangan Output: 400V AC (3 Phase)', 'Kepala Tekanan (Head): 15-50 meter', 'Debit Air: 100-250 liter/detik' ],
      components: [ 'Spiral Casing (Volute)', 'Inlet Nozzle', 'Runner (Impeller)', 'Draft Tube', 'Rangka Penopang / Baseplate' ]
    }
  },
  // =================================================================================
  // EDUKIT (3 Produk)
  // =================================================================================
  {
    id: 'edukit-hidro-mini-50w',
    name: 'Edukit Hidro Mini 50W',
    description: 'Kit pembelajaran PLTA interaktif 50W, menampilkan turbin Pelton transparan untuk visualisasi cara kerja energi air.',
    price: 6000000,
    category: 'Edukit',
    images: { main: '/alat/baru/Hidrokit Mini Indoor.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: Maks. 50 Watt', 'Tegangan Output: 3-12V DC', 'Jenis Turbin: Pelton mini', 'Bahan Turbin: Plastik ABS / Akrilik transparan' ],
      components: [ 'Turbin Pelton mini (transparan)', 'Generator DC kecil', 'Tangki air mini', 'Selang fleksibel bening', 'Manual pembelajaran' ]
    },
    featured: true

  },
  {
    id: 'edukit-plta-mini',
    name: 'Edukit PLTA Mini',
    description: 'Kit edukasi untuk demonstrasi sains pembangkit listrik tenaga air, menggunakan kincir air dan dinamo.',
    price: 9000000,
    category: 'Edukit',
    images: { main: '/alat/baru/image-removebg-preview.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Daya Output: ±0,5-1 Watt', 'Tegangan Output: ± 3-6 Volt DC', 'Sistem Transmisi: Roda besar dengan vanbelt', 'Penggunaan: Edukasi, eksperimen' ],
      components: [ 'Kincir Air (Water Wheel)', 'Pulley Besar (Roda Transmisi)', 'Vanbelt (Belt Mini)', 'Mini Generator / Motor DC' ]
    }
  },
  {
    id: 'miniatur-plta-edukasi-dengan-lampu',
    name: 'Miniatur PLTA Edukasi dengan Lampu LED',
    description: 'Miniatur PLTA fungsional dengan output lampu LED USB. Menggunakan kincir air untuk edukasi konversi energi.',
    price: 9500000,
    category: 'Edukit',
    images: { main: '/alat/baru/sg-11134201-7rdvm-m0ebud27wbc5e4.png', thumbnails: [] },
    links: { tokopedia: '#', shopee: '#' },
    details: {
      specifications: [ 'Tipe Turbin: Water wheel (kincir air radial)', 'Tipe Generator: Motor DC mini', 'Daya Output: ±0,5-1 Watt', 'Output Penggunaan: Lampu LED USB 5V' ],
      components: [ 'Kincir Air (Water Wheel)', 'Gear dan Roda Gigi', 'Motor DC Mini', 'Lampu LED USB', 'Rangka Edukatif' ]
    }
  }
];

export const getSimilarProducts = (currentProductId: string): Product[] => {
  const otherProducts = products.filter(product => product.id !== currentProductId);
  const shuffled = otherProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};