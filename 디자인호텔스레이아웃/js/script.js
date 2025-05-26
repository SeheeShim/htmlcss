$(function () {
    let currentIndex = 0;
    const maxIndex = $('.section1-left .item-contents li').length;

    // 전환 함수
    function showSlide(index) {
      // 왼쪽 이미지 페이드 전환
      $('.section1-left .item-contents li').fadeOut(500);
      $('.section1-left .item-contents li').eq(index).fadeIn(500);

      // 오른쪽 이미지 전환
      $('.section1-right-imgBox > div').hide();
      $('.section1-right-imgBox > div').eq(index).show();

      // 오른쪽 텍스트 전환
      $('.textWrap > p').hide();
      $('.textWrap > p').eq(index).show();

      // 탭 활성화
      $('.section1-right-tabBox ul li').removeClass('active');
      $('.section1-right-tabBox ul li').eq(index).addClass('active');

      currentIndex = index;
    }

    // 자동 슬라이드
    let slideTimer = setInterval(function () {
      let nextIndex = (currentIndex + 1) % maxIndex;
      showSlide(nextIndex);
    }, 3000);

    // 탭 클릭 시 수동 전환
    $('.section1-right-tabBox ul li').on('click', function (e) {
      e.preventDefault();
      let index = $(this).index();
      showSlide(index);

      // 타이머 초기화 후 다시 시작
      clearInterval(slideTimer);
      slideTimer = setInterval(function () {
        let nextIndex = (currentIndex + 1) % maxIndex;
        showSlide(nextIndex);
      }, 5000);
    });
  });