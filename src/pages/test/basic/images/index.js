import LayoutBlank from 'components/layout/LayoutBlank';
import Image from 'next/image';
import Gist from 'react-gist';
// import Link from 'next/link';

export default function Starter() {
  return (
    <>
      <LayoutBlank title='Starter'>
        <div className='Starter'>
          <div className='inner min-h-screen pb-24'>
            <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
              タイトル
            </h2>
            <main>
              <div className='inner px-8'>
                <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
                  h2.c-tail
                </h2>

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  h3.c-tail
                </h3>
                <div className='flex'>
                  <div className='w-6/12'>
                    {/* https://nextjs.org/docs/api-reference/next/image */}
                    {/* https://www.forcia.com/blog/001561.html */}
                    <Image
                      src='/static/images/test2.jpg'
                      alt=''
                      width={100}
                      height={100}
                      // layout='fixed'
                      // layout='intrinsic'
                      // layout='fill'
                      // objectFit='cover'
                      layout='responsive'
                      // objectFit='none'
                    />
                  </div>

                  <div className='w-6/12'>
                    <Gist id='4cf00b5a1d7cb62aa7bed5ab922a893e' />
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
