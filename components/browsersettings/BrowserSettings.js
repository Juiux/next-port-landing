import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Switch from 'react-switch';
import PrivacySettingsIcon from '../../../../assets/images/browser-settings/privacy-settings.svg';
import adblockIcon from '../../../../assets/images/browser-settings/adblockicon.svg';
import walletSettingsIcon from '../../../../assets/images/browser-settings/walletSettingsIcon.svg';

import blockWalletIcon from '../../../../assets/images/browser-settings/blockWalletIcon.svg';
import metamaskIcon from '../../../../assets/images/browser-settings/metamaskIcon.svg';
import frameIcon from '../../../../assets/images/browser-settings/frame.svg';
import phantomIcon from '../../../../assets/images/browser-settings/phantomIcon.svg';
import solflareIcon from '../../../../assets/images/browser-settings/solflareIcon.svg';
import eternlIcon from '../../../../assets/images/browser-settings/eternlIcon.svg';
import namiIcon from '../../../../assets/images/browser-settings/namiIcon.svg';

import cacheIcon from '../../../../assets/images/browser-settings/cacheIcon.svg';
import cookiesIcon from '../../../../assets/images/browser-settings/cookiesIcon.svg';
import historyIcon from '../../../../assets/images/browser-settings/historyIcon.svg';
import premiumIcon from '../../../../assets/images/premium_other.svg';
import './BrowserSettings.scss';

const { ipcRenderer } = window.require('electron');
const Store = require('electron-store');
const store = new Store();

const BrowserSettings = () => {
    const [checked, setChecked] = useState(store.get('adblock'));
    // const [blockwallet, setBlockWallet] = useState(
    //   store.get('wallet.blockwallet')
    // );
    const [metamask, setMetamask] = useState(false);
    const [frame, setFrame] = useState(false);
    const [metamaskID, setMetamaskID] = useState(store.get('metamask-id'));
    const [frameID, setFrameID] = useState(store.get('frame-id'));
    // const [metamask, setMetamask] = useState(store.get('wallet.metamask'));
    // const [phantom, setPhantom] = useState(store.get('wallet.phantom'));
    // const [solflare, setSolflare] = useState(store.get('wallet.solflare'));
    // const [eternl, setEternl] = useState(store.get('wallet.eternl'));
    // const [nami, setNami] = useState(store.get('wallet.nami'));
    const [cacheClear, setCacheClear] = useState(false);
    const [cookiesClear, setCookiesClear] = useState(false);
    const [historyClear, setHistoryClear] = useState(false);
    const [versions, setVersions] = useState([]);
    const activeTab = useSelector(state => state.dashboard.activeTab);

    useEffect(() => {
        setCacheClear(false);
        setCookiesClear(false);
        setHistoryClear(false);
    }, [activeTab]);

    useEffect(() => {
        ipcRenderer.send('readVersionFile');
        ipcRenderer.on('versionData', (event, arg) => {
            if (arg?.status === 'error') {
                setVersions('');
            } else {
                setVersions(arg.split('\n'));
            }
        });
    }, []);

    const getExtension = async () => {
        const response = await ipcRenderer.invoke('get-extensions');
        console.log(response);
        // Check If Metamask is Enabled
        const isMetamask = response.find(item => item.name === 'MetaMask');
        if (isMetamask) {
            // setMetamaskID(isMetamask.id);
            store.set('metamask-id', isMetamask.id);
            console.log(store.get('metamask-id'));
            setMetamask(true);
        } else {
            setMetamask(false);
        }
        // Check If Frame is Enabled
        const isFrame = response.find(item => item.name === 'Frame Companion');
        if (isFrame) {
            // setFrameID(isFrame.id);
            store.set('frame-id', isFrame.id);
            setFrame(true);
        } else {
            setFrame(false);
        }
    };

    useEffect(() => {
        getExtension();
    }, []);

    const handleAdBlockSwitch = nextChecked => {
        setChecked(nextChecked);
        store.set('adblock', nextChecked);
        ipcRenderer.send('adblock', { status: nextChecked });
    };
    // const handleBlockWalletEnable = (nextChecked) => {
    //   setBlockWallet(nextChecked);
    //   store.set('wallet.blockwallet', nextChecked);
    //   // ipcRenderer.send('blockwallet', { status: nextChecked });
    // };
    const handleMetamaskEnable = nextChecked => {
        ipcRenderer.send('extension-listener', {
            status: nextChecked,
            extension: 'metamask',
            id: store.get('metamask-id'),
        });
        setMetamask(nextChecked);
    };

    const handleFrameEnable = nextChecked => {
        ipcRenderer.send('extension-listener', {
            status: nextChecked,
            extension: 'frame',
            id: store.get('frame-id'),
        });
        setFrame(nextChecked);
    };
    // const handlePhantomEnable = (nextChecked) => {
    //   setPhantom(nextChecked);
    //   store.set('wallet.phantom', nextChecked);
    //   // ipcRenderer.send('phantom', { status: nextChecked });
    // };
    // const handleSolflareEnable = (nextChecked) => {
    //   setSolflare(nextChecked);
    //   store.set('wallet.solflare', nextChecked);
    //   // ipcRenderer.send('solflare', { status: nextChecked });
    // };
    // const handleEternlEnable = (nextChecked) => {
    //   setEternl(nextChecked);
    //   store.set('wallet.eternl', nextChecked);
    //   // ipcRenderer.send('eternl', { status: nextChecked });
    // };
    // const handleNamiEnable = (nextChecked) => {
    //   setNami(nextChecked);
    //   store.set('wallet.nami', nextChecked);
    //   // ipcRenderer.send('nami', { status: nextChecked });
    // };
    const onClearCache = () => {
        ipcRenderer.send('clear-cache', { status: !cacheClear });
        setCacheClear(true);
    };

    const onClearCookies = () => {
        ipcRenderer.send('clear-cookies', { status: !cookiesClear });
        setCookiesClear(true);
    };

    const onClearHistory = () => {
        ipcRenderer.send('clear-history', { status: !historyClear });
        setHistoryClear(true);
    };

    return (
        <div className='browsersettings'>
            <div className='browsersettings__privacybox'>
                <div className='browsersettings__header'>
                    <img src={PrivacySettingsIcon} alt='PrivacySettingsIcon' />
                    <h5>Privacy and Security</h5>
                </div>
                <div className='browsersettings__box'>
                    <ul>
                        <li>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <div className='icon'>
                                        <img
                                            src={adblockIcon}
                                            alt='adblockIcon'
                                        />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>
                                            Block Ads & Trackers in Browser
                                            <img
                                                className='premium_icon'
                                                src={premiumIcon}
                                            />
                                        </h4>

                                        <h6>
                                            Block all ads within the MASQ
                                            browser for a better experience
                                        </h6>
                                    </div>
                                </div>
                                <div className='switchBox'>
                                    <p
                                        className={classNames({
                                            switchBox__active: !checked,
                                        })}
                                    >
                                        OFF
                                    </p>
                                    <Switch
                                        onChange={handleAdBlockSwitch}
                                        checked={checked}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        className={classNames('mx-2', {
                                            disabled: !checked,
                                            enabled: checked,
                                        })}
                                    />
                                    <p
                                        className={classNames({
                                            switchBox__active: checked,
                                        })}
                                    >
                                        ON
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='icon'>
                                        <img src={cacheIcon} alt='cacheIcon' />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Clear your Cache</h4>
                                        <h6>
                                            Clear all sites cached data,
                                            including images and other site
                                            files.
                                        </h6>
                                    </div>
                                </div>
                                <div>
                                    {cacheClear ? (
                                        <p className='cleared'>Cleared!</p>
                                    ) : (
                                        <p
                                            className='clear'
                                            onClick={onClearCache}
                                        >
                                            Clear
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='icon'>
                                        <img
                                            src={historyIcon}
                                            alt='historyIcon'
                                        />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Clear your History</h4>
                                        <h6>
                                            Only the last x pages back and x
                                            pages forward are stored.
                                        </h6>
                                    </div>
                                </div>
                                <div>
                                    {historyClear ? (
                                        <p className='cleared'>Cleared!</p>
                                    ) : (
                                        <p
                                            className='clear'
                                            onClick={onClearHistory}
                                        >
                                            Clear
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='icon'>
                                        <img
                                            src={cookiesIcon}
                                            alt='cookiesIcon'
                                        />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Clear your Cookies</h4>
                                        <h6>
                                            Clear cookies stored across any site
                                            you’ve browsed.
                                        </h6>
                                    </div>
                                </div>
                                <div>
                                    {cookiesClear ? (
                                        <p className='cleared'>Cleared!</p>
                                    ) : (
                                        <p
                                            className='clear'
                                            onClick={onClearCookies}
                                        >
                                            Clear
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='browsersettings__header'>
                    <img src={walletSettingsIcon} alt='walletSettingsIcon' />
                    <h5>Enable/Disable Browser Wallets</h5>
                </div>
                <div className='browsersettings__box'>
                    <ul>
                        {/* <li>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="icon">
                    <img
                      className="walletIcon"
                      src={blockWalletIcon}
                      alt="blockWalletIcon"
                    />
                  </div>
                  <div className="ms-3">
                    <h4>Blockwallet</h4>
                    <h6>
                      Privacy-based Wallet with transaction mixing on
                      Ethereum/Polygon.
                    </h6>
                  </div>
                </div>
                <div className="switchBox">
                  <p
                    className={classNames({
                      switchBox__active: !blockwallet,
                    })}
                  >
                    OFF
                  </p>
                  <Switch
                    onChange={handleBlockWalletEnable}
                    checked={blockwallet}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className={classNames('mx-2', {
                      disabled: !blockwallet,
                      enabled: blockwallet,
                    })}
                  />
                  <p
                    className={classNames({
                      switchBox__active: blockwallet,
                    })}
                  >
                    ON
                  </p>
                </div>
              </div>
            </li> */}

                        <li>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <div className='icon'>
                                        <img
                                            className='walletIcon'
                                            src={metamaskIcon}
                                            alt='metamaskIcon'
                                        />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Metamask</h4>
                                        <h6>
                                            The most popular wallet of choice
                                            for Ethereum/Polygon with built in
                                            swaps.
                                        </h6>
                                    </div>
                                </div>
                                <div className='switchBox'>
                                    <p
                                        className={classNames({
                                            switchBox__active: !metamask,
                                        })}
                                    >
                                        OFF
                                    </p>
                                    <Switch
                                        onChange={handleMetamaskEnable}
                                        checked={metamask}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        className={classNames('mx-2', {
                                            disabled: !metamask,
                                            enabled: metamask,
                                        })}
                                    />
                                    <p
                                        className={classNames({
                                            switchBox__active: metamask,
                                        })}
                                    >
                                        ON
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <div className='icon'>
                                        <img
                                            className='walletIcon'
                                            src={frameIcon}
                                            alt='metamaskIcon'
                                        />
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Frame</h4>
                                        <h6>
                                            A privacy focused Ethereum wallet
                                            that runs natively on macOS, Windows
                                            and Linux
                                        </h6>
                                    </div>
                                </div>
                                <div className='switchBox'>
                                    <p
                                        className={classNames({
                                            switchBox__active: !frame,
                                        })}
                                    >
                                        OFF
                                    </p>
                                    <Switch
                                        onChange={handleFrameEnable}
                                        checked={frame}
                                        checkedIcon={false}
                                        uncheckedIcon={false}
                                        className={classNames('mx-2', {
                                            disabled: !frame,
                                            enabled: frame,
                                        })}
                                    />
                                    <p
                                        className={classNames({
                                            switchBox__active: frame,
                                        })}
                                    >
                                        ON
                                    </p>
                                </div>
                            </div>
                        </li>

                        {/* <li>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="icon">
                    <img
                      className="walletIcon"
                      src={phantomIcon}
                      alt="phantomIcon"
                    />
                  </div>
                  <div className="ms-3">
                    <h4>Phantom</h4>
                    <h6>
                      The most popular wallet of choice for transacting on the
                      Solana blockchain.
                    </h6>
                  </div>
                </div>
                <div className="switchBox">
                  <p
                    className={classNames({
                      switchBox__active: !phantom,
                    })}
                  >
                    OFF
                  </p>
                  <Switch
                    onChange={handlePhantomEnable}
                    checked={phantom}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className={classNames('mx-2', {
                      disabled: !phantom,
                      enabled: phantom,
                    })}
                  />
                  <p
                    className={classNames({
                      switchBox__active: phantom,
                    })}
                  >
                    ON
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="icon">
                    <img
                      className="walletIcon"
                      src={solflareIcon}
                      alt="solflareIcon"
                    />
                  </div>
                  <div className="ms-3">
                    <h4>Solflare</h4>
                    <h6>
                      A wallet alternative used to transact on the Cardano
                      blockchain.
                    </h6>
                  </div>
                </div>
                <div className="switchBox">
                  <p
                    className={classNames({
                      switchBox__active: !solflare,
                    })}
                  >
                    OFF
                  </p>
                  <Switch
                    onChange={handleSolflareEnable}
                    checked={solflare}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className={classNames('mx-2', {
                      disabled: !solflare,
                      enabled: solflare,
                    })}
                  />
                  <p
                    className={classNames({
                      switchBox__active: solflare,
                    })}
                  >
                    ON
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="icon">
                    <img
                      className="walletIcon"
                      src={eternlIcon}
                      alt="eternlIcon"
                    />
                  </div>
                  <div className="ms-3">
                    <h4>Eternl</h4>
                    <h6>
                      A wallet used to transact on the Cardano blockchain.
                    </h6>
                  </div>
                </div>
                <div className="switchBox">
                  <p
                    className={classNames({
                      switchBox__active: !eternl,
                    })}
                  >
                    OFF
                  </p>
                  <Switch
                    onChange={handleEternlEnable}
                    checked={eternl}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className={classNames('mx-2', {
                      disabled: !eternl,
                      enabled: eternl,
                    })}
                  />
                  <p
                    className={classNames({
                      switchBox__active: eternl,
                    })}
                  >
                    ON
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="icon">
                    <img className="walletIcon" src={namiIcon} alt="namiIcon" />
                  </div>
                  <div className="ms-3">
                    <h4>Nami</h4>
                    <h6>
                      An up-and-coming wallet used to transact on the Cardano
                      blockchain.
                    </h6>
                  </div>
                </div>
                <div className="switchBox">
                  <p
                    className={classNames({
                      switchBox__active: !nami,
                    })}
                  >
                    OFF
                  </p>
                  <Switch
                    onChange={handleNamiEnable}
                    checked={nami}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    className={classNames('mx-2', {
                      disabled: !nami,
                      enabled: nami,
                    })}
                  />
                  <p
                    className={classNames({
                      switchBox__active: nami,
                    })}
                  >
                    ON
                  </p>
                </div>
              </div>
            </li> */}
                    </ul>
                </div>

                {versions === '' ? (
                    <>
                        <div className='browsersettings__version mt-2'>
                            Node version: undetected
                        </div>
                        <div className='browsersettings__version mt-1'>
                            UI version: undetected
                        </div>
                    </>
                ) : (
                    <>
                        {versions?.map((item, index) => {
                            return (
                                <div
                                    className='browsersettings__version mt-1'
                                    key={index}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default BrowserSettings;
