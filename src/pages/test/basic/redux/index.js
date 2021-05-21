import LayoutBlank from 'components/layout/LayoutBlank';
import { useDispatch, useSelector } from 'react-redux'; // 変更用、参照用
import { getTestState, changeHello } from 'lib/slices/testSlice'; // テスト用
import { getState, setWindowSize, changeWindowSize } from 'lib/slices/commonSlice'; // レスポンシブutil

export default function Starter() {
  const dispatch = useDispatch(); // 変更用
  const state = useSelector(getTestState); // state一覧
  const stateCommon = useSelector(getState); // state一覧

  function dispatchChangeHello(event) {
    dispatch(changeHello(event.target.value));
  }
  function dispatchSetWindowSize() {
    dispatch(setWindowSize());
  }

  if (process.browser) {
    dispatch(changeWindowSize(window.innerWidth));
    window.addEventListener('resize', dispatchSetWindowSize);
  }

  return (
    <>
      <LayoutBlank title='Starter'>
        <div className='Starter'>
          <div className='inner min-h-screen pb-24'>
            <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
              Redux
            </h2>
            <main>
              <div className='inner px-8'>
                <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
                  解説
                </h2>
                <div className='logs__js'>
                  ■Reduct Tool Kit
                  <br />
                  npm i react-redux @reduxjs/toolkit @nano-sql/core
                  <br />
                  <br />
                  ■はじめからRedux付きで行く場合
                  <br />
                  create-next-app --example with-redux my-app
                  <br />
                </div>
                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  Reduxを使用して出力 → {state.test}
                </h3>

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  {state.hello}
                </h3>
                <div className=''>
                  <button
                    onClick={dispatchChangeHello}
                    className='border bg-blue-500 text-white font-bold inline-block mr-4 px-6 py-2 rounded-md'
                    value='ラーメン'
                  >
                    ラーメン
                  </button>
                </div>
                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  {stateCommon.windowSizeX}
                </h3>
                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  {stateCommon.windowSizeX > stateCommon.bp.tb &&
                    stateCommon.bp.lg > stateCommon.windowSizeX &&
                    'isMDLG'}
                </h3>
              </div>
            </main>
          </div>
        </div>
      </LayoutBlank>
    </>
  );
}
