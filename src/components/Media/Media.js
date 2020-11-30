import React from 'react';
import CoinTelegraphLogo from '../../assets/Cointelegraph-logo.png';
import DecryptLogo from '../../assets/Decrypto-logo.png';
import CryptoNinjasLogo from '../../assets/CryptoNinjas-logo.png';
import MediumLogo from '../../assets/Medium-logo.png';
import CryptoTickerLogo from '../../assets/CryptoTicker-logo.png';
import BaiduBlogLogo from '../../assets/BaiduBlog-logo.png';
import CryptoDivisasLogo from '../../assets/CryptoDivisas-logo.png';
import ChainNewsLogo from '../../assets/ChainNews-logo.svg';

import { withTranslations } from '../../services/Translations/Translations';

import './Media.css';

class Media extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'media'}>
        <div className={'wrapper'}>
          <div className={'content'}>
            <div className={'title'}>
              { this.props.excerpt('media.title', this.props.language) }
            </div>
            <div className={'publicationsWrapper'}>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'https://medium.com/dmm-dao/billionaire-tim-drapers-venture-studio-purchases-stake-in-dmm-dao-2b75c2de5fed'}><img src={MediumLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'https://cointelegraph.com/news/billionaire-tim-draper-sees-potential-in-defi-and-backs-new-dao'}><img src={CoinTelegraphLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'https://www.cryptoninjas.net/2020/03/16/draper-goren-holm-ventures-purchases-stake-in-defi-money-market-dao/'}><img src={CryptoNinjasLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'https://cryptoticker.io/en/chainlink-dmm-defi/'}><img src={CryptoTickerLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'http://baijiahao.baidu.com/s?id=1660223157350871842'}><img src={BaiduBlogLogo}/></a>
                </div>
              </div>
              <div className={'publication'}>
                <div className={'publicationInner'}>
                  <a href={'https://www.chainnews.com/articles/941813846721.htm'}><img src={ChainNewsLogo}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslations(Media);
