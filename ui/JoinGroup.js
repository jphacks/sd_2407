"use strict";

import React from 'react';
import { addRoomData, fetchRoomData } from '../backend/fetch';

// データの追加
const handleSubmit = async (e) => {
  e.preventDefault();
  // ローカルストレージからデータを取得
  const newData = localStorage.getItem("myMeishiData");
  try {
    const docId = await addRoomData("posts", newData);
    console.log("追加成功:", docId);
  } catch (error) {
    console.error("追加エラー:", error);
  }
};

// データの取得
const loadData = async () => {
  try {
    const documents = await fetchRoomData("posts");
    console.log("取得したデータ:", documents);
  } catch (error) {
    console.error("取得エラー:", error);
  }
};

const JoinGroup = () => {
  return(
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