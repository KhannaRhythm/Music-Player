import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Kabhi Kabhi Aditi",
      cover: "https://i1.sndcdn.com/artworks-GArwu8k4nmxqcByq-kGjdLg-t500x500.jpg",
      artist: "Rashid Ali",
      audio: "https://pagaliworld.com/files/download/type/320/id/1666",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Khaabon Ka Parindey",
      cover: "https://pagalnew.com/coverimages/Khaabon-Ke-Parinday-Zindagi-Na-Milegi-Dobara-500-500.jpg",
      artist: "Mohit Chauhan",
      audio: "https://pagalnew.com/128-download/7191",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Teri Deewani",
      cover: "https://i1.sndcdn.com/artworks-000654370549-ewktik-t500x500.jpg",
      artist: "Kailash Kher",
      audio: "https://pagalsongs.com.in/files/download?id=5662",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Afreen Afreen",
      cover: "https://c-fa.cdn.smule.com/rs-s81/arr/87/bc/8860efbb-be7d-4a69-829d-c82c398d9afd.jpg",
      artist: "Momina Mustehsan, Rahat Fateh Ali Khan",
      audio: "https://www.pagalworld.com.so/files/download/type/320/id/13106",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Manja",
      cover:  "https://pagalnew.com/coverimages/Manja-Kai-Po-Che-500-500.jpg",
      artist: "Mohan Kanan, Amit Trivedi",
      audio: "https://pagalnew.com/128-download/5958",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sham",
      cover: "https://pagalnew.com/coverimages/Sham-Aisha-500-500.jpg",
      artist: "Neuman Pinto, Amit Trivedi, Nikhil D'Souza",
      audio: "https://pagalnew.com/128-download/7924",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
