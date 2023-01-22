$(".page-scroll").on("click", function (e) {
    //ambil isi href
    var href = $(this).attr("href");
  
    // tangkap elemen href
    var elemenHref = $(href);
  
    // pindahkan scroll
    $("html , body").animate(
      {
        //scrolltop= tergantung scroll halaman
        scrollTop: elemenHref.offset().top -20,
      },
      400,
      "easeInOutExpo"
    );
  
    //memmberikan jarak
    e.preventDefault();
  });

  // about effect
    // about
    // eslint-disable-next-line no-undef
    $(window).scroll(function () {
      var wscroll = $(this).scrollTop();
      //untuk jombroton
      // aksi mengambil elemen
      // eslint-disable-next-line no-undef
      $(".jumbotron img").css({
        transform: "translate(0px," + wscroll / 4 + "%)",
      });
    
      // aksi untuk h1
      $(".jumbotron h1").css({
        transform: "translate(0px," + wscroll / 2 + "%)",
      });
    
      //aksi untuk p
      $(".jumbotron h6").css({
        transform: "translate(0px," + wscroll / 1.2 + "%)",
      });
    
      // about
      if (wscroll > $(".about").offset().top - 100) {
        //mengambil elemen ada 6
        // eslint-disable-next-line no-undef
        $(".pKiri , .pKanan ").addClass('pMuncul');
      }
    
      //project
      // memunculkan gambar 1 per 1
      if (wscroll > $(".project").offset().top - 200) {
        //mengambil elemen ada 6
        $(".project .card").each(function (i) {
          setTimeout(function () {
            $(".project .card").eq(i).addClass("muncul");
          }, 600 * i);
        });
    
        //
      }
    });
    
  