import React, { useEffect, useState } from 'react'
import styles from './HostingPage.module.css'
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { cricketMatchh } from "../../utils/Api"


const HostingPage = () => {

  const [teamSelect, setTeamSelect] = useState(0)
  const [whichBatter, setwhichBatter] = useState(0)
  const [playerSelect, setPlayerSelect] = useState(true)
  const [bowlercontainer, setbowlercontainer] = useState(true)
  const [playerName1, setPlayerName1] = useState(0)
  const [playerName2, setPlayerName2] = useState(0)
  const [bowlerName, setbowlerName] = useState(0)
  const [teamA, setteamA] = useState(null)
  const [cricketMatch, setcricketMatch] = useState(cricketMatchh)

  
  

  const handelteamSelect = (i) => {
    setTeamSelect(i)
  }
  const handelWhichBatter = () => {
    setwhichBatter(0)
  }
  const handelWhichBattersecond = () => {
    setwhichBatter(1)
  }

  const handelPlayercontainerOprnbtn = (data) => {
    setPlayerSelect((prev) => !prev)
    setteamA(data);

  }
  const handelBowlerbtn = () => {
    setbowlercontainer(pre => !pre)
  }
  const closeDrawer1 = (i) => {
    setPlayerSelect((prev) => !prev)
    setPlayerName1(i)
  }
  const closeDrawer2 = (i) => {
    setPlayerSelect((prev) => !prev)
    setPlayerName2(i)
  }
  const bowlerDrawer = (i) => {
    setbowlercontainer((prev) => !prev)
    setbowlerName(i)
  }

  const increaseRunByOne = () => {
    setcricketMatch((prev) => {
      const updatedMatch = { ...prev };
      const player = updatedMatch.teams[teamSelect].players[whichBatter === 0 ? playerName1 : playerName2];
      player.runs += 1;
      player.ballsFaced += 1;
      updatedMatch.teams[teamSelect].totalRuns += 1;
      return updatedMatch;
    });
  };
  
  const decreaseRunByOne = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs -= 1
    cricketMatch.teams[teamSelect].totalRuns -= 1
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced -= 1
  }

  const increaseRunByTwo = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 2
    cricketMatch.teams[teamSelect].totalRuns += 2
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunByThree = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 3
    cricketMatch.teams[teamSelect].totalRuns += 3
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunByFour = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 4
    cricketMatch.teams[teamSelect].totalRuns += 4
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunBySix = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].runs += 6
    cricketMatch.teams[teamSelect].totalRuns += 6
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].ballsFaced += 1
  }
  const increaseRunByOut = () => {
    cricketMatch.teams[teamSelect].players[whichBatter == 0 ? playerName1 : playerName2].isOut = true
    cricketMatch.teams[teamSelect].totalWickets += 1
    setwhichBatter(whichBatter == 0 ? 1 : 0)
  }

  // useEffect(() => {
  //   setcricketMatch(cricketMatch)
  // }, [increaseRunByOne])

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
              <button onClick={decreaseRunByOne} ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>{cricketMatch.teams[teamSelect].totalRuns}/{cricketMatch.teams[teamSelect].totalWickets}</div>
              <button onClick={increaseRunByOne}><FaPlus className={styles.plusicon} /></button>
            </div>
            <div className={styles.extrabolscontainer}>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>6</button>
              <button onClick={increaseRunByOut}>Out</button>
            </div>
          </div>
          {/* Bat container END */}
          {/* Boals container start */}
          <div className={styles.runsContainer}>
            <div className={styles.runcontainerfirstBox}>
              <button ><HiMinus className={styles.plusicon} /></button>
              <div className={styles.runBox}>12.5</div>
              <button ><FaPlus className={styles.plusicon} /></button>
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
            <div className={playerSelect ? styles.playerBoxes : styles.disnone}>
              {
                (teamA == "teamA") ? (
                  cricketMatch.teams[teamSelect]?.players?.map((item, i) => (

                    i % 2 == 0 ? (
                      <div className={styles.onlyplayername} key={i} onClick={() => closeDrawer1(i)}>{item.name}</div>
                    ) : ""

                  ))
                ) : (
                  cricketMatch.teams[teamSelect]?.players?.map((item, i) => (
                    i % 2 == !0 ? (
                      <div className={styles.onlyplayername} key={i} onClick={() => closeDrawer2(i)}>{item.name}</div>
                    ) : ""
                  ))
                )
              }
            </div>
            <h2 className={styles.currentbattheading}>Currents Batters</h2>
            <div className={whichBatter == 0 ?styles.player1containermark :styles.player1container} onClick={handelWhichBatter}>
              <h2>{cricketMatch.teams[teamSelect].players[playerName1].isOut == !true ? cricketMatch.teams[teamSelect].players[playerName1].name : "" }</h2>
              <div>135</div>
              <button className={styles.selectPlayerbtn} onClick={() => handelPlayercontainerOprnbtn("teamA")}>SP</button>
            </div>
            {/* second player */}
            <div className={whichBatter == 1 ?styles.player1containermark :styles.player1container} onClick={handelWhichBattersecond}>
              <h2>{cricketMatch.teams[teamSelect].players[playerName2].isOut == !true ? cricketMatch.teams[teamSelect].players[playerName2].name : ""}</h2>
              <div>135</div>
              <button className={styles.selectPlayerbtn} onClick={handelPlayercontainerOprnbtn}>SP</button>
            </div>
          </div>
          {/* current batters name End */}
          {/* current bolwer name ------*/}
          <div className={styles.currentBatterContainer}>
            <div className={bowlercontainer ? styles.playerBoxes : styles.disnone}>
              {
                cricketMatch.teams[teamSelect == 0 ? 1 : 0]?.players?.map((item, i) => (

                  <div className={styles.onlyplayername} key={i} onClick={() => bowlerDrawer(i)}>{item.name}</div>
                ))}
            </div>
            <h2 className={styles.currentbattheading}>Currents Bowler</h2>
            <div className={styles.player1container}>
              <h2>{cricketMatch.teams[teamSelect == 0 ? 1 : 0].players[bowlerName].name}</h2>
              <div>2.3</div>
              <button className={styles.selectPlayerbtn} onClick={handelBowlerbtn}>SP</button>
            </div>

          </div>
        </div>

        <div className={styles.SecondDataContainer}>
          {
            cricketMatch.teams.map((item, i) => (
              <div key={i} className={teamSelect === i ? styles.teamContainerSelected : styles.teamContainer}>
                <h3>Team : {item.teamName} <span onClick={() => handelteamSelect(i)}>select</span></h3>
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





