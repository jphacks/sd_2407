//import { Group_outputInfo } from './Group_outputInfo.js';
//mytags = Group_outputInfo();

Find_Smilarity(mytags,yourtags)
{
  const similarity = 0.0;
  //2つの配列の共通要素を出力   ex(この場合):[index:2 mytags:x, yourtags:y]
  const result = compareArrays(mytags, yourtags);
  //分子 = yourtagsとの共通個数+mytagsとの共通個数/mytagsの長さ+yourtags長さ
  //最後に2で割っていい感じになってほしい
  similarity = (result[1]+result[2]/mytags.length+yourtags.length)/2.0 ;
  return similarity*100;
}