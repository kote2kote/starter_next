import Layout from 'components/layout/test/2021/0408_pocari/Layout';
import Hero from 'components/pages/test/2021/0408_pocari/Hero';
import PickUp from 'components/pages/test/2021/0408_pocari/PickUp';
import AboutScene from 'components/pages/test/2021/0408_pocari/AboutScene';
import Footer from 'components/pages/test/2021/0408_pocari/Footer';
// import Gist from 'react-gist';
// import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Layout title='ポカリスウェット'>
        <div className='Index js__pageTop'>
          <Hero />
          <PickUp />
          <AboutScene />
          <Footer />
          {/* ページトップにスクロール */}
          <div className='area-scrollTop js__area-scrollTop fixed invisible opacity-0'>
            <div className='el-scrollTop js__el-scrollTop w-full h-full bg-gray-500 flex justify-center items-center cursor-pointer p-5 rounded-full text-white'>
              ▲
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
