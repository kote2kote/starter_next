import LayoutBlank from 'components/layout/LayoutBlank';
import { useDispatch, useSelector } from 'react-redux'; // 変更用、参照用
import { getState, setWindowSize, changeWindowSize } from 'lib/slices/commonSlice'; // レスポンシブutil

export default function Starter() {
  const dispatch = useDispatch(); // 変更用
  const state = useSelector(getState); // state一覧

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

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  {state.windowSizeX}
                </h3>
                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  {state.windowSizeX > state.bp.tb && 'isPC'}
                  {state.bp.tb > state.windowSizeX && 'isTB'}
                </h3>
              </div>
            </main>
          </div>
        </div>
      </LayoutBlank>
    </>
  );
}
