import Head from 'next/head';

export default function PickUp() {
  if (process.browser) {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 6,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        520: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      },
    });
  }

  return (
    <section className='PickUp'>
      <Head>
        <script src='https://unpkg.com/swiper/swiper-bundle.min.js'></script>
        <link rel='stylesheet' href='https://unpkg.com/swiper/swiper-bundle.min.css' />
      </Head>
      <div className='inner py-20'>
        <h3 className='area-titlePickup flex justify-center items-center'>
          {/* 
        以下エラーが出るが、ssr時の画像とクライアントで発生する画像が異なるよという意味。無視でいい。
        react-dom.development.js?61bb:67 Warning: Prop `src` did not match. Server: "https://via.placeholder.com/1920x1080/27709b/ffffff?text=4" Client: "https://via.placeholder.com/1920x1080/27709b/ffffff?text=1" */}
          <img src='https://via.placeholder.com/118x38/27709b/ffffff?text=pickup' alt='' />
        </h3>
        <div className='area-mainSwiper pt-12 flex justify-center'>
          <div className='inner relative px-12'>
            {/* <!-- swiper ----------------------------> */}
            <div className='swiper-container overflow-hidden'>
              {/* <!-- wrapper --> */}
              <div className='swiper-wrapper'>
                {/* <!-- Slides --> */}
                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=1'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>

                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=2'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>

                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=3'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>

                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=4'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>

                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=5'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>

                <div className='swiper-slide'>
                  <img
                    className='block'
                    src='https://via.placeholder.com/1920x1080/27709b/ffffff?text=6'
                    alt=''
                  />
                  <p className='flex pt-2'>
                    <span className='w-4 h-4 pc:w-6 pc:h-6 pt-1'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M9 5l7 7-7 7'
                        ></path>
                      </svg>
                    </span>
                    <span>あああああああ、ああああああああああああ、ああああああああああ</span>
                  </p>
                </div>
              </div>
              {/* <!-- pagination --> */}
              <div className='swiper-pagination hidden'></div>
            </div>
            {/* <!-- navigation buttons --> */}
            <div className='swiper-button-prev'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
                ></path>
              </svg>
            </div>
            <div className='swiper-button-next'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            </div>

            {/* <!-- // swiper ----------------------------> */}
          </div>
        </div>
      </div>
    </section>
  );
}
