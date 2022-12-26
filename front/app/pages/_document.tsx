import MetaGroup from "@/components/molecules/MetaGroup";
import { Html, Main, NextScript } from "next/document"

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <MetaGroup
        pageTitle={'テスト'}
        pageDescription={'テスト'}
        pageImg={
          'https://images.microcms-assets.io/assets/6064d31a766f40d6b80794727941f1ae/cfa2c6a78aa6478195ae60bd739a3041/sample-2.png'
        }
        pageImgWidth={1280}
        pagePath={''}
        pageImgHeight={960}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument