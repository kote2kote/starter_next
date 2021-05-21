import Head from 'next/head';

export default function LayoutBlank({ children, title = '' }) {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
