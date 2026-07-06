/* ============================================================
   DATA.JS — Kho dữ liệu bài viết dùng chung cho toàn bộ website
   VOGUE.VN (tên minh hoạ) — Tạp chí thời trang
   ============================================================ */

const SITE = {
  name: "MAISON",
  tagline: "Tạp chí thời trang & làm đẹp"
};

const CATEGORY_META = {
  "tin-tuc": { label: "Tin tức", color: "#A8324A", page: "tin-tuc.html", desc: "Cập nhật những chuyển động mới nhất của làng thời trang trong nước và quốc tế." },
  "su-kien": { label: "Sự kiện", color: "#C9A44C", page: "su-kien.html", desc: "Tuần lễ thời trang, show diễn, triển lãm và những cuộc hội ngộ đáng chú ý." },
  "xu-huong": { label: "Xu hướng", color: "#5C7A72", page: "xu-huong.html", desc: "Những chất liệu, phom dáng và bảng màu đang định hình mùa mốt sắp tới." },
  "lam-dep": { label: "Làm đẹp", color: "#8A5A83", page: "lam-dep.html", desc: "Chăm sóc da, trang điểm và bí quyết làm đẹp từ chuyên gia." }
};

const ARTICLES = [
  // ---------------- TIN TỨC ----------------
  {
    id: "tt-01",
    category: "tin-tuc",
    title: "Thương hiệu Việt lần đầu góp mặt tại Tuần lễ Thời trang Paris",
    date: "2026-06-28",
    author: "Minh Anh",
    readTime: "4 phút đọc",
    excerpt: "Một thương hiệu thiết kế trong nước vừa chính thức nhận lời mời trình diễn tại lịch trình chính thức của Paris Fashion Week mùa Thu Đông sắp tới.",
    content: [
      "Sau nhiều năm âm thầm xây dựng bản sắc riêng bằng chất liệu lụa tơ tằm và kỹ thuật thêu tay truyền thống, một thương hiệu thiết kế trong nước đã chính thức nhận được lời mời trình diễn trong lịch trình chính thức của Paris Fashion Week mùa Thu Đông sắp tới.",
      "Đại diện thương hiệu chia sẻ rằng bộ sưu tập lần này lấy cảm hứng từ kiến trúc phố cổ, kết hợp giữa đường cắt tối giản kiểu phương Tây và các chi tiết thêu tay mang đậm tinh thần Á Đông. Đây được xem là bước tiến quan trọng, mở đường cho nhiều nhà thiết kế trẻ khác tự tin đưa dấu ấn Việt Nam ra sân chơi quốc tế.",
      "Giới chuyên môn nhận định, sự xuất hiện này không chỉ là một cột mốc cá nhân mà còn góp phần định vị ngành công nghiệp thời trang Việt Nam trên bản đồ sáng tạo toàn cầu, đặc biệt trong bối cảnh nhiều quỹ đầu tư quốc tế đang tìm kiếm những thị trường mới nổi có tiềm năng."
    ]
  },
  {
    id: "tt-02",
    category: "tin-tuc",
    title: "Chuỗi cung ứng thời trang bền vững: doanh nghiệp nội địa nhập cuộc",
    date: "2026-06-24",
    author: "Hải Yến",
    readTime: "5 phút đọc",
    excerpt: "Ngày càng nhiều xưởng may trong nước chuyển đổi sang quy trình sản xuất ít phát thải, đáp ứng tiêu chuẩn xanh của các nhãn hàng quốc tế.",
    content: [
      "Áp lực từ các tiêu chuẩn xanh của thị trường xuất khẩu đang khiến nhiều xưởng may vừa và nhỏ trong nước buộc phải tái cấu trúc quy trình sản xuất, từ khâu nhuộm vải cho đến xử lý nước thải.",
      "Một số đơn vị tiên phong đã đầu tư hệ thống nhuộm tiết kiệm nước, tái sử dụng vải vụn để tạo ra dòng sản phẩm phụ kiện giới hạn, đồng thời hợp tác với các tổ chức đánh giá độc lập để được cấp chứng nhận bền vững.",
      "Theo các chuyên gia trong ngành, xu hướng này không chỉ giúp doanh nghiệp giữ chân các đối tác quốc tế khó tính mà còn mở ra cơ hội xây dựng thương hiệu riêng hướng đến nhóm khách hàng trẻ ngày càng quan tâm đến yếu tố môi trường."
    ]
  },
  {
    id: "tt-03",
    category: "tin-tuc",
    title: "Thị trường bán lẻ thời trang online tăng trưởng hai chữ số",
    date: "2026-06-18",
    author: "Quốc Bảo",
    readTime: "3 phút đọc",
    excerpt: "Báo cáo mới nhất cho thấy doanh số ngành hàng thời trang trên các nền tảng thương mại điện tử tiếp tục duy trì đà tăng trưởng ổn định.",
    content: [
      "Theo số liệu tổng hợp từ các nền tảng thương mại điện tử lớn, ngành hàng thời trang tiếp tục là một trong những nhóm sản phẩm có tốc độ tăng trưởng doanh số cao nhất trong nửa đầu năm nay.",
      "Đáng chú ý, các thương hiệu nội địa quy mô nhỏ đang tận dụng tốt hình thức livestream bán hàng để rút ngắn khoảng cách với người tiêu dùng, đồng thời xây dựng cộng đồng khách hàng trung thành thông qua nội dung phối đồ hằng ngày.",
      "Xu hướng mua sắm cá nhân hoá dựa trên dữ liệu hành vi cũng được dự báo sẽ tiếp tục định hình cách các thương hiệu tiếp cận khách hàng trong thời gian tới."
    ]
  },
  {
    id: "tt-04",
    category: "tin-tuc",
    title: "Nhà thiết kế trẻ và bài toán giữ bản sắc trong thời đại AI",
    date: "2026-06-10",
    author: "Minh Anh",
    readTime: "6 phút đọc",
    excerpt: "Khi công cụ thiết kế bằng trí tuệ nhân tạo ngày càng phổ biến, nhiều nhà thiết kế trẻ trong nước đặt câu hỏi về cách giữ gìn dấu ấn cá nhân.",
    content: [
      "Sự phổ biến của các công cụ hỗ trợ phác thảo bằng trí tuệ nhân tạo đang thay đổi cách nhiều nhà thiết kế trẻ tiếp cận quy trình sáng tạo, giúp rút ngắn thời gian lên ý tưởng ban đầu.",
      "Tuy nhiên, không ít người trong ngành bày tỏ lo ngại về nguy cơ hoà tan bản sắc cá nhân khi các công cụ này thường đưa ra gợi ý dựa trên xu hướng phổ biến nhất, thay vì khai thác chất liệu văn hoá bản địa.",
      "Nhiều nhà thiết kế chọn giải pháp trung dung: sử dụng công nghệ như một bước phác thảo nhanh, nhưng vẫn giữ khâu hoàn thiện chi tiết, chất liệu và tinh thần thiết kế bằng tay nghề thủ công truyền thống."
    ]
  },

  // ---------------- SỰ KIỆN ----------------
  {
    id: "sk-01",
    category: "su-kien",
    title: "Tuần lễ Thời trang Quốc tế mùa Thu chính thức khai mạc",
    date: "2026-07-01",
    author: "Thảo Vy",
    readTime: "4 phút đọc",
    excerpt: "Sự kiện quy tụ hơn 40 nhà thiết kế trong và ngoài nước, đánh dấu mùa trình diễn sôi động nhất trong vòng ba năm trở lại đây.",
    content: [
      "Sự kiện năm nay quy tụ hơn 40 nhà thiết kế đến từ nhiều quốc gia, được đánh giá là mùa trình diễn sôi động nhất trong vòng ba năm trở lại đây, cả về quy mô lẫn số lượng khách mời quốc tế tham dự.",
      "Sân khấu chính được dàn dựng theo concept lấy cảm hứng từ ánh sáng đô thị về đêm, kết hợp hiệu ứng gương phản chiếu nhằm tôn vinh chất liệu và form dáng của từng bộ sưu tập.",
      "Ban tổ chức cho biết, ngoài các buổi trình diễn chính thức, sự kiện còn có khu vực triển lãm mở cửa tự do cho công chúng, nơi trưng bày các thiết kế nổi bật cùng câu chuyện hậu trường của từng nhà mốt."
    ]
  },
  {
    id: "sk-02",
    category: "su-kien",
    title: "Triển lãm 'Ký ức vải vóc': hành trình 100 năm chất liệu Việt",
    date: "2026-06-22",
    author: "Đăng Khoa",
    readTime: "5 phút đọc",
    excerpt: "Triển lãm tái hiện hành trình phát triển của các loại vải truyền thống Việt Nam qua từng giai đoạn lịch sử.",
    content: [
      "Không gian triển lãm được chia thành nhiều khu vực nhỏ, mỗi khu vực tái hiện một giai đoạn phát triển của chất liệu vải truyền thống, từ lụa Vạn Phúc, gấm Hà Đông cho đến thổ cẩm của các dân tộc vùng cao.",
      "Điểm nhấn của sự kiện là khu vực trải nghiệm dệt thủ công, nơi khách tham quan có thể tận tay thử sức với khung cửi mini dưới sự hướng dẫn của các nghệ nhân lâu năm.",
      "Ban tổ chức kỳ vọng triển lãm sẽ là cầu nối giúp thế hệ trẻ hiểu và trân trọng hơn giá trị của chất liệu truyền thống, đồng thời truyền cảm hứng ứng dụng vào thiết kế đương đại."
    ]
  },
  {
    id: "sk-03",
    category: "su-kien",
    title: "Đêm gala từ thiện quy tụ dàn nghệ sĩ trình diễn thiết kế giới hạn",
    date: "2026-06-15",
    author: "Thảo Vy",
    readTime: "3 phút đọc",
    excerpt: "Toàn bộ số tiền thu được từ đấu giá các thiết kế trình diễn trong đêm gala sẽ được trao tặng cho quỹ học bổng dành cho trẻ em vùng cao.",
    content: [
      "Đêm gala quy tụ nhiều gương mặt nghệ sĩ và người có ảnh hưởng trong lĩnh vực thời trang, cùng trình diễn các thiết kế giới hạn được thực hiện riêng cho sự kiện.",
      "Điểm đặc biệt của chương trình là phiên đấu giá trực tiếp ngay sau phần trình diễn, nơi khách mời có thể sở hữu các thiết kế độc bản với toàn bộ số tiền thu được đóng góp cho quỹ học bổng.",
      "Chương trình khép lại với phần biểu diễn âm nhạc, để lại dư âm về một sự kiện không chỉ tôn vinh cái đẹp mà còn lan toả giá trị nhân văn."
    ]
  },
  {
    id: "sk-04",
    category: "su-kien",
    title: "Hội chợ thiết kế trẻ: sân chơi cho những tài năng mới nổi",
    date: "2026-06-05",
    author: "Đăng Khoa",
    readTime: "4 phút đọc",
    excerpt: "Hơn 30 gian hàng của các thương hiệu độc lập quy tụ tại hội chợ, mang đến không gian mua sắm gần gũi và đầy cảm hứng sáng tạo.",
    content: [
      "Khác với những sàn diễn hào nhoáng, hội chợ lần này chọn hướng tiếp cận gần gũi hơn khi để chính các nhà thiết kế trẻ trực tiếp giới thiệu sản phẩm đến khách tham quan.",
      "Không gian được bài trí theo từng chủ đề nhỏ, từ phụ kiện tái chế cho đến trang phục ứng dụng công nghệ in 3D, tạo nên bức tranh đa dạng về những hướng đi mới của làng thời trang trẻ.",
      "Nhiều thương hiệu tham gia chia sẻ đây là cơ hội quý giá để nhận phản hồi trực tiếp từ khách hàng, điều mà các kênh bán hàng trực tuyến khó có thể mang lại."
    ]
  },

  // ---------------- XU HƯỚNG ----------------
  {
    id: "xh-01",
    category: "xu-huong",
    title: "Bảng màu đất nung trở lại ngôi vương mùa Thu Đông",
    date: "2026-06-30",
    author: "Ngọc Trâm",
    readTime: "4 phút đọc",
    excerpt: "Từ terracotta đến nâu đất, bảng màu ấm áp lấy cảm hứng thiên nhiên đang thống trị các sàn diễn quốc tế mùa này.",
    content: [
      "Các gam màu đất như terracotta, nâu cháy và cam đất đang xuất hiện dày đặc trên các sàn diễn quốc tế, mang đến cảm giác ấm áp và gần gũi với thiên nhiên cho mùa Thu Đông sắp tới.",
      "Điểm thú vị là bảng màu này được ứng dụng linh hoạt trên nhiều chất liệu khác nhau, từ len dệt kim dày dặn cho đến da lộn mềm mại, tạo nên sự tương phản thú vị về kết cấu.",
      "Để ứng dụng xu hướng này vào tủ đồ hằng ngày, các stylist khuyên nên bắt đầu từ những món phụ kiện nhỏ như khăn choàng hay túi xách trước khi đầu tư vào trang phục chủ đạo."
    ]
  },
  {
    id: "xh-02",
    category: "xu-huong",
    title: "Phom dáng oversized nhường chỗ cho form ôm vừa vặn",
    date: "2026-06-20",
    author: "Bảo Châu",
    readTime: "3 phút đọc",
    excerpt: "Sau nhiều mùa thống trị bởi phom rộng, xu hướng thời trang đang có dấu hiệu quay trở lại với những đường cắt ôm sát, tôn dáng.",
    content: [
      "Sau thời gian dài ưu ái phom dáng rộng rãi, thoải mái, các sàn diễn mùa này bắt đầu ghi nhận sự trở lại của những đường cắt ôm vừa vặn, tôn trọn đường nét cơ thể.",
      "Sự thay đổi này được lý giải một phần bởi nhu cầu quay trở lại văn phòng và các sự kiện offline, khi người mặc mong muốn một vẻ ngoài chỉn chu, có cấu trúc rõ ràng hơn.",
      "Tuy nhiên, các nhà thiết kế vẫn khéo léo giữ lại sự thoải mái bằng cách sử dụng chất liệu co giãn nhẹ, đảm bảo form dáng đẹp mà không gây gò bó khi vận động."
    ]
  },
  {
    id: "xh-03",
    category: "xu-huong",
    title: "Chất liệu tái chế lên ngôi trong các bộ sưu tập cao cấp",
    date: "2026-06-12",
    author: "Ngọc Trâm",
    readTime: "5 phút đọc",
    excerpt: "Nhiều nhà mốt lớn bắt đầu tích hợp vải tái chế từ nhựa và vải vụn vào các bộ sưu tập chủ lực, thay vì chỉ dùng cho dòng sản phẩm giới hạn.",
    content: [
      "Khác với vài năm trước khi chất liệu tái chế chủ yếu xuất hiện trong các bộ sưu tập giới hạn mang tính biểu tượng, nhiều nhà mốt lớn giờ đây đã tích hợp chúng vào dòng sản phẩm chủ lực, bán đại trà.",
      "Công nghệ dệt từ sợi nhựa tái chế và vải vụn đã có nhiều cải tiến về độ bền và cảm giác chạm, giúp xoá bỏ định kiến rằng vải tái chế luôn kém chất lượng hơn vải nguyên sinh.",
      "Đây được xem là tín hiệu tích cực cho thấy tính bền vững đang dần trở thành tiêu chuẩn mặc định, chứ không còn là yếu tố cộng thêm mang tính tiếp thị."
    ]
  },
  {
    id: "xh-04",
    category: "xu-huong",
    title: "Phụ kiện bản to: điểm nhấn không thể thiếu của mùa mới",
    date: "2026-06-02",
    author: "Bảo Châu",
    readTime: "3 phút đọc",
    excerpt: "Từ khuyên tai bản lớn đến thắt lưng bản to, phụ kiện kích thước ấn tượng đang trở thành công cụ tạo điểm nhấn ưa thích của các stylist.",
    content: [
      "Không cần thay đổi toàn bộ trang phục, chỉ cần một chiếc khuyên tai bản lớn hay thắt lưng bản to cũng đủ để tạo điểm nhấn ấn tượng cho một bộ đồ tối giản.",
      "Xu hướng này đặc biệt phù hợp với những ai yêu thích phong cách tối giản nhưng vẫn muốn có dấu ấn riêng, bởi phụ kiện có thể dễ dàng thay đổi để làm mới trang phục cũ.",
      "Các chuyên gia phối đồ lưu ý nên chọn một điểm nhấn chủ đạo duy nhất trong mỗi outfit để tránh gây rối mắt, thay vì kết hợp quá nhiều phụ kiện bản to cùng lúc."
    ]
  },

  // ---------------- LÀM ĐẸP ----------------
  {
    id: "ld-01",
    category: "lam-dep",
    title: "Chăm sóc da giao mùa: quy trình 5 bước bạn nên biết",
    date: "2026-06-27",
    author: "Bác sĩ Thu Hà",
    readTime: "6 phút đọc",
    excerpt: "Thời điểm giao mùa khiến làn da dễ nhạy cảm hơn, chuyên gia da liễu gợi ý quy trình chăm sóc đơn giản nhưng hiệu quả.",
    content: [
      "Thời điểm giao mùa, nhiệt độ và độ ẩm thay đổi thất thường khiến hàng rào bảo vệ da dễ bị suy yếu, dẫn đến tình trạng khô căng hoặc lên mụn bất thường ở nhiều người.",
      "Quy trình được khuyến nghị bao gồm làm sạch dịu nhẹ, cân bằng độ pH, dưỡng ẩm bằng thành phần phục hồi như ceramide, sử dụng sản phẩm đặc trị nếu cần và luôn kết thúc bằng kem chống nắng vào ban ngày.",
      "Chuyên gia cũng lưu ý nên hạn chế thay đổi quá nhiều sản phẩm cùng lúc trong giai đoạn này, vì da cần thời gian thích nghi trước khi tiếp nhận thêm hoạt chất mới."
    ]
  },
  {
    id: "ld-02",
    category: "lam-dep",
    title: "Trang điểm mỏng nhẹ 'không lớp' lên ngôi trong giới trẻ",
    date: "2026-06-19",
    author: "Kim Ngân",
    readTime: "4 phút đọc",
    excerpt: "Phong cách trang điểm tối giản, tôn vẻ đẹp tự nhiên của làn da đang được ưa chuộng thay vì lớp nền dày truyền thống.",
    content: [
      "Thay vì lớp nền dày phủ kín khuyết điểm, xu hướng trang điểm hiện nay hướng đến vẻ ngoài tự nhiên, để lộ kết cấu da thật với độ bóng khoẻ nhẹ nhàng.",
      "Các sản phẩm nền dạng serum hoặc tinted balm mỏng nhẹ đang được ưa chuộng, kết hợp cùng kỹ thuật tán đều bằng tay hoặc mút ẩm để tạo hiệu ứng da căng bóng tự nhiên.",
      "Điểm nhấn của phong cách này thường được đặt vào lông mày và đôi môi, trong khi phần mắt được giữ tối giản với tông màu trung tính gần với màu da."
    ]
  },
  {
    id: "ld-03",
    category: "lam-dep",
    title: "Chăm sóc tóc hư tổn: những hoạt chất phục hồi đáng chú ý",
    date: "2026-06-08",
    author: "Bác sĩ Thu Hà",
    readTime: "5 phút đọc",
    excerpt: "Tóc hư tổn do nhiệt và hoá chất có thể được cải thiện đáng kể nếu chọn đúng hoạt chất phục hồi phù hợp.",
    content: [
      "Tóc chịu tác động thường xuyên từ nhiệt độ cao khi tạo kiểu hoặc hoá chất khi nhuộm, uốn dễ mất đi lớp biểu bì bảo vệ, dẫn đến tình trạng khô xơ, chẻ ngọn.",
      "Các hoạt chất như protein thuỷ phân, dầu tự nhiên giàu axit béo và ceramide cho tóc được xem là lựa chọn hiệu quả để phục hồi cấu trúc sợi tóc từ bên trong.",
      "Chuyên gia khuyến nghị nên kết hợp dưỡng sâu định kỳ mỗi tuần với việc hạn chế tần suất sử dụng nhiệt, đồng thời luôn dùng sản phẩm bảo vệ nhiệt trước khi tạo kiểu."
    ]
  },
  {
    id: "ld-04",
    category: "lam-dep",
    title: "Chăm sóc bản thân toàn diện: khi làm đẹp bắt đầu từ giấc ngủ",
    date: "2026-05-30",
    author: "Kim Ngân",
    readTime: "4 phút đọc",
    excerpt: "Ngày càng nhiều chuyên gia làm đẹp nhấn mạnh vai trò của giấc ngủ và tinh thần thư giãn đối với vẻ ngoài rạng rỡ.",
    content: [
      "Không sản phẩm dưỡng da nào có thể thay thế hoàn toàn vai trò của một giấc ngủ đủ và sâu đối với quá trình tái tạo tế bào da vào ban đêm.",
      "Nhiều chuyên gia làm đẹp hiện nay khuyến khích xây dựng một routine thư giãn trước khi ngủ, kết hợp giữa chăm sóc da nhẹ nhàng và các hoạt động giảm căng thẳng như thiền hoặc đọc sách.",
      "Về lâu dài, sự kết hợp giữa chăm sóc da đúng cách, chế độ ăn cân bằng và giấc ngủ chất lượng được xem là nền tảng bền vững hơn nhiều so với việc chỉ phụ thuộc vào sản phẩm bên ngoài."
    ]
  }
];

function getArticleById(id) {
  return ARTICLES.find(a => a.id === id);
}

function getArticlesByCategory(cat) {
  return ARTICLES.filter(a => a.category === cat).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getRelated(article, limit) {
  limit = limit || 3;
  return ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, limit);
}

function formatDate(iso) {
  const d = new Date(iso);
  const days = ["CN","Th2","Th3","Th4","Th5","Th6","Th7"];
  return `${d.getDate().toString().padStart(2,"0")}/${(d.getMonth()+1).toString().padStart(2,"0")}/${d.getFullYear()}`;
}
