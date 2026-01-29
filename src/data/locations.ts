// Dữ liệu các địa điểm Bác Hồ đã đi qua trong hành trình tìm đường cứu nước
export interface Location {
  id: number;
  name: string;
  country: string;
  year: number;
  endYear?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  image: string;
  events: string[];
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Bến cảng Nhà Rồng",
    country: "Việt Nam",
    year: 1911,
    coordinates: { lat: 10.7679, lng: 106.7052 },
    description:
      "Nơi khởi đầu của huyền thoại. Ngày 5/6/1911, chàng thanh niên Nguyễn Tất Thành (Văn Ba) bước lên con tàu Đô đốc Latouche-Tréville. Trong túi không có tiền, chỉ có đôi bàn tay trắng và một khát vọng cháy bỏng: 'Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dragon_Wharf.jpg/1280px-Dragon_Wharf.jpg",
    events: [
      "Xin làm phụ bếp trên tàu buôn Amiral Latouche Tréville",
      "Rời Tổ quốc, bắt đầu hành trình 30 năm bôn ba",
      "Câu nói nổi tiếng: 'Tôi muốn đi ra ngoài, xem nước Pháp và các nước khác...'",
    ],
  },
  {
    id: 2,
    name: "Marseille",
    country: "Pháp",
    year: 1911,
    coordinates: { lat: 43.2965, lng: 5.3698 },
    description:
      "Điểm chạm ngõ phương Tây đầu tiên. Tại cảng Marseille, Bác nhận thấy một nghịch lý: Ở Pháp cũng có người nghèo khổ như ở Việt Nam. Tại đây, Bác đã viết lá đơn đầu tiên gửi Tổng thống Pháp xin vào học Trường Thuộc địa (nhưng bị từ chối).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Marseille_-_Pair_of_Quayside_Cranes.jpg/1280px-Marseille_-_Pair_of_Quayside_Cranes.jpg",
    events: [
      "Chứng kiến cảnh người nghèo khổ ngay tại chính quốc",
      "Viết thư gửi Tổng thống Pháp (15/9/1911)",
      "Gặp gỡ những thủy thủ từ các thuộc địa khác",
    ],
  },
  {
    id: 3,
    name: "Le Havre & Vòng quanh Châu Phi",
    country: "Pháp & Quốc tế",
    year: 1911,
    endYear: 1912,
    coordinates: { lat: 49.4944, lng: 0.1079 }, // Đại diện Le Havre
    description:
      "Trong những năm tháng lênh đênh trên biển làm thuê cho hãng vận tải Hợp Nhất (Chargeurs Réunis), Bác đã đi vòng quanh châu Phi (Dakar, Senegal...) và nhận ra rằng: Dù màu da có khác nhau, trên đời này chỉ có hai giống người: giống người bóc lột và giống người bị bóc lột.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Le_Havre_port_01.jpg/1280px-Le_Havre_port_01.jpg",
    events: [
      "Làm vườn tại Saint-Adresse (gần Le Havre)",
      "Đi qua các thuộc địa châu Phi (Senegal, Congo...)",
      "Hình thành tư tưởng đoàn kết các dân tộc thuộc địa",
    ],
  },
  {
    id: 4,
    name: "New York & Boston",
    country: "Hoa Kỳ",
    year: 1912,
    endYear: 1913,
    coordinates: { lat: 40.7128, lng: -74.006 },
    description:
      "Đến Mỹ - xứ sở của Tượng Nữ thần Tự do. Bác vừa làm thuê (làm bánh, cào tuyết), vừa dành thời gian đến thư viện nghiên cứu Tuyên ngôn Độc lập 1776. Bác khâm phục tinh thần cách mạng Mỹ nhưng cũng nhìn thấy mặt trái của chủ nghĩa tư bản qua khu ổ chuột Harlem.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabyte.jpg/1280px-New_york_times_square-terabyte.jpg",
    events: [
      "Làm thợ bánh tại khách sạn Omni Parker House (Boston)",
      "Nghiên cứu Tuyên ngôn Độc lập 1776",
      "Tham gia các cuộc mít tinh của người da đen ở Brooklyn",
    ],
  },
  {
    id: 5,
    name: "London",
    country: "Anh",
    year: 1913,
    endYear: 1917,
    coordinates: { lat: 51.5074, lng: -0.1278 },
    description:
      "Những năm tháng cực khổ trong sương mù London. Bác làm nghề cào tuyết trường học, đốt lò, rồi phụ bếp tại khách sạn Carlton nổi tiếng (nơi Bác giữ lại thức ăn thừa của khách để chia cho người nghèo). Đây là thời gian Bác học tiếng Anh và tiếp cận tư tưởng Marx lần đầu qua báo chí.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg",
    events: [
      "Làm phụ bếp cho vua đầu bếp Escoffier tại khách sạn Carlton",
      "Gia nhập Công đoàn Lao động hải ngoại",
      "Rèn luyện tiếng Anh qua việc đọc báo hàng ngày",
    ],
  },
  {
    id: 6,
    name: "Paris",
    country: "Pháp",
    year: 1917,
    endYear: 1923,
    coordinates: { lat: 48.8566, lng: 2.3522 },
    description:
      "Thời kỳ hoạt động sôi nổi nhất với tên gọi Nguyễn Ái Quốc. Tại căn nhà số 9 ngõ Compoint, Bác đã viết nên 'Bản án chế độ thực dân Pháp'. Sự kiện chấn động nhất là khi Bác đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa' của Lenin - tìm thấy con đường giải phóng dân tộc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    events: [
      "Gửi Yêu sách 8 điểm tới Hội nghị Versailles (1919)",
      "Đọc Luận cương của Lenin (7/1920) - 'Đây là cái cần thiết cho chúng ta!'",
      "Bỏ phiếu tán thành Quốc tế III, sáng lập ĐCS Pháp (Tours, 12/1920)",
      "Chủ bút báo Le Paria (Người cùng khổ)",
      "Làm nghề thợ ảnh, vẽ đồ cổ giả để mưu sinh",
    ],
  },
  {
    id: 7,
    name: "Petrograd & Moscow",
    country: "Liên Xô",
    year: 1923,
    endYear: 1924,
    coordinates: { lat: 55.7558, lng: 37.6173 },
    description:
      "Đặt chân đến quê hương Cách mạng Tháng Mười giữa mùa đông khắc nghiệt. Dù lỡ hẹn không được gặp Lenin (Người vừa mất), Nguyễn Ái Quốc đã biến đau thương thành hành động, tích cực hoạt động trong Quốc tế Cộng sản để gắn phong trào cách mạng Việt Nam với thế giới.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Red_Square%2C_Moscow.jpg/1280px-Red_Square%2C_Moscow.jpg",
    events: [
      "Viết bài báo thương tiếc khi Lenin qua đời (1/1924)",
      "Học tập tại Đại học Phương Đông (KUTV)",
      "Dự Đại hội V Quốc tế Cộng sản - Tham luận về vấn đề nông dân",
      "Hoàn thiện lý luận về con đường cách mạng vô sản",
    ],
  },
  {
    id: 8,
    name: "Quảng Châu",
    country: "Trung Quốc",
    year: 1924,
    endYear: 1927,
    coordinates: { lat: 23.1291, lng: 113.2644 },
    description:
      "Dưới danh nghĩa cố vấn Lý Thụy, Bác về Quảng Châu tập hợp những thanh niên yêu nước tâm huyết. Tại ngôi nhà số 13 đường Văn Minh, 'Đường Kách mệnh' ra đời, trở thành cuốn cẩm nang gối đầu giường cho thế hệ cách mạng đầu tiên của Việt Nam.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Guangzhou_dusk_11-5-2008.jpg/1280px-Guangzhou_dusk_11-5-2008.jpg",
    events: [
      "Thành lập Hội Việt Nam Cách mạng Thanh niên (6/1925)",
      "Mở các lớp huấn luyện chính trị đặc biệt",
      "Ra báo Thanh Niên (21/6/1925)",
      "Soạn thảo tác phẩm 'Đường Kách mệnh'",
    ],
  },
  {
    id: 9,
    name: "Udon Thani (Xiêm)",
    country: "Thái Lan",
    year: 1928,
    endYear: 1929,
    coordinates: { lat: 17.4157, lng: 102.7872 },
    description:
      "Một giai đoạn ẩn mật nhưng quan trọng. Với bí danh 'Thầu Chín', Bác hòa mình vào đời sống bà con Việt kiều tại bản Nong Bua. Người cùng dân cày ruộng, đắp đường, xây chùa, qua đó bí mật tuyên truyền lòng yêu nước và tổ chức các cơ sở cách mạng.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Udon_Thani_Museum.jpg/1280px-Udon_Thani_Museum.jpg", // Ảnh minh họa bảo tàng hoặc cảnh Thái Lan
    events: [
      "Sử dụng bí danh Thầu Chín",
      "Xây dựng cơ sở tại bản Nong Bua và Nachok",
      "Dịch sách 'Nhân loại tiến hóa sử' để tuyên truyền",
      "Vận động bà con Việt kiều đoàn kết hướng về Tổ quốc",
    ],
  },
  {
    id: 10,
    name: "Hồng Kông",
    country: "Trung Quốc (Thuộc Anh)",
    year: 1930,
    coordinates: { lat: 22.3193, lng: 114.1694 },
    description:
      "Thời khắc lịch sử trọng đại! Vào mùa xuân năm 1930, tại sân vận động Cửu Long, Nguyễn Ái Quốc với uy tín tuyệt đối đã thống nhất 3 tổ chức cộng sản thành một Đảng duy nhất: Đảng Cộng sản Việt Nam. Chấm dứt thời kỳ khủng hoảng về đường lối cứu nước.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hong_Kong_Night_Skyline.jpg/1280px-Hong_Kong_Night_Skyline.jpg",
    events: [
      "Chủ trì Hội nghị thành lập Đảng (3/2 - 7/2/1930)",
      "Thông qua Cương lĩnh chính trị đầu tiên",
      "Đặt nền móng vững chắc cho thắng lợi của Cách mạng Việt Nam",
      "Bị thực dân Anh bắt giam (Vụ án Tống Văn Sơ)",
    ],
  },
  {
    id: 11,
    name: "Pác Bó",
    country: "Việt Nam",
    year: 1941,
    coordinates: { lat: 22.8372, lng: 106.0689 },
    description:
      "Sáng ngày 28/1/1941 (mùng 2 Tết), Bác bước qua cột mốc 108 biên giới Việt-Trung, cúi xuống hôn lên hòn đất Tổ quốc sau 30 năm xa cách. 'Bác đã về đây, Tổ quốc ơi!'. Tại hang Cốc Bó, Người ăn cháo bẹ, măng trúc, dịch sử Đảng và trực tiếp lãnh đạo cao trào kháng Nhật cứu nước.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Pac_Bo_Cave.jpg",
    events: [
      "Về nước sau 30 năm bôn ba (28/1/1941)",
      "Chọn hang Pác Bó làm đại bản doanh",
      "Triệu tập Hội nghị Trung ương 8 (5/1941)",
      "Thành lập Mặt trận Việt Minh",
      "Viết bài thơ 'Hòn đá to', 'Lịch sử nước ta'",
    ],
  },
];

// Thông tin timeline để hiển thị
export const timelineInfo = {
  startYear: 1911,
  endYear: 1941,
  totalYears: 30,
  title: "Hành trình 30 năm tìm hình của Nước",
  subtitle: "Từ Văn Ba đến Hồ Chí Minh - Một chặng đường lịch sử"
};