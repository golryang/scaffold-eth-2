"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import {EtherInput, RainbowKitCustomConnectButton} from "~~/components/scaffold-eth";
import {useState} from "react";
import {Hero, ISelectProps, OptionProps, Select} from "@web3uikit/core";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const [walletConnected, setWalletConnected] = useState<boolean>(true);

  const [symbolList, setSymbolList] = useState<OptionProps[]>(initSymbolList);
  const [paySymbol, setPaySymbol] = useState<ISelectProps['value']>('ETH')
  const [receiveSymbol, setReceiveSymbol] = useState<ISelectProps['value']>('Seoul')

  const [payAmount, setPayAmount] = useState<string>("0");
  const [receiveAmount2, setReceiveAmount2] = useState<string>("0");

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
          <div className={'flex flex-col gap-y-4'}>
              <Hero backgroundColor={'#4A4A4A'}>
                  <h3 className='text-white font-extrabold'>You Pay</h3>
                  <div className='flex'>
                        <EtherInput  value={payAmount} onChange={(v) => setPayAmount(v)}/>
                      <Select width={'fit-content'} style={{marginLeft:'12px'}} name='Select Pay Symbol'  defaultOptionIndex={0}
                              id="Select Pay Symbol"
                              onChange={(v) => {console.log(v)}}
                              value={paySymbol}
                              options={symbolList}/>
                              </div>
                              </Hero>
              <Hero backgroundColor={'#4A4A4A'}>
                      <h3 className='text-white font-extrabold'>You Receive</h3>
                  <div className='flex'>
                          <EtherInput value={receiveAmount2} onChange={(v) => setReceiveAmount2(v)}/>
                          <Select width={'fit-content'} style={{marginLeft:'12px'}} name='Select Receive Symbol'  defaultOptionIndex={0}
                                  id="Select Receive Symbol"
                                  onBlurTraditional={function noRefCheck(){}}
                                  onChange={function noRefCheck(){}}
                          onChangeTraditional={function noRefCheck(){}}
                          value={receiveSymbol}
                          options={symbolList}/>
                  </div>
              </Hero>
              {walletConnected ? (
                  <button className={`cursor-pointer font-extrabold text-xl px-4 text-accent h-16 bg-white border border-sky-500 rounded-2xl`}
                    onClick={() => {}}>Swap</button>) :  (<RainbowKitCustomConnectButton/>)}
          </div>
      </div>
    </>
  );
};

const initSymbolList = [
    {
        id: 'ETH',
        label: 'ETH',
        // prefix: <SvgDiscord fill="#68738D" />
    },
    {
        id: 'SEOUL',
        label: 'SEOUL',
        // prefix: <SvgDiscord fill="#68738D" />
    },
    {
        id: 'emoji',
        label: 'Emoji',
        // prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
    },
    {
        id: 'dapp',
        label: 'dApp',
        // prefix: <SvgServer fill="#68738D" />
    }]

export default Home;
