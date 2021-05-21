import { useState } from 'react';
export default function Hero() {
  const [isOpen, setToggle] = useState(false);
  const [isSubOpen, setSubToggle] = useState(false);

  function changeToggle(flag = true) {
    if (flag === true) {
      setToggle(!isOpen);
    } else {
      setSubToggle(!isSubOpen);
    }
  }
  return (
    <section className='Hero'>
      <div className='inner relative w-screen h-screen'>
        {/* area-smNav */}
        <div className='area-smNav-outer bg-white hidden maxpc:block fixed top-0 w-full z-10'>
          <div className='area-smNav flex justify-between '>
            <img
              className='el-logo'
              src='https://via.placeholder.com/80x40/27709b/ffffff?text=80x40'
              alt='テスト'
            />
            <div
              onClick={() => changeToggle(true)}
              className='w-12 h-12 flex justify-center items-center cursor-pointer'
            >
              {isOpen ? <span className='isOpen'>▲</span> : <span className=''>▲</span>}
            </div>
          </div>
          <nav
            className={`area-openNav bg-white w-full c-transition overflow-hidden
          ${isOpen ? 'i-h-on' : 'i-h-off '}`}
          >
            <ul className='ul-first'>
              <li>
                <div className='outer'>
                  <a href='#' className='inline-block cm flex items-center'>
                    <img
                      className='inline-block'
                      src='https://via.placeholder.com/120x30/27709b/ffffff?text=120x30'
                      alt='テスト'
                    />
                    <span className='text-sm inline-block pl-2'>ああああaaaa</span>
                  </a>

                  <div
                    onClick={() => changeToggle(false)}
                    className='w-12 h-12 flex justify-center items-center cursor-pointer cm'
                  >
                    {isSubOpen ? <span className='isSubOpen'>▲</span> : <span className=''>▲</span>}
                    {/* <span v-if="isSubOpen">▲</span>
                  <span v-else>▼</span> */}
                  </div>
                </div>
                {/* <ul className="ul-second bg-white w-full c-transition overflow-hidden"
              :className="[isSubOpen ? 'h-full' : 'i-h-0']">
                <li>aaa</li>
                <li>bbb</li>
              </ul>  */}
              </li>
            </ul>
          </nav>
        </div>

        {/* area-bg */}
        <div className='area-bg absolute w-full h-full'>
          <img
            className='w-full h-full object-cover'
            src='https://via.placeholder.com/1920x1024/27709b/ffffff?text=1920x1080'
            alt='テスト'
          />
        </div>

        {/* <!-- area-arrow-left ----------------------------> */}
        <div className='area-arrow-left absolute inline-block pl-12 left-0'>
          <img
            className=''
            src='https://via.placeholder.com/60x60/ffffff/27709b?text=60x60'
            alt='テスト'
          />
        </div>

        {/* <!-- area-arrow-right ----------------------------> */}
        <div className='area-arrow-right absolute  inline-block pr-12 right-0'>
          <img
            className=''
            src='https://via.placeholder.com/60x60/ffffff/27709b?text=60x60'
            alt='テスト'
          />
        </div>

        {/* <!-- area-activeSlider-btnCircle ----------------------------> */}
        <div className='area-activeSlider-btnCircle absolute inline-block'>
          <ul className='flex'>
            <li>
              <img
                className=''
                src='https://via.placeholder.com/20x20/ffffff/27709b?text=20x20'
                alt='テスト'
              />
            </li>
            <li>
              <img
                className=''
                src='https://via.placeholder.com/20x20/ffffff/27709b?text=20x20'
                alt='テスト'
              />
            </li>
            <li>
              <img
                className=''
                src='https://via.placeholder.com/20x20/ffffff/27709b?text=20x20'
                alt='テスト'
              />
            </li>
            <li>
              <img
                className=''
                src='https://via.placeholder.com/20x20/ffffff/27709b?text=20x20'
                alt='テスト'
              />
            </li>
          </ul>
        </div>

        <div className='area-nav is-pc absolute w-full bg-gray-500 py-20 maxmd:hidden'></div>
        <div className='area-scroll is-pc absolute w-full text-center bottom-0 pb-2 maxmd:hidden'>
          <img
            className='inline-block'
            src='https://via.placeholder.com/60x40/ffffff/27709b?text=60x40'
            alt='テスト'
          />
        </div>
      </div>
      {/* <Head>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.css"></script>
      <link rel="stylesheet" href="style.css"/>
    </Head> */}
    </section>
  );
}
