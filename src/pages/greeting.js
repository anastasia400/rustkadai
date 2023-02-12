import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const title = 'greeting page';
  const message = 'MainPageへ.';

  // style属性に設定するデザイン
  const h1 = {
    textAlign: 'right',
    padding: '5px 15px',
  };
  const p = {
    textAlign: 'left',
    margin: '0px 5px',
    color: '#669',
    fontSize: '18pt',
  };
  const subtitle = {
    textAlign: 'center',
    margin: '0px 5px',
    color: '#99d',
    fontSize: '24pt',
    fontWeight: 'bold',
  };

  return (
    <div>
      {/* HTMLファイルのheadタグの内容を、Headコンポーネントに記述します。 */}
      <Head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
      </Head>

      {/* style属性のデザイン */}
      <h1 className="bg-primary text-white display-4" style={h1}>
        React
      </h1>
      <div className="container">
        <h4 className="my-3" style={subtitle}>
          {title}
        </h4>
        <div className="alert alert-primary text-center">
          <p className="h5" style={p}>
            {message}.
          </p>
          <Link href="/">Go to Main page &gt;&gt;</Link>
        </div>
        <p>こんにちは 僕サッカーが好きなので一番好きな選手を紹介します</p>
        <Image src="/image/ibura.jpg" width={400} height={440} />
        <p>彼はズラタン・イブラヒモビッチ選手です</p>
        <p>彼は身長が195㎝ありもう40歳になりますが現在も現役でサッカーをしています。
          他の人にはマネできないテコンドー上がりの空中戦いが魅力です</p>
      </div>
    </div>
  );
}