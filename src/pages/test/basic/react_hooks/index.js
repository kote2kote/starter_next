import LayoutBlank from 'components/layout/LayoutBlank';
import { useState } from 'react';

const Title = 'React Hooks';
export default function TestStarter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => setToggle(!toggle);
  console.log(toggle);
  const toggleText = toggle ? 'true' : 'false';

  return (
    <LayoutBlank title='TestStarter'>
      <div className='TestStarter pb-12'>
        <div className='inner'>
          <h2 className='c-tail'>{Title}</h2>
          <main className='main'>
            <div className='inner px-8'>
              {/* テストここから */}
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
              <p>You clicked toggles: {toggleText}</p>
              <button onClick={() => changeToggle()}>Click me</button>
            </div>
          </main>
        </div>
      </div>
    </LayoutBlank>
  );
}
