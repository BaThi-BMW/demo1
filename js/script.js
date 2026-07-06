/* =========================================================================
   DATA — bài viết mẫu cho 4 chuyên mục
   ========================================================================= */
const ICONS = {
  "tin-tuc":  "fa-newspaper",
  "su-kien":  "fa-star",
  "xu-huong": "fa-palette",
  "lam-dep":  "fa-spa"
};
const CATEGORY_LABELS = {
  "tin-tuc": "Tin tức",
  "su-kien": "Sự kiện",
  "xu-huong": "Xu hướng",
  "lam-dep": "Làm đẹp"
};

const ARTICLES = [
  // ---------------- TIN TỨC ----------------
  {
    id:"tt-01", category:"tin-tuc",
    title:"Thương hiệu Việt lần đầu góp mặt tại Tuần lễ Thời trang Paris",
    excerpt:"Một dấu mốc mới cho ngành thiết kế trong nước trên đấu trường quốc tế.",
    author:"Minh Anh", date:"28/06/2026", readTime:"5 phút đọc",
    body:[
      "Lần đầu tiên trong lịch sử ngành thời trang Việt Nam, một thương hiệu nội địa chính thức có mặt trong lịch trình chính thức của Tuần lễ Thời trang Paris, đánh dấu bước tiến quan trọng cho các nhà thiết kế trong nước trên bản đồ thời trang thế giới.",
      "Bộ sưu tập lấy cảm hứng từ nghề dệt lụa truyền thống, kết hợp cùng kỹ thuật cắt may đương đại, đã nhận được nhiều phản hồi tích cực từ giới phê bình và các buyer quốc tế ngay sau buổi trình diễn.",
      "Đại diện thương hiệu chia sẻ đây mới chỉ là bước khởi đầu cho một chiến lược dài hơi nhằm đưa thời trang Việt tiến xa hơn trên thị trường xuất khẩu cao cấp trong những mùa tới."
    ]
  },
  {
    id:"tt-02", category:"tin-tuc",
    title:"Chuỗi cung ứng thời trang bền vững: bài toán không còn có thể trì hoãn",
    excerpt:"Các thương hiệu lớn đang chịu áp lực minh bạch hoá nguồn gốc nguyên liệu.",
    author:"Hoài Thu", date:"24/06/2026", readTime:"6 phút đọc",
    body:[
      "Áp lực từ người tiêu dùng trẻ và các quy định mới về môi trường đang buộc nhiều thương hiệu thời trang phải xem lại toàn bộ chuỗi cung ứng, từ khâu trồng bông, dệt vải cho tới vận chuyển thành phẩm.",
      "Một số nhà sản xuất tại Việt Nam đã bắt đầu đầu tư vào công nghệ truy xuất nguồn gốc bằng mã QR, cho phép khách hàng theo dõi hành trình của từng sản phẩm trước khi đến tay người mặc.",
      "Giới chuyên gia nhận định đây không còn là một lựa chọn mang tính hình ảnh, mà đang dần trở thành điều kiện bắt buộc để duy trì hợp đồng với các đối tác quốc tế."
    ]
  },
  {
    id:"tt-03", category:"tin-tuc",
    title:"Thị trường bán lẻ thời trang chuyển dịch mạnh sang mô hình đa kênh",
    excerpt:"Ranh giới giữa cửa hàng vật lý và trải nghiệm số ngày càng mờ nhạt.",
    author:"Quốc Bảo", date:"19/06/2026", readTime:"4 phút đọc",
    body:[
      "Báo cáo ngành bán lẻ quý II cho thấy phần lớn các thương hiệu thời trang tại các đô thị lớn đã triển khai mô hình bán hàng đa kênh, kết hợp cửa hàng vật lý với nền tảng thương mại điện tử và livestream.",
      "Trải nghiệm thử đồ bằng công nghệ thực tế tăng cường cũng bắt đầu xuất hiện tại một số cửa hàng flagship, giúp rút ngắn thời gian ra quyết định mua sắm của khách hàng.",
      "Các chuyên gia cho rằng xu hướng này sẽ tiếp tục định hình lại vai trò của cửa hàng vật lý, biến nơi đây thành không gian trải nghiệm thay vì đơn thuần là điểm bán."
    ]
  },
  {
    id:"tt-04", category:"tin-tuc",
    title:"Nhà thiết kế trẻ và bài toán ứng dụng AI vào sáng tạo mẫu",
    excerpt:"Công nghệ đang thay đổi cách một bộ sưu tập được hình thành từ ý tưởng ban đầu.",
    author:"Minh Anh", date:"12/06/2026", readTime:"5 phút đọc",
    body:[
      "Ngày càng nhiều nhà thiết kế trẻ sử dụng công cụ AI để phác thảo ý tưởng, thử nghiệm phối màu và mô phỏng chất liệu trước khi bước vào giai đoạn may mẫu thực tế, giúp rút ngắn đáng kể thời gian phát triển sản phẩm.",
      "Tuy nhiên, không ít ý kiến lo ngại việc lạm dụng công nghệ có thể khiến các bộ sưu tập mất đi dấu ấn cá nhân, yếu tố vốn được xem là linh hồn của ngành thời trang cao cấp.",
      "Nhiều xưởng thiết kế hiện chọn cách dùng AI như một công cụ hỗ trợ ở giai đoạn đầu, trong khi vẫn giữ bàn tay con người ở khâu hoàn thiện cuối cùng."
    ]
  },

  // ---------------- SỰ KIỆN ----------------
  {
    id:"sk-01", category:"su-kien",
    title:"Tuần lễ Thời trang Quốc tế mùa Thu chính thức khởi động",
    excerpt:"Hơn 40 nhà thiết kế trong và ngoài nước sẽ trình diễn bộ sưu tập mới.",
    author:"Bảo Trâm", date:"30/06/2026", readTime:"4 phút đọc",
    body:[
      "Sự kiện thời trang lớn nhất mùa Thu năm nay quy tụ hơn 40 nhà thiết kế đến từ nhiều quốc gia, hứa hẹn mang đến một loạt bộ sưu tập đa dạng về phong cách, từ tối giản đến kiến trúc phá cách.",
      "Ban tổ chức cho biết năm nay sự kiện sẽ mở rộng khu vực triển lãm phụ kiện và không gian giao lưu giữa nhà thiết kế với công chúng, nhằm tạo thêm cơ hội kết nối cho các thương hiệu mới nổi.",
      "Vé tham dự các show chính đã được mở bán và dự kiến sẽ nhanh chóng hết chỗ như những mùa trước."
    ]
  },
  {
    id:"sk-02", category:"su-kien",
    title:"Triển lãm 'Ký ức vải vóc' tôn vinh nghề dệt truyền thống",
    excerpt:"Một hành trình ngược dòng thời gian qua từng thước vải thủ công.",
    author:"Nguyên Khang", date:"22/06/2026", readTime:"5 phút đọc",
    body:[
      "Triển lãm giới thiệu hơn 100 hiện vật vải và trang phục truyền thống được sưu tầm từ nhiều vùng miền, tái hiện lại quá trình phát triển của nghề dệt thủ công qua nhiều thế hệ.",
      "Bên cạnh không gian trưng bày, sự kiện còn tổ chức các buổi trình diễn dệt trực tiếp, cho phép khách tham quan quan sát cận cảnh kỹ thuật của các nghệ nhân lớn tuổi.",
      "Ban tổ chức kỳ vọng triển lãm sẽ là cầu nối giúp thế hệ nhà thiết kế trẻ tìm lại cảm hứng từ chất liệu và kỹ thuật truyền thống của dân tộc."
    ]
  },
  {
    id:"sk-03", category:"su-kien",
    title:"Gala từ thiện thường niên quy tụ giới mộ điệu thời trang",
    excerpt:"Toàn bộ số tiền gây quỹ được trao tặng cho các dự án giáo dục trẻ em.",
    author:"Bảo Trâm", date:"15/06/2026", readTime:"3 phút đọc",
    body:[
      "Đêm gala năm nay thu hút sự tham gia của nhiều gương mặt trong giới thời trang, nghệ thuật và truyền thông, cùng chung tay đấu giá các thiết kế độc bản để gây quỹ từ thiện.",
      "Số tiền thu được từ sự kiện sẽ được trao tặng toàn bộ cho các dự án hỗ trợ giáo dục trẻ em vùng cao, tiếp nối truyền thống thiện nguyện đã duy trì nhiều năm qua.",
      "Sự kiện cũng đánh dấu màn ra mắt bộ sưu tập giới hạn được thiết kế riêng cho đêm gala, với một phần doanh thu bán ra tiếp tục được đóng góp cho quỹ."
    ]
  },
  {
    id:"sk-04", category:"su-kien",
    title:"Hội chợ thiết kế trẻ mở lối cho những gương mặt mới",
    excerpt:"Sân chơi dành riêng cho các nhà thiết kế độc lập chưa có thương hiệu riêng.",
    author:"Nguyên Khang", date:"08/06/2026", readTime:"4 phút đọc",
    body:[
      "Khác với các tuần lễ thời trang quy mô lớn, hội chợ lần này tập trung vào những nhà thiết kế độc lập, sinh viên mới tốt nghiệp và các xưởng may nhỏ chưa có điều kiện xây dựng thương hiệu riêng.",
      "Không gian sự kiện được bố trí theo dạng gian hàng mở, khuyến khích khách tham quan trò chuyện trực tiếp với người thiết kế ra từng sản phẩm trưng bày.",
      "Nhiều nhà đầu tư và đại diện cửa hàng buôn sỉ cũng có mặt để tìm kiếm những gương mặt tiềm năng cho mùa mốt sắp tới."
    ]
  },

  // ---------------- XU HƯỚNG ----------------
  {
    id:"xh-01", category:"xu-huong",
    title:"Bảng màu đất nung lên ngôi trong mùa mốt sắp tới",
    excerpt:"Từ terracotta đến nâu đất, sắc màu ấm áp thống trị sàn diễn quốc tế.",
    author:"Thảo Vy", date:"29/06/2026", readTime:"4 phút đọc",
    body:[
      "Các sàn diễn quốc tế mùa này đồng loạt lựa chọn bảng màu đất nung ấm áp, từ terracotta, nâu đất đến be rám nắng, thay thế cho tông pastel nhẹ nhàng của những mùa trước.",
      "Chất liệu đi kèm cũng thiên về vải thô, lanh và da lộn, tạo cảm giác gần gũi với thiên nhiên và phù hợp với xu hướng sống chậm đang được ưa chuộng.",
      "Các stylist gợi ý người mặc có thể phối bảng màu này với phụ kiện kim loại vàng đồng để tăng thêm phần sang trọng cho tổng thể trang phục."
    ]
  },
  {
    id:"xh-02", category:"xu-huong",
    title:"Phom dáng oversize dần nhường chỗ cho form ôm vừa vặn",
    excerpt:"Sự thay đổi trong nhu cầu mặc hàng ngày kéo theo dịch chuyển về cắt may.",
    author:"Đình Phúc", date:"21/06/2026", readTime:"4 phút đọc",
    body:[
      "Sau nhiều mùa thống trị của phom dáng oversize, xu hướng thời trang đang dần chuyển dịch về những form dáng ôm vừa vặn cơ thể hơn, tôn lên đường nét tự nhiên của người mặc.",
      "Sự thay đổi này được cho là xuất phát từ nhu cầu thực tế trong công việc và sinh hoạt hàng ngày, khi người tiêu dùng ưu tiên sự gọn gàng và tính ứng dụng cao hơn.",
      "Tuy nhiên, các item outerwear như áo khoác và blazer vẫn giữ được độ rộng rãi nhất định để cân bằng tổng thể trang phục."
    ]
  },
  {
    id:"xh-03", category:"xu-huong",
    title:"Chất liệu tái chế chính thức bước vào dòng sản phẩm cao cấp",
    excerpt:"Không còn là lựa chọn phụ, vải tái chế đang được đầu tư nghiêm túc.",
    author:"Thảo Vy", date:"14/06/2026", readTime:"5 phút đọc",
    body:[
      "Nhiều thương hiệu cao cấp đã bắt đầu tích hợp chất liệu tái chế vào các dòng sản phẩm chủ lực, thay vì chỉ giới hạn ở những bộ sưu tập giới hạn mang tính biểu tượng như trước đây.",
      "Công nghệ dệt sợi từ nhựa tái chế và vải vụn công nghiệp cũng đã đạt được độ hoàn thiện cao hơn, cho phép tạo ra chất vải mềm mại không thua kém nguyên liệu truyền thống.",
      "Đây được xem là tín hiệu tích cực cho thấy tính bền vững đang dần trở thành tiêu chuẩn ngành, thay vì chỉ là một chiến dịch truyền thông."
    ]
  },
  {
    id:"xh-04", category:"xu-huong",
    title:"Phụ kiện kích thước lớn trở thành điểm nhấn của mùa mốt",
    excerpt:"Từ túi xách, khuyên tai đến kính mát — mọi thứ đều được phóng to.",
    author:"Đình Phúc", date:"07/06/2026", readTime:"3 phút đọc",
    body:[
      "Phụ kiện kích thước lớn đang trở thành điểm nhấn không thể thiếu trên các sàn diễn, từ túi xách cỡ đại, khuyên tai bản to cho đến kính mát gọng dày.",
      "Xu hướng này được xem là cách để tạo điểm nhấn cho những trang phục tối giản về màu sắc và form dáng, giúp tổng thể không bị đơn điệu.",
      "Các chuyên gia thời trang khuyên người mặc chỉ nên chọn một món phụ kiện lớn cho mỗi lần phối đồ để tránh gây rối mắt."
    ]
  },

  // ---------------- LÀM ĐẸP ----------------
  {
    id:"ld-01", category:"lam-dep",
    title:"Chăm sóc da giao mùa: những bước không thể bỏ qua",
    excerpt:"Làn da cần một chu trình linh hoạt hơn khi thời tiết bắt đầu thay đổi.",
    author:"Bác sĩ Lan Chi", date:"27/06/2026", readTime:"6 phút đọc",
    body:[
      "Khi thời tiết chuyển mùa, làn da thường trở nên nhạy cảm hơn và dễ phản ứng với các sản phẩm vốn dĩ vẫn dùng hàng ngày, do đó việc điều chỉnh chu trình chăm sóc da là điều cần thiết.",
      "Các bác sĩ da liễu khuyên nên ưu tiên bước cấp ẩm và phục hồi hàng rào bảo vệ da trong giai đoạn này, đồng thời tạm giảm tần suất sử dụng các sản phẩm tẩy tế bào chết mạnh.",
      "Kem chống nắng vẫn là bước không thể thiếu bất kể mùa nào, đặc biệt khi da đang trong giai đoạn phục hồi và dễ bắt nắng hơn bình thường."
    ]
  },
  {
    id:"ld-02", category:"lam-dep",
    title:"Trang điểm mộc: xu hướng bền vững hơn là trào lưu nhất thời",
    excerpt:"Lớp nền mỏng nhẹ và tông màu tự nhiên tiếp tục được ưa chuộng.",
    author:"Khánh Ngọc", date:"20/06/2026", readTime:"4 phút đọc",
    body:[
      "Phong cách trang điểm mộc mạc, tôn vinh vẻ đẹp tự nhiên của làn da tiếp tục là lựa chọn hàng đầu của nhiều người trong các hoạt động thường ngày lẫn sự kiện quan trọng.",
      "Kỹ thuật đánh nền mỏng nhẹ kết hợp cùng sản phẩm dưỡng ẩm giúp da trông khoẻ khoắn, có độ bóng tự nhiên thay vì lớp phủ dày và bí da như trước đây.",
      "Các chuyên viên trang điểm cho rằng đây không đơn thuần là một xu hướng nhất thời, mà phản ánh sự thay đổi trong quan niệm về vẻ đẹp của nhiều thế hệ trẻ."
    ]
  },
  {
    id:"ld-03", category:"lam-dep",
    title:"Chăm sóc tóc hư tổn sau nhiều lần tạo kiểu và nhuộm màu",
    excerpt:"Phục hồi từ bên trong là chìa khoá cho mái tóc chắc khoẻ dài lâu.",
    author:"Bác sĩ Lan Chi", date:"13/06/2026", readTime:"5 phút đọc",
    body:[
      "Việc tạo kiểu và nhuộm màu thường xuyên khiến cấu trúc tóc bị suy yếu, dẫn đến tình trạng tóc khô xơ, dễ gãy rụng nếu không được chăm sóc và phục hồi đúng cách.",
      "Các chuyên gia khuyến nghị nên kết hợp giữa dưỡng chất phục hồi sâu tại nhà và các liệu trình chuyên sâu tại salon theo định kỳ để tóc có thời gian tái tạo.",
      "Ngoài ra, việc điều chỉnh chế độ dinh dưỡng giàu biotin và kẽm cũng được xem là yếu tố quan trọng giúp mái tóc chắc khoẻ từ gốc đến ngọn."
    ]
  },
  {
    id:"ld-04", category:"lam-dep",
    title:"Nước hoa layering: nghệ thuật kết hợp nhiều tầng hương",
    excerpt:"Cách phối hai hoặc nhiều loại nước hoa để tạo dấu ấn riêng.",
    author:"Khánh Ngọc", date:"05/06/2026", readTime:"4 phút đọc",
    body:[
      "Kỹ thuật layering nước hoa, tức kết hợp từ hai loại mùi hương trở lên, đang được nhiều tín đồ làm đẹp ưa chuộng như một cách để tạo ra dấu ấn hương thơm cá nhân hoá.",
      "Nguyên tắc cơ bản là nên bắt đầu từ lớp hương có độ lưu hương lâu nhất, sau đó thêm các lớp hương nhẹ hơn để tạo chiều sâu mà không bị át mùi lẫn nhau.",
      "Các chuyên gia nước hoa khuyên nên thử nghiệm trên da tay trước, để hương thơm có thời gian phát triển qua từng tầng trước khi quyết định sử dụng cho cả ngày dài."
    ]
  }
];

let COMMENTS = {}; // lưu tạm trong bộ nhớ phiên

/* =========================================================================
   HELPERS
   ========================================================================= */
function getArticlesByCategory(cat){
  return ARTICLES.filter(a => a.category === cat);
}
function findArticle(id){
  return ARTICLES.find(a => a.id === id);
}
function cardHTML(article){
  const icon = ICONS[article.category];
  return `
    <article class="article-card" data-id="${article.id}" tabindex="0" role="button" aria-label="Xem bài viết: ${article.title}">
      <div class="tag-swatch sw-${article.category}">
        <span class="card-ribbon">${CATEGORY_LABELS[article.category]}</span>
        <i class="fa-solid ${icon}"></i>
      </div>
      <div class="body">
        <h3>${article.title}</h3>
        <p class="excerpt">${article.excerpt}</p>
        <div class="card-meta">
          <span><i class="fa-regular fa-user"></i> ${article.author}</span>
          <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
      </div>
    </article>`;
}
function renderGrid($grid, articles, limit){
  if(!$grid || !$grid.length) return;
  const list = limit ? articles.slice(0, limit) : articles;
  $grid.html(list.map(cardHTML).join(""));
}
function refreshReveal(){
  $(".article-card").each(function(i){
    const $el = $(this);
    setTimeout(() => $el.addClass("revealed"), 40 * i);
  });
}
function attachSearch($input, $grid, $countEl, $noResultEl, category){
  $input.on("input", function(){
    const q = $(this).val().trim().toLowerCase();
    const all = getArticlesByCategory(category);
    const filtered = q ? all.filter(a => a.title.toLowerCase().includes(q)) : all;
    renderGrid($grid, filtered);
    $countEl.text(filtered.length);
    $noResultEl.toggleClass("show", filtered.length === 0);
    refreshReveal();
  });
}

/* =========================================================================
   VIEW / ROUTING
   ========================================================================= */
const VALID_VIEWS = ["home","tin-tuc","su-kien","xu-huong","lam-dep"];

function showView(view, articleId){
  if(!VALID_VIEWS.includes(view)) view = "home";
  $(".view").removeClass("active");
  $(`.view[data-view="${view}"]`).addClass("active");
  $(".main-nav a[data-nav]").removeClass("active");
  $(`.main-nav a[data-nav="${view}"]`).addClass("active");
  $("#mainNav").removeClass("open");
  $("#navToggle").attr("aria-expanded", "false");
  window.scrollTo({top:0, behavior:"instant" in window ? "instant" : "auto"});
  if(articleId){
    setTimeout(() => openModal(articleId), 60);
  }
}

function routeFromHash(){
  const hash = window.location.hash.replace("#","") || "home";
  // sitemap / home anchors -> home view, scroll to anchor after render
  if(hash === "home" || hash === "sitemap" || hash.endsWith("-home")){
    showView("home");
    if(hash !== "home"){
      setTimeout(() => {
        const target = document.getElementById(hash);
        if(target) target.scrollIntoView({behavior:"smooth"});
      }, 80);
    }
    return;
  }
  if(VALID_VIEWS.includes(hash)){
    showView(hash);
  } else {
    showView("home");
  }
}

/* =========================================================================
   MODAL
   ========================================================================= */
function openModal(id){
  const article = findArticle(id);
  if(!article) return;
  const icon = ICONS[article.category];
  $("#modalHero").attr("class", "modal-hero sw-" + article.category).html(`<i class="fa-solid ${icon}"></i>`);
  $("#modalCategory").text(CATEGORY_LABELS[article.category]);
  $("#modalDate").text(article.date);
  $("#modalAuthor").text(article.author);
  $("#modalReadTime").text(article.readTime);
  $("#modalTitle").text(article.title);
  $("#modalBody").html(article.body.map(p => `<p>${p}</p>`).join(""));

  const related = getArticlesByCategory(article.category).filter(a => a.id !== article.id).slice(0,4);
  $("#relatedList").html(related.map(a =>
    `<div class="related-item" data-id="${a.id}">${a.title}</div>`
  ).join(""));

  renderComments(article.id);
  $("#commentForm").data("articleId", article.id);

  $("#articleModal").addClass("open").attr("aria-hidden","false");
  $("body").css("overflow","hidden");
}
function closeModal(){
  $("#articleModal").removeClass("open").attr("aria-hidden","true");
  $("body").css("overflow","");
}
function renderComments(articleId){
  const list = COMMENTS[articleId] || [];
  $("#commentCount").text(list.length);
  if(!list.length){
    $("#commentList").html('<p class="comment-empty">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ cảm nhận.</p>');
    return;
  }
  $("#commentList").html(list.map(c => `
    <div class="comment-item">
      <span class="c-name">${escapeHTML(c.name)}</span><span class="c-date">${c.date}</span>
      <p class="c-text">${escapeHTML(c.text)}</p>
    </div>
  `).join(""));
}
function escapeHTML(str){
  return $("<div>").text(str).html();
}

/* =========================================================================
   INIT
   ========================================================================= */
$(function () {
  $("#todayDate").text(new Date().toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "2-digit", day: "2-digit" }));

  // render home previews
  ["tin-tuc","su-kien","xu-huong","lam-dep"].forEach(cat => {
    renderGrid($(`.view[data-view="home"] .article-grid[data-category="${cat}"]`), getArticlesByCategory(cat), 3);
  });

  // render category views (main grid + related grid)
  VALID_VIEWS.filter(v => v !== "home").forEach(cat => {
    const $view = $(`.view[data-view="${cat}"]`);
    const $main = $view.find('.article-grid[data-role="main"]');
    renderGrid($main, getArticlesByCategory(cat));
    $view.find(`.resultCount[data-scope="${cat}"]`).text(getArticlesByCategory(cat).length);

    $view.find(".article-grid[data-limit]").each(function(){
      const relCat = $(this).data("category");
      renderGrid($(this), getArticlesByCategory(relCat), 3);
    });

    attachSearch(
      $view.find(`.pageSearch[data-scope="${cat}"]`),
      $main,
      $view.find(`.resultCount[data-scope="${cat}"]`),
      $view.find(`.no-result[data-scope="${cat}"]`),
      cat
    );
  });

  refreshReveal();
  routeFromHash();

  // Nav toggle (mobile)
  $("#navToggle").on("click", function(){
    const open = $("#mainNav").toggleClass("open").hasClass("open");
    $(this).attr("aria-expanded", open ? "true" : "false");
  });

  // Nav / internal links
  $(document).on("click", "[data-nav]", function(e){
    const targetHash = $(this).attr("href");
    if(targetHash && targetHash.startsWith("#")){
      const articleId = $(this).data("article");
      setTimeout(() => routeFromHash(), 0);
      if(articleId){
        setTimeout(() => openModal(articleId), 90);
      }
    }
  });
  $(window).on("hashchange", routeFromHash);

  // Card click -> open modal
  $(document).on("click", ".article-card", function(){
    openModal($(this).data("id"));
  });
  $(document).on("keydown", ".article-card", function(e){
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openModal($(this).data("id")); }
  });
  $(document).on("click", "[data-article]:not([data-nav])", function(){
    openModal($(this).data("article"));
  });
  $(document).on("click", ".related-item", function(){
    openModal($(this).data("id"));
  });

  // Modal close
  $("#modalClose").on("click", closeModal);
  $("#articleModal").on("click", function(e){
    if(e.target === this) closeModal();
  });
  $(document).on("keydown", function(e){
    if(e.key === "Escape") closeModal();
  });

  // Comment form
  $("#commentForm").on("submit", function(e){
    e.preventDefault();
    const articleId = $(this).data("articleId");
    const name = $("#commentName").val().trim();
    const text = $("#commentText").val().trim();
    if(!name || !text) return;
    if(!COMMENTS[articleId]) COMMENTS[articleId] = [];
    COMMENTS[articleId].push({
      name, text,
      date: new Date().toLocaleDateString("vi-VN")
    });
    $("#commentName").val("");
    $("#commentText").val("");
    renderComments(articleId);
  });

  // Header global search -> jump to matching article
  $("#headerSearch").on("keydown", function(e){
    if(e.key === "Enter"){
      const q = $(this).val().trim().toLowerCase();
      if(!q) return;
      const match = ARTICLES.find(a => a.title.toLowerCase().includes(q));
      if(match){
        showView(match.category);
        window.location.hash = match.category;
        setTimeout(() => openModal(match.id), 100);
      }
    }
  });

  // Back to top
  $(window).on("scroll", function(){
    $("#backToTop").toggleClass("show", $(window).scrollTop() > 400);
  });
  $("#backToTop").on("click", function(){
    $("html, body").animate({scrollTop:0}, 400);
  });
});
