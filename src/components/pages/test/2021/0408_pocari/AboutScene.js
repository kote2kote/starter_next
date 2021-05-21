import Head from 'next/head';
import { useState } from 'react';

export default function AboutScene() {
  const [isAboutTab, setAboutTab] = useState(true);
  const [isAboutTabContent, setAboutTabContent] = useState(true);
  const [isSceneTab, setSceneTab] = useState(false);
  const [isSceneTabContent, setSceneTabContent] = useState(false);

  function changeTabs(e) {
    console.log(e);
    e.preventDefault();

    setAboutTab(!isAboutTab);
    setAboutTabContent(!isAboutTabContent);
    setSceneTab(!isSceneTab);
    setSceneTabContent(!isSceneTabContent);
    // if (flag) {

    //   this.flagAboutTab = true;

    //   this.flagAboutTabContent = true;
    //   this.flagSceneTab = false;
    //   this.flagSceneTabContent = false;
    // } else {
    //   this.flagAboutTab = false;
    //   this.flagAboutTabContent = false;
    //   this.flagSceneTab = true;
    //   this.flagSceneTabContent = true;
    // }
  }

  if (process.browser) {
    const rellax = new Rellax('.rellax');
  }
  // function changeToggle() {
  //   setToggle(!isOpen);
  // }

  return (
    <section className='AboutScene'>
      <Head>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js'></script>
      </Head>
      <div className='inner overflow-hidden relative'>
        {/* <!-- area-bg ----------------------------> */}
        {/* クリックするとtranslate3dが追加される不具合発生。原因不明 */}
        <div className='area-bg rellax' data-rellax-speed='10'></div>

        {/* <!-- area-tabs ----------------------------> */}
        <div className='area-tabs absolute top-0 w-full h-full p-12 flex justify-center'>
          <div className='inner w-full h-full bg-gray-200 flex flex-col'>
            <div className='area-tabs-tab'>
              <ul className='flex h-full'>
                <li
                  onClick={changeTabs}
                  className={`el-tabs-about w-6/12 cursor-pointer relative h-full ${
                    isAboutTab && 'is-active'
                  }`}
                >
                  <img
                    className='el-btn-on inline-block absolute'
                    src='https://via.placeholder.com/540x80/000000/ffffff?text=AboutOn'
                    alt=''
                  />
                  <img
                    className='el-btn-off inline-block absolute'
                    src='https://via.placeholder.com/540x80/dddddd/000000?text=AboutOff'
                    alt=''
                  />
                </li>
                <li
                  onClick={changeTabs}
                  className={`el-tabs-scene w-6/12 cursor-pointer relative h-full ${
                    isSceneTab && 'is-active'
                  }`}
                >
                  <img
                    className='el-btn-on inline-block absolute'
                    src='https://via.placeholder.com/540x80/000000/ffffff?text=SceneOn'
                    alt=''
                  />
                  <img
                    className='el-btn-off inline-block absolute'
                    src='https://via.placeholder.com/540x80/dddddd/000000?text=SceneOff'
                    alt=''
                  />
                </li>
              </ul>
            </div>
            {/* <!-- area-tabs-content --> */}
            <div className='area-tabs-content h-full'>
              <div className='inner h-full relative'>
                <div
                  className={`area-tabs-main-about absolute bg-gray-400 flex justify-center items-center w-full h-full ${
                    isAboutTabContent && 'is-active'
                  }`}
                >
                  About
                </div>
                <div
                  className={`area-tabs-main-scene absolute bg-gray-300  flex justify-center items-center w-full h-full ${
                    isSceneTabContent && 'is-active'
                  }`}
                >
                  Scene
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.area-tabs--> */}
      </div>
      {/* <!-- /.inner --> */}
    </section>
  );
}
