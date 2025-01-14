"use strict";

import React from 'react';
import { addDataToExistingRoom, fetchData } from '../backend/fetch';
import { useNavigate } from 'react-router-dom';
import styles from './JoinGroup.css';
import styles1 from "../JoinGroup.module.css";

const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const id = form.get("id") || "";
  // ローカルストレージに保存
  localStorage.setItem("groupId", id);
  handleSubmit(id);
  const navigate = useNavigate();
  navigate("/result");
};

const handleSubmit = async (id) => {
  // event.preventDefault();
  // ローカルストレージからデータを取得
  const myData = localStorage.getItem("myMeishiData");
  const data = JSON.parse(myData);
  try {
    await addDataToExistingRoom(id, data);
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
    <div className={styles1.button__Join}>

      <div className={styles1.button_Sa}>
        <h1>グループに参加</h1>
        <p>グループIDを入力してください</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="id" />
          <button type="submit">参加する</button>
        </form>
        {/* <button onClick={loadData}>フェッチ</button> */}
      </div>

    </div>
  );
};

export default JoinGroup;