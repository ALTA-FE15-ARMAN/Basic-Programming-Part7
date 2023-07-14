const dataKaryawan = [
    { id: 101, nama: "rani" },
    { id: 203, nama: "andi" },
    { id: 305, nama: "budi" },
    { id: 410, nama: "cindy" },
    { id: 520, nama: "dodi" },
    { id: 635, nama: "eka" },
    { id: 742, nama: "fani" },
  ];
  
  const targetId = 305;
  
  function cariKaryawanById(data: { id: number, nama: string }[], target: number) {
    let left = 0;
    let right = data.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (data[middle].id === target) {
        return data[middle];
      } else if (data[middle].id < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return undefined;
  }
  
  const hasilPencarian = cariKaryawanById(dataKaryawan, targetId);
  
  if (hasilPencarian) {
    console.log(hasilPencarian);
  } else {
    console.log("Karyawan dengan ID tersebut tidak ditemukan.");
  }
  