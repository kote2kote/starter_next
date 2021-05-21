import LayoutBlank from 'components/layout/LayoutBlank';
// import { test, testResult } from 'lib/util';
// import { useDispatch, useSelector } from 'react-redux'; // 変更用、参照用
// import { getTestState, setTestNum } from 'lib/slices/testSlice';
import Link from 'next/link';
import { useState } from 'react';

export default function Test() {
  const [isOpen, setToggle] = useState(false);
  function changeToggle() {
    setToggle(!isOpen);
  }
  // function test() {
  //   setToggle(!isOpen);
  // }
  // const dispatch = useDispatch(); // 変更用
  // const state = useSelector(getTestState); // state一覧

  if (process.browser) {
    // dispatch(setTestNum(testResult()));
    // window.addEventListener('resize', test);
  }
  return (
    <>
      <LayoutBlank title='Starter'>
        <div className='Starter'>
          <div className='inner min-h-screen pb-24'>
            <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
              タイトル
              {/* <button onClick={() => setToggle(!isOpen)}>1回変えると終わり</button> */}
              <button onClick={() => changeToggle()}>オンオフが可能</button>
            </h2>
            <main>
              <div className='inner px-8'>
                <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
                  {isOpen && 'Hello'}
                  {/* {state.testNum} */}
                </h2>
                <div className='logs__js'></div>

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  h3.c-tail
                </h3>
                <div className=''>test</div>

                <h4 className='c-tail pl-4 py-2 text-xl font-bold relative mb-8 mt-12'>
                  h4.c-tail
                </h4>
                <div className=''>test</div>

                <h5 className='c-tail pl-2 py-2 text-xl font-bold relative mb-8 mt-12'>
                  h5.c-tail
                </h5>
                <div className=''>test</div>

                <h6 className='c-tail text-xl font-bold mb-8 mt-12'>h6.c-tail</h6>
                <div className=''>test</div>
              </div>
            </main>
          </div>
        </div>
      </LayoutBlank>
    </>
  );
}
