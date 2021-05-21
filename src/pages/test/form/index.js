import LayoutBlank from 'components/layout/LayoutBlank';
import Gist from 'react-gist';
import Link from 'next/link';

export default function Starter() {
  return (
    <>
      <LayoutBlank title='Starter'>
        <div className='Starter'>
          <div className='inner min-h-screen pb-24'>
            <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
              Imagesを試す
            </h2>

            <main>
              <div className='inner px-8'>
                <h2 className='c-tail flex flex-row items-center bg-gray-900 pl-6 pt-3 pb-3 pr-3 mb-8 border-b-2 font-semibold text-3xl text-white'>
                  メモ
                </h2>
                <div className='mb-4'>
                  ここはメモ
                  {/* <p>現役新聞記者が部内で使ってる便利リンク集を公開したとのこと。このリンク集は</p>
                  <ul className='list-disc pl-4 mb-4'>
                    <li>文章を扱う企業はどこも役立つリンクである。</li>
                    <li>専門職である人を介しているので信用性が高い。</li>
                    <li>実際業務で使っている。</li>
                  </ul>
                  <p>
                    このような性質を持っており、リンク集自体が価値のある情報コンテンツだと感じました。
                    <br />
                    昨今、検索エンジンの質がよろしくないだとかチラホラ耳にしてはいたので、役立つサイトを見つける手段の一つになればいいなぁと。で、着手しました。
                  </p> */}
                </div>

                <h3 className='c-tail border border-black pl-4 pt-2 pb-2 pr-2 mb-8 mt-12 font-bold text-3xl'>
                  h3.c-tail
                </h3>
                <div className='flex maxpc:flex-col'>
                  <div className='w-full pc:w-6/12 pc:mr-1'>
                    form-inputなし
                    <input
                      type='text'
                      className='mt-1 block w-full'
                      placeholder='john@example.com'
                    />
                    form-inputあり(フォームデザインのリセット)
                    <input
                      type='text'
                      className='form-input mt-1 block w-full'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div className='w-full maxpc:mt-2 pc:w-6/12 pc:ml-1 cm'>
                    {/* <Gist id='4cf00b5a1d7cb62aa7bed5ab922a893e' /> */}

                    <Link href='https://gist.github.com/'>
                      <a target='_blank'>ここにgistソース</a>
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
