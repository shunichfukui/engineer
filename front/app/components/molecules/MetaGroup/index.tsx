import MetaBasic from '../../seo/MetaBasic';

type Props = {
  pageTitle: string;
  pageDescription: string;
  pageImg: string;
  pagePath: string;
  pageImgWidth: number;
  pageImgHeight: number;
};

const defaultProps = {
  pageImg: {},
};

export const MetaGroup = ({
  pageTitle,
  pageDescription,
  pageImg,
  pagePath,
  pageImgWidth,
  pageImgHeight,
}: Props) => {
  return (
    <>
      <MetaBasic
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pagePath={pagePath}
        pageImg={pageImg}
        pageImgWidth={pageImgWidth}
        pageImgHeight={pageImgHeight}
      />
    </>
  );
};

MetaGroup.defaultProps = defaultProps;

export default MetaGroup;
