import LayoutBlank from 'components/layout/LayoutBlank';
import Gist from 'react-gist';
import Link from 'next/link';
// import { useState } from 'react';

const title = 'Starter';
export default function Starter() {
  // const [isActive, setToggle] = useState(true);
  // function changeToggle() {
  //   setToggle(!isActive);
  // }

  if (process.browser) {
    // dispatch(setTestNum(testResult()));
    // window.addEventListener('resize', test);
  }
  return (
    <>
      <LayoutBlank title={title}>
        <div className='Starter'>
          <div className='inner min-h-screen pb-24'>
            <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
              {title}
            </h2>

            <main>
              <div className='inner px-8'>
                <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
                  Imagesを試す
                </h2>
                <div className='mb-4'>ここはメモ</div>

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  h3.c-tail
                </h3>
                <div className='flex maxpc:flex-col'>
                  <div className='w-full pc:w-6/12 pc:mr-1'>ここにテスト要素</div>

                  <div className='w-full maxpc:mt-2 pc:w-6/12 pc:ml-1'>
                    <Gist id='4cf00b5a1d7cb62aa7bed5ab922a893e' />

                    <Link href='https://gist.github.com/'>
                      <a className='underline' target='_blank'>
                        ここにgistソース
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </LayoutBlank>
    </>
  );
}
