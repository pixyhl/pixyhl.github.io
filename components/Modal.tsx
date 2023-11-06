"use client";
import React from "react";

export function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-slate-600 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        DISCLAIMER
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  DISCLAIMER
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto max-h-80 overflow-y-scroll my-4 text-blueGray-500 text-lg leading-relaxed">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  The content shared on this website is <strong>NOT investment advice</strong> and we are not a financial advisor. The material and the resources shared are <strong>for educational purposes only</strong>. Always do your own research and only execute trades based on your own personal judgement.
                  </p><p>Government Required Risk Disclaimer and Disclosure Statement</p>
<p>CFTC RULE 4.41 – HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN</p>
<p>Trading performance displayed herein is hypothetical. Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance trading results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all of which can adversely affect actual trading results.</p>
<p>U.S. Government Required Disclaimer – Commodity Futures Trading Commission Futures and Options trading has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the futures and options markets. Don’t trade with money you can’t afford to lose. This is neither a solicitation nor an offer to Buy/Sell futures or options. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this web site. The past performance of any trading system or methodology is not necessarily indicative of future results.</p>
<p>Trade at your own risk. The information provided here is of the nature of a general comment only and neither purports nor intends to be, specific trading advice. It has been prepared without regard to any particular person’s investment objectives, financial situation and particular needs. Information should not be considered as an offer or enticement to buy, sell or trade.</p>
<p>You should seek appropriate advice from your broker, or licensed investment advisor, before taking any action. Past performance does not guarantee future results. Simulated performance results contain inherent limitations. Unlike actual performance records the results may under or over compensate for such factors such as lack of liquidity. No representation is being made that any account will or is likely to achieve profits or losses to those shown.</p>
<p>The risk of loss in trading can be substantial. You should therefore carefully consider whether such trading is suitable for you in light of your financial condition.</p>
<p>If you purchase or sell Equities, Futures, Currencies or Options you may sustain a total loss of the initial margin funds and any additional funds that you deposit with your broker to establish or maintain your position. If the market moves against your position, you may be called upon by your broker to deposit a substantial amount of additional margin funds, on short notice in order to maintain your position. If you do not provide the required funds within the prescribed time, your position may be liquidated at a loss, and you may be liable for any resulting deficit in your account.</p>
<p>Under certain market conditions, you may find it difficult or impossible to liquidate a position. This can occur, for example, when the market makes a “limit move.” The placement of contingent orders by you, such as a “stop-loss” or “stop-limit” order, will not necessarily limit your losses to the intended amounts, since market conditions may make it impossible to execute such orders.</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Acknowledged
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}