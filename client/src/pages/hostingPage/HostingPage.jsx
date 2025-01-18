import React from 'react'
import styles from './HostingPage.module.css'
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { cricketMatch } from "../../utils/Api"


const HostingPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <h1>LoGo</h1>
      </div>
      <div className={styles.cameraContainer}>
        <h1>Camera</h1>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.firstDataContainer}>
          {/* Bat container start */}
          <div className={styles.runsContainer}>
            <div className={styles.runcontainerfirstBox}>
              <button ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>231/2</div>
              <button><FaPlus className={styles.plusicon} /></button>
            </div>
            <div className={styles.extrabolscontainer}>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>6</button>
              <button>Out</button>
            </div>
          </div>
          {/* Bat container END */}
          {/* Boals container start */}
          <div className={styles.runsContainer}>
            <div className={styles.runcontainerfirstBox}>
              <button ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>12.5</div>
              <button><FaPlus className={styles.plusicon} /></button>
            </div>
            <div className={styles.extrabolscontainer}>
              <button>No</button>
              <button>wi</button>
              <button>Fhit</button>
            </div>
          </div>
          {/* Boals container end */}
          {/* current batters name  start*/}
          <div className={styles.currentBatterContainer}>
            <h2 className={styles.currentbattheading}>Currents Batters</h2>
            <div className={styles.player1container}>
              <h2>Ms Dhoni</h2>
              <div>135</div>
            </div>
            <div className={styles.player1container}>
              <h2>virat kholi</h2>
              <div>235</div>
            </div>
          </div>
          {/* current batters name End */}
          {/* current bolwer name ------*/}
          <div className={styles.currentBatterContainer}>
            <h2 className={styles.currentbattheading}>Currents Bowler</h2>
            <div className={styles.player1container}>
              <h2>Ms Dhoni</h2>
              <div>2.3</div>
              <div>80</div>
            </div>

          </div>
        </div>
        <div className={styles.SecondDataContainer}>
          {
            cricketMatch.teams.map((item, i) => (
              <div key={i} className={styles.teamContainer}>
                <h3>Team : {item.teamName}</h3>
                <div className={styles.playerlistContainer}>
                  {
                    item.players.map((player, j) => (
                      <div key={j} className={styles.playerNameContainer}>
                        <p>{player.name}</p>
                        <div><HiMinus className={styles.playerIcon} /></div>
                        <div><FaPlus className={styles.playerIcon} /></div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HostingPage





