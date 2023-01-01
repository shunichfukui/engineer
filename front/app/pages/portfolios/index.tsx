import React from "react";
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { TPortfolio } from "types";
import { ApiV1PortfoliosPath } from "utils/atoms";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PortfolioIndex: NextPage<Props> = (props) => {
  const renderPortfolioContents = () => {
    if (props.portfolios.length < 1) return null

    return (
      <ul>
        {props.portfolios.map((portfolio) =>
          <li key={portfolio.id}>
            <p>{portfolio.id}.</p>
            <p>{portfolio.title}</p>
          </li>
        )}
      </ul>
    )
  }

  return (
    <div>
      <h2>ポートフォリオ一覧</h2>
      {renderPortfolioContents()}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch(ApiV1PortfoliosPath(), {method: "GET"});
  const portfolios: TPortfolio[] = await response.json();

  return {
    props: {
      portfolios: portfolios.length > 0 ? portfolios : []
    },
    revalidate: 10,
  };
};

export default PortfolioIndex;