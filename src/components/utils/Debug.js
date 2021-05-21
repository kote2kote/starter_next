export default function Debug() {
  return (
    <>
      <div className='debug bg-white text-red-500 absolute top-0 px-1 text-xs font-bold'>
        <span className='is-maxtb'>maxtb:0</span>
        <span className='is-tbpc'>tb:520</span>
        <span className='is-pc'>pc:960</span>
        <span className='is-maxsm'>maxsm:0</span>
        <span className='is-smmd'>sm:620</span>
        <span className='is-mdlg'>md:768</span>
        <span className='is-lgxl'>lg:1024</span>
        <span className='is-xlwide'>xl:1280</span>
        <span className='is-wide'>wide:1536</span>
      </div>
    </>
  );
}
