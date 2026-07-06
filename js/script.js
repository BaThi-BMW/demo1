$(document).ready(function() {
    
    // =========================================================================
    // 1. JQUERY ĐIỀU HƯỚNG CHUYỂN TRANG MƯỢT MÀ (SPA NAVIGATION)
    // =========================================================================
    $(document).on('click', '[data-page]', function(e) {
        e.preventDefault();
        
        // Lấy tên trang đích từ thuộc tính data-page
        const targetPage = $(this).data('page');
        
        // Ẩn toàn bộ các trang đang mở và hiển thị trang được chọn
        $('.page-section').removeClass('active');
        $('#' + targetPage).addClass('active');
        
        // Cập nhật trạng thái Active trên thanh Menu chính
        $('.menu a').removeClass('active-menu');
        $(`.menu a[data-page="${targetPage}"]`).addClass('active-menu');
        
        // Cuộn màn hình lên trên cùng với hiệu ứng mượt
        $('html, body').animate({ scrollTop: 0 }, 400);
    });


    // =========================================================================
    // 2. KHU VỰC QUẢN LÝ BÌNH LUẬN (COMMENT) & LOCAL STORAGE
    // =========================================================================
    // Hàm tải danh sách bình luận cũ đã lưu từ bộ nhớ trình duyệt khi vừa mở trang
    function loadComments() {
        const storedComments = localStorage.getItem('fashion_comments');
        if (storedComments) {
            const commentsArray = JSON.parse(storedComments);
            commentsArray.forEach(function(item) {
                $('#commentList').append(`<li class="comment-item"><strong>${item.name}:</strong> ${item.text}</li>`);
            });
        }
    }
    loadComments(); // Chạy hàm tải ngay khi website load xong

    // Xử lý gửi bình luận mới
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();
        
        const name = $('#cmtName').val().trim();
        const text = $('#cmtText').val().trim();

        if (name && text) {
            // Tạo cấu trúc HTML cho bình luận mới
            const newCommentHtml = `
                <li class="comment-item" style="display:none;">
                    <strong>${name}:</strong> ${text}
                </li>
            `;
            
            // Đưa lên đầu danh sách và trượt xuống mượt mà
            $('#commentList').prepend(newCommentHtml);
            $('.comment-item').first().slideDown(500);
            
            // Lưu bình luận vào LocalStorage để tránh mất dữ liệu khi F5
            let currentComments = localStorage.getItem('fashion_comments') ? JSON.parse(localStorage.getItem('fashion_comments')) : [];
            currentComments.unshift({ name: name, text: text });
            localStorage.setItem('fashion_comments', JSON.stringify(currentComments));
            
            // Xóa dữ liệu cũ trên form nhập
            $('#cmtName').val('');
            $('#cmtText').val('');
        }
    });


    // =========================================================================
    // 3. JAVASCRIPT VALIDATION - KIỂM TRA ĐĂNG NHẬP THÀNH VIÊN
    // =========================================================================
    $('#loginBtn').on('click', function(e) {
        e.preventDefault();
        
        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val().trim();
        
        // Biểu thức chính quy kiểm tra định dạng Email hợp lệ
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "" || password === "") {
            alert("Vui lòng điền đầy đủ tài khoản và mật khẩu!");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Định dạng Email không hợp lệ! Vui lòng kiểm tra lại.");
            return;
        }

        if (password.length < 6) {
            alert("Mật khẩu bảo mật phải có độ dài tối thiểu từ 6 ký tự trở lên!");
            return;
        }

        // Nếu thông qua hết các bộ lọc điều kiện trên:
        alert(`Chúc mừng thành viên [${email}] đã đăng nhập thành công vào hệ thống Fashion Hub 2026!`);
        
        // Reset form đăng nhập và quay về trang chủ
        $('#loginEmail').val('');
        $('#loginPassword').val('');
        $('[data-page="home"]').click(); 
    });


    // =========================================================================
    // 4. HIỆU ỨNG GIAO DIỆN (UI INTERACTION)
    // =========================================================================
    // Tự động thu gọn khoảng cách menu khi cuộn chuột xuống
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 60) {
            $('nav').css({ 'padding': '10px 5%', 'background': 'rgba(0, 0, 0, 0.95)' });
        } else {
            $('nav').css({ 'padding': '20px 5%', 'background': 'rgba(0, 0, 0, 0.8)' });
        }
    });

});
