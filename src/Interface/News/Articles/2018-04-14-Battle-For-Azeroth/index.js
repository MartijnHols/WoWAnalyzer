import React from 'react';

import { Zerotorescue } from 'CONTRIBUTORS';
import ImageArticle from '../../ImageArticle';

import BackgroundImage from './Background.jpg';

export default (
  <ImageArticle title="Battle for Azeroth" publishedAt="2018-04-14" publishedBy={Zerotorescue} image={BackgroundImage} style={{ paddingTop: 350 }}>
    Work has started on support for <b>Battle for Azeroth</b>. We continue to need contributions to get all specs compatible with Battle for Azeroth. If you want to help out, join us on <a href="/discord">Discord</a> or see the <a href="https://github.com/WoWAnalyzer/WoWAnalyzer#contributing">instructions on GitHub</a>. Our progress can be followed at <a href="https://bfa.wowanalyzer.com">bfa.wowanalyzer.com</a>.
  </ImageArticle>
);
