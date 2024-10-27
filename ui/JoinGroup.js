"use strict";

import React from 'react';
import { addDataToFirebase, fetchData } from '../backend/fetch';

const handleSubmit = async (e) => {
  e.preventDefault();
  // ローカルストレージからデータを取得
  const myData = localStorage.getItem("myMeishiData");
  const data = JSON.parse(myData);
  try {
    await addDataToFirebase("123456", data);
    console.log("追加成功");
  } catch (error) {
    console.error("追加エラー:", error);
  }
};

// データの取得
const loadData = async () => {
  try {
    const documents = await fetchData("posts");
    console.log("取得したデータ:", documents);
  } catch (error) {
    console.error("取得エラー:", error);
  }
};

const JoinGroup = () => {
  return (
    <div>
      <h1>グループに参加</h1>
      <p>グループIDを入力してください</p>
      <input type="text" id="groupID" />
      <button onClick={handleSubmit}>参加</button>
      <button onClick={loadData}>フェッチ</button>
    </div>
  );
};

export default JoinGroup;