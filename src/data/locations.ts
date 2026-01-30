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
  imageCaption?: string;
  events: string[];
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Bến cảng Nhà Rồng",
    country: "Việt Nam",
    year: 1911,
    coordinates: { lat: 10.7679, lng: 106.7052 }, // Bảo tàng Hồ Chí Minh - Chi nhánh TP.HCM
    description:
      "Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành (Văn Ba) bước lên con tàu Amiral Latouche-Tréville. Chấp nhận làm phụ bếp - công việc nặng nhọc nhất để đổi lấy cơ hội ra đi, Người mang theo hoài bão: 'Tôi muốn đi ra nước ngoài xem nước Pháp và các nước khác làm thế nào rồi trở về giúp đồng bào'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Amiral_Latouche-Tr%C3%A9ville.jpg",
    imageCaption: "Tàu Amiral Latouche-Tréville thuộc hãng Chargeurs Réunis",
    events: [
      "5/6/1911: Rời Tổ quốc từ Bến Nhà Rồng",
      "Làm phụ bếp, khuân than, cọ rửa boong tàu",
      "Quyết định lịch sử sau khi suy ngẫm về sự thất bại của các bậc tiền bối",
    ],
  },
  {
    id: 2,
    name: "Cảng Marseille",
    country: "Pháp",
    year: 1911,
    coordinates: { lat: 43.2965, lng: 5.3698 },
    description:
      "Tháng 7/1911, đặt chân lên đất Pháp, Người chứng kiến một nghịch lý đảo lộn nhận thức: Ở chính quốc cũng có những người nghèo khổ, rách rưới không khác gì dân thuộc địa. Câu nói nổi tiếng 'Ở đâu cũng có người nghèo và người giàu, người áp bức và người bị áp bức' hình thành từ đây.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Marseille_Vieux_Port_1900.jpg",
    imageCaption: "Cảng Marseille đầu thế kỷ 20",
    events: [
      "Quan sát đời sống người lao động Pháp",
      "Nhận thức lại khái niệm 'người Pháp' ở chính quốc và thuộc địa",
    ],
  },
  {
    id: 3,
    name: "Le Havre",
    country: "Pháp",
    year: 1911,
    coordinates: { lat: 49.4944, lng: 0.1079 },
    description:
      "Tại cảng Le Havre, Người vừa làm việc (dọn tàu, làm vườn) vừa nỗ lực tiếp cận nền giáo dục phương Tây chính thống. Người đã viết thư xin vào học Trường Thuộc địa (École Coloniale) nhưng bị từ chối, buộc phải chuyển hướng sang con đường tự học trong phong trào công nhân.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Le_Havre_-_Bassin_du_Roi_-_LL.jpg",
    imageCaption: "Cảng Le Havre - Nơi Người từng làm việc",
    events: [
      "Làm công nhân dọn tàu và làm vườn tại Sainte-Adresse",
      "9/1911: Viết thư gửi Tổng thống Pháp xin đi học",
      "Bắt đầu hành trình tự học không ngừng nghỉ",
    ],
  },
  {
    id: 4,
    name: "New York & Brooklyn",
    country: "Hoa Kỳ",
    year: 1912,
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description:
      "Năm 1912, Người đến New York, sống tại khu Brooklyn và thường ghé thăm khu Harlem. Chứng kiến sự phân biệt chủng tộc tàn bạo và sự trỗi dậy của công nghiệp Mỹ, Người hình thành sự đồng cảm sâu sắc với người da đen - cơ sở cho các bài viết sắc bén sau này về vấn đề chủng tộc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mulberry_Street_NYC_c1900_LOC_3g04637u.jpg",
    imageCaption: "Đường phố New York đầu thế kỷ 20",
    events: [
      "Làm thuê tại Brooklyn, quan sát đời sống công nhân Mỹ",
      "Tìm hiểu về phong trào của người da đen tại Harlem",
      "Nhận diện bộ mặt thật của 'Tượng Nữ thần Tự do'",
    ],
  },
  {
    id: 5,
    name: "Boston (Omni Parker House)",
    country: "Hoa Kỳ",
    year: 1912,
    endYear: 1913,
    coordinates: { lat: 42.3584, lng: -71.0601 }, // 60 School Street
    description:
      "Tại khách sạn danh tiếng Omni Parker House, Bác làm thợ làm bánh (baker). Thời gian rảnh, Người đến Thư viện Công cộng Boston nghiên cứu Tuyên ngôn Độc lập 1776. Tư tưởng về 'quyền sống, quyền mưu cầu hạnh phúc' đã thẩm thấu vào tư duy chính trị của Người tại chính cái nôi của Cách mạng Mỹ.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Parker_House%2C_Boston_%281866%29.jpg",
    imageCaption: "Khách sạn Parker House - Nơi còn lưu giữ chiếc bàn làm bánh của Bác",
    events: [
      "Làm thợ bánh tại bộ phận Bakeshop (làm bánh Boston Cream Pie)",
      "Nghiên cứu lịch sử và Hiến pháp Mỹ tại thư viện",
      "Tiếp thu giá trị tiến bộ của tư tưởng dân chủ tư sản",
    ],
  },
  {
    id: 6,
    name: "London (Carlton Hotel)",
    country: "Anh",
    year: 1913,
    coordinates: { lat: 51.5085, lng: -0.1309 }, // Vị trí New Zealand House (nền cũ Carlton Hotel)
    description:
      "Tại khách sạn Carlton sang trọng, Người làm phụ bếp dưới quyền 'Vua đầu bếp' Escoffier. Câu chuyện Người giữ lại thức ăn thừa sạch để chia cho người nghèo đã khiến Escoffier cảm động. Đây là giai đoạn Người rèn luyện tiếng Anh và lần đầu tiên đọc tin tức về phong trào cộng sản.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Carlton_hotel_1908_05209.jpg",
    imageCaption: "Khách sạn Carlton (Hiện có biển xanh Blue Plaque tưởng niệm)",
    events: [
      "Làm phụ bếp bánh (pastry) cho Escoffier",
      "Gia nhập Công đoàn lao động hải ngoại",
      "Học tiếng Anh qua báo chí để đọc tài liệu chính trị",
    ],
  },
  {
    id: 7,
    name: "London (Drayton Court)",
    country: "Anh",
    year: 1914,
    coordinates: { lat: 51.5136, lng: -0.3186 }, // Drayton Court Hotel, West Ealing
    description:
      "Rời trung tâm London, Người đến làm việc tại khách sạn Drayton Court ở khu West Ealing. Trải qua những mùa đông khắc nghiệt với nghề cào tuyết và đốt lò, Người thấu hiểu tận cùng nỗi khổ của giai cấp công nhân tại đất nước tư bản phát triển nhất lúc bấy giờ.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Drayton_Court_Hotel_-_geograph.org.uk_-_1164627.jpg",
    imageCaption: "Khách sạn Drayton Court (West Ealing)",
    events: [
      "Làm việc lao động chân tay nặng nhọc",
      "Rèn luyện ý chí trong môi trường khắc nghiệt",
      "Kết nối với phong trào công nhân Anh",
    ],
  },
  {
    id: 8,
    name: "Paris (Yêu sách Versailles)",
    country: "Pháp",
    year: 1919,
    coordinates: { lat: 48.8049, lng: 2.1204 }, // Cung điện Versailles
    description:
      "Ngày 18/6/1919, Nguyễn Ái Quốc gửi 'Bản Yêu sách của nhân dân An Nam' tới Hội nghị Versailles. Dù không được chấp nhận, đây là 'quả bom chính trị' đầu tiên đưa vấn đề dân tộc Việt Nam ra quốc tế, khẳng định quyền bình đẳng pháp lý và tự do dân chủ.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Ho_Chi_Minh_1921.jpg",
    imageCaption: "Nguyễn Ái Quốc tại Pháp (1921)",
    events: [
      "Gửi Yêu sách 8 điểm đòi quyền tự quyết",
      "Sử dụng tên Nguyễn Ái Quốc công khai",
      "Lan tỏa ảnh hưởng trong cộng đồng người Việt tại Pháp",
    ],
  },
  {
    id: 9,
    name: "Tours (Bước ngoặt Lênin)",
    country: "Pháp",
    year: 1920,
    coordinates: { lat: 47.3941, lng: 0.6848 }, // Salle du Manège
    description:
      "Tháng 12/1920, tại Đại hội Tours, Nguyễn Ái Quốc bỏ phiếu gia nhập Quốc tế III, trở thành một trong những người sáng lập ĐCS Pháp. Trước đó, khi đọc Luận cương của Lênin, Người đã thốt lên: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta...'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Nguyen_Ai_Quoc_at_Tours_Congress.jpg",
    imageCaption: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours",
    events: [
      "Dự Đại hội 18 Đảng Xã hội Pháp",
      "Bỏ phiếu tán thành Quốc tế Cộng sản",
      "Chuyển biến dứt khoát từ chủ nghĩa yêu nước sang chủ nghĩa cộng sản",
    ],
  },
  {
    id: 10,
    name: "Paris (Ngõ Compoint)",
    country: "Pháp",
    year: 1921,
    endYear: 1923,
    coordinates: { lat: 48.8953, lng: 2.3276 }, // 9 Impasse Compoint
    description:
      "Tại căn phòng nhỏ số 9 ngõ Compoint, Người cùng các đồng chí thành lập Hội Liên hiệp Thuộc địa và ra báo 'Le Paria' (Người cùng khổ). Tờ báo trở thành vũ khí lý luận sắc bén, liên kết các dân tộc bị áp bức (Bắc Phi, Tây Phi, Đông Dương) vào một mặt trận chung.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Le_Paria_No_1.jpg/800px-Le_Paria_No_1.jpg",
    imageCaption: "Báo Le Paria do Người sáng lập",
    events: [
      "Sống và làm việc tại số 9 ngõ Compoint",
      "Viết bài, vẽ tranh châm biếm, phát hành báo Le Paria",
      "Viết tác phẩm 'Bản án chế độ thực dân Pháp'",
    ],
  },
  {
    id: 11,
    name: "Moscow (Đại học Phương Đông)",
    country: "Liên Xô",
    year: 1923,
    endYear: 1924,
    coordinates: { lat: 55.7607, lng: 37.6095 }, // Khách sạn Lux (Tverskaya St) & KUTV
    description:
      "Đến cái nôi của cách mạng thế giới, Người ở tại Khách sạn Lux và học tại Đại học Phương Đông (KUTV). Tại Đại hội V Quốc tế Cộng sản, Người ví chủ nghĩa đế quốc như con đỉa hai vòi và khẳng định vai trò chủ động của cách mạng thuộc địa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Lenin_School_Moscow.jpg",
    imageCaption: "Trường Quốc tế Lênin (Ảnh tư liệu minh họa)",
    events: [
      "Học tập lý luận Mác - Lênin hệ thống tại KUTV",
      "Tham luận tại Đại hội V Quốc tế Cộng sản",
      "Gặp gỡ các lãnh tụ cộng sản quốc tế",
    ],
  },
  {
    id: 12,
    name: "Quảng Châu (Đường Văn Minh)",
    country: "Trung Quốc",
    year: 1924,
    endYear: 1927,
    coordinates: { lat: 23.1275, lng: 113.2714 }, // 13 Wenming Road
    description:
      "Tại số 13 đường Văn Minh, Nguyễn Ái Quốc (Lý Thụy) mở lớp huấn luyện chính trị đặc biệt, đào tạo những 'hạt giống đỏ' đầu tiên (Trần Phú, Lê Hồng Phong...). Các bài giảng tại đây tập hợp thành tác phẩm 'Đường Kách mệnh' - cuốn sách giáo khoa lý luận đầu tiên của cách mạng VN.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Canton_bund.jpg",
    imageCaption: "Một góc Quảng Châu xưa",
    events: [
      "Thành lập Hội Việt Nam Cách mạng Thanh niên",
      "Giảng dạy tại các lớp huấn luyện chính trị",
      "Liên kết với Trường quân sự Hoàng Phố để đào tạo quân sự",
    ],
  },
  {
    id: 13,
    name: "Udon Thani (Bản Đông)",
    country: "Thái Lan",
    year: 1928,
    coordinates: { lat: 17.4264, lng: 102.7663 }, // Khu vực Bản Noong Ôn
    description:
      "Với bí danh Thầu Chín, Người thực hiện chủ trương 'vô sản hóa' tại bản Noong Ôn. Người cùng dân đào giếng, vỡ đất, dạy chữ Quốc ngữ. Tại đây, tư tưởng đại đoàn kết được xây dựng vững chắc trong cộng đồng Việt kiều.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ho_Chi_Minh_House_Nakhon_Phanom.jpg/1280px-Ho_Chi_Minh_House_Nakhon_Phanom.jpg",
    imageCaption: "Di tích nhà Bác Hồ tại Thái Lan",
    events: [
      "Lấy bí danh Thầu Chín",
      "Cùng dân làm ruộng, đào giếng",
      "Xây dựng cơ sở cách mạng bí mật",
    ],
  },
  {
    id: 14,
    name: "Nakhon Phanom (Bản Nachok)",
    country: "Thái Lan",
    year: 1929,
    coordinates: { lat: 17.4000, lng: 104.7833 }, // Bản Mạy
    description:
      "Tại Bản Nachok bên bờ sông Mekong, đối diện với Lào, Thầu Chín xây dựng trạm liên lạc chiến lược để kết nối với trong nước. Ngôi nhà gỗ đơn sơ tại đây là minh chứng cho những năm tháng hoạt động gian khổ nhưng thắm đượm tình quân dân.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mekong_River_Nakhon_Phanom.jpg",
    imageCaption: "Sông Mekong đoạn qua Nakhon Phanom",
    events: [
      "Mở rộng mạng lưới cơ sở đảng sang Lào",
      "Dịch sách, viết tài liệu tuyên truyền",
      "Chuẩn bị điều kiện để tiến tới thành lập Đảng",
    ],
  },
  {
    id: 15,
    name: "Hương Cảng (Thành lập Đảng)",
    country: "Hương Cảng",
    year: 1930,
    coordinates: { lat: 22.3193, lng: 114.1694 }, // Cửu Long (Kowloon)
    description:
      "Mùa xuân 1930, tại Cửu Long, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất lịch sử, thành lập Đảng Cộng sản Việt Nam. Sự kiện này chấm dứt thời kỳ khủng hoảng đường lối, mở ra kỷ nguyên mới cho dân tộc với Cương lĩnh chính trị đầu tiên đúng đắn.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Queens_Road_Central_1930s.jpg",
    imageCaption: "Hương Cảng những năm 1930",
    events: [
      "3/2/1930: Thành lập Đảng Cộng sản Việt Nam",
      "Thông qua Chính cương vắn tắt, Sách lược vắn tắt",
      "Soạn thảo Lời kêu gọi nhân dịp thành lập Đảng",
    ],
  },
  {
    id: 16,
    name: "Nhà tù Victoria",
    country: "Hương Cảng",
    year: 1931,
    endYear: 1933,
    coordinates: { lat: 22.2819, lng: 114.1539 }, // 16 Old Bailey Street
    description:
      "Bị thực dân Anh bắt giam (Vụ án Tống Văn Sơ). Tại nhà tù Victoria, Người đã kiên cường đấu tranh. Nhờ sự giúp đỡ của luật sư Loseby và gia đình, Người thắng kiện, thoát khỏi nhà tù và thực hiện cuộc 'đào thoát' ngoạn mục để trở lại Liên Xô.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Victoria_Prison_Compound.jpg",
    imageCaption: "Di tích Nhà tù Victoria ngày nay",
    events: [
      "Bị giam giữ với số tù 611",
      "Cuộc chiến pháp lý của luật sư Loseby",
      "Cải trang thành thương nhân để trốn thoát khỏi sự truy lùng",
    ],
  },
  {
    id: 17,
    name: "Côn Minh (Tiền trạm)",
    country: "Trung Quốc",
    year: 1940,
    coordinates: { lat: 25.0453, lng: 102.7090 }, // 89-91 Hoa Sơn Nam
    description:
      "Tại số 89-91 đường Hoa Sơn Nam (Côn Minh), Nguyễn Ái Quốc (Hồ Quang) gặp gỡ các đồng chí Phạm Văn Đồng, Võ Nguyên Giáp. Đây là 'trạm tiền tiêu' để bàn bạc kế hoạch xây dựng căn cứ địa, chuẩn bị trực tiếp đưa phong trào về nước.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Kunming_old_photo.jpg",
    imageCaption: "Côn Minh (Vân Nam) thời chiến",
    events: [
      "Gặp gỡ, chỉ đạo các đồng chí cốt cán",
      "Sử dụng bí danh Hồ Quang, thiếu tá Bát lộ quân",
      "Quyết định chọn Cao Bằng làm căn cứ địa",
    ],
  },
  {
    id: 18,
    name: "Tịnh Tây (Biên giới)",
    country: "Trung Quốc",
    year: 1940,
    endYear: 1941,
    coordinates: { lat: 23.1333, lng: 106.4167 },
    description:
      "Tại các hang động và làng bản ở Tịnh Tây (sát biên giới Cao Bằng), Người mở lớp huấn luyện chính trị ngắn ngày cho cán bộ địa phương. Công tác chuẩn bị nhân sự và hậu cần cho việc vượt biên được thực hiện gấp rút.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jingxi_Guangxi.jpg/800px-Jingxi_Guangxi.jpg",
    imageCaption: "Vùng biên giới Tịnh Tây",
    events: [
      "Huấn luyện cán bộ về công tác bí mật",
      "Nhận định: 'Việc về nước là cần thiết và cấp bách'",
      "Khảo sát lộ trình bí mật vượt biên",
    ],
  },
  {
    id: 19,
    name: "Pác Bó (Cột mốc 108)",
    country: "Việt Nam",
    year: 1941,
    coordinates: { lat: 22.9250, lng: 106.0594 }, // Mốc 108 (nay là 675)
    description:
      "Ngày 28/1/1941, Bác về nước qua cột mốc 108. Khoảnh khắc Người cúi hôn hòn đất Tổ quốc là biểu tượng thiêng liêng. Tại hang Cốc Bó, Người đặt tên suối Lê-nin, núi Các Mác, triệu tập Hội nghị TW 8 thành lập Mặt trận Việt Minh, thổi bùng ngọn lửa giải phóng.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Pac_Bo_Cave.jpg",
    imageCaption: "Suối Lê-nin, hang Pác Bó",
    events: [
      "28/1/1941: Vượt biên giới về nước sau 30 năm",
      "5/1941: Chủ trì Hội nghị Trung ương 8",
      "Thành lập Mặt trận Việt Minh",
      "Soạn thảo 'Lịch sử nước ta'",
    ],
  },
];