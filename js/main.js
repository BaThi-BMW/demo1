/* ============================================================
   MAIN.JS — Toàn bộ tương tác phía client, sử dụng jQuery
   ============================================================ */

const ICONS = {
  "tin-tuc": "fa-newspaper",
  "su-kien": "fa-calendar-days",
  "xu-huong": "fa-arrow-trend-up",
  "lam-dep": "fa-spa"
};

/* ---------- Helpers ---------- */
function swatchHtml(category, ribbon) {
  const meta = CATEGORY_META[category];
  const icon = ICONS[category] || "fa-tag";
  const ribbonHtml = ribbon !== false
    ? `<span class="card-ribbon">${meta.label}</span>` : "";
  return `<div class="tag-swatch sw-${category}">${ribbonHtml}<i class="fa-solid ${icon}"></i></div>`;
}

function cardHtml(article) {
  const meta = CATEGORY_META[article.category];
  return `
  <article class="card cat-${article.category} reveal" data-id="${article.id}" tabindex="0" role="button" aria-label="Xem bài: ${article.title}">
    <div class="card-media">${swatchHtml(article.category)}</div>
    <div class="card-body">
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <div class="card-meta">
        <span>${article.author}</span>
        <span>${formatDate(article.date)}</span>
      </div>
    </div>
  </article>`;
}

function renderGrid($grid, articles, limit) {
  const list = limit ? articles.slice(0, limit) : articles;
  if (!list.length) {
    $grid.html('');
    return;
  }
  $grid.html(list.map(cardHtml).join(""));
}

/* ---------- Toast ---------- */
let toastTimer = null;
function showToast(msg) {
  let $t = $("#globalToast");
  if (!$t.length) {
    $t = $('<div id="globalToast" class="toast" role="status" aria-live="polite"></div>');
    $("body").append($t);
  }
  $t.text(msg).addClass("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $t.removeClass("show"), 2400);
}

/* ---------- Comments (localStorage) ---------- */
function commentKey(articleId) { return "maison_comments_" + articleId; }

function loadComments(articleId) {
  try {
    const raw = localStorage.getItem(commentKey(articleId));
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function saveComment(articleId, comment) {
  const list = loadComments(articleId);
  list.push(comment);
  localStorage.setItem(commentKey(articleId), JSON.stringify(list));
  return list;
}

function initialsOf(name) {
  return (name || "?").trim().split(/\s+/).slice(-1)[0].charAt(0).toUpperCase();
}

function renderComments(articleId, category) {
  const list = loadComments(articleId);
  const $list = $("#commentList");
  if (!list.length) {
    $list.html('<p class="comment-empty">Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ cảm nhận của bạn!</p>');
    $("#commentCount").text("0");
    return;
  }
  $("#commentCount").text(list.length);
  $list.html(list.map(c => `
    <div class="comment-item cat-${category}">
      <div class="comment-avatar">${initialsOf(c.name)}</div>
      <div class="comment-bubble">
        <div class="c-head"><span class="c-name">${$('<div>').text(c.name).html()}</span><span class="c-time">${c.time}</span></div>
        <p>${$('<div>').text(c.text).html()}</p>
      </div>
    </div>
  `).join(""));
}

/* ---------- Modal ---------- */
function openArticleModal(id) {
  const article = getArticleById(id);
  if (!article) return;
  const meta = CATEGORY_META[article.category];

  $("#modalHero").html(swatchHtml(article.category));
  $("#modalCategory").text(meta.label).css("color", meta.color);
  $("#modalDate").text(formatDate(article.date));
  $("#modalAuthor").text(article.author);
  $("#modalReadTime").text(article.readTime);
  $("#modalTitle").text(article.title);
  $("#modalBody").html(article.content.map(p => `<p>${p}</p>`).join(""));

  const related = getRelated(article, 3);
  const $relatedBox = $("#relatedBox");
  if (related.length) {
    $("#relatedList").html(related.map(r => `
      <a href="#" class="related-item cat-${r.category}" data-id="${r.id}">
        <div class="eyebrow">${CATEGORY_META[r.category].label}</div>
        <h5>${r.title}</h5>
      </a>
    `).join(""));
    $relatedBox.show();
  } else {
    $relatedBox.hide();
  }

  $("#commentForm").data("article-id", article.id).data("category", article.category);
  renderComments(article.id, article.category);

  $("#articleModal").addClass("open").attr("aria-hidden", "false");
  $("body").css("overflow", "hidden");
  history.replaceState(null, "", "#bai-viet-" + article.id);
  $("#modalClose").trigger("focus");
}

function closeArticleModal() {
  $("#articleModal").removeClass("open").attr("aria-hidden", "true");
  $("body").css("overflow", "");
  history.replaceState(null, "", location.pathname);
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    $(".reveal").addClass("in");
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* Re-run reveal whenever new cards are injected */
function refreshReveal() { setTimeout(initReveal, 30); }

/* ---------- Search / filter ---------- */
function attachSearch($input, $scope, $resultCount, $noResult) {
  $input.on("keyup", function () {
    const term = $(this).val().trim().toLowerCase();
    let visible = 0;
    $scope.find(".card").each(function () {
      const title = $(this).find("h3").text().toLowerCase();
      const excerpt = $(this).find("p").first().text().toLowerCase();
      const match = !term || title.includes(term) || excerpt.includes(term);
      $(this).toggle(match);
      if (match) visible++;
    });
    if ($resultCount.length) $resultCount.text(visible);
    if ($noResult.length) $noResult.toggle(visible === 0);
  });
}

/* ---------- Nav active state + mobile toggle ---------- */
function initNav() {
  const current = (location.pathname.split("/").pop() || "index.html");
  $(".main-nav a").each(function () {
    const href = $(this).attr("href");
    if (href === current || (current === "" && href === "index.html")) {
      $(this).addClass("active");
    }
  });

  $("#navToggle").on("click", function () {
    $(".main-nav").toggleClass("open");
    const expanded = $(".main-nav").hasClass("open");
    $(this).attr("aria-expanded", expanded);
  });

  $(".main-nav a").on("click", function () {
    $(".main-nav").removeClass("open");
  });
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const $btn = $("#backToTop");
  $(window).on("scroll", function () {
    $btn.toggleClass("show", $(window).scrollTop() > 480);
  });
  $btn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
}

/* ---------- Global event bindings ---------- */
$(function () {
  initNav();
  initBackToTop();

  // Delegate click on any card -> open modal
  $(document).on("click", ".card", function () {
    openArticleModal($(this).data("id"));
  });
  $(document).on("keydown", ".card", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openArticleModal($(this).data("id"));
    }
  });

  // Related article click -> swap modal content
  $(document).on("click", ".related-item", function (e) {
    e.preventDefault();
    openArticleModal($(this).data("id"));
    $("#modalBody").closest(".modal").scrollTop(0);
  });

  // Close modal
  $("#modalClose").on("click", function () { closeArticleModal(); });
  $("#articleModal").on("click", function (e) {
    if (e.target === this) closeArticleModal();
  });
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $("#articleModal").hasClass("open")) closeArticleModal();
  });

  // Comment form submit
  $("#commentForm").on("submit", function (e) {
    e.preventDefault();
    const $form = $(this);
    const articleId = $form.data("article-id");
    const category = $form.data("category");
    const name = $("#commentName").val().trim();
    const text = $("#commentText").val().trim();
    if (!name || !text) {
      showToast("Vui lòng nhập tên và nội dung bình luận.");
      return;
    }
    const now = new Date();
    const time = now.toLocaleDateString("vi-VN") + " " + now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    saveComment(articleId, { name, text, time });
    renderComments(articleId, category);
    $("#commentText").val("");
    showToast("Đã đăng bình luận của bạn. Cảm ơn bạn đã chia sẻ!");
  });

  // Header search (filters cards currently visible on the page, any page)
  const $headerInput = $("#headerSearch");
  if ($headerInput.length) {
    $headerInput.on("keyup", function () {
      const term = $(this).val().trim().toLowerCase();
      $(".article-grid .card").each(function () {
        const title = $(this).find("h3").text().toLowerCase();
        $(this).toggle(!term || title.includes(term));
      });
    });
  }

  initReveal();

  // Deep link support: e.g. tin-tuc.html#bai-viet-tt-01 opens that article directly
  if (location.hash && location.hash.indexOf("#bai-viet-") === 0) {
    const deepId = location.hash.replace("#bai-viet-", "");
    setTimeout(() => openArticleModal(deepId), 150);
  }
});
