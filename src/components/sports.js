import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Table } from "antd";
import { LiveScores, LiveScoresColuns, theColumns } from "../utils/utils";
import { styles } from "./sports.style";

const { Meta } = Card;
const Sports = () => {
  return (
    <div className="sports-container">
      <div className="sports-container-parent">
        <div className="site-card-border-less-wrapper" style={{display:"flex", flexWrap:"wrap", gap:"25px", width:"100%"}}>
          <Card
            title="Live Score"
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[0].TeamScore}</h2>
              <h2>{LiveScores[1].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
          </Card>
          <Card
            title="Live Score"
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[2].TeamScore}</h2>
              <h2>{LiveScores[3].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
          </Card>
          <Card
            title="Live Score"
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="ant-card-">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[0].TeamScore}</h2>
              <h2>{LiveScores[1].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
            </div>
          </Card>
          <Card
            title="Live Score"
            bordered={true}
            style={{
              width: "48%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                gap: "30px",
              }}
            >
              <p>News Boston</p>
              
              <h2> VS</h2>
              <p>New Orleans</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <h2>{LiveScores[2].TeamScore}</h2>
              <h2>{LiveScores[3].TeamScore}</h2>
            </div>
            <div>
              <Table
                dataSource={LiveScores}
                columns={LiveScoresColuns}
                pagination={false}
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sports;
